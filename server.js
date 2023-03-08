import fs from 'node:fs/promises'
import express from 'express'
import { connect as mongooseConnect } from "mongoose"
import { BASE as base, PORT, NODE_ENV, DB_URL } from "./config.js"
import userRouter from "./routes/user.js"
import queryRouter from "./routes/query.js"

const isProduction = NODE_ENV.toUpperCase() === "PRODUCTION"

try {
  mongooseConnect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
catch(e) {
  console.log("Not able to connect to the database")
}

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : ''
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/ssr-manifest.json', 'utf-8')
  : undefined

// Create http server
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/user", userRouter)
app.use('/api/query', queryRouter)


// Add Vite or respective production middlewares
let vite
if (!isProduction) {
  const { createServer } = await import('vite')
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base
  })
  app.use(vite.middlewares)
} else {
  const compression = (await import('compression')).default
  const sirv = (await import('sirv')).default
  app.use(compression())
  app.use(base, sirv('./dist/client', { extensions: [] }))
}

// Serve HTML
app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '')

    let template
    let render
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile('./index.html', 'utf-8')
      template = await vite.transformIndexHtml(url, template)
      render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render
    } else {
      template = templateHtml
      render = (await import('./dist/server/entry-server.js')).render
    }

    const rendered = await render(url, ssrManifest)

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '')

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e) {
    vite?.ssrFixStacktrace(e)
    console.log(e.stack)
    res.status(500).end(e.stack)
  }
})



// Start http server
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
