import React from "react";
import "../Components/ccss/Slideone.css"


const colors = [
    "https://iili.io/bTO1qP.md.png",
    "https://iili.io/bTOsQ2.md.png",
    "https://iili.io/DXjT4R.md.png",
    "https://iili.io/bTeMn2.md.png",
    "https://iili.io/bTecyG.md.png",
     "https://iili.io/DXwKPf.md.png",
      "https://iili.io/DXw7Kx.md.png"
    ];
const delay = 2500;

function Slidetwo() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {colors.map((backgroundColor, index) => (
          <img
            className="slide"
            key={index}
            src={backgroundColor}
            alt="err"
            onClick={() => {
                setIndex(index);
              }}
          />
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slidetwo;