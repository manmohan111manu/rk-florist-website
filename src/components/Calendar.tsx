"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { bookedDates } from "@/data/bookedDates";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

function formatDateISO(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthName = currentDate.toLocaleString("en-IN", { month: "long", year: "numeric" });

  const blanks = Array(firstDay).fill(null);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-leaf-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-xl text-leaf-900">{monthName}</h3>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="w-9 h-9 rounded-full bg-leaf-50 hover:bg-leaf-100 flex items-center justify-center transition-colors">
            <FiChevronLeft className="w-4 h-4 text-leaf-700" />
          </button>
          <button onClick={nextMonth} className="w-9 h-9 rounded-full bg-leaf-50 hover:bg-leaf-100 flex items-center justify-center transition-colors">
            <FiChevronRight className="w-4 h-4 text-leaf-700" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-leaf-400 uppercase">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {blanks.map((_, i) => (
          <div key={`blank-${i}`} />
        ))}
        {days.map((day) => {
          const dateStr = formatDateISO(year, month, day);
          const isBooked = bookedDates.includes(dateStr);
          const isToday = new Date().toISOString().slice(0, 10) === dateStr;

          return (
            <Link
              key={day}
              href={`/events/quote?date=${dateStr}`}
              className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all duration-200 relative ${
                isBooked
                  ? "bg-red-50 text-red-500 hover:bg-red-100 cursor-pointer"
                  : "bg-leaf-50 text-leaf-700 hover:bg-leaf-100 cursor-pointer"
              } ${isToday ? "font-bold ring-2 ring-brand-500" : ""}`}
            >
              {day}
              {isBooked && <FiCheck className="w-3 h-3 text-red-500 ml-0.5" />}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-5 mt-5 text-sm text-leaf-600">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-leaf-50 border border-leaf-200" />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-sm bg-red-50 border border-red-200 flex items-center justify-center">
            <FiCheck className="w-2.5 h-2.5 text-red-500" />
          </span>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
}
