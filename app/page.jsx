         'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';
import assets from "@/public/assets/assets";
import Image from 'next/image';
import Head from 'next/head';
import { useState, useEffect } from 'react';




export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (e) => {
    // Prevents the default mailto link from opening immediately
    e.preventDefault();

    // Show the popup
    setShowPopup(true);

    // Wait for a moment, then proceed with the mailto link
   
  };


  const aboutGradient =
    "bg-gradient-to-r from-[#54F4FC] via-[#54F4FC] via-30% via-[#B4F3FF] via-75% to-[#176DB4]";

  const cardGradient =
    "bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]";

  return (

    <main className="relative">
      <Image
        src={assets.Ellips}
        alt=""
        className="absolute -top-60 right-10 hidden w-[60%] md:block"
        fill // Replaces layout="fill"
        style={{ objectFit: "cover" }} // Replaces objectFit="cover"
      />

      {/* Hero */}
      <div className="bg-[#323335ad] fixed top-0 left-0 right-0 z-50">
        <nav className="flex justify-between items-center py-5 px-10">
          <div className="hidden md:block">
            <Image
              alt="Brand Name"
              loading="lazy"
              width="158"
              height="36"
              src="/_next/static/media/AbiSentry.50063ab7.png"
            />
          </div>
          <div className="hidden md:flex justify-between items-center text-[#FFFFFF] w-[50%] bg-[#57565aaf] rounded-full p-4">
  <div>
    <a href="#home">Home</a>
  </div>
  <div>
    <a href="#About Us">About Us</a>
  </div>
  <div>
    <a href="#Our Services">Services</a>
  </div>
  <div>
    <a href="#Our Team">Team</a>
  </div>
  <div>
    <a href="#Our Product">Products</a>
  </div>
</div>

          <a href="#home">
            <Image
              alt="Brand Image"
              loading="lazy"
              width="64"
              height="66"
              src="/_next/static/media/abisentry.1e2e2452.webp"
            />
          </a>
          <div className="md:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-white text-5xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Menu_Fries">
                <path d="M20.437,19.937c0.276,0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.002c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.002Z"></path>
                <path d="M20.437,11.5c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-10,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l10,-0.001Z"></path>
                <path d="M20.437,3.062c0.276,-0 0.5,0.224 0.5,0.5c0,0.276 -0.224,0.5 -0.5,0.5l-16.874,0.001c-0.276,-0 -0.5,-0.224 -0.5,-0.5c-0,-0.276 0.224,-0.5 0.5,-0.5l16.874,-0.001Z"></path>
              </g>
            </svg>
          </div>
        </nav>
        <div className="bg-black flex flex-col text-xl text-white justify-center items-center"></div>
      </div>
      <main className="relative scroll-smooth">
        <Image
          alt=""
          loading="lazy"
          width="1189"
          height="1189"
          className="absolute -top-40 right-10 hidden w-[60%] md:block"
          src="/_next/static/media/Ellipsefull.804e61a8.png"
        />
        <header id="home">
          <div className="md:flex px-5 sm:px-10 md:px-20 pt-40 md:pt-52">
            <div className="h-auto flex flex-col justify-end md:w-[60%]">
              <div className="flex">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    alt=""
                    loading="lazy"
                    width="41"
                    height="171"
                    className="h-[80%]"
                    src="/_next/static/media/Group.a9761e72.png"
                  />
                </div>
                <div className="text-5xl lg:text-6xl text-white h-auto w-auto font-extrabold">
                  <h2>Your Digital</h2>
                  <h2>Fortress | Guarded By Abisentry</h2>
                  <p className="text-xs lg:text-base mt-4 font-medium">
                    We are on quest to reinforce the digital world and guarantee the safety of our clients priceless assets, and we are fueled by a passion for security, AI, and a team of highly skilled experts.
                  </p>
                </div>
              </div>
              <a
                className="text-white md:ms-10 mb-5 md:mb-10 mt-5 md:mt-[5%] bg-gradient-to-r from-[#00A7D6] to-[#0A767B] w-48 px-4 py-2 rounded-lg"
                href="https://calendly.com/abisentry/answer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in Touch
              </a>
            </div>
            <div className="relative md:w-[40%]">
              <Image
                alt=""
                loading="lazy"
                width="1189"
                height="1189"
                className="absolute -top-20 right-0 md:hidden"
                src="/_next/static/media/Ellipsefull.804e61a8.png"
              />
              <Image
                alt=""
                loading="lazy"
                width="530"
                height="530"
                className="w-[500px]"
                src="/_next/static/media/heroImage.e4faeb64.png"
              />
            </div>
          </div>
        </header>

        {/* About Us */}
        <section id="About Us"className="px-5 sm:px-10 md:px-20 mb-20">
          <div className="lg:flex justify-between">
            <div className="lg:w-[48%]">
              <Image src={assets.cyberSecurity} alt="cyber security" />
            </div>
            <div className="lg:w-[48%]">
              <h6 className="text-[#3ED5DD]">OUR QUEST</h6>
              <h1 className="text-2xl lg:text-3xl xl:text-5xl text-white font-semibold mt-4">
                Advanced AI Driven Solutions
              </h1>
              <p className="mt-4 text-lg lg:text-base xl:text-lg text-white">
                Abisentry Advanced AI Driven Solutions effectively prevent breaches, fraud, and other cyber threats.
              </p>
            </div>
          </div>
        {/* <div className="flex justify-center mt-10 ">
          <div
            className={`${aboutGradient} w-[100%] rounded-2xl px-9 py-3 flex justify-between items-center`}
          >
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-extrabold">5+</h1>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-extrabold">100+</h1>
              <p className="text-lg">Satisfied customers</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-extrabold">99%</h1>
              <p className="text-lg">Cybersecurity guarantee</p>
            </div>
          </div>
        </div> */}
      </section>

      {/* Our sercices */}
      <section id="Our Services" className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">Our Service</h6>
              <h2 className="text-5xl text-white my-2">
                Protecting Your Digital Assets Expertly With Ai
              </h2>
              <h5 className="text-white">
              </h5>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-20">
            <div className="lg:mt-5 md:mt-10">
              <div
                className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white`}
              >
                <Image
                  src={assets.IconCyberSecurity}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#0A767B] absolute -top-[35px] w-[70px]"
                />

                <h4 className="text-center mt-10 text-3xl">
                Extensive Cybersecurity assessments{" "}
                </h4>

                <p className="text-center text-sm leading-7 mt-5">
                To provide in-depth analyses of clients current cybersecurity infrastructure, spotting flaws and offering practical advice to bolster their defenses
    
                  {" "}
                </p>
              </div>
            </div>

            <div className="md:mt-10 lg:mt-0">
              <div className=" bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593] border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white">
                <Image
                  src={assets.IconCyberSecurity2}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] absolute -top-[35px] w-[70px]"
                />

                <h4 className="text-center mt-10 text-3xl">
                Network Security Solutions
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls
                </p>
              </div>
            </div>

            <div className=" lg:mt-7 md:mt-10">
              <div className=" bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593] border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white">
                <Image
                  src={assets.IconCyberSecurity3}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] absolute -top-[35px] w-[70px]"
                />

                <h4 className="text-center mt-10 text-3xl">
                Data Encryption Services
                {" "}
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide end-to-end encryption solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.
                {" "}
                </p>
              </div>
            </div>
          </div>
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
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>
      </section>

      {/* Future point 
      <section className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[350px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20 mt-20">
        <div className="flex justify-center">

            <div className="lg:w-[47%] z-30">
              </div>
              
            <div className="lg:w-[50%] mt-10 lg:mt-0">
              <h6 className="text-[#3ED5DD]">Our Team</h6>
              <h2 className="text-5xl text-white my-2">
                Leadership Team 
              </h2>
              <p className="mt-4 text-lg lg:text-base xl:text-lg text-white">
              There are people behind everything that works.{" "}
              </p>

              <div className="flex justify-center flex-col lg:w-[70%] text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                    There are people behind everything that works.{" "}
                    </p>
                  </div>
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                    There are people behind everything that works.{" "}
                    </p>
                  </div>
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                    There are people behind everything that works.{" "}
                    </p>
                  </div>
                  <div
                    className={`${cardGradient} rounded-3xl px-7 py-4 h-auto items-center  text-white`}
                  >
                    <Image src={assets.Customize} alt="" />
                    <h3 className="text-2xl my-2">
                      Customized Security Solutions
                    </h3>
                    <p className="text-base">
                    There are people behind everything that works. {" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>
      </section>

      {/* Our goal */}
      {/* Pricing table */}
      <section id="Our Team" className="overflow-auto">
      <div className="relative">
        <Image
          src={assets.EllipsBg}
          alt="Background Ellipse"
          className="absolute -top-[350px] -right-[340px] w-[50%]"
          layout="fill" // If you want it to fill the parent element
          objectFit="cover" // Ensures image covers the area while preserving aspect ratio
        />
        <Image
          src={assets.Vector}
          alt="Vector Illustration"
          className="absolute -top-[350px] -right-[180px] w-[400px]"
          layout="fixed" // Fixed layout if size is fixed
        />
      </div>
      <div className=" px-5 sm:px-10 md:px-20 mt-20 pt-20">
        <div className="flex justify-center">
          <div className="flex flex-col lg:w-[70%] text-center">
            <h6 className="text-[#3ED5DD]">OUR TEAM</h6>
            <h2 className="lg:text-5xl md:text-3xl text-2xl text-white my-2">
              Leadership Team
            </h2>
            <h5 className="text-white text-base">
             There are people behind everything that works
            </h5>
          </div>
        </div>
        <div className="">
          <div className="flex mt-10 w-[1800px] mb-5">
            <div className="flex items-center flex-col justify-center w-[50%] text-white">
              <Image
                src="/assets/pix2.png"
                alt="Abiola Shittu"
                width={180}
                height={180}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]"
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Abiola Shittu</h1>
              <h3 className="my-3">Founder</h3>
              <div className="flex">
                <a className="border-[1px] border-white rounded-md p-2" href="#/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center flex-col justify-center w-[50%] text-white">
              <Image
                src="/assets/pix4.png"
                alt="Abiola Shittu"
                width={140}
                height={140}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593] "
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Ganiyu Precious</h1>
              <h3 className="my-3">Operation Assistant</h3>
              <div className="flex">
                <a className="border-[1px] border-white rounded-md p-2" href="#/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                  </svg>
                </a>
                </div>
                </div>
                <div className="flex items-center flex-col justify-center w-[50%] text-white">
              <Image
                src="/assets/pix3.png"
                alt="Abiola Shittu"
                width={140}
                height={140}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]"
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Adedayo Okuyiga</h1>
              <h3 className="my-3">App Developer</h3>
              <div className="flex">
                <a className="border-[1px] border-white rounded-md p-2" href="#/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                  </svg>
                </a>
                </div>
                </div>
                <div className="flex items-center flex-col justify-center w-[50%] text-white">
              <Image
                src="/assets/pix1.png"
                alt="Abiola Shittu"
                width={180}
                height={180}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]"
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Afolabi Shittu</h1>
              <h3 className="my-3">Creative Designer</h3>
              <div className="flex">
                <a className="border-[1px] border-white rounded-md p-2" href="#/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                  </svg>
                </a>
                </div>
                </div>
                <div className="flex items-center flex-col justify-center w-[50%] text-white">
              <Image
                src="/assets/pix5.png"
                alt="Abiola Shittu"
                width={140}
                height={140}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]"
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Mohamed Amine</h1>
              <h3 className="my-3">Cybersecurity Analyst</h3>
              <div className="flex">
                <a className="border-[1px] border-white rounded-md p-2" href="#/">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 32 32"
                    className="text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
                  </svg>
                </a>
                </div>
                </div>
                <div className="flex items-center flex-col justify-center w-[50%] text-white">
              <Image
                src="/assets/me.png"
                alt=""
                width={180}
                height={180}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]"
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Okafor Onyebuchi</h1>
              <h3 className="my-3">Front-End Developer</h3>
              <div className="flex">
              <a className="border-[1px] border-white rounded-md p-2" href="https://www.linkedin.com/in/onyebuchi-okafor-485628243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <svg
           stroke="currentColor"
           fill="currentColor"
           strokeWidth="0"
            viewBox="0 0 32 32"
            className="text-2xl"
            height="1em"
           width="1em"
           xmlns="http://www.w3.org/2000/svg"
           >
         <path d="M 8.6425781 4 C 7.1835781 4 6 5.181625 6 6.640625 C 6 8.099625 7.182625 9.3085938 8.640625 9.3085938 C 10.098625 9.3085938 11.283203 8.099625 11.283203 6.640625 C 11.283203 5.182625 10.101578 4 8.6425781 4 z M 21.535156 11 C 19.316156 11 18.0465 12.160453 17.4375 13.314453 L 17.373047 13.314453 L 17.373047 11.310547 L 13 11.310547 L 13 26 L 17.556641 26 L 17.556641 18.728516 C 17.556641 16.812516 17.701266 14.960938 20.072266 14.960938 C 22.409266 14.960937 22.443359 17.145609 22.443359 18.849609 L 22.443359 26 L 26.994141 26 L 27 26 L 27 17.931641 C 27 13.983641 26.151156 11 21.535156 11 z M 6.3632812 11.310547 L 6.3632812 26 L 10.923828 26 L 10.923828 11.310547 L 6.3632812 11.310547 z"></path>
        </svg>
          </a>

                </div>
                </div>
          </div>
        </div>
      </div>
    </section>
      {/* testimonial */}
      <section id="Our Product" className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -top-[350px] -right-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector}
            alt=""
            className="w-[400px] absolute -top-[350px] -right-[180px] "
          />
        </div>

        <div className="px-5 sm:px-10 md:px-20 mt-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">OUR PRODUCT</h6>
              <h2 className="text-5xl text-white my-2">
              Checkout our Ai fortified products to protect your business 
              </h2>
              <h5 className="text-white">
              
              </h5>
            </div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 z-20">
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p> Checkout our AI Fortified Products to Protect your Business.
                {" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.let} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Abi Save</h1>
                  <h6 className="my-1">Get Started </h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p> Checkout our AI Fortified Products to Protect your Business.
                {" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.let} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Chase Fraud</h1>
                  <h6 className="my-1">Get Started</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
              Checkout our AI fortified products to protect your business.{" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.let } alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p> Checkout our AI fortified products to protect your business.
                 {" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.let} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Intranet Agent</h6>
                  <div className="flex">
                    <Image src={assets.Star} alt="" width={20} />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                    <Image
                      src={assets.Star}
                      alt=""
                      width={20}
                      className="ms-1"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
            
          
             <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
              <p>
              Checkout our AI fortified products to protect your business.{" "}
              </p>
        <div className="flex items-center mt-3">
       <Image src={assets.let} alt="" width={70} height={70} />
  <div className="ms-3">
    <h1 className="text-xl">Abi Mirrow</h1>
    <Link href="https://abi-mirror-a1im-nhsnu6him-abisentry-techs-projects.vercel.app/">
      <h6 className="my-1 cursor-pointer text-white hover:underline">Get Started</h6>
    </Link>
    <div className="flex">
      <Image src={assets.Star} alt="" width={20} />
      <Image src={assets.Star} alt="" width={20} className="ms-1" />
      <Image src={assets.Star} alt="" width={20} className="ms-1" />
      <Image src={assets.Star} alt="" width={20} className="ms-1" />
      <Image src={assets.Star} alt="" width={20} className="ms-1" />
    </div>
  </div>
</div>
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
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>
      </section>

      {/* Footer */}
      <section className="overflow-y-hidden overflow-hidden">
        <div className="relative">
          <Image
            src={assets.EllipsBg}
            alt=""
            className="absolute -bottom-[350px] -left-[340px] w-[50%]"
          />
          <Image
            src={assets.Vector2}
            alt=""
            className="w-[400px] absolute -bottom-[250px] -left-[180px] "
          />
        </div>
        <div className="px-5 sm:px-10 md:px-20 py-10 mt-10">
  <div className="md:flex justify-between items-start mb-7">
  <div className="flex items-center">
  <Image
    src="/assets/kit.png" // Ensure the correct path based on your project's structure
    alt=""
    width={290} // Replace style with width and height props
    height={156}
    loading="lazy"
    decoding="async"
    style={{ color: 'transparent' }}
  />
  <h3 className="text-white text-4xl ms-5">
    {/* Add content here if needed */}
  </h3>
</div>

    <div className="md:w-[60%] text-white mt-5 md:mt-0">
      <h3 className="text-2xl mb-5">Newsletter</h3>
      <form action="">
        <div className="flex relative">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[100%] text-xl text-black bg-white py-4 px-4 rounded-2xl outline-none"
          />
           <button
        type="button"
        className="bg-[#3ED5DD] p-2 px-2 rounded-xl absolute right-4 top-2"
        onClick={handleClick}
      >
        Subscribe
      </button>

      {showPopup && (
        <div className="absolute right-4 top-16 bg-black p-4 rounded-lg shadow-lg">
          <p>Thank you for subscribing!</p>
        </div>
      )}
        </div>
      </form>
    </div>
  </div>
  <div className="lg:grid lg:grid-cols-2 text-center text-white">
    <div className="md:flex justify-between">
      <div className="text-xl md:w-[50%] mt-4">
        <h1 className="text-2xl">Services</h1>
        <div className="mt-2 text-base lg:text-lg md:text-start text-gray-300 ml-10">
          <p>End Point Protection</p>
          <p>Vulnerability Assessment</p>
          <p>Threat Intelligence</p>
          <p>Incident Response</p>
          <p>Compliance and Regulation</p>
          <p>Ethical Hacking</p>
        </div>
      </div>
    </div>
    <div className="md:flex justify-between">
      <div className="text-xl md:w-[50%] mt-4 -ml-40">
        <h1 className="text-2xl">Quick Links</h1>
        <ul className="mt-2 text-base lg:text-lg md:text-start lg:text-center text-gray-300">
          <li> <a href="#About Us">About Us</a></li>
          <li><a href="#Our Service">Our Service</a></li>
          <Link href="/security-policy"><li>Security Policy</li></Link>
          <Link href="/privacy-policy"> <li>Privacy Policy</li> </Link>
          <li><a href="#Our Team">Our Team </a></li>
          <li> <a href="#Our Product">Products</a></li>
        </ul>
      </div>

 

      <div className="text-2xl md:w-[50%] mt-2 mr-20">
        <h3>Contact Us</h3>
        <div className="mt-4 flex justify-center md:justify-between text-gray-300">
          
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0" href="https://www.facebook.com/Abisentry?mibextid=ZbWKwL">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0" href="https://x.com/abisentry?t=RIQSBT-Z3UAqsjyT4wVgsw&s=09">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </a>
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0" href="https://www.linkedin.com/company/abisentry-technologies/">
       <svg
       stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 448 512"
    className="text-2xl"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M100.28 448H7.4V149.48h92.88zm-46.44-338a53.33 53.33 0 1 1 53.33-53.33 53.34 53.34 0 0 1-53.33 53.33zm384 338h-92.68v-196c0-46.72-16.77-78.62-58.54-78.62-31.93 0-50.88 21.48-59.22 42.2-3.04 7.43-3.8 17.82-3.8 28.25v204.21h-92.68V149.48h92.68v40.8c12.28-18.91 34.22-45.86 83.33-45.86 60.85 0 106.47 39.76 106.47 125.21z"></path>
  </svg>
</a>

        </div>
        <div className="flex justify-center items-center md:justify-start md:items-start flex-col">
          <div className="flex items-center my-5">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <a className="ms-3 text-sm text-gray-300" href="mailto:abbisentry03@gmail.com">
             Mail:admin@abisentrytechnologies.com
            </a>
          </div>
          <div className="flex items-center">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a className="ms-3 text-sm text-gray-300" href="mailto:abbisentry03@gmail.com">
            +234 907 418 3753
            </a>
            <p className="ms-3 text-sm"></p>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    </main>
    </main>
  
  
  );

 
}
