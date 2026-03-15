import React, { useState, useEffect } from 'react';
import img1 from '../img/mood1.png'
import img2 from '../img/mood2.JPG'
import img3 from '../img/mood3.JPG'

const MoodSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const moods = [
    {
      title: "Щасливий",
      desc: "Коли код компілюється з першого разу!",
      img: img2
    },
    {
      title: "Сумний",
      desc: "Шукаю загублену крапку з комою вже годину...",
      img: img1
    },
    {
      title: "Зараз",
      desc: "Стан: React-розробник у процесі створення шедевра.",
      img: img3
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % moods.length);
      }, 3000); 
      return () => clearInterval(interval);
    }
  }, [isPaused, moods.length]);

  return (
    <section className="mood-section">
      <h3 className="mood-title">Мій настрій</h3>
      
      <div 
        className="mood-slider"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {moods.map((mood, index) => (
          <div 
            key={index} 
            className={`mood-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={mood.img} alt={mood.title} className="mood-slide-img" />

            <div className="mood-overlay">
              <h4>{mood.title}</h4>
              <p>{mood.desc}</p>
            </div>
          </div>
        ))}

        <div className="slider-dots">
          {moods.map((_, i) => (
            <span 
              key={i} 
              className={`dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoodSection;