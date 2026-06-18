import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>GearShare Rural</title>
        <meta name="description" content="Map-based equipment rental platform for rural farmers." />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}