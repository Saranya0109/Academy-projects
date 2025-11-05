import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const courseData: Record<
  string,
  {
    title: string;
    about: string;
    responsibilities: string[];
    skills: string[];
    duration: string;
    location: string;
  }
> = {
  "full-stack-development": {
    title: "Full Stack Development Internship",
    about:
      "Gain hands-on experience in designing and developing scalable web applications using front-end and back-end technologies. Work with React, Node.js, and databases to deliver production-level solutions.",
    responsibilities: [
      "Develop responsive web interfaces using React.",
      "Build RESTful APIs with Node.js and Express.",
      "Integrate front-end and back-end for seamless performance.",
      "Collaborate with senior developers on live client projects.",
    ],
    skills: [
      "HTML, CSS, JavaScript",
      "React.js, Node.js",
      "Git, REST APIs",
      "Database Management",
    ],
    duration: "3 Months (On-site/Remote)",
    location: "Trichy / Chennai / Remote",
  },

  "data-analytics": {
    title: "Data Analytics Internship",
    about:
      "Work with real-world datasets, create visualizations, and build predictive models to extract meaningful insights. Learn to use tools like Python, Power BI, and SQL.",
    responsibilities: [
      "Collect, clean, and process raw data.",
      "Perform exploratory data analysis using Python libraries.",
      "Design dashboards in Power BI or Tableau.",
      "Collaborate with mentors to present insights effectively.",
    ],
    skills: [
      "Python, Pandas, NumPy",
      "Power BI / Tableau",
      "SQL",
      "Data Visualization",
    ],
    duration: "3 Months (Hybrid)",
    location: "Chennai / Remote",
  },

  "digital-marketing": {
    title: "Digital Marketing Internship",
    about:
      "Develop creative marketing campaigns across digital platforms. Gain practical exposure to SEO, social media management, and analytics tracking.",
    responsibilities: [
      "Plan and execute digital marketing campaigns.",
      "Manage social media content calendars.",
      "Monitor analytics to optimize ad performance.",
      "Assist in creating email and SEO strategies.",
    ],
    skills: [
      "SEO & SEM",
      "Google Analytics",
      "Content Marketing",
      "Social Media Advertising",
    ],
    duration: "2 Months (Remote)",
    location: "Remote",
  },

  "ui-ux-design": {
    title: "UI/UX Design Internship",
    about:
      "Learn the art of crafting intuitive user interfaces and seamless experiences. Work on real design projects using Figma and Adobe tools.",
    responsibilities: [
      "Design wireframes and prototypes.",
      "Conduct user research and usability testing.",
      "Collaborate with developers for design implementation.",
      "Create visually consistent UI components.",
    ],
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    duration: "3 Months (Hybrid)",
    location: "Trichy / Remote",
  },

  "ai-&-machine-learning": {
    title: "AI & Machine Learning Internship",
    about:
      "Explore AI model development and machine learning algorithm implementation. Work on predictive analytics and automation projects.",
    responsibilities: [
      "Preprocess and analyze datasets for training models.",
      "Implement ML algorithms using Python.",
      "Work on AI-based research or automation projects.",
      "Document results and performance metrics.",
    ],
    skills: [
      "Python",
      "TensorFlow / Scikit-learn",
      "Data Preprocessing",
      "Model Evaluation",
    ],
    duration: "4 Months (Remote)",
    location: "Chennai / Remote",
  },

  "cloud-computing": {
    title: "Cloud Computing Internship",
    about:
      "Learn how to deploy and manage scalable applications on cloud platforms. Gain exposure to AWS, Azure, and DevOps practices.",
    responsibilities: [
      "Work on cloud deployment pipelines.",
      "Monitor and maintain application uptime.",
      "Implement security and scalability best practices.",
      "Assist in automation and CI/CD processes.",
    ],
    skills: [
      "AWS / Azure",
      "Docker, Kubernetes",
      "CI/CD Tools",
      "Linux, Networking Basics",
    ],
    duration: "3 Months (On-site)",
    location: "Trichy / Chennai",
  },
};

// URL mapping
const slugMap: Record<string, string> = {
  fullstack: "full-stack-development",
  dataanalytics: "data-analytics",
  digitalmarketing: "digital-marketing",
  uiux: "ui-ux-design",
  aiml: "ai-&-machine-learning",
  cloud: "cloud-computing",
};

const CourseDetails: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const mappedKey = slugMap[courseId || ""] || courseId || "";
  const course = courseData[mappedKey] || courseData[courseId || ""];

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-3xl font-bold mb-4 text-red-600">
          Internship Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The internship you are looking for does not exist or has been closed.
        </p>
        <Link
          to="/careers"
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
        >
          Back to Careers
        </Link>
      </div>
    );
  }

  const handleApplyClick = () => {
    navigate("/apply", { state: { course } });
  };

  return (
    <section className="min-h-screen bg-white pt-10 pb-20 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-gray-500 mb-1">
            VDart Academy | {course.duration}
          </h3>
          <h1 className="text-4xl font-bold text-red-700 mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-8 max-w-3xl mx-auto">{course.about}</p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={handleApplyClick}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              I’m Interested
            </button>
            <a
              href={`mailto:info@vdartacademy.com?subject=Enquiry about ${course.title}`}
              className="border border-gray-400 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Share via Email
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 text-2xl text-gray-600">
            <a
              href="https://www.linkedin.com/company/vdartacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/vdartacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@vdartacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/vdartacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Job Description
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
              {course.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-3">Skills Required</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {course.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={handleApplyClick}
                className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
              >
                I’m Interested
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-red-600">
              Internship Information
            </h3>
            <p className="text-gray-700 mb-2">
              <strong>Location:</strong> {course.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Duration:</strong> {course.duration}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Category:</strong> Technology
            </p>
            <p className="text-gray-700">
              <strong>Type:</strong> Internship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;
