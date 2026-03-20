"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  THEME_IDS,
  THEME_LOGO_SRC,
  type ThemeId,
} from "@/constants/themes";

function parseThemeId(value: string | null): ThemeId {
  if (value && (THEME_IDS as readonly string[]).includes(value)) {
    return value as ThemeId;
  }
  return "enwretched";
}

function subscribeThemeAttr(onChange: () => void) {
  const el = document.documentElement;
  const mo = new MutationObserver(onChange);
  mo.observe(el, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

function getThemeFromDocument(): ThemeId {
  return parseThemeId(document.documentElement.getAttribute("data-theme"));
}

export default function Logo() {
  const theme = useSyncExternalStore(
    subscribeThemeAttr,
    getThemeFromDocument,
    () => "enwretched" as ThemeId
  );

  const src = THEME_LOGO_SRC[theme];

  return (
    <Link href="/" className="flex min-h-[44px] min-w-0 items-center touch-manipulation">
      <Image
        src={src}
        alt="EnWretched"
        width={180}
        height={60}
        className="h-9 w-auto max-h-10 max-w-[min(160px,46vw)] sm:h-10 sm:max-h-11 sm:max-w-none md:h-12"
        priority
      />
    </Link>
  );
}
