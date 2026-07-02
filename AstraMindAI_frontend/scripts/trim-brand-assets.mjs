import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const assetsDir = path.resolve('src/assets')

async function trimToSvg(name) {
  const input = path.join(assetsDir, name)
  const baseName = name.replace('.png', '')

  const { data, info } = await sharp(input)
    .trim({ threshold: 10 })
    .png()
    .toBuffer({ resolveWithObject: true })

  const { width, height } = info
  const pngPath = path.join(assetsDir, `${baseName}.png`)
  const svgPath = path.join(assetsDir, `${baseName}.svg`)

  await sharp(data).png({ compressionLevel: 9 }).toFile(pngPath)

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" fill="none" role="img" aria-label="AstraMind AI">
  <image width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" xlink:href="${baseName}.png" />
</svg>`

  fs.writeFileSync(svgPath, svg)

  console.log(`${baseName}: ${width}x${height}`)
  return { width, height, baseName }
}

const results = await Promise.all([
  trimToSvg('logo.png'),
  trimToSvg('wordmark.png'),
])

const constants = `export const BRAND_LOGO_VIEWBOX = { width: ${results[0].width}, height: ${results[0].height} } as const
export const BRAND_WORDMARK_VIEWBOX = { width: ${results[1].width}, height: ${results[1].height} } as const
`

fs.writeFileSync(path.resolve('src/lib/brand-assets.ts'), constants)
console.log('Updated src/lib/brand-assets.ts')
