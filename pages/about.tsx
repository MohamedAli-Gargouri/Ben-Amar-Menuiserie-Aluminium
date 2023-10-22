import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import AboutBanner from "@/app/pageComponents/About/AboutBanner";
import AboutMissionBlock from "@/app/pageComponents/About/AboutMissionBlock";
import AboutTeamBlock from "@/app/pageComponents/About/AboutTeam"
const AboutPage = () => {
  return (
    <>
      <Navbar bgWhite={true} />

      <section>
        <AboutBanner />
        <AboutMissionBlock />
        <AboutTeamBlock/>
      </section>
      <Footer/>
    </>
  );
};
export default AboutPage;
