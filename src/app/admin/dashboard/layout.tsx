import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Privacy from "@/components/Privacy";
import Header from "../components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
