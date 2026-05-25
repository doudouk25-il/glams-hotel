"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageContext";
import { useBooking } from "./BookingContext";
import { ROOMS, img } from "@/lib/data";

export default function Rooms() {
  const { t } = useLanguage();
  const { openBooking } = useBooking();

  return (
    <section id="chambres" className="py-20 lg:py-28 bg-blush">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-bordeaux text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            {t.rooms.label}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-dark mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {t.rooms.title}
          </h2>
          <p className="text-text-mid text-lg max-w-2xl mx-auto">
            {t.rooms.subtitle}
          </p>
        </div>

        {/* Rooms grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-rose/20 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={img(room.image, 600, 400)}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="text-lg font-bold text-text-dark mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {room.name}
                </h3>
                <p className="text-text-mid text-sm leading-relaxed flex-1">
                  {t.rooms.description[room.descKey]}
                </p>
                <button
                  onClick={() => openBooking()}
                  className="mt-4 w-full bg-bordeaux hover:bg-bordeaux-dark text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                >
                  {t.rooms.bookRoom}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
