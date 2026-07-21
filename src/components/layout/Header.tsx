"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/forum", label: "Forum" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function useIsActive() {
  const pathname = usePathname();
  return (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href) ?? false;
  };
}

function navLinkClass(active: boolean, base: string) {
  return `${base} ${
    active
      ? "bg-theme-accent-muted text-theme-text-heading"
      : "text-theme-text hover:bg-theme-accent-muted hover:text-theme-text-heading"
  }`;
}

function NavLinksList({
  isActive,
  onNavigate,
  linkClassName,
}: {
  isActive: (href: string) => boolean;
  onNavigate?: () => void;
  linkClassName: string;
}) {
  return (
    <>
      {navLinks.map((link) => {
        const active = isActive(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={navLinkClass(active, linkClassName)}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

/** Desktop dropdown — MenuItem renders as Next.js Link for reliable routing. */
function DesktopNavMenu() {
  const isActive = useIsActive();

  return (
    <Menu as="div" className="relative hidden text-left md:block">
      <MenuButton className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-theme-text transition-colors hover:bg-theme-accent-muted hover:text-theme-text-heading focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page touch-manipulation">
        Menu
        <span aria-hidden="true">▾</span>
      </MenuButton>

      <MenuItems
        transition
        anchor={{ to: "bottom end", gap: 8, padding: 8 }}
        className="header-menu-panel z-[60] w-80 origin-top-right rounded-lg border border-theme-border bg-theme-card shadow-lg focus:outline-none transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="py-2">
          {navLinks.map((link) => (
            <MenuItem
              key={link.href}
              as={Link}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={({ focus }) =>
                navLinkClass(
                  focus || isActive(link.href),
                  "block px-4 py-2 text-sm transition-colors"
                )
              }
            >
              {link.label}
            </MenuItem>
          ))}
        </div>
        <div className="border-t border-theme-border px-4 py-3">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-theme-text-muted">
            Themes
          </p>
          <HeaderThemeSwitcher />
        </div>
      </MenuItems>
    </Menu>
  );
}

function MobileMenuButton({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-theme-text hover:text-theme-text-heading focus:outline-none focus:ring-2 focus:ring-theme-accent touch-manipulation md:hidden"
      aria-expanded={open}
      aria-controls="mobile-nav-panel"
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden
      >
        {open ? (
          <path d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const isActive = useIsActive();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-theme-border bg-theme-card">
      <div className="container relative mx-auto max-w-full px-3 py-2.5 sm:px-4 sm:py-3">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <Logo />
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <DesktopNavMenu />
            <MobileMenuButton
              open={mobileOpen}
              onToggle={() => setMobileOpen((prev) => !prev)}
            />
          </div>
        </div>

        {mobileOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 z-[55] cursor-default bg-black/20 md:hidden"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            />
            <nav
              id="mobile-nav-panel"
              aria-label="Mobile"
              className="header-menu-panel absolute inset-x-3 top-full z-[60] mt-2 max-h-[min(70dvh,28rem)] overflow-y-auto rounded-lg border border-theme-border bg-theme-card shadow-lg sm:inset-x-4"
            >
              <div className="py-2">
                <NavLinksList
                  isActive={isActive}
                  onNavigate={() => setMobileOpen(false)}
                  linkClassName="flex min-h-[44px] items-center px-4 py-3 text-sm leading-snug transition-colors touch-manipulation"
                />
              </div>
              <div className="border-t border-theme-border px-4 py-3">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-theme-text-muted">
                  Themes
                </p>
                <HeaderThemeSwitcher />
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

function HeaderThemeSwitcher() {
  const { theme, setTheme, themes } = useTheme();

  const dotClasses: Record<string, string> = {
    enwretched: "bg-purple-500",
    mirrors: "bg-sky-200",
    mono: "bg-stone-400",
    ember: "bg-emerald-500",
    corruption: "bg-rose-600",
    void: "bg-sky-500",
  };

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Themes">
      {themes.map((t) => {
        const isActive = theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => setTheme(t.id)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page touch-manipulation sm:h-8 sm:w-8 ${
              isActive ? "ring-2 ring-theme-accent ring-offset-2 ring-offset-theme-page" : ""
            }`}
            aria-pressed={isActive}
            aria-label={`${t.label} theme`}
            title={t.label}
          >
            <span
              className={`h-5 w-5 rounded-full ${dotClasses[t.id] ?? "bg-white/40"} ${isActive ? "ring-2 ring-theme-border ring-offset-1 ring-offset-transparent" : ""}`}
            />
          </button>
        );
      })}
    </div>
  );
}
