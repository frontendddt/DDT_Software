import React, { useEffect, useState } from "react";
import "../../assest/css/carousel.css";
import { BiChevronsRight, BiChevronsLeft } from "react-icons/bi";
const NewCarousel = (props) =>
{
    var { children, show } = props;

    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children && children.length);
    const [touchPosition, setTouchPosition] = useState(null);
    useEffect(() =>
    {
        setLength(children && children.length);
        function handleWindowResize()

        {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize);

        return () =>
        {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [children]);

    const next = () =>
    {
        if (currentIndex < length - show)
        {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () =>
    {
        if (currentIndex > 0)
        {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const handleTouchStart = (e) =>
    {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    };

    const handleTouchMove = (e) =>
    {
        const touchDown = touchPosition;

        if (touchDown === null)
        {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 5)
        {
            next();
        }

        if (diff < -5)
        {
            prev();
        }

        setTouchPosition(null);
    };

    var carouselCountDisplay;

    if (windowSize.innerWidth <= 1100 && windowSize.innerWidth > 991)
    {
        show = 3;
        carouselCountDisplay = `show-${show}`;
    } else if (windowSize.innerWidth <= 991 && windowSize.innerWidth > 767)
    {
        show = 2;
        carouselCountDisplay = `show-${show}`;
    } else if (windowSize.innerWidth <= 767 && windowSize.innerWidth > 0)
    {
        show = 1;
        carouselCountDisplay = `show-${show}`;
    }
    else
    {
        carouselCountDisplay = `show-${show}`;
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {currentIndex > 0 && (
                    <button onClick={prev} className="left-arrow">
                       <BiChevronsLeft />
                    </button>
                )}
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content ${carouselCountDisplay}`}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / show)}%)`
                        }}
                    >
                        {children}

                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {currentIndex < length - show && (
                    <button onClick={next} className="right-arrow">
                        <BiChevronsRight/>
                    </button>
                )}
            </div>
        </div>
    );
};

export default NewCarousel;

export function getWindowSize()
{
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}
