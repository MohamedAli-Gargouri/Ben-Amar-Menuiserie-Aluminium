import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import AboutBanner from "@/app/pageComponents/About/AboutBanner";
import AboutMissionBlock from "@/app/pageComponents/About/AboutMissionBlock";
const AboutPage = () => {
  return (
    <>
      <Navbar bgWhite={true} />

      <section>
        <AboutBanner />
        <AboutMissionBlock />

      </section>
      <Footer/>
    </>
  );
};
export default AboutPage;
