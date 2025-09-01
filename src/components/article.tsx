
import clsx from "clsx";
import Image from 'next/image';

type Props = { className?: string };

export default function Article({ className }: Props) {
  return (
    <article
      className={clsx(
        "mx-auto max-w-[1468px] rounded-xl  px-5 py-5 text-white leading-7",
        "sm:px-6 sm:py-6 lg:px-8",
        className
      )}
    >
      <h1 className="mb-6 mt-6 text-3xl font-extrabold leading-tight">
        Официальный сайт Sultan Games Casino Казахстан
      </h1>

      <div className="space-y-4">
        <p>
          Добро пожаловать в Султан казино — виртуальное пространство азарта, где каждый игрок из
          Казахстана найдет для себя надежную платформу для качественного отдыха. На нашем ресурсе
          Sultan casino пользователи получают доступ к широкому выбору развлечений, включая игровые
          автоматы, карточные игры и лайв-казино. Мы гарантируем высокое качество сервиса, современную
          защиту персональных данных и удобные условия участия для всех гостей.
        </p>

        <p>
          Наш сайт Sultan games предлагает простой и безопасный процесс регистрации, адаптированный под
          игроков из Казахстана, с полным функционалом на русском языке и возможностью пополнения счёта
          в тенге (KZT). Благодаря лицензированному софту и сертифицированным ГСЧ, каждый спин, каждое
          распределение карт — это результат прозрачной работы генератора случайных чисел.
          Присоединяйтесь к нашему сообществу и начните выигрывать в надежной игровой среде.
        </p>

        <p>
          Казино Султан КЗ предоставляет пользователям доступ к еженедельным акциям, бонусам за
          регистрацию и программе лояльности. Новички и постоянные игроки в Sultan games casino могут
          рассчитывать на поддержку 24/7, быстрые выплаты и регулярные турниры с внушительными призами.
          Мы уверены, что однажды выбрав нас, вы останетесь с нами надолго.
        </p>
      </div>

      <p className="mt-6 text-center">
        <img
          src="/sultan-games-casino-kz-18.webp"
          alt="sultan-games-casino-kz-18"
          className="mx-auto max-w-full rounded-lg shadow"
        />
      </p>

      <h2 id="reg-title" className="mt-10 text-2xl font-bold leading-tight flex gap-2">

        <Image
          src="/star.svg"
          alt="звезда"
          width={24}
          height={24}
          aria-hidden="true"
          className="h-6 w-6"
        />
        Как зарегистрироваться в Sultan Games Casino и начать играть
      </h2>

      <div className="space-y-4">
        <p>
          Процесс регистрации в Султан казино онлайн занимает не более пары минут и доступен для всех
          совершеннолетних жителей Казахстана. Для начала необходимо перейти на официальный сайт
          Sultan games KZ и нажать на кнопку «Регистрация». Далее нужно указать корректные личные данные,
          выбрать валюту счёта (рекомендуется KZT), установить пароль и подтвердить согласие с правилами
          использования. После этого игрок получает доступ к своему аккаунту и может сразу начать игру.
        </p>

        <p>
          Важно отметить, что наш ресурс Sultan casino KZ соблюдает требования AML/KYC-политики, и потому
          верификация учетной записи является обязательным шагом. Она гарантирует безопасность транзакций,
          а также позволяет использовать все функции казино без ограничений. Обычно проверка документов занимает
          не более 24 часов. Мы заботимся о том, чтобы каждый наш пользователь чувствовал себя защищенным и уверенным.
        </p>

        <p>
          После завершения регистрации игрок может внести первый депозит и получить приветственный бонус.
          Казино Султан геймс предлагает множество акций, включая фриспины и увеличенные пополнения.
          При этом интерфейс платформы интуитивно понятен: даже если вы впервые играете в онлайн казино Султан,
          вы легко разберётесь в меню, фильтрах и поиске по играм.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="w-full table-fixed border-collapse text-white">

          <colgroup>
            <col className="w-[32%]" />
            <col />
          </colgroup>

          <thead className="bg-[#0f2e2c]">
          <tr>
            <th
              scope="col"
              className="border border-[#2a5a56] px-4 py-3 text-left text-base font-semibold
                     before:mr-2 before:align-middle before:text-blue-400 before:content-['•']"
            >
              Этап
            </th>
            <th
              scope="col"
              className="border border-[#2a5a56] px-4 py-3 text-center text-base font-semibold"
            >
              Описание
            </th>
          </tr>
          </thead>

          <tbody className="bg-[#0f2e2c]">
          <tr>
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 text-left font-medium">
              <span className="mr-2">📝</span>Регистрация
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Заполнение формы с указанием электронной почты, пароля и валюты (KZT).
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">✅</span>Подтверждение
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Активация аккаунта через ссылку в email и принятие условий.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">🔐</span>Верификация
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Загрузка документов (паспорт или ID) в личном кабинете.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">💰</span>Пополнение
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Выбор способа оплаты и внесение первого депозита.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">🎁</span>Бонус
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Получение приветственного бонуса от Sultan games casino KZ.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">🎮</span>Выбор игры
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Переход в игровой раздел и выбор слота или лайв-игры.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">🃏</span>Игра
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Начало ставок на реальные деньги или в демо-режиме.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">📤</span>Вывод
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Вывод средств после выполнения условий вейджера.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">🔁</span>Программа лояльности
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Накопление баллов и участие в привилегированной системе.
            </td>
          </tr>

          <tr className="text-left">
            <th scope="row" className="border border-[#2a5a56] px-4 py-3 font-medium">
              <span className="mr-2">☎</span>Поддержка
            </th>
            <td className="border border-[#2a5a56] px-4 py-3">
              Обращение в службу помощи при любых вопросах.
            </td>
          </tr>

          </tbody>
        </table>
      </div>

    </article>
  );
}
