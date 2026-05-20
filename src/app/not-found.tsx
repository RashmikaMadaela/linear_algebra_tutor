import { notFound } from 'next/navigation';
import { redirect } from 'next/navigation';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center px-6">
      <div className="text-6xl">404</div>
      <h1 className="text-2xl font-bold text-text">Page not found</h1>
      <p className="text-text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <a
        href="/"
        className="mt-2 px-5 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
      >
        Back to home
      </a>
    </div>
  );
}
