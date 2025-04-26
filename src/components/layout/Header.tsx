import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="border-b border-purple-900 p-4 bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <nav className="space-x-4">
          <Link href="/" className="hover:text-purple-100">Home</Link>
          <Link href="/gallery" className="hover:text-purple-100">Gallery</Link>
          <Link href="/forum" className="hover:text-purple-100">Forum</Link>
          <Link href="/guestbook" className="hover:text-purple-100">About</Link>
        </nav>
      </div>
    </header>
  );
} 