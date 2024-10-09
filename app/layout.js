import "./globals.css";

export const metadata = {
  title: "Mark Learning Management Solution",
  description: "School records and filing system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
