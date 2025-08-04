import { Inter, Luckiest_Guy } from "next/font/google";
import "./globals.css";
// import LandscapeWarning from "@/components/layout/LandscapeWarning";


const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap'

});
const luckiestGuy = Luckiest_Guy({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400"],
  display: 'swap'

});

export const metadata = {
  title: "Bhooshan's Junior | India's First Kids Tech-tainment Company",
  description:
    "We are building India's first Kid’s Tech-Tainment Company! Our company is focused on revitalizing the kid’s entertainment segment by introducing Indian iconic animated characters",
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
        {/* <link rel="manifest" href="/favicon/site.webmanifest" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${inter.variable} ${luckiestGuy.variable} font-sans antialiased`}
      >
        {/* <LandscapeWarning /> */}
        {children}
      </body>
    </html>
  );
}
