"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="flex justify-between items-center py-6 mx-auto sm:py-8 border-b border-neutral-100 px-5">
      <div className="flex w-full items-center justify-between max-w-screen-lg mx-auto">
        <Link href="/" className="text-xl font-black flex gap-3">
          <svg className="w-16" viewBox="0 0 64 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H8.5L14.5 12L20.5 0H29L17.5 20H11.5L0 0Z" fill="currentColor" />
            <path d="M26 0H55V6H26V0Z" fill="currentColor" />
            <path d="M26 14H55V20H26V14Z" fill="currentColor" />
            <path d="M56 0H64V20H56V0Z" fill="currentColor" />
          </svg>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          aria-label="切换菜单"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden lg:flex gap-12 flex-shrink-0">
          <Link href="/blog" className="font-semibold text-neutral-500 hover:text-neutral-800 transition">
            文章
          </Link>
          <Link href="/resource" className="font-semibold text-neutral-500 hover:text-neutral-800 transition">
            资源
          </Link>
          <Link href="/project" className="font-semibold text-neutral-500 hover:text-neutral-800 transition">
            工作项目
          </Link>
        </nav>
      </div>

      <div
        className={`fixed h-screen inset-0 bg-white flex flex-col items-center justify-center space-y-12 lg:hidden z-20 transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link href="/blog" onClick={close} className="font-semibold text-neutral-900 text-4xl">
          文章
        </Link>
        <Link href="/resource" onClick={close} className="font-semibold text-neutral-900 text-4xl">
          资源
        </Link>
        <Link href="/project" onClick={close} className="font-semibold text-neutral-900 text-4xl">
          工作项目
        </Link>
      </div>
    </header>
  );
}
