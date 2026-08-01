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
        border border-[#2F5D50]
        text-[#2F5D50]
        hover:bg-[#8B6B4E]/10
        hover:-translate-y-0.5
      `;

    case "ghost":
      return `
        text-[#3A3A3A]
        hover:text-[#2F5D50]
        px-4 py-2 text-sm
      `;

    default:
      return `
        bg-gradient-to-b from-[#35695A] to-[#2F5D50]
        text-[#F3EDE3]
        shadow-md shadow-[#2F5D50]/20
        
        hover:from-[#3B7363]
        hover:to-[#295247]
        hover:shadow-lg
        hover:shadow-[#2F5D50]/30
        hover:-translate-y-0.5
      `;
  }
}

export function Button(props: Props) {
  const base =
    `
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-xl
    font-medium
    px-5
    py-3
    cursor-pointer
    transition-all
    duration-300
    ease-out
    active:scale-[0.98]
    `;

  const styles = `${base} ${getStyles(props.variant)} ${
    props.className ?? ""
  }`;

  if (isLink(props)) {
    return (
      <Link
        href={props.href}
        onClick={props.onClick}
        className={styles}
      >
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