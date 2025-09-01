
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Game = {
  title: string;
  type: string;
  rating: number;
  imgSrc: string;
  href: string;
  dataRef?: string;
};

type Props = {
  games: Game[];
  heading?: string;
  revealHref?: string;
  className?: string;
  dark?: boolean;
};

export default function PopularGames({
                                       games,
                                       heading = "ТОПОВЫЕ СЛОТЫ",
                                       revealHref,
                                       className,
                                       dark = false,
                                     }: Props) {
  return (
    <section
      aria-labelledby="popular-games-title"
      className={clsx(
        "mx-auto max-w-[1468px] py-6 px-4",
        dark && "rounded-xl ring-emerald-400/10 shadow-inner",
        className
      )}
    >
      <div className="mb-8 text-center">
        <h2
          id="popular-games-title"
          className="relative inline-block text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          <span>{heading}</span>
          <span className="pointer-events-none absolute -bottom-3 left-1/2 h-[3px] w-20 -translate-x-1/2 rounded bg-yellow-400/90" />
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {games.map((g) => (
          <article
            key={g.title}
            className="group relative overflow-hidden rounded-xl bg-[#0e2a27] ring-1 ring-emerald-400/20 transition
                       hover:-translate-y-0.5 hover:ring-emerald-400/40"
          >
            {/* бейдж — всегда виден */}
            <span className="absolute left-2 top-2 z-20 rounded-md bg-yellow-400 px-2 py-1 text-xs font-bold text-black">
              {g.type}
            </span>


            <div
              aria-label={`Рейтинг ${g.rating}`}
              className="absolute right-2 top-2 z-20 inline-flex -translate-y-1 items-center gap-2 text-yellow-300 drop-shadow
                         opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <Stars value={g.rating} />
              <span className="text-[12px] font-bold text-teal-50">{g.rating}</span>
            </div>


            <div className="relative w-full aspect-[16/10]">
              <Image
                src={g.imgSrc}
                alt={g.title}
                fill
                sizes="(max-width: 640px) 70vw, (max-width: 1024px) 30vw, 260px"
                className="object-cover transition duration-300 group-hover:scale-[1.02] group-hover:brightness-90"
              />


              <div className="pointer-events-none absolute inset-0 z-10 opacity-0 transition
                              group-hover:opacity-100
                              bg-gradient-to-b from-transparent via-transparent to-[rgba(7,31,34,.85)]" />


              <Link
                href={g.href}
                target="_blank"
                rel="nofollow noreferrer"
                aria-label={`Играть в ${g.title}`}
                {...(g.dataRef ? { "data-ref": g.dataRef } : {})}
                className="absolute inset-0 z-20 grid place-items-center opacity-0
                           transition duration-200 group-hover:scale-100 group-hover:opacity-100"
              >
                <span className="absolute h-14 w-14 rounded-full bg-yellow-400 shadow
                                  ring-2 ring-black/10" />
                <PlayIcon />
              </Link>
            </div>


            <div
              className="absolute inset-x-0 bottom-0 z-20 translate-y-1 opacity-0
                         border-t border-white/10 bg-[rgba(7,31,34,.78)] px-3 py-2
                         backdrop-blur-sm transition duration-200
                         group-hover:translate-y-0 group-hover:opacity-100"
            >
              <div className="text-[14px] font-bold leading-tight text-[#e6f1ef]">
                {g.title}
              </div>
            </div>
          </article>
        ))}
      </div>

      {revealHref && (
        <div className="mt-8 text-center">
          <a
            target="_blank"
            rel="nofollow"
            href={revealHref}
            className="inline-block rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black
                       shadow transition hover:-translate-y-0.5 hover:shadow-yellow-400/50"
          >
            Раскрыть
          </a>
        </div>
      )}
    </section>
  );
}



function PlayIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      className="relative z-10 text-black"
    >
      <path
        d="M20.0094 13.82L9.22224 20.67C8.862 20.9 8.48173 21 8.11148 21C7.01075 21 6.00009 20.11 6.00009 18.85V5.15C6.00009 3.89 7.01075 3 8.11148 3C8.48173 3 8.87201 3.1 9.22224 3.33L20.0094 10.18C21.3303 11.02 21.3303 12.98 20.0094 13.82Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Stars({ value }: { value: number }) {
  const full = Math.floor(value);
  const hasHalf = value - full >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        if (i < full) return <Star key={i} kind="full" />;
        if (i === full && hasHalf) return <Star key={i} kind="half" />;
        return <Star key={i} kind="empty" />;
      })}
    </div>
  );
}

function Star({ kind }: { kind: "full" | "half" | "empty" }) {
  const d =
    "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";

  if (kind === "half") {

    return (
      <span className="relative inline-block h-4 w-4 text-yellow-300">

        <svg viewBox="0 0 24 24" className="absolute inset-0" aria-hidden>
          <path d={d} fill="none" stroke="currentColor" />
        </svg>

        <svg
          viewBox="0 0 24 24"
          aria-hidden
          className="absolute inset-0
                     [mask-image:linear-gradient(90deg,#000_50%,transparent_50%)]
                     [mask-size:100%_100%] [mask-repeat:no-repeat]"
        >
          <path d={d} fill="currentColor" />
        </svg>
      </span>
    );
  }

  if (kind === "empty") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-300" aria-hidden>
        <path d={d} fill="none" stroke="currentColor" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 text-yellow-300" aria-hidden>
      <path d={d} fill="currentColor" />
    </svg>
  );


}
