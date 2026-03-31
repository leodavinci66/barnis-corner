export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center border-t border-outline/10 bg-surface-container transition-all">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="text-xl font-[family-name:var(--font-heading)] font-bold text-primary mb-2">
          Barni&apos;s Corner
        </div>
        <p className="text-xs text-on-surface/60 text-center md:text-left leading-relaxed">
          &copy; 2026 Barni&apos;s Corner. Mit Liebe gebraut.
          <br />
          +43 667 654 74399
          <br />
          Herzog-Leopold-Strasse 2, 2700 Wiener Neustadt
        </p>
      </div>
      <div className="flex gap-8">
        <a
          className="text-xs font-bold uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
          href="#"
        >
          Impressum
        </a>
        <a
          className="text-xs font-bold uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
          href="#"
        >
          Datenschutz
        </a>
        <a
          className="text-xs font-bold uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
          href="#"
        >
          Jobs
        </a>
      </div>
    </footer>
  );
}
