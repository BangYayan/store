import  Header  from "@/components/ui/shared/header";
import Footer from "@/components/ui/footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex h-screen flex-col">
        <Header />
        <div className="main flex-1 wrapper">{children} </div>
        <Footer />
      </div>
    );
  }