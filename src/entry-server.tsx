import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom/server";
import App from './App'

interface RenderProps {
  path: string
}

export function render({ path }: RenderProps) {
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  )
  return { html }
}