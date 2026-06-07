"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Fragment, useEffect, useRef } from "react";
import { Menu, Transition, Disclosure } from "@headlessui/react";
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

function NavLink({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  className: string;
}) {
  return (
    <Link href={href} onClick={onNavigate} className={className}>
      {label}
    </Link>
  );
}

/** Desktop: Headless UI Menu (not nested inside Disclosure). */
function DesktopNavMenu() {
  const isActive = useIsActive();
  const pathname = usePathname();
  const closeMenuRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    closeMenuRef.current?.();
  }, [pathname]);

  return (
    <Menu as="div" className="hidden md:block relative text-left">
      {({ open, close }) => {
        closeMenuRef.current = close;

        return (
          <>
            <Menu.Button className="inline-flex min-h-[44px] items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-theme-text hover:text-theme-text-heading hover:bg-theme-accent-muted focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page transition-colors touch-manipulation">
              Menu
              <span aria-hidden="true">▾</span>
            </Menu.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-150"
              enterFrom="opacity-0 translate-y-1 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-1 scale-95"
            >
              <Menu.Items
                static
                anchor={{ to: "bottom end", gap: 8, padding: 8 }}
                className="header-menu-panel z-[60] w-80 origin-top-right rounded-lg border border-theme-border bg-theme-card shadow-lg focus:outline-none"
              >
                <div className="py-2">
                  {navLinks.map((link) => (
                    <Menu.Item key={link.href}>
                      {({ active }) => (
                        <NavLink
                          href={link.href}
                          label={link.label}
                          onNavigate={close}
                          className={`block px-4 py-2 text-sm transition-colors ${
                            active || isActive(link.href)
                              ? "bg-theme-accent-muted text-theme-text-heading"
                              : "text-theme-text hover:bg-theme-accent-muted"
                          }`}
                        />
                      )}
                    </Menu.Item>
                  ))}
                </div>
                <div className="border-t border-theme-border px-4 py-3">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-theme-text-muted">
                    Themes
                  </p>
                  <HeaderThemeSwitcher />
                </div>
              </Menu.Items>
            </Transition>
          </>
        );
      }}
    </Menu>
  );
}

/** Mobile: Disclosure panel only (md and below). */
function MobileNavMenu() {
  const isActive = useIsActive();
  const pathname = usePathname();
  const closePanelRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    closePanelRef.current?.();
  }, [pathname]);

  return (
    <Disclosure as="div" className="md:hidden">
      {({ open, close }) => {
        closePanelRef.current = close;

        return (
          <>
            <Disclosure.Button
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-theme-text hover:text-theme-text-heading focus:outline-none focus:ring-2 focus:ring-theme-accent touch-manipulation"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
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
            </Disclosure.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition-all ease-out duration-150"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition-all ease-in duration-100"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Disclosure.Panel
                static
                className="header-menu-panel absolute left-3 right-3 top-full z-[60] mt-2 rounded-lg border border-theme-border bg-theme-card shadow-lg sm:left-4 sm:right-4"
              >
                <div className="py-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      onNavigate={close}
                      className={`flex min-h-[44px] items-center px-4 py-3 text-sm leading-snug transition-colors touch-manipulation ${
                        isActive(link.href)
                          ? "bg-theme-accent-muted text-theme-text-heading"
                          : "text-theme-text hover:bg-theme-accent-muted hover:text-theme-text-heading"
                      }`}
                    />
                  ))}
                </div>
                <div className="border-t border-theme-border px-4 py-3">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wide text-theme-text-muted">
                    Themes
                  </p>
                  <HeaderThemeSwitcher />
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        );
      }}
    </Disclosure>
  );
}

export default function Header() {
  return (
    <header className="border-b border-theme-border bg-theme-card sticky top-0 z-50">
      <div className="container relative mx-auto max-w-full px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <Logo />
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <DesktopNavMenu />
            <MobileNavMenu />
          </div>
        </div>
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
