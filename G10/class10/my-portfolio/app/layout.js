import "./globals.css";

export const metadata = {
  title: "Ivo Kostovski Portfolio",
  description: "The portfolio for Ivo FullStack Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Root Layout</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
