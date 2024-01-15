import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterMenu from "@/components/FooterMenu";

const HomePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex-grow h-full">{children}</div>
      <FooterMenu />
      <Footer />
    </>
  );
};

export default HomePage;
