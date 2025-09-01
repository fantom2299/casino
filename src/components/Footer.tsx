
import Link from "next/link";

export default function Footer() {
  const menu = [
    { href: "https://casino-sultan-kz.kz/politika-konfidentsialnosti/", label: "Политика конфиденциальности" },
    { href: "https://casino-sultan-kz.kz/kontakty/", label: "Контакты" },
    { href: "https://casino-sultan-kz.kz/o-nas/", label: "О нас" },
    { href: "https://casino-sultan-kz.kz/usloviya-i-polozheniya/", label: "Условия и положения" },
  ];

  const socials = [
    { href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=", label: "Facebook", Icon: FbIcon },
    { href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=", label: "Twitter", Icon: XIcon },
    { href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=", label: "Instagram", Icon: IgIcon },
    { href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=", label: "YouTube", Icon: YtIcon },
  ];

  return (
    <footer className="mt-10 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen
  border-t border-white/10  ">
      <div className="  ">
        <div className="rounded-2xl bg-[#0e4a47] p-6 ring-1 ring-emerald-400/15 ">
          <div className="ml-20 grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* О нас */}
            <section>
              <h3 className="text-lg font-semibold text-white">О Sultan Games 365</h3>
              <p className="mt-3 text-teal-100/90">
                Лидер в мире онлайн-игр с 2015 года. Мы предлагаем лучшие игровые решения и
                гарантируем честность и безопасность.
              </p>

              <div className="mt-4 flex items-center gap-3">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-teal-100 transition hover:bg-white hover:text-black"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </section>

            {/* Меню */}
            <section>
              <h3 className="text-lg font-semibold text-white">Меню</h3>
              <ul className="mt-3 grid gap-2 text-teal-100/90">
                {menu.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      className="transition hover:text-yellow-400"
                      rel="nofollow"
                      target="_blank"
                    >
                      {m.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Контакты */}
            <section>
              <h3 className="text-lg font-semibold text-white">Контакты</h3>
              <ul className="mt-3 grid gap-2 text-teal-100/90">
                <li className="flex items-start gap-2">
                  <MapPinIcon className="mt-1 h-4 w-4 text-yellow-300" />
                  <span>Кызылорда, проспект Коркыт ата, 25, 120000</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneIcon className="h-4 w-4 text-yellow-300" />
                  <a href="tel:+74994391439" className="transition hover:text-yellow-400">
                    +7 (499) 439-14-39
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MailIcon className="h-4 w-4 text-yellow-300" />
                  <a href="mailto:abuse@casino-sultan-kz.kz" className="transition hover:text-yellow-400">
                    abuse@casino-sultan-kz.kz
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-teal-200/80">
            © 2025 Sultan Games 365. Все права защищены. | 18+
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== inline SVG иконки (без зависимостей) ===== */
function FbIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 9H16V6h-2.5C11.6 6 11 7.6 11 9.5V11H9v3h2v7h3v-7h2.1l.9-3H14v-1.3c0-.7.2-1.7 1.5-1.7Z" />
    </svg>
  );
}
function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4 4h4.7l4 5.8L17.8 4H20l-6.2 8.7L20 20h-4.7l-4.3-6.1L6.2 20H4l6.6-9.3L4 4Z" />
    </svg>
  );
}
function IgIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7ZM18 6.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
}
function YtIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.8 4.6 12 4.6 12 4.6s-5.8 0-7.5.5A3 3 0 0 0 2.4 7.2C2 9 2 12 2 12s0 3 .4 4.8a3 3 0 0 0 2.1 2.1c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a3 3 0 0 0 2.1-2.1C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}
function MapPinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" />
    </svg>
  );
}
function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 2h10.8A2.6 2.6 0 0 1 20 4.6v14.8A2.6 2.6 0 0 1 17.4 22H6.6A2.6 2.6 0 0 1 4 19.4V4.6A2.6 2.6 0 0 1 6.6 2Zm0 2A.6.6 0 0 0 6 4.6v12.8h12V4.6A.6.6 0 0 0 17.4 4H6.6ZM12 20.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
    </svg>
  );
}
function MailIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.4l9 5.6 9-5.6V7H3Zm18 10V9.3l-8.4 5.2a2 2 0 0 1-2.2 0L2 9.3V17h19Z" />
    </svg>
  );
}
