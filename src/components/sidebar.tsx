'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSidebar } from '@/Context/SidebarContext';

const SIDEBAR_WIDTH = 300; // важно синхронизировать с Layout

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  // Закрывать по Esc
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSidebar();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeSidebar]);

  // Лочим скролл фона
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[1px]"
        />
      )}

      {/* Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        style={{ width: SIDEBAR_WIDTH }}
        className={[
          'fixed left-0 top-0 z-50 h-screen max-w-[86vw]',
          'bg-[#0b2b27] text-white shadow-2xl ring-1 ring-white/10',
          'transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div className="flex items-center">
            <Link href="https://casino-sultan-kz.kz/" className="inline-flex items-center">
              <Image src="/logo.svg" alt="Sultan Games 365" width={130} height={30} priority />
            </Link>
          </div>

          <button
            onClick={closeSidebar}
            aria-label="Закрыть меню"
            className="rounded-md p-1.5 text-teal-200 transition hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            ×
          </button>
        </div>

        {/* nav */}
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <Link
                href="https://casino-sultan-kz.kz/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Sultan Casino
              </Link>
            </li>
            <li>
              <Link
                href="https://casino-sultan-kz.kz/process-registracii/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Sultan Casino регистрация
              </Link>
            </li>
            <li>
              <Link
                href="https://casino-sultan-kz.kz/vhod/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Султан казино вход
              </Link>
            </li>
            <li>
              <Link
                href="https://casino-sultan-kz.kz/promokod/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Sultan games промокод
              </Link>
            </li>
            <li>
              <Link
                href="https://casino-sultan-kz.kz/dostupnoe-zerkalo/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Султан казино рабочее зеркало
              </Link>
            </li>
            <li>
              <Link
                href="https://casino-sultan-kz.kz/app-sultan/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Султан казино скачать
              </Link>
            </li>
            <li>
              <Link
                href="https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/"
                className="block rounded-md px-3 py-2 text-sm text-teal-100 transition hover:bg-white/5 hover:text-yellow-400"
              >
                Султан казино слоты
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
