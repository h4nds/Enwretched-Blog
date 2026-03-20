"use client";

import Link from "next/link";
import Logo from "./Logo";
import { Fragment } from "react";
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

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  const handleNavClick = () => {
    // No-op helper for readability; Disclosure/Menu handle close automatically
  };

  return (
    <Disclosure
      as="header"
      className="border-b border-theme-border bg-theme-card sticky top-0 z-50"
    >
      {({ open }) => (
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center relative">
            <Logo />

            <div className="flex items-center gap-3">
              {/* Desktop dropdown menu */}
              <Menu as="div" className="hidden md:block relative text-left">
                <div>
                  <Menu.Button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-theme-text hover:text-theme-text-heading hover:bg-theme-accent-muted focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page transition-colors">
                    Menu
                    <span aria-hidden="true">▾</span>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="opacity-0 translate-y-1 scale-95"
                  enterTo="opacity-100 translate-y-0 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100 translate-y-0 scale-100"
                  leaveTo="opacity-0 translate-y-1 scale-95"
                >
                  <Menu.Items
                    anchor={{ to: "bottom end", gap: 13, offset: 6.5 }}
                    className="header-menu-panel absolute w-80 origin-top-right rounded-lg border border-theme-border bg-theme-card shadow-lg focus:outline-none"
                  >
                    <div className="py-2">
                      {navLinks.map((link) => (
                        <Menu.Item key={link.href}>
                          {({ active }) => (
                            <Link
                              href={link.href}
                              onClick={handleNavClick}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                active || isActive(link.href)
                                  ? "bg-theme-accent-muted text-theme-text-heading"
                                  : "text-theme-text hover:bg-theme-accent-muted"
                              }`}
                            >
                              {link.label}
                            </Link>
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
              </Menu>

              {/* Mobile menu button */}
              <Disclosure.Button
                className="md:hidden p-3 text-theme-text hover:text-theme-text-heading focus:outline-none focus:ring-2 focus:ring-theme-accent rounded-lg"
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
                >
                  {open ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Disclosure.Button>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Transition
            as={Fragment}
            enter="transition-all ease-out duration-150"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition-all ease-in duration-100"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Disclosure.Panel className="header-menu-panel md:hidden mt-2 rounded-lg border border-theme-border bg-theme-card shadow-lg">
              <div className="py-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`block px-4 py-3 text-sm transition-colors ${
                      isActive(link.href)
                        ? "bg-theme-accent-muted text-theme-text-heading"
                        : "text-theme-text hover:bg-theme-accent-muted hover:text-theme-text-heading"
                    }`}
                  >
                    {link.label}
                  </Link>
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
        </div>
      )}
    </Disclosure>
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
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-theme-accent focus:ring-offset-2 focus:ring-offset-theme-page ${
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