import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "ContextLens",
  description: "Codebase understanding platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
