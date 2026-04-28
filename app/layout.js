import "./globals.css";

export const metadata = {
  title: "Majid Trivia Night",
  description: "Jeopardy-style trivia game for game nights with friends."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="theme-midnight" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
