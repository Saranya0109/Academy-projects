import React from "react";
import { Link } from "react-router-dom";

const internships = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "Work on both frontend and backend using React, Node.js, and MongoDB to build scalable web applications.",
    type: "Internship",
  },
  {
    id: "dataanalytics",
    title: "Data Analytics",
    description:
      "Analyze datasets, visualize insights, and assist in building machine learning models using Python and Power BI.",
    type: "Internship",
  },
  {
    id: "digitalmarketing",
    title: "Digital Marketing",
    description:
      "Plan and execute marketing strategies, manage social media campaigns, and optimize performance using analytics.",
    type: "Internship",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description:
      "Design beautiful, user-friendly interfaces using Figma and Adobe XD. Learn prototyping and user testing.",
    type: "Internship",
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    description:
      "Work on AI models and deep learning projects using Python, TensorFlow, and data preprocessing techniques.",
    type: "Internship",
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    description:
      "Learn about cloud architecture, deployments, and automation using AWS, Azure, and Docker.",
    type: "Internship",
  },
];

const Careers: React.FC = () => {
  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center py-24 px-6 
                   bg-[url('https://i.ibb.co/9kYR3MNv/Group-18-1-png.png')] 
                   bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-snug">
          More than training<br /> A journey toward success
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We know that finding a meaningful and rewarding career can be a long
          journey. Our goal is to make that process easy for you and to create a
          work environment that’s enriching—one that you’ll look forward to
          every day.
        </p>
        <a
          href="#openings"
          className="bg-blue-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          View Openings
        </a>
      </div>

      {/* Internship Openings Section */}
      <div id="openings" className="bg-gray-50 py-16 px-8">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Current Internship Openings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore exciting opportunities to gain real-world experience and
            kickstart your career with hands-on learning.
          </p>
        </div>

        {/* ✅ Entire Card Clickable */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {internships.map((internship) => (
            <Link
              key={internship.id}
              to={`/careers/${internship.id}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl border border-gray-100 
                         transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-semibold text-blue-700 mb-3 group-hover:text-blue-800">
                  {internship.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {internship.description}
                </p>
              </div>
              <div className="text-blue-600 font-medium group-hover:text-blue-800 transition-all">
                View Details 
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;