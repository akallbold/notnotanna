import React from "react";

// reactstrap components

// core components
import AKBColorNavbar from "components/Navbars/ColorNavbar-akb.js";
import AKBPresentationHeader from "components/Headers/PresentationHeader-akb.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import SectionSummary from "./presentation-sections/SectionSummary.js";
import AKBSectionComponents from "./presentation-sections/SectionComponents-akb.js";
import SectionCards from "./presentation-sections/SectionCards.js";
import SectionContent from "./presentation-sections/SectionContent.js";
import AKBSectionSections from "./presentation-sections/SectionSections-akb.js";
import SectionExamples from "./presentation-sections/SectionExamples.js";
import SectionIcons from "./presentation-sections/SectionIcons.js";
import SectionFreeDemo from "./presentation-sections/SectionFreeDemo.js";
import AKBSectionResponsive from "./presentation-sections/SectionResponsive-akb.js";
import AKBectionOverview from "./presentation-sections/SectionOverview-akb.js";
import SectionTestimonials from "./presentation-sections/SectionTestimonials.js";
import SectionSharing from "./presentation-sections/SectionSharing.js";

function Presentation() {
  document.documentElement.classList.remove("nav-open");
  // function that is being called on scroll of the page
  const checkScroll = () => {
    // it takes all the elements that have the .add-animation class on them
    const componentPosition = document.getElementsByClassName("add-animation");
    const scrollPosition = window.pageYOffset;
    for (var i = 0; i < componentPosition.length; i++) {
      var rec =
        componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      // when the element with the .add-animation is in the scroll view,
      // the .animated class gets added to it, so it creates a nice fade in animation
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add("animated");
        // when the element with the .add-animation is not in the scroll view,
        // the .animated class gets removed from it, so it creates a nice fade out animation
      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove("animated");
      }
    }
  };

  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.addEventListener("scroll", checkScroll);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("presentation-page");
      window.removeEventListener("scroll", checkScroll);
    };
  });
  return (
    <>
      <AKBColorNavbar />
      <AKBPresentationHeader />
      {/* <SectionSummary /> */}
      <AKBSectionComponents />
      <AKBSectionResponsive />
      {/* <SectionCards /> */}
      {/* <SectionContent /> */}
      <AKBSectionSections />
      <SectionExamples />
      {/* <SectionIcons /> */}
      <SectionFreeDemo />
    
      <AKBectionOverview />
     {/*  <SectionTestimonials />
      <SectionSharing /> */}
      <FooterBlack />
    </>
  );
}

export default Presentation;
