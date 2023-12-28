import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";
import Navbar from "@/components/Navbar";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full">
      <Navbar />
      {children}
      <FooterMenu />
      <Footer />
    </div>
  );
};

export default HomePage;
