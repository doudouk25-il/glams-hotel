"use client";

import { createContext, useContext, useState, useCallback } from "react";
import BookingModal from "./BookingModal";
import { buildBookingUrl } from "@/lib/data";
import { useLanguage } from "./LanguageContext";

interface BookingContextType {
  openBooking: (params?: { checkIn?: string; checkOut?: string; adults?: number; children?: number }) => void;
}

const BookingContext = createContext<BookingContextType>({ openBooking: () => {} });

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const [bookingUrl, setBookingUrl] = useState<string | null>(null);

  const openBooking = useCallback(
    (params: { checkIn?: string; checkOut?: string; adults?: number; children?: number } = {}) => {
      const today = new Date().toISOString().split("T")[0];
      const tomorrow = (() => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d.toISOString().split("T")[0];
      })();
      const url = buildBookingUrl({
        checkIn: params.checkIn ?? today,
        checkOut: params.checkOut ?? tomorrow,
        adults: params.adults ?? 2,
        children: params.children ?? 0,
        locale,
      });
      setBookingUrl(url);
    },
    [locale]
  );

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {bookingUrl && (
        <BookingModal url={bookingUrl} onClose={() => setBookingUrl(null)} />
      )}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
