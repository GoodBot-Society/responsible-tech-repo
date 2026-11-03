import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center min-h-[calc(100vh-64px)]">
      <div className="font-poppins flex flex-col justify-center items-center gap-4">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-goodbot-primary text-9xl font-extrabold">404</h2>
          <p className="text-goodbot-text text-5xl font-extrabold">Error, page not found</p>
        </div>
        <p className="text-[#64748B] text-base text-center">This page may have been removed, renamed, or made temporarily unavailable.</p>
        <Link href='/' className="text-goodbot-text text-base font-bold uppercase px-2 py-3 bg-goodbot-button-primary rounded-md hover:bg-goodbot-button-primary-hover shadow">Go to homepage</Link>
      </div>
    </main>

  );
}
