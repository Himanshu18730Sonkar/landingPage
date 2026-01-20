import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const srcDir = path.join(projectRoot, 'src', 'assets');
const outDir = path.join(srcDir, 'responsive');

const images = [
  'traveller.webp',
  'rome.webp',
  'london.webp',
  'europe.webp'
];

const widths = [400, 800, 1200];

async function ensureOutDir() {
  await fs.mkdir(outDir, { recursive: true });
}

async function processImage(file) {
  const input = path.join(srcDir, file);
  const name = path.basename(file, path.extname(file));

  for (const w of widths) {
    // WebP
    const outNameWebp = `${name}-w${w}.webp`;
    const outPathWebp = path.join(outDir, outNameWebp);
    try {
      await sharp(input)
        .resize({ width: w })
        .webp({ quality: 75 })
        .toFile(outPathWebp);
      console.log(`wrote ${outPathWebp}`);
    } catch (err) {
      console.error(`failed to process ${input} -> ${outPathWebp}:`, err.message);
    }

    // AVIF
    const outNameAvif = `${name}-w${w}.avif`;
    const outPathAvif = path.join(outDir, outNameAvif);
    try {
      await sharp(input)
        .resize({ width: w })
        .avif({ quality: 60 })
        .toFile(outPathAvif);
      console.log(`wrote ${outPathAvif}`);
    } catch (err) {
      console.error(`failed to process ${input} -> ${outPathAvif}:`, err.message);
    }
  }
}

async function main() {
  await ensureOutDir();
  for (const img of images) {
    await processImage(img);
  }
  console.log('Responsive images generation completed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});