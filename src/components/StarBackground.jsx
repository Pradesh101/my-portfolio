import { useEffect, useState } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  useEffect(() => {
    generateStars(), generateMeteors();
    const handleResize = () => {
      generateStars();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      const star = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1, // Size between 1 and 4
        opacity: Math.random() * 0.5 + 0.5, // Opacity between 0.5 and 1
        animationDuration: Math.random() * 4 + 2, // Duration between 2 and 6 seconds
      };
      newStars.push(star);
    }
    setStars(newStars);
  };
  const generateMeteors = () => {
    const numberOfMeteors = 4;

    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      const meteor = {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 20,
        size: Math.random() * 2 + 1, // Size between 1 and 3
        delay: Math.random() * 15, // Delay between 0 and 10 seconds
        animationDuration: Math.random() * 3 + 3, // Duration between 3 and 6 seconds
      };
      newMeteors.push(meteor);
    }
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star anim,ate-pulse-subtle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
