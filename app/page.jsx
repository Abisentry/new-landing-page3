         'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Link from 'next/link';
import assets from "@/public/assets/assets";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
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
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#service">Services</a>
            </div>
            <div>
              <a href="#feature">Team</a>
            </div>
            <div>
              <a href="#testimonial">Products</a>
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
                  <h2>Fortress | Guard</h2>
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
        <section className="px-5 sm:px-10 md:px-20 mb-20">
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
                Abisentry's Advanced AI Driven Solutions effectively prevent breaches, fraud, and other cyber threats.
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
                Entensive Cybersecurity assessments{" "}
                </h4>

                <p className="text-center text-sm leading-7 mt-5">
                To provide in-depth analyses of clints current cybersecurity infrastructure, spotting flaws and offering practical advice to bolster their defenses
    
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
      <section className="overflow-auto">
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
              <h3 className="my-3">Operation Assistance</h3>
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
              <h1 className="mt-5 text-xl font-bold">Adebayo Okuyiga</h1>
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
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabiola.67244cb5.png&w=1920&q=75"
                alt="Abiola Shittu"
                width={180}
                height={180}
                className="bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]"
                layout="intrinsic" // Adjust layout according to need
              />
              <h1 className="mt-5 text-xl font-bold">Okafor Onyebuchi</h1>
              <h3 className="my-3">Front-End Developer</h3>
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
          </div>
        </div>
      </div>
    </section>
      {/* testimonial */}
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
              <p> Checkout our AI fortified products to protect your business.
                {" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.let} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product </h6>
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
              <p> Checkout our AI fortified products to protect your business.
                {" "}
              </p>
              <div className="flex items-center mt-3">
                <Image src={assets.let} alt="" width={70} height={70} />
                <div className="ms-3">
                  <h1 className="text-xl">Marianne Bode</h1>
                  <h6 className="my-1">Product Fight Fraud</h6>
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
            </div>
            <div className="bg-[#1f1e1eaf] z-20 p-4 text-white">
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
          <button type="submit" className="bg-[#3ED5DD] p-2 px-2 rounded-xl absolute right-4 top-2">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
  <div className="lg:grid lg:grid-cols-2 text-center text-white">
    <div className="md:flex justify-between">
      <div className="text-xl md:w-[50%] mt-4">
        <h1 className="text-2xl">Services</h1>
        <div className="mt-2 text-base lg:text-lg md:text-start text-gray-300">
          <p>End point protection</p>
          <p>Vulnerability Assessment</p>
          <p>Threat Intelligence</p>
          <p>Incident Response</p>
          <p>Compliance and Regulation</p>
          <p>Ethical Hacking</p>
        </div>
      </div>
    </div>
    <div className="md:flex justify-between">
      <div className="text-xl md:w-[50%] mt-4">
        <h1 className="text-2xl">Quick Links</h1>
        <ul className="mt-2 text-base lg:text-lg md:text-start lg:text-center text-gray-300">
          <li>Testimonial</li>
          <li>Our Service</li>
          <Link href="/security-policy"><li>Security Policy</li></Link>
          <Link href="/privacy-policy"> <li>Privacy Policy</li> </Link>
          <li>Blog</li>
          <li>Products</li>
        </ul>
      </div>

 

      <div className="text-2xl md:w-[50%] mt-4">
        <h3>Contact Us</h3>
        <div className="mt-4 flex justify-center md:justify-between text-gray-300">
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0" href="/#">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              className="text-2xl"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
          </a>
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0" href="/#">
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
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0" href="/#">
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
          <a className="border-[1px] border-gray-300 rounded-xl p-2 mx-6 md:mx-0"     href="https://calendly.com/abisentry/answer">
          
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
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
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
             Mail:@abisentechnologies.com|
             admin@abisentrytechnologies.com
            </a>
          </div>
          <div className="flex items-center mb-5">
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
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
              ></path>
              <circle cx="256" cy="192" r="48" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"></circle>
            </svg>
            <p className="ms-3 text-sm"></p>
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
