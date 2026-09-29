// vite 构建产物无类型声明;本地未构建时文件也不存在,故用通配声明兜底。
declare module '*/dist/server/server.js' {
  const server: {
    fetch(input: Request | string | URL, init?: RequestInit): Promise<Response>
  }
  export default server
}
