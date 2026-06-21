"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsButton = BaseProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

type Props = ButtonAsButton | ButtonAsLink;

function isLink(props: Props): props is ButtonAsLink {
  return "href" in props;
}

function getStyles(variant: Variant = "primary") {
  switch (variant) {
    case "secondary":
      return `
        border border-[#8B6B4E] text-[#1C1C1C]
        hover:bg-[#8B6B4E]/10
      `;
    case "ghost":
      return `
        text-[#3A3A3A]
        hover:text-[#2F5D50]
        px-4 py-2 text-sm
      `;
    default:
      return `
        bg-[#2F5D50] text-[#F3EDE3]
        hover:bg-[#244A40]
      `;
  }
}

export function Button(props: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors cursor-pointer px-5 py-3";

  const styles = `${base} ${getStyles(props.variant)} ${props.className ?? ""}`;

  if (isLink(props)) {
    return (
      <Link href={props.href} onClick={props.onClick} className={styles}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={styles}
    >
      {props.children}
    </button>
  );
}