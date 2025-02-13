"use client"; // Ensure this runs only on the client side

import { useEffect, useState } from "react";
import Link from "next/link";
import "../app/globals.css";

export default function Home() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallBtn, setShowInstallBtn] = useState(false);

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault(); 
      setDeferredPrompt(e); 
      setShowInstallBtn(true); 
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response: ${outcome}`);
    
    setDeferredPrompt(null); 
    setShowInstallBtn(false); 
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <h1 className="font-bold text-2xl">This is home page...</h1>

      {showInstallBtn && (
        <button 
          onClick={handleInstall} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Install App
        </button>
      )}

      <div className="text-blue-600 underline">
        <Link href="/about">About Page</Link> <br />
        <Link href="/contact">Contact Page</Link> <br />
        <Link href="/blogs">Blogs Page</Link> <br />
        <Link href="/products">Products Page</Link>
      </div>
    </div>
  )
}