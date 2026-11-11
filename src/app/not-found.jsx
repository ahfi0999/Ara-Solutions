import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-40 text-center">
      <p className="font-['Sora'] text-sm font-semibold tracking-widest text-[#E71E28]">404</p>
      <h1 className="font-['Sora'] text-3xl font-bold text-[#111455]">This page doesn&apos;t exist</h1>
      <Link
        href="/"
        className="rounded-full bg-[#E71E28] px-6 py-3 font-['Sora'] text-sm font-semibold text-white hover:bg-[#B8141D]"
      >
        Back to home
      </Link>
    </section>
  );
}
