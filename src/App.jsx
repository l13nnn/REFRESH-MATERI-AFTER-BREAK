import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.css';

function App() {

  useEffect(() => {
    gsap.fromTo(".square", 
      { x: -200, opacity: 0 }, 
      { x: 200, opacity: 1, duration: 2, ease: "power2.inOut" }
    );

    const timeline = gsap.timeline({ repeat: 1, repeatDelay: 1 });
      timeline
      .to(".circle", { x: 300, scale: 1.5, duration: 1, ease: "back.out(2)" })
      .to(".triangle", { rotation: 360, duration: 1, delay: 0.5, ease: "elastic.out(1, 0.3)" });

      gsap.from(".dot", {
        y: -100,
        opacity: 0,
        stagger: { amount: 1, from: "center" },
        duration: 1,
        ease: "bounce.out"
      });
  }, []);

  return (
    <>
      <div className="container">
      <div className="square"></div>
      <div className="circle"></div>
      <div className="triangle"></div>
      <div className="dots">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="dot"></div>
        ))}
      </div>
    </div>
    </>
  )
}

export default App;