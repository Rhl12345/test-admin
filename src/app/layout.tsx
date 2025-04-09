import ErrorBoundary from "@/components/common/ErrorBoundary";
import Toast from "@/components/toastify/Toast";
import { Inter, Roboto } from "next/font/google";
import "@/styles/style.css";
import "@/styles/custom.css";
import WrapperLayout from "@/components/common/WrapperLayout";
import { ThemeProvider } from "@/components/common/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

// Initialize the font
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

// Add metadata export for better SEO and performance
export const metadata = {
  title: "Redefine Solutions",
  description: "Redefine Solutions Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${roboto.variable}`}>
      <head>
        <title>Redefine Solutions</title>
        <link
          rel="shortcut icon"
          href="https://www.redefinesolutions.com/resources/assets/library/favicon.png"
          type="image/x-icon"
        />
      </head>
      <body className="bg-body-light dark:bg-body-dark">
        <ErrorBoundary>
          <ThemeProvider>
            <div>
              <Toast />
              <WrapperLayout>
                {children}
              </WrapperLayout>
            </div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
