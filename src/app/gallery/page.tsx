import GalleryClient from './GalleryClient';
import { getWallpapers } from '@/utils/getWallpapers';

export default function GalleryPage() {
  const wallpapers = getWallpapers();
  return <GalleryClient wallpapers={wallpapers} />;
} 