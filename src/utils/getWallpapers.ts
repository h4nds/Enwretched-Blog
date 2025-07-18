import fs from 'fs';
import path from 'path';

export function getWallpapers() {
  const wallpapersDir = path.join(process.cwd(), 'public', 'wallpapers');
  if (!fs.existsSync(wallpapersDir)) return [];
  const files = fs.readdirSync(wallpapersDir);
  return files.filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));
} 