import Link from "next/link";

export default function Blog() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <h1>This is blog page...</h1>
      <div className="flex gap-3">
        <Link href="/blogs/first" className="text-blue-600 underline">First</Link>
        <Link href="/blogs/second" className="text-blue-600 underline">Second</Link>
      </div>
    </div>
  );
}
