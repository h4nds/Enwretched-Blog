import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  useImage?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export default function Logo({ useImage = false, imageSrc, imageAlt = 'EnWretched Logo' }: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      {useImage && imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={150}
          height={50}
          className="h-12 w-auto"
          priority
        />
      ) : (
        <h1 className="text-3xl font-bold text-purple-300 hover:text-purple-100 transition-colors duration-200">
          EnWretched
        </h1>
      )}
    </Link>
  );
} 