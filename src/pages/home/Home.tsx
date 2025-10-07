import HeroBanner from "../../component/heroBanner/HeroBanner";
import FeatureCollege from "../../component/homeFeatureCollege/FeatureCollege";
import ImageGallery from "../../component/homeImageGallery/ImageGallery";
import ResearchSection from "../../component/homeResearchSection/ResearchSection";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <FeatureCollege />
      <ResearchSection />
      <ImageGallery />
    </div>
  );
};

export default Home;
