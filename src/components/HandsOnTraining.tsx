import React from 'react';
import './HandsOnTraining.css';
import trainingImage from '../assets/training-center.png';

// Font Awesome icons
import {
  FaCubes,
  FaProjectDiagram,
  FaChartLine,
  FaLayerGroup,
  FaCogs,
  FaNetworkWired,
} from 'react-icons/fa';

// Define a type for the feature object
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Define features array with the Feature type
const features: Feature[] = [
  {
    icon: <FaCubes />,
    title: 'Flexible Learning Paths',
    description: 'Structured modules designed for easy progression and skill scalability.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Customizable Learning Journey',
    description: 'From beginner to advanced — build knowledge step by step.',
  },
  {
    icon: <FaChartLine />,
    title: 'Scalable Skill Growth',
    description: 'Easy-to-follow instructions for seamless navigation & understanding.',
  },
  {
    icon: <FaLayerGroup />,
    title: 'Modular Curriculum Design',
    description: 'Learn through bite-sized modules that adapt to your pace.',
  },
  {
    icon: <FaCogs />,
    title: 'Future-Ready Structure',
    description: 'Courses designed to grow with evolving industry demands.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Variable Implemented',
    description: 'Integration of the most up-to-date variables for enhanced functionality.',
  },
];

const HandsOnTraining: React.FC = () => {
  return (
    <section className="training-container">
      <h2>Upskill Smoothly with Hands-On Training</h2>
      <p className="subtitle">
        Master industry-ready skills with hands-on projects, frameworks, and real-world tools.
      </p>

      <div className="training-grid">
        {/* Left 3 features */}
        <div className="training-column">
          {features.slice(0, 3).map((feature, idx) => (
            <div className={`training-card card-${idx + 1}`} key={idx}>
              <div className="icon">{feature.icon}</div>
              <div className="card-text">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="training-image">
          <img src={trainingImage} alt="Training Visual" />
        </div>

        {/* Right 3 features */}
        <div className="training-column">
          {features.slice(3).map((feature, idx) => (
            <div className={`training-card card-${idx + 4}`} key={idx + 3}>
              <div className="icon">{feature.icon}</div>
              <div className="card-text">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HandsOnTraining;
