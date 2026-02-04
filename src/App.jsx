import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import HeroSlider from "./component/section1";
import FindUs from "./component/section2";
import ImageGrid  from "./component/section3";
function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />
<FindUs />
    <ImageGrid />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
