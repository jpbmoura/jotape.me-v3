import LocaleSwitcher from "@/components/locale-switcher";

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-content items-center justify-between gap-4 px-5 py-10 text-sm text-subtle sm:px-6">
      <p>© {new Date().getFullYear()} João Pedro de Moura</p>
      <LocaleSwitcher className="-mr-2" />
    </footer>
  );
}
