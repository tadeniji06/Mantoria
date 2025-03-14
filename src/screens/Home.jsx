import Hero from "../components/home/Hero";
import GetToKnow from "../components/home/GetToKnow";
import WhatWeDo from "../components/home/WhatWeDo";
import ActiveListing from "../components/home/ActiveListing";
import ExclusiveUpdates from "../components/home/ExclusiveUpdates";
import GetInTouch from "../components/home/GetInTouch";
import Flyers from "../components/properties/Flyers";

import BackToTop from "../components/ui/BackToTop";
import AniPlus from "../components/home/AniPlus";
const Home = () => {
  return (
    <section>
      <Hero />
      <WhatWeDo />
      <hr className='border-gray-400' />
      <ActiveListing />
      <hr className='border-gray-400' />
      <AniPlus />
      <hr className='border-gray-400' />
      <Flyers />
      <hr className='border-gray-400' />
      {/* <ExclusiveUpdates /> */}
      {/* <hr className='border-gray-400' /> */}
      <GetToKnow />
      <hr className='border-gray-400' />
      <GetInTouch />
      <BackToTop />
    </section>
  );
};

export default Home;
