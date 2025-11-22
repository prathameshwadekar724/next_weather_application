"use client";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBox({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-8"
    >
      <div className="flex bg-white/50 backdrop-blur-lg px-4 py-3 rounded-full shadow-lg w-[90%] max-w-lg transition-all">
        <input
          type="text"
          placeholder="Search city…"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 bg-transparent text-white outline-none placeholder-white/70"
        />
        <button>
          <Search className="text-white" />
        </button>
      </div>
    </form>
  );
}
