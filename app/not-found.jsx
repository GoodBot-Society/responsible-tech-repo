import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex justify-center items-center min-h-[calc(100vh-64px)] max-[767px]:px-4 max-[767px]:py-10">
      <div className="font-poppins flex flex-col justify-center items-center gap-4 max-[767px]:w-full max-[767px]:gap-5">
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-goodbot-primary text-9xl font-extrabold max-[767px]:text-[clamp(72px,18vw,120px)]">404</h2>
          <p className="text-goodbot-text text-5xl font-extrabold max-[767px]:text-[clamp(24px,5vw,36px)] max-[767px]:leading-tight max-[767px]:text-center">Error, page not found</p>
        </div>
        <p className="text-[#64748B] text-base text-center max-[767px]:text-sm max-[767px]:leading-6">This page may have been removed, renamed, or made temporarily unavailable.</p>
        <Link href='/' className="text-goodbot-text text-base font-bold uppercase px-2 py-3 bg-goodbot-button-primary rounded-md hover:bg-goodbot-button-primary-hover shadow max-[767px]:text-sm max-[767px]:px-5 max-[767px]:min-h-11">Go to homepage</Link>
      </div>
    </main>

  );
}
