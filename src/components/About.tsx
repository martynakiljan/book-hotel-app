/** @format */

import React from "react";
import img1 from "../assets/team-images/team1.jpg";
import img2 from "../assets/team-images/team2.jpg";
import img3 from "../assets/team-images/team3.jpg";
import Info from "./Info";

const About = () => {
  return (
    <>
      <div className="py-16 mt-16 container mx-auto mt-auto mb-auto h-full p-4">
        <h3 className="text-3xl font-bold dark:text-white">About us</h3>
        <p className="my-4 text-lg">
          Welcome to BookHotel, your go-to destination for finding the perfect
          accommodations around the world. Similar to booking.com, our platform
          allows you to search for hotels in various countries, ensuring you
          find the best prices guaranteed.
        </p>
        <h3 className="text-3xl font-bold dark:text-white my-4">Our Team</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-col items-center sm:flex-row mt-10">
            <img
              className="w-60 h-50 rounded-full mb-4 sm:mr-4 sm:mb-0 sm:mt-0"
              src={img1}
              alt="John Doe"
            />
            <div className="sm:w-2/3 mt-10 pl-20">
              <h2 className="text-2xl font-bold dark:text-white">John Doe</h2>
              <p className="text-lg font-normal dark:text-gray-400">
                Co-Founder and CEO
              </p>
              <p className="text-lg font-normal dark:text-gray-400">
                John is a visionary leader with a passion for travel and
                technology. With years of experience in the hospitality
                industry, he brings strategic direction to the company, ensuring
                that BookHotel remains at the forefront of innovation.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row mt-10">
            <img
              className="w-60 h-50 rounded-full mb-4 sm:mr-4 sm:mb-0 sm:mt-0"
              src={img2}
              alt="Kate Smith"
            />
            <div className="sm:w-2/3 mt-10 pl-20">
              <h2 className="text-2xl font-bold dark:text-white">Kate Smith</h2>
              <p className="text-lg font-normal dark:text-gray-400">
                Head of Operations
              </p>
              <p className="text-lg font-normal dark:text-gray-400">
                Kate is a meticulous organizer and problem-solver. Her attention
                to detail ensures that every aspect of our operations runs
                smoothly, from customer service to supplier management. With her
                dedication, BookHotel delivers exceptional service to every
                user.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row mt-10">
            <img
              className="w-60 h-50 rounded-full mb-4 sm:mr-4 sm:mb-0 sm:mt-0"
              src={img3}
              alt="Michael Johnson"
            />
            <div className="sm:w-2/3 mt-10 pl-20">
              <h2 className="text-2xl font-bold dark:text-white">
                Michael Johnson
              </h2>
              <p className="text-lg font-normal dark:text-gray-400">
                Lead Developer
              </p>
              <p className="text-lg font-normal dark:text-gray-400">
                Michael is a creative and talented developer with a knack for
                turning ideas into reality. His expertise in coding and software
                development drives the continuous improvement of our platform,
                making it more user-friendly and efficient with each update.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Info />
    </>
  );
};

export default About;
