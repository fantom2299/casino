// components/BannerSection2.tsx
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type BannerSectionProps = {
  title?: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;                 // затемнение поверх картинки
  theme?: "light" | "dark";          // цвет текста
  height?: "small" | "medium" | "large" | "full";
};

export default function BannerSection2({
                                         title = "Бонус за регистрацию 100%",
                                         subtitle = "Получите удвоенный стартовый капитал для игры сразу после регистрации!",
                                         imageUrl,
                                         imageAlt,
                                         ctaText,
                                         ctaLink,
                                         overlay = true,
                                         theme = "dark",
                                         height = "medium",
                                       }: BannerSectionProps) {
  const h = {
    small: "h-[300px]",
    medium: "h-[400px]",
    large: "h-[500px]",
    full: "min-h-[600px] h-screen",
  }[height];

  const textColor = theme === "dark" ? "text-white" : "text-slate-900";

  return (
    // max-w совпадает с блоком игр; отступы слева/справа как у остальных секций
    <section className={clsx(
      "relative isolate mx-auto mt-5 w-full max-w-[1468px] overflow-hidden rounded-2xl",
      "px-4 sm:px-6 lg:px-8",  // внутренние поля
      h
    )}>
      {/* Фон */}
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill

        sizes="(max-width:768px) 100vw, 1468px"
        className="object-cover object-top"
      />

      {/* Затемнение */}
      {overlay && (
        <div
          className={clsx(
            "absolute inset-0",
            // мягкий градиент как в варианте CSS
            "bg-gradient-to-br from-black/60 via-black/40 to-black/20"
          )}
        />
      )}

      {/* Контент */}
      <div className={clsx(
        "relative z-10 flex h-full w-full items-center justify-center",
        "text-center"
      )}>
        <div className="max-w-[800px]">
          <p className={clsx(
            "mb-3 text-3xl sm:text-4xl font-bold italic",
            textColor
          )}>
            {title}
          </p>

          <p className={clsx(
            "text-base sm:text-lg opacity-95",
            textColor
          )}>
            {subtitle}
          </p>

          {ctaText && ctaLink && (
            <div className="mt-8">
              <Link
                href={ctaLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block rounded-full px-6 py-3 text-sm font-semibold text-black
                           bg-gradient-to-br from-yellow-400 to-orange-500
                           shadow transition-transform duration-200 hover:-translate-y-0.5"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
