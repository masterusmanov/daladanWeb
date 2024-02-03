import React, { useState } from 'react';
import caruselimage from '../../assets/images/swape/swaperphoto.png'
import swape from '../../assets/images/swape/swape.png'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    caruselimage,
    swape
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto carousel relative mt-[40px]">
      <div className='absolute w-full px-'>
        <div className='flex w-[90%] mx-auto items-center justify-between my-[80px]'>
            <button onClick={prevSlide}><i className='bx bxs-chevron-left text-[20px] p-1 bg-white rounded-full'></i></button>
            <button onClick={nextSlide}><i className='bx bxs-chevron-right text-[20px] p-1 bg-white rounded-full'></i></button>
        </div>
      </div>
      <img
        src={images[currentSlide]}
        alt={`image ${currentSlide + 1}`}
        className="carousel-image w-full h-[200px] rounded-[16px] object-cover px-1"
      />
    </div>
  );
}

export default Carousel;