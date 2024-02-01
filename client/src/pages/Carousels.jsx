import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

function Carousels() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="">
      <ReactSimplyCarousel
        settings={settings}
        autoplay={true}
        infinite={true}
        autoplayDirection="forward"
        autoplayDelay={0}
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div className="w-[300vw] h-80">
          <img
            src="https://images.ctfassets.net/h7j9u4fil4a3/7BPrQWMk8DmwdRUaA6KO11/237b756cffab1171bfcae8293e414a7f/signing_event__4_.JPG?w=1439&h=1348&q=50&fm=webp"
            alt="sg"
          />
        </div>
        <div className="w-[300vw] h-80">
          <img
            src="https://images.ctfassets.net/h7j9u4fil4a3/7BPrQWMk8DmwdRUaA6KO11/237b756cffab1171bfcae8293e414a7f/signing_event__4_.JPG?w=1439&h=1348&q=50&fm=webp"
            alt="sg"
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousels;
