import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReCaptchaProvider from "@/provider/ReCaptchaProvider";

// Load Inter as the primary font
const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});
// Load Anton as the secondary font
const anton = Anton({
  variable: "--font-secondary",
  weight: "400", // Anton only has one weight, so specify it
  subsets: ["latin"],
});

export const metadata = {
  title: "LAEL DESIGNERS",
  description:
    "By the inspiration of our creator, LAEL DESIGNERS began functioning in this form from 2007 but had been in the construction, interior designing, and home remodeling field years before. Ever since our clients have been passing only good words about our excellent work and craftsmanship and dedication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* <!-- Favicon for most browsers --> */}
        <link rel="icon" href="/favicon/favicon.ico" />
        {/* <!-- Favicon for 16x16 (mostly used by older browsers) --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        {/* <!-- Favicon for 32x32 (mostly used by modern browsers) --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        {/* <!-- Apple touch icon (for iOS) --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        {/* <!-- Android Chrome icon --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        {/* <!-- Android Chrome 512x512 --> */}
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        {/* <!-- Manifest for PWA --> */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${inter.variable} ${anton.variable} font-sans antialiased`}
      >
        <Toaster
          style={{ zIndex: "999999999999999999" }}
          toastOptions={{
            duration: 1000,
          }}
        />
        <ReCaptchaProvider>{children}</ReCaptchaProvider>
      </body>
    </html>
  );
}
