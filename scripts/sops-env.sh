#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$repo_root"

plain_file=".env.local"
encrypted_file=".env.local.enc"
operation="${1:-}"

require_sops() {
  if ! command -v sops >/dev/null 2>&1; then
    echo "sops is required. Install it before managing encrypted environment files." >&2
    exit 1
  fi
}

cleanup_file=""
cleanup() {
  if [ -n "$cleanup_file" ] && [ -f "$cleanup_file" ]; then
    rm -f -- "$cleanup_file"
  fi
}
trap cleanup EXIT INT TERM

require_sops

case "$operation" in
  encrypt)
    if [ ! -f "$plain_file" ]; then
      echo "Missing plaintext environment file: $plain_file" >&2
      exit 1
    fi
    chmod 600 "$plain_file"
    cleanup_file="$(mktemp "./.${encrypted_file##*/}.tmp.XXXXXX")"
    sops encrypt \
      --input-type dotenv \
      --output-type dotenv \
      --filename-override "$encrypted_file" \
      --output "$cleanup_file" \
      "$plain_file"
    chmod 644 "$cleanup_file"
    mv -f -- "$cleanup_file" "$encrypted_file"
    cleanup_file=""
    echo "Encrypted environment updated: $encrypted_file"
    ;;
  decrypt)
    if [ ! -f "$encrypted_file" ]; then
      echo "Missing encrypted environment file: $encrypted_file" >&2
      exit 1
    fi
    umask 077
    cleanup_file="$(mktemp "./.${plain_file##*/}.tmp.XXXXXX")"
    sops decrypt \
      --input-type dotenv \
      --output-type dotenv \
      --output "$cleanup_file" \
      "$encrypted_file"
    chmod 600 "$cleanup_file"
    mv -f -- "$cleanup_file" "$plain_file"
    cleanup_file=""
    echo "Plaintext environment restored with mode 0600: $plain_file"
    ;;
  edit)
    if [ ! -f "$encrypted_file" ]; then
      echo "Missing encrypted environment file: $encrypted_file" >&2
      exit 1
    fi
    sops edit --input-type dotenv --output-type dotenv "$encrypted_file"
    ;;
  verify)
    if [ ! -f "$encrypted_file" ]; then
      echo "Missing encrypted environment file: $encrypted_file" >&2
      exit 1
    fi
    sops decrypt --input-type dotenv --output-type dotenv "$encrypted_file" >/dev/null
    echo "Encrypted environment is valid: $encrypted_file"
    ;;
  *)
    echo "Usage: $0 {encrypt|decrypt|edit|verify}" >&2
    exit 2
    ;;
esac
