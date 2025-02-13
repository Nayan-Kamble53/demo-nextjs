export const metadata = {
  title: "Demo Next.js App",
  description: "This is a demo Next.js app",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "next14", "pwa", "next-pwa"],
  authors: [{ name: "Nayan" }],
  icons: [
    { rel: "apple-touch-icon", url: "/icons/android-chrome-512x512-512.png" },
    { rel: "icon", url: "/icons/android-chrome-512x512-512.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
