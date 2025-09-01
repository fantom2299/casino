'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Tournament = {
  id: string;
  title: string;
  logo: string;      // путь в /public (например: /tournaments/drops.png)
  prize: string;     // «Призовой фонд 1100000000₸»
  timeLeft: string;  // «до конца до конца 11д 4ч 15м 48с»
  minBet: string;    // «ставка от 100 ₸»
  href: string;
};

const tabs = [
  { key: 'current', label: 'Текущие турниры', Icon: FlameIcon },
  { key: 'upcoming', label: 'Предстоящие турниры', Icon: ChartIcon },
  { key: 'finished', label: 'Завершенные турниры', Icon: CheckIcon },
] as const;

const data: Record<(typeof tabs)[number]['key'], Tournament[]> = {
  current: [
    {
      id: '1',
      title: 'Drops & Wins',
      logo: '/tour/tour-1.webp',
      prize: 'Призовой фонд 1100000000₸',
      timeLeft: 'до конца до конца 11д 4ч 15м 48с',
      minBet: 'ставка от 100 ₸',
      href: '#',
    },
    {
      id: '2',
      title: 'Non-Stop Drops & Races',
      logo: '/tour/tour-2.webp',
      prize: 'Призовой фонд 325000000₸',
      timeLeft: 'до конца до конца 1д 2ч 32м 35с',
      minBet: 'ставка от 100 ₸',
      href: '#',
    },
    {
      id: '3',
      title: 'Turbo Wins',
      logo: '/tour/tour-3.webp',
      prize: 'Призовой фонд 2175000000₸',
      timeLeft: 'до конца до конца 10д 14ч 41м 23с',
      minBet: 'ставка от 50 ₸',
      href: '#',
    },
  ],
  upcoming: [],
  finished: [],
};

export default function TournamentsSection() {
  const [active, setActive] =
    useState<(typeof tabs)[number]['key']>('current');

  return (
    // 1) секция должна быть relative + overflow-hidden (для скругления)
    <section className="relative mx-auto mt-6 w-full max-w-[1468px] overflow-hidden rounded-2xl ring-1 ring-emerald-400/15">

      {/* 2) ФОН-КАРТИНКА (лежит в /public/bg/tournaments-bg.webp) */}
      <Image
        src="/tour-banner.avif"    // ← ваш путь в /public
        alt="banner"                            // декоративно — без текста
        fill
        priority
        className="object-cover object-center"
      />

      {/* 3) Лёгкое затемнение поверх фона (опционально) */}
      <div className="absolute inset-0 bg-[#0f3f3b]/60" />

      {/* 4) Весь остальной контент поверх фона */}
      <div className="relative z-10 px-4 py-4 sm:px-4 sm:py-6">
        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
          {tabs.map(({ key, label, Icon }) => {
            const isActive = active === key;
            return (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={[
                  'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition',
                  isActive
                    ? 'bg-white text-black shadow'
                    : 'text-teal-200 hover:text-yellow-400',
                ].join(' ')}
              >
                <Icon className={isActive ? 'text-black' : 'text-teal-300'} />
                {label}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {data[active].map((t) => (
            <TournamentCard key={t.id} t={t} />
          ))}

          {data[active].length === 0 && (
            <div className="col-span-full rounded-xl border border-white/10 bg-[#0e4a47] p-8 text-center text-teal-100">
              Пока нет записей в этой вкладке.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TournamentCard({ t }: { t: Tournament }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e4a47]">
      {/* Лого по центру */}
      <div className="mb-4 flex justify-center pt-6">
        <div className="relative h-28 w-28">
          <Image src={t.logo} alt={t.title} fill className="object-contain" />
        </div>
      </div>

      {/* Заголовок + призовой фонд */}
      <div className="mb-3 ml-2 mr-2 flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-teal-50">{t.title}</h3>
        <span className="shrink-0 rounded-full bg-yellow-300/95 px-3 py-1 text-xs font-semibold text-black">
          {t.prize}
        </span>
      </div>

      {/* Инфо-бейджи */}
      <div className="ml-2 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-teal-100/90">
        <div className="inline-flex items-center gap-2">
          <ClockIcon />
          {t.timeLeft}
        </div>
        <div className="inline-flex items-center gap-2">
          <ChipIcon />
          {t.minBet}
        </div>
      </div>

      {/* Жёлтая кнопка на всю ширину снизу */}
      <div className="-mx-6 mt-5">
        <Link
          href={t.href}
          className="block rounded-b-2xl bg-yellow-400 px-6 py-3 text-center font-semibold text-black transition hover:brightness-95"
        >
          К играм турнира
        </Link>
      </div>
    </div>
  );
}

/* ====== Иконки (SVG без зависимостей) ====== */
function FlameIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2s2 3 2 5a4 4 0 0 1-8 0c0-2 2-5 2-5S4 6 4 10a8 8 0 1 0 16 0c0-4-4-7-4-7s1 2-1 4-3-1-3-5Z" />
    </svg>
  );
}
function ChartIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4 13h3v7H4v-7Zm6-6h3v13h-3V7Zm6 3h3v10h-3V10Z" />
    </svg>
  );
}
function CheckIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M9 16.17 4.83 12 3.41 13.41 9 19l12-12-1.41-1.41z" />
    </svg>
  );
}
function ClockIcon({ className = 'h-4 w-4 text-yellow-300' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 1a11 11 0 1 0 0 22A11 11 0 0 0 12 1Zm1 12h5v-2h-4V6h-2v7Z" />
    </svg>
  );
}
function ChipIcon({ className = 'h-4 w-4 text-yellow-300' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 2a8 8 0 0 1 7.75 6H17a5 5 0 1 0-10 0H4.25A8 8 0 0 1 12 4Zm0 16a8 8 0 0 1-7.75-6H7a5 5 0 1 0 10 0h2.75A8 8 0 0 1 12 20Z" />
    </svg>
  );
}
