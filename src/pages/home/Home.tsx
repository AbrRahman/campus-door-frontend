import HeroBanner from "../../component/heroBanner/HeroBanner";
import FeatureCollege from "../../component/homeFeatureCollege/FeatureCollege";
import ResearchSection from "../../component/homeResearchSection/ResearchSection";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FeatureCollege />
      <ResearchSection />
    </div>
  );
};

export default Home;
