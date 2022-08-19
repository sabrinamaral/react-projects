import React, { useState, useEffect, useCallback } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Title from "./components/Title";
import SlideCard from "./components/SlideCard";

function App() {
  // eslint-disable-next-line
  const [people, _setPeople] = useState(data);
  const [index, setIndex] = useState(2);
  const lastIndex = people.length - 1;

  const nextSlide = useCallback(() => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > lastIndex) {
        index = 0;
      }
      return index;
    });
  }, [lastIndex]);

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = lastIndex;
      }
      return index;
    });
  };

  useEffect(() => {
    let slideTimer = setInterval(() => {
      nextSlide();
    }, 3500);
    return () => clearInterval(slideTimer);
  }, [index, nextSlide]);

  return (
    <section className="section">
      <Title />
      <section className="section-center">
        {people.map((person, personIndex) => {
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <SlideCard key={person.id} person={person} position={position} />
          );
        })}
        <button className="prev" onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </section>
    </section>
  );
}

export default App;
