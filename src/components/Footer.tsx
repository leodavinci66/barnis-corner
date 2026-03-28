export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary/80 py-10 px-6 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
        <p className="font-[family-name:var(--font-heading)] font-semibold text-lg text-on-primary">
          Barni&apos;s Corner
        </p>
        <div className="text-center space-y-1">
          <p>Herzog-Leopold-Straße 2, 2700 Wiener Neustadt</p>
          <p>+43 667 654 74399</p>
        </div>
        <p className="text-on-primary/60 text-xs">
          &copy; 2026 Barni&apos;s Corner. Mit Liebe gebraut.
        </p>
      </div>
    </footer>
  );
}
