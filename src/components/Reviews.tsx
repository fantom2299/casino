'use client';

import { useState } from 'react';

type Review = {
  id: string;
  name: string;
  text: string;
  createdAt: string;
};

export default function Reviews() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [pending, setPending] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);



  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setOk(null);
    setError(null);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, text }),
      });

      if (!res.ok) throw new Error('Fail');

      const created: Review = await res.json();
      // Мгновенно покажем в списке
      // setItems((prev) => [created, ...prev]);
      setOk('Спасибо! Отзыв отправлен.');
      setName('');
      setText('');
    } catch (err) {
      setError('Не удалось отправить. Попробуйте ещё раз.');
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="mx-auto mt-8 w-full max-w-[1468px] rounded-2xl  ">
      <h3 className="text-xl font-bold text-white sm:text-2xl">Отзывы Sultan Casino</h3>

      {/* Форма */}
      <div className="mt-8 rounded-2xl ">
        <h6 className="mb-4  text-white">Оставить отзыв о Султан Казино</h6>

        <form onSubmit={onSubmit} className="grid gap-4">
          <label className="grid gap-1">
            <span className="text-sm text-teal-100">Имя <span className="text-yellow-300">*</span></span>
            <input
              type="text"
              required
              placeholder="Как Вас зовут?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10 rounded-lg border border-white/10 bg-[#0f3f3b] px-3 text-white outline-none placeholder:text-teal-300/60 focus:ring-2 focus:ring-yellow-400"
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm text-teal-100">Отзыв <span className="text-yellow-300">*</span></span>
            <textarea
              required
              placeholder="Что Вы о нас думаете?"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[120px] rounded-lg border border-white/10 bg-[#0f3f3b] p-3 text-white outline-none placeholder:text-teal-300/60 focus:ring-2 focus:ring-yellow-400"
            />
          </label>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-10 items-center justify-center rounded-full bg-yellow-400 px-5 font-semibold text-black transition hover:brightness-95 disabled:opacity-60"
            >
              {pending ? 'Отправка…' : 'Отправить'}
            </button>

            {ok && <span className="text-sm text-emerald-300">{ok}</span>}
            {error && <span className="text-sm text-red-300">{error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
