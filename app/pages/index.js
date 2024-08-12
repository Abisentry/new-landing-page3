import Image from "next/legacy/image";
import Link from 'next/link';
import React, { useState } from 'react';
import NewsletterForm from '../components/NewsletterForm'; // Adjust the path as needed
import Modal from '../components/Modal'; // Import the Modal component
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';


// Example assets import, replace with your actual paths
import assets from '../assets'; 
import TeamSection from '../components/TeamSection';



export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aboutGradient =
    "bg-gradient-to-r from-[#54F4FC] via-[#54F4FC] via-30% via-[#B4F3FF] via-75%  to-[#176DB4]";

  const cardGradient =
    "bg-gradient-to-r from-[#32333593] via-[#171717] via-30% via-[#171717] via-60% to-[#32333593]";

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <main className="relative">
      <Image
        src={assets.Ellips}
        alt=""
        className="absolute -top-60 right-10 hidden w-[60%] md:block"
      />

      {/* Hero */}
      <header className="md:flex px-5 sm:px-10 md:px-20 mb-20 md:mt-10">
        <div className="h-auto flex flex-col justify-end">
          <div className="flex">
            <div className="flex flex-col justify-center items-center">
              <Image src={assets.group} alt="" className="h-[80%]" />
            </div>
            <div className="text-3xl sm:text-7xl lg:text-7xl text-white h-auto w-auto">
              <h1 className="text-4xl sm:text-8xl lg:text-9xl">Your Digital</h1>
              <h1 className="text-4xl sm:text-8xl lg:text-9xl">Fortress |</h1>
              <h1 className="text-4xl sm:text-8xl lg:text-9xl">Guard</h1>
              <p className="text-sm sm:text-lg lg:text-xl">are on a quest to reinforce the digital world and guarantee the safety of our clients priceless assets, fueled by a passion for security, AI, and a team of highly skilled experts.</p>
            </div>
          </div>

          <Link
            href="/#"
            className="text-white md:ms-10 mb-5 md:mb-10 mt-5 md:mt-[5%] bg-gradient-to-r from-[#00A7D6] to-[#0A767B] w-48 px-4 py-2 rounded-lg"
          >
            Talk to Sales
          </Link>
        </div>
        <div className="relative">
          <Image
            src={assets.Ellips}
            alt=""
            className="absolute -top-20 right-0 md:hidden"
          />
          <Image src={assets.hero} alt="" />
        </div>
      </header>

      {/* About Us */}
      <section className="px-5 sm:px-10 md:px-20 mb-20">
        <div className="lg:flex justify-between">
          <div className="lg:w-[48%]">
            <Image src={assets.cyberSecurity} alt="cyber security" />
          </div>
          <div className="lg:w-[48%]">
            <h6 className="text-[#3ED5DD]">ABOUT US</h6>
            <h1 className="text-2xl lg:text-3xl xl:text-5xl text-white font-semibold mt-4">
              Discover Our Journey Protecting Your Digital World with Expertise and Care
            </h1>
            <p className="mt-4 text-lg lg:text-base xl:text-lg text-white">
              At <span className="text-[#3ED5DD]">Abisentry,</span> we&apos;re
              dedicated to protecting businesses and individuals from the
              ever-evolving threats in the digital landscape. With 5 years of
              experience in the cybersecurity industry, we have honed our
              expertise to deliver innovative solutions that safeguard your
              digital assets and maintain your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services */}
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

        <div className="px-5 sm:px-10 md:px-20">
          <div className="flex justify-center">
            <div className="flex justify-center flex-col lg:w-[70%] text-center">
              <h6 className="text-[#3ED5DD]">Our Service</h6>
              <h2 className="text-5xl text-white my-2">
                Protecting Your Digital Assets Expertly With AI
              </h2>
              <h5 className="text-white">
              </h5>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 mt-10 lg:mt-20">
            {/* Card Components */}
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
                  Cyber Security Assessment
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                </p>
              </div>
            </div>

            <div className="md:mt-10 lg:mt-0">
              <div className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white`}>
                <Image
                  src={assets.IconCyberSecurity2}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] absolute -top-[35px] w-[70px]"
                />
                <h4 className="text-center mt-10 text-3xl">
                  Intrusion Detection and Prevention
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                  There are people behind everything that works.
                </p>
              </div>
            </div>

            <div className="lg:mt-7 md:mt-10">
              <div className={`${cardGradient} border-[1px] border-[#3ED5DD] rounded-3xl relative h-auto flex flex-col justify-center items-center px-10 py-5 text-white`}>
                <Image
                  src={assets.IconCyberSecurity3}
                  alt=""
                  className="border-[#3ED5DD] border-[1px] rounded-full p-3 bg-[#191919] absolute -top-[35px] w-[70px]"
                />
                <h4 className="text-center mt-10 text-3xl">
                  Vulnerability Management
                </h4>
                <p className="text-center text-sm leading-7 mt-5">
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Button */}
      <section className="px-5 sm:px-10 md:px-20 mb-20">
        <div className="flex justify-center">
          <button
            onClick={handleOpenModal}
            className="bg-blue-500 text-white p-3 rounded-lg"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Modal with Contact Options */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="flex flex-col items-center">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 text-blue-500 hover:underline">
            <FaTwitter className="mr-2" /> X (Twitter)
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 text-blue-600 hover:underline">
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center mb-4 text-gray-800 hover:underline">
            <FaEnvelope className="mr-2" /> Email
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="flex items-center mb-4 text-blue-700 hover:underline">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </Modal>
    </main>
  );
}