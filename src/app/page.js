import Link from "next/link";
import '../app/globals.css';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <h1 className="font-bold text-2xl">This is home page...</h1>
      <div className="text-blue-600 underline">
        <Link href="/about">About Page</Link> <br />
        <Link href="/contact">Contact Page</Link> <br />
        <Link href="/blogs">Blogs Page</Link> <br />
        <Link href="/products">Products Page</Link>
      </div>
    </div>
  )
}