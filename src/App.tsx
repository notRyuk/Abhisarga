import { useRoutes } from "react-router-dom";

export default function App() {
  const pages = import.meta.glob("./pages/**/*.tsx", { eager: true })
  let routes = []
  for (const path in pages) {
    const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1]
    if (!fileName) {
      continue
    }
    const normalizedPath = fileName.includes("$") ? fileName.replace("$", ":") : fileName.replace(/\/index/, "")
    routes.push({
      path: (fileName === "index") ? "/" : `/${normalizedPath}`,
      Element: (pages[path] as any)?.default,
      ErrorElement: (pages[path] as any)?.ErrorBoundary,
      head: (pages[path] as any)?.head
    })
  }
  return useRoutes(routes.map(({ Element, ErrorElement, head, ...pathConfig }) => ({
    ...pathConfig,
    element: (
      <Element />
    ),
    ...(ErrorElement && {
      errorElement: (
        <ErrorElement />
      )
    }),
  })))
}