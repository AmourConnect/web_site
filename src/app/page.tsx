import Footer from "@/components/Footer/footer";
import { SpotlightPreview } from "@/components/Dashboard/Home/sparklesBanner";

const Home = () => {
  return (
    <div className="flex flex-col">
      <SpotlightPreview />
      <Footer />
    </div>
  );
}
export default Home