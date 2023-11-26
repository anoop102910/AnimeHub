import "./globals.css";

export const metadata = {
  title: 'AnimeHub',
  description: 'Discover the world of anime',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className="bg-[#0F1117]">{children}</body>
    </html>
  )
}
