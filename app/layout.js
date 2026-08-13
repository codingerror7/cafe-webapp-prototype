
import "./globals.css";


export const metadata = {
  title: "Brewista Coffee House | Premium Handcrafted Coffee",
  description: "Experience handcrafted coffee from premium beans, perfectly brewed for you at Brewista Coffee House. View our signature collection and find your perfect cup.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"    >

      <body>{children}</body>
    </html>
  );
}
