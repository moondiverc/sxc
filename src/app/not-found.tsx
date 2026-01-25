import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Halaman tidak ditemukan
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
