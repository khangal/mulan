import { Footer, Navbar, Earth, SmoothScroll } from "../components";
import { About, Explore, GetStarted, WhatsNew } from "../sections";

const Home = () => (
  <div className="overflow-hidden bg-primary-black">
    <Navbar />
    <SmoothScroll>
      <Earth />
    </SmoothScroll>

    <div className="relative">
      <About />
      <div className="z-0 gradient-03" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="z-0 gradient-04" />
      <WhatsNew />
    </div>

    <Footer />
  </div>
);

export default Home;
