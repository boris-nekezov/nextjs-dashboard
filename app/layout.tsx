// $0201
import '@/app/ui/global.css';
// $0302
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*// $0303 */}
      <body
        className={`${inter.className} antialiased`}
      >{children}</body>
    </html>
  );
}
