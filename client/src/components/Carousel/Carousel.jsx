import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Container,
  Row,
  Col
} from "reactstrap";
/* images */
import amsterdam from "imgs/amsterdam.jpg";
import barcelona from "imgs/barcelona.jpeg";
import berlin from "imgs/berlin.jpg";
import buenosAires from "imgs/buenos-aires.jpg";
import madrid from "imgs/madrid.jpg";
import newyork from "imgs/new-york.jpg";
import paris from "imgs/paris.jpg";
import rio from "imgs/rio.jpg";

const items = [
  [
    {
      src: amsterdam,
      alt: "amsterdam"
    },
    {
      src: barcelona,
      alt: "barcelona"
    },
    {
      src: berlin,
      alt: "berlin"
    },
    {
      src: buenosAires,
      alt: "buenos aires"
    }
  ],
  [
    {
      src: madrid,
      alt: "madrid"
    },
    {
      src: newyork,
      alt: "new york"
    },
    {
      src: paris,
      alt: "paris"
    },
    {
      src: rio,
      alt: "rio"
    }
  ]
];

const Example = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((g, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <Container>
          <Row>
            {g.map(image => {
              return (
                <Col
                  xs={{ size: 6 }}
                  key={image.alt}
                  style={{ maxHeight: "5rem" }}
                  className="p-1"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="img-fluid w-100 rounded"
                    style={{ height: "4rem" }}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items.map(group => ({ src: group[0].src }))}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default Example;
