"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { useBooking } from "./BookingContext";

function today() {
  return new Date().toISOString().split("T")[0];
}

function tomorrow() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

export default function BookingWidget() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();
  const [checkIn, setCheckIn] = useState(today());
  const [checkOut, setCheckOut] = useState(tomorrow());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleBook = () => {
    openBooking({ checkIn, checkOut, adults, children });
  };

  return (
    <div
      id="hero-booking"
      className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4 [&_input]:min-w-0 [&_select]:min-w-0">
        {/* Check-in */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-bordeaux uppercase tracking-wider">
            {t.hero.checkIn}
          </label>
          <input
            type="date"
            value={checkIn}
            min={today()}
            onChange={(e) => {
              setCheckIn(e.target.value);
              if (e.target.value >= checkOut) {
                const d = new Date(e.target.value);
                d.setDate(d.getDate() + 1);
                setCheckOut(d.toISOString().split("T")[0]);
              }
            }}
            className="border border-rose/40 rounded-lg px-3 py-2.5 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors"
          />
        </div>

        {/* Check-out */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-bordeaux uppercase tracking-wider">
            {t.hero.checkOut}
          </label>
          <input
            type="date"
            value={checkOut}
            min={checkIn}
            onChange={(e) => setCheckOut(e.target.value)}
            className="border border-rose/40 rounded-lg px-3 py-2.5 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors"
          />
        </div>

        {/* Adults */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-bordeaux uppercase tracking-wider">
            {t.hero.adults}
          </label>
          <select
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            className="border border-rose/40 rounded-lg px-3 py-2.5 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors bg-white"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* Children */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-bordeaux uppercase tracking-wider">
            {t.hero.children}
          </label>
          <select
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            className="border border-rose/40 rounded-lg px-3 py-2.5 text-sm text-text-dark focus:outline-none focus:border-bordeaux transition-colors bg-white"
          >
            {[0, 1, 2, 3].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          onClick={handleBook}
          className="w-full sm:flex-1 bg-bordeaux hover:bg-bordeaux-dark text-white font-semibold py-3 px-6 rounded-xl transition-colors text-sm tracking-wide"
        >
          {t.hero.book}
        </button>
        <p className="text-xs text-text-mid flex items-center gap-1.5">
          <span className="text-gold font-bold">✦</span>
          {t.hero.promoHint}
        </p>
      </div>
    </div>
  );
}
