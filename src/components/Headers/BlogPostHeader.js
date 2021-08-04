import React from "react";

// reactstrap components
import { Button } from "reactstrap";

// core components

function BlogPostHeader(props) {
  let pageHeader = React.createRef();
  const {data} = props
  const {buttonText} = data
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/Caffeine_Fix copy.png") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="title-uppercase text-center">Paper Kit</h1>
            <h3 className="text-center">Make your mark with a new design.</h3>
            <br />
            <Button
              className="btn-round"
              color="warning"
              href="https://apps.apple.com/app/id1501776587"
              size="lg"
            >
              {buttonText? buttonText : "Download it here"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPostHeader;
