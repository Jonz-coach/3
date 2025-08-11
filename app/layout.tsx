import "./globals.css";

export const metadata = {
  title: "Jonz 코칭 아카데미",
  description: "개인 맞춤형 롤 코칭",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
