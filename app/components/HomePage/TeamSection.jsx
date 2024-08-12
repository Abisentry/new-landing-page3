// components/TeamSection.jsx

import React from 'react';
import Image from "next/legacy/image";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const assets = {
  EllipsBg: '/assets/EllipsBg.png', // example path
  Vector: '/assets/Vector.png', // example path
  Vector2: '/assets/Vector2.png', // example path
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const TeamSection = () => (
  <section className="overflow-y-hidden overflow-hidden">
    <div className="relative">
      <Image
        src={assets.EllipsBg}
        alt=""
        className="absolute -top-[350px] -right-[340px] w-[50%]"
      />
      <Image
        src={assets.Vector}
        alt=""
        className="w-[400px] absolute -top-[350px] -right-[180px]"
      />
    </div>

    <div className="px-5 sm:px-10 md:px-20 mt-20">
      <div className="flex justify-center">
        <div className="flex justify-center flex-col lg:w-[70%] text-center">
          <h6 className="text-[#3ED5DD]">OUR TEAM</h6>
          <h2 className="text-5xl text-white my-2">Leadership Team</h2>
          <h5 className="text-white">There are people behind everything that works.</h5>
        </div>
      </div>

      <Slider {...settings} className="mt-10">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="px-4">
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl px-7 py-4 h-auto text-white w-[300px] mx-auto z-20">
              <h4 className="text-center mt-10 text-3xl">Cyber security Assessment</h4>
              <p className="text-center text-sm leading-7 mt-5">
                Protect your devices and networks from malware, ransomware, and
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    <div className="relative">
      <Image
        src={assets.EllipsBg}
        alt=""
        className="absolute -bottom-[400px] -left-[340px] w-[50%]"
      />
      <Image
        src={assets.Vector2}
        alt=""
        className="w-[400px] absolute -bottom-[250px] -left-[180px]"
      />
    </div>
  </section>
);

export default TeamSection;
