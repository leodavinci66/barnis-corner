"use client";

export default function Fab() {
  return (
    <div className="fixed bottom-8 right-8 z-40">
      <button
        className="bg-primary text-on-primary w-16 h-16 rounded-lg flex items-center justify-center shadow-2xl hover:scale-105 transition-transform"
        style={{ boxShadow: "0 10px 30px rgba(206, 226, 142, 0.3)" }}
        aria-label="Warenkorb"
      >
        <span className="text-2xl">&#128722;</span>
      </button>
    </div>
  );
}
