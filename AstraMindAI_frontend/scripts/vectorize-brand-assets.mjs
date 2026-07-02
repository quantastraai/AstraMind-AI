import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import potrace from 'potrace'
import sharp from 'sharp'

const trace = promisify(potrace.trace)

const assetsDir = path.resolve('src/assets')
const sources = {
  logo: 'C:/Users/dell/.cursor/projects/e-AstraMind-AI-by-QuantAstraAI/assets/c__Users_dell_AppData_Roaming_Cursor_User_workspaceStorage_c27a86d1cdd839f1959ddd37ae96ba5d_images_image-e4e5ad9c-d040-48fb-993c-2d2754b1e096.png',
  wordmark:
    'C:/Users/dell/.cursor/projects/e-AstraMind-AI-by-QuantAstraAI/assets/c__Users_dell_AppData_Roaming_Cursor_User_workspaceStorage_c27a86d1cdd839f1959ddd37ae96ba5d_images_image-be6e0ef3-3fd3-444e-8b4e-5b5f8624f2b6.png',
}

async function prepareBitmap(source, tempName) {
  const tempPath = path.join(assetsDir, tempName)

  await sharp(source)
    .trim({ threshold: 12 })
    .flatten({ background: '#ffffff' })
    .grayscale()
    .normalise()
    .png()
    .toFile(tempPath)

  return tempPath
}

async function traceToSvg(name, source) {
  const tempPath = await prepareBitmap(source, `${name}.trace.png`)

  let svg = await trace(tempPath, {
    threshold: 180,
    turdSize: 4,
    optTolerance: 0.15,
    color: '#000000',
    background: 'transparent',
  })

  svg = svg
    .replace(/<\?xml.*?\?>/, '')
    .replace(
      '<svg ',
      '<svg shape-rendering="geometricPrecision" text-rendering="geometricPrecision" ',
    )

  const outPath = path.join(assetsDir, `${name}.svg`)
  fs.writeFileSync(outPath, svg.trim())

  const viewBoxMatch = svg.match(/viewBox="([^"]+)"/)
  const viewBox = viewBoxMatch?.[1] ?? '0 0 0 0'
  const [, , w, h] = viewBox.split(/\s+/).map(Number)

  fs.unlinkSync(tempPath)

  console.log(`${name}.svg -> viewBox="${viewBox}"`)
  return { name, viewBox, width: w, height: h }
}

const logo = await traceToSvg('logo', sources.logo)
const wordmark = await traceToSvg('wordmark', sources.wordmark)

const constants = `export const BRAND_LOGO_VIEWBOX = { width: ${logo.width}, height: ${logo.height} } as const
export const BRAND_WORDMARK_VIEWBOX = { width: ${wordmark.width}, height: ${wordmark.height} } as const
`

fs.writeFileSync(path.resolve('src/lib/brand-assets.ts'), constants)
console.log('Updated brand-assets.ts')
