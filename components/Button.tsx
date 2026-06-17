"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonPrimary({ children, href = "#", onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-medium transition-colors w-full sm:w-auto"
      style={{
        backgroundColor: "#2F5D50",
        color: "#F3EDE3",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "#244A40")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "#2F5D50")
      }
    >
      {children}
    </a>
  );
}

export function ButtonSecondary({ children, href = "#", onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-5 py-3 rounded-xl transition-colors w-full sm:w-auto text-center"
      style={{
        border: "1px solid #8B6B4E",
        color: "#1C1C1C",
      }}
    >
      {children}
    </a>
  );
}

export function ButtonGhost({ children, href = "#", onClick }: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 rounded-xl text-sm font-medium transition-colors"
      style={{
        color: "#3A3A3A",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "#2F5D50")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "#3A3A3A")
      }
    >
      {children}
    </a>
  );
}