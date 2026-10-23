import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

const newLogoPath = path.join(publicDir, 'assets/aistudio/file_00000000c7f88211936bb871f48c42f4_2b735ac9.png');
const logoBuffer = fs.readFileSync(newLogoPath);

async function generate() {
  console.log('Generating PWA icons and copying logo from uploaded official image...');

  // 1. Copy clean /public/logo.png
  fs.copyFileSync(newLogoPath, path.join(publicDir, 'logo.png'));
  console.log('Created public/logo.png');

  // 2. 192x192
  await sharp(logoBuffer)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'pwa-192x192.png'));
  console.log('Generated pwa-192x192.png');

  // 3. 512x512
  await sharp(logoBuffer)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'pwa-512x512.png'));
  console.log('Generated pwa-512x512.png');

  // 4. apple-touch-icon (180x180)
  await sharp(logoBuffer)
    .resize(180, 180, { fit: 'contain', background: { r: 18, g: 58, b: 112, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated apple-touch-icon.png');

  // 5. Maskable 512x512: 15% safe margin with brand blue background
  const innerIcon = await sharp(logoBuffer)
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: '#123A70'
    }
  })
    .composite([{ input: innerIcon, gravity: 'center' }])
    .png()
    .toFile(path.join(publicDir, 'pwa-maskable-512x512.png'));
  console.log('Generated pwa-maskable-512x512.png');

  // 6. Favicon (48x48)
  await sharp(logoBuffer)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Generated favicon.png');
}

generate().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
