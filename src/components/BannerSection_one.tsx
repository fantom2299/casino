'use client';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  bgSrc: string;
  bgAlt?: string;
  fgSrc: string;
  fgAlt?: string;
  title?: string;
  text?: string;
  ctaText?: string;
  ctaHref?: string;
  height?: number;
};

export default function Banner({
                                 bgSrc,
                                 bgAlt = '',
                                 fgSrc,
                                 fgAlt = '',
                                 title = 'ПЕРВЫЙ ДЕПОЗИТ\n5 000 РУБ',
                                 text = 'получи\n9000 Руб + 100 фриспинов',
                                 ctaText = 'Внести депозит',
                                 ctaHref = '#',
                                 height = 408,
                               }: Props) {
  return (
    <section
      className="group relative isolate w-full overflow-hidden rounded-2xl shadow-lg"
      style={{ height }}
    >
      {/* Фон */}
      <Image
        src={bgSrc}
        alt={bgAlt}
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        className="z-0 object-cover"
      />

      {/* Немного затемним фон слева для читаемости текста (под героями не затемняем) */}
      <div className="absolute inset-y-0 left-0 right-[40%] z-10 bg-gradient-to-r from-black/55 via-black/35 to-transparent" />

      {/* «Герои» поверх фона */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <Image
          src={fgSrc}
          alt={fgAlt}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          className="
            object-contain object-right-bottom
            transition-transform duration-300 ease-out
            origin-right-bottom
            group-hover:scale-[1.06]
          "
        />
      </div>

      {/* Контент слева */}
      <div className="relative z-30 h-full">
        <div className="flex h-full items-center px-6 sm:px-10">
          <div className="max-w-[560px] text-white">
            <h2 className="mb-3 whitespace-pre-line text-3xl font-extrabold italic leading-tight sm:text-4xl">
              {title}
            </h2>
            <p className="whitespace-pre-line text-base/6 text-white/90">
              {text}
            </p>

            {ctaText && ctaHref && (
              <div className="mt-6">
                <Link
                  href={ctaHref}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="inline-block rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black shadow-md ring-1 ring-yellow-300/60 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
