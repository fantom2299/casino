// components/Faq.tsx
import Image from "next/image";

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "Что такое Sultan Games Casino KZ?",
    a: "Sultan games казино — это лицензированное онлайн-казино, работающее на территории Казахстана, предлагающее пользователям более 2000 сертифицированных игр, щедрые бонусы и круглосуточную поддержку. В Султан казино КЗ игроки могут делать ставки в тенге и получать быстрые выплаты с полной защитой персональных данных.",
  },
  {
    q: "Какие бонусы предлагает Султан геймс казино новым игрокам?",
    a: "Султан геймс казино официальный сайт предлагает новым пользователям приветственный бонус на первый депозит, бесплатные вращения, участие в турнирных мероприятиях и доступ к программе лояльности. В онлайн казино Султан вы всегда можете играть с преимуществом благодаря регулярно обновляемым акциям.",
  },
  {
    q: "Безопасно ли играть в онлайн казино Султан Казахстан?",
    a: "Да, играть в Sultan games KZ онлайн казино безопасно. Все данные шифруются, транзакции защищены, а сайт соответствует международным стандартам. Мы применяем новейшие технологии и соблюдаем Политику конфиденциальности, чтобы гарантировать надёжность ваших данных.",
  },
  {
    q: "Можно ли играть в Султан казино с мобильного телефона?",
    a: "Да, Sultan gems предлагает полностью адаптированную мобильную версию, доступную через браузер. В ближайшее время будет запущено мобильное приложение Султан геймс КЗ казино. Все функции доступны и в мобильной версии, включая регистрацию и вывод средств.",
  },
  {
    q: "Как вывести выигрыш из Sultan Games Casino KZ?",
    a: "Чтобы вывести выигрыш, пройдите верификацию и выберите удобный способ выплаты: банковские карты, электронные кошельки или криптовалюты. В казино Султан геймс деньги выводятся на те же реквизиты, с которых было пополнение; заявки обрабатываются оперативно.",
  },
];

export default function Faq() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <section className="mx-auto w-full max-w-[1468px] rounded-2xl  mt-8">
      <h2 className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-white">
        <Image src="/star.svg" alt="" width={24} height={24} className="h-6 w-6" />
        FAQ – Часто задаваемые вопросы
      </h2>

      <div itemScope itemType="https://schema.org/FAQPage" className="space-y-3">
        {faqs.map((f, i) => (
          <details
            key={i}
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            className="group overflow-hidden rounded-xl border border-white/10 bg-[#0e4a47] open:shadow-inner"
          >
            <summary
              itemProp="name"
              className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-white/95 transition hover:text-yellow-300"
            >
              <span className="text-base font-semibold">{f.q}</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 shrink-0 transition group-open:rotate-180"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 15.5 5 8.5l1.4-1.4L12 12.7l5.6-5.6L19 8.5z" />
              </svg>
            </summary>

            <div
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
              className="border-t border-white/10 bg-[#0a3b38]"
            >
              <div itemProp="text" className="p-4 text-teal-100/90">
                {f.a}
              </div>
            </div>
          </details>
        ))}
      </div>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
