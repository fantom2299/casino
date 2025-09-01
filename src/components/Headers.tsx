'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useSidebar } from '@/Context/SidebarContext';

export default function Header() {
  const { toggleSidebar, isOpen } = useSidebar();

  const SIDEBAR_W = 300;
  const offset = isOpen ? SIDEBAR_W : 0;

  const navItems = [
    {
      name: 'Казино',
      href: 'https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <circle cx="12" cy="12" r="9" stroke="currentColor" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
          <circle cx="8" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Бонусы',
      href: 'https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <rect x="4" y="6" width="16" height="4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <rect x="6" y="10" width="12" height="12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 6V22" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 6C13.1046 6 14 4.88071 14 3.5C14 2.11929 13.1046 1 12 1C10.8954 1 10 2.11929 10 3.5C10 4.88071 10.8954 6 12 6Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      name: 'Слоты',
      href: 'https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <rect x="6" y="8" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="12" y="8" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="6" y="14" width="4" height="4" rx="1" fill="currentColor" />
          <rect x="12" y="14" width="4" height="4" rx="1" fill="currentColor" />
          <path d="M18 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'Live Ставки',
      href: 'https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M16 12L22 6V18L16 12Z" fill="currentColor" />
          <rect x="2" y="6" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="2" />
          <circle cx="9" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'Aviator',
      href: 'https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M3 16L11 8L9 3L15 5L19 1L21 7L16 9L20 16L15 14L12 21L10 13L3 16Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Быстрые Игры',
      href: 'https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path d="M13 2L4 14H11L11 22L20 10H13L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className="sticky top-0 z-40 bg-[var(--header-bg)] text-white shadow transition-all duration-300"

    >
      <div className="mx-auto flex h-14 max-w-[1468px] items-center gap-3 px-2 sm:px-2 lg:px-2">
        <button
          onClick={toggleSidebar}
          aria-controls="sidebar"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-teal-200 transition hover:text-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
        >
          <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
        </button>

        <Link href="https://casino-sultan-kz.kz/" className="flex items-center">
          <Image src="/logo.svg" alt="Sultan Games 365" width={130} height={30} priority className="h-[30px] w-auto" />
        </Link>

        <nav className="mx-auto hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  data-ref={item.name.toLowerCase()}
                  className="group relative flex items-center gap-2 px-3 py-2 text-teal-200 transition-colors hover:text-yellow-400"
                >
                  <span className="text-[0] [&>svg]:block [&>svg]:text-current">{item.icon}</span>
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="pointer-events-none absolute left-1/2 top-[calc(100%-2px)] h-0.5 w-0 -translate-x-1/2 bg-yellow-400 transition-all duration-200 group-hover:w-3/4" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
            target="_blank"
            rel="nofollow noopener noreferrer"
            id="loginBtn"
            className="rounded-full border border-white/90 bg-white px-4 py-1.5 text-sm font-medium text-black shadow-sm transition hover:shadow-[0_0_0_4px_rgba(255,255,255,0.15)]"
          >
            Войти
          </Link>

          <Link
            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
            target="_blank"
            rel="nofollow noopener noreferrer"
            id="registerBtn"
            className="rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-black shadow-sm ring-1 ring-yellow-300/60 transition hover:shadow-yellow-400/60"
          >
            Регистрация
          </Link>
        </div>
      </div>
    </header>
  );
}
