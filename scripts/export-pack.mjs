import { mkdir, writeFile, copyFile } from 'node:fs/promises'
import path from 'node:path'
import puppeteer from 'puppeteer-core'
import { PDFDocument } from 'pdf-lib'
import PptxGenJS from 'pptxgenjs'

const ROOT = '/workspace'
const OUT = path.join(ROOT, 'Mtech presentation')
const SHOTS = path.join(OUT, '.slides-tmp')
const BASE = process.env.DECK_URL ?? 'http://127.0.0.1:43733'
const SLIDE_COUNT = 15
const WIDTH = 1920
const HEIGHT = 1200
const CHROME = process.env.CHROME_PATH ?? '/usr/local/bin/google-chrome'

async function main() {
  await mkdir(SHOTS, { recursive: true })
  await mkdir(OUT, { recursive: true })

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu',
      `--window-size=${WIDTH},${HEIGHT}`,
      '--hide-scrollbars',
      '--font-render-hinting=none',
    ],
  })

  const page = await browser.newPage()
  await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 })

  const files = []
  for (let i = 0; i < SLIDE_COUNT; i++) {
    const url = `${BASE}/?export=1&slide=${i}`
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
    await page.evaluate(async () => {
      await document.fonts.ready
      await Promise.all(
        [...document.images].map((img) =>
          img.complete ? null : new Promise((res) => {
            img.onload = res
            img.onerror = res
          }),
        ),
      )
    })
    await new Promise((r) => setTimeout(r, 450))
    const file = path.join(SHOTS, `slide-${String(i + 1).padStart(2, '0')}.jpg`)
    await page.screenshot({ path: file, type: 'jpeg', quality: 88 })
    files.push(file)
    console.log(`captured ${i + 1}/${SLIDE_COUNT}`)
  }

  await browser.close()

  const pdf = await PDFDocument.create()
  const pageW = 13.333 * 72
  const pageH = 8.333 * 72
  for (const file of files) {
    const bytes = await (await import('node:fs/promises')).readFile(file)
    const img = await pdf.embedJpg(bytes)
    const p = pdf.addPage([pageW, pageH])
    p.drawImage(img, { x: 0, y: 0, width: pageW, height: pageH })
  }
  const pdfPath = path.join(OUT, 'The-Engineering-of-Play.pdf')
  await writeFile(pdfPath, await pdf.save())
  console.log('wrote', pdfPath)

  const pptx = new PptxGenJS()
  pptx.defineLayout({ name: 'WIDE16x10', width: 13.333, height: 8.333 })
  pptx.layout = 'WIDE16x10'
  pptx.title = 'The Engineering of Play'
  pptx.author = 'Soutam Rajbhar'
  for (const file of files) {
    const s = pptx.addSlide()
    s.addImage({ path: file, x: 0, y: 0, w: 13.333, h: 8.333 })
  }
  const pptxPath = path.join(OUT, 'The-Engineering-of-Play.pptx')
  await pptx.writeFile({ fileName: pptxPath })
  console.log('wrote', pptxPath)

  await copyFile(path.join(ROOT, 'SPEECH.md'), path.join(OUT, 'SPEECH.md'))
  console.log('copied SPEECH.md')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
