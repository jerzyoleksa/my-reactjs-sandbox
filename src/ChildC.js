import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const ChildC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    'contact.jpg',
    'contact.jpg',
    'contact.jpg',
    'contact.jpg',
    'contact.jpg',
  ];

  const handleSwipe = (dir) => {
    if (dir === 'Left') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    } else if (dir === 'Right') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('Left'),
    onSwipedRight: () => handleSwipe('Right'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="swipe-container" {...swipeHandlers}>
      {photos.map((photo, index) => (
        <img 
          key={photo} 
          src={photo} 
          alt={`Photo ${index + 1}`}
          style={{ 
            display: index === currentIndex ? 'block' : 'none', 
            width: '100%',
            height: 'auto'
          }}
        />
      ))}
    </div>
  );
};

export default ChildC;