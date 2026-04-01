import { useEffect, useRef, useState } from "react";

import foodAi1 from "../assets/projects/food-ai-1.png";
import foodAi2 from "../assets/projects/food-ai-2.png";
import foodAi3 from "../assets/projects/food-ai-3.png";

import faceSecurity1 from "../assets/projects/face-security-1.png";
import faceSecurity2 from "../assets/projects/face-security-2.png";
import faceSecurity3 from "../assets/projects/face-security-3.png";

import gestureControl1 from "../assets/projects/gesture-control-1.png";
import gestureControl2 from "../assets/projects/gesture-control-2.png";
import gestureControl3 from "../assets/projects/gesture-control-3.png";

import employeeManagement1 from "../assets/projects/employee-management-1.png";
import employeeManagement2 from "../assets/projects/employee-management-2.png";
import employeeManagement3 from "../assets/projects/employee-management-3.png";

import shoppingWebsite1 from "../assets/projects/shopping-website-1.png";
import shoppingWebsite2 from "../assets/projects/shopping-website-2.png";
import shoppingWebsite3 from "../assets/projects/shopping-website-3.png";

import boxTouchGame1 from "../assets/projects/box-touch-game-1.png";
import boxTouchGame2 from "../assets/projects/box-touch-game-2.png";
import boxTouchGame3 from "../assets/projects/box-touch-game-3.png";

const projectList = [
  {
    title: "AI Food Recommendation System",
    images: [foodAi1, foodAi2, foodAi3],
    shortDescription:
      "Developed a machine learning-based recommendation system that suggests food items based on user preferences and behavior.",
    fullDescription:
      "This project focuses on building a personalized recommendation system using machine learning concepts. It analyzes user preferences, behavior patterns, and food interests to suggest suitable food items. The project demonstrates recommendation flow, dashboard presentation, and practical AI-based decision support for users.",
    tech: ["Python", "Machine Learning"]
  },
  {
    title: "Face Recognition Security System",
    images: [faceSecurity1, faceSecurity2, faceSecurity3],
    shortDescription:
      "Built a face recognition system using Python and OpenCV to classify known and unknown persons with an alert trigger mechanism.",
    fullDescription:
      "This project is a computer vision-based security system that identifies faces in real time. It can distinguish known and unknown persons and trigger alerts based on recognition results. It demonstrates OpenCV integration, security automation logic, and practical use of face recognition workflows.",
    tech: ["Python", "OpenCV", "Face Recognition"]
  },
  {
    title: "Hand Gesture Controlled System",
    images: [gestureControl1, gestureControl2, gestureControl3],
    shortDescription:
      "Implemented a computer vision-based hand gesture control system using OpenCV for real-time hand tracking and command mapping.",
    fullDescription:
      "This project uses real-time video input to identify hand gestures and map them to system commands. It demonstrates hand landmark processing, gesture recognition, and smart interaction. It is useful for touchless control applications and AI-based human-computer interaction systems.",
    tech: ["Python", "OpenCV", "Computer Vision"]
  },
  {
    title: "Employee Management System",
    images: [employeeManagement1, employeeManagement2, employeeManagement3],
    shortDescription:
      "Developed a CRUD-based web application using React.js with responsive UI, state handling, and form-based interactions.",
    fullDescription:
      "This project is a React.js-based employee management application supporting add, update, delete, and display operations. It demonstrates practical state management, reusable components, form handling, responsive design, and business-style dashboard layout.",
    tech: ["React.js", "JavaScript", "CRUD"]
  },
  {
    title: "Online Shopping Website",
    images: [shoppingWebsite1, shoppingWebsite2, shoppingWebsite3],
    shortDescription:
      "Created an e-commerce style application with cart functionality, product filtering, and dynamic user interactions.",
    fullDescription:
      "This project is a modern shopping website interface built using React.js. It includes product listing, filtering, cart logic, and dynamic interaction design. It highlights reusable UI structure, responsive layout, and a premium ecommerce-style user experience.",
    tech: ["React.js", "Frontend", "UI Design"]
  },
  {
    title: "Box Touch Game",
    images: [boxTouchGame1, boxTouchGame2, boxTouchGame3],
    shortDescription:
      "Created a touch-based mobile game in React Native with score handling and interactive gameplay.",
    fullDescription:
      "This mobile project was developed using React Native and focuses on touch interactions, score management, and dynamic gameplay. It demonstrates event handling, interactive UI updates, and simple but engaging mobile game design.",
    tech: ["React Native", "Mobile App"]
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadingModal, setLoadingModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject || loadingModal ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject, loadingModal]);

  useEffect(() => {
    if (!selectedProject) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(timer);
  }, [selectedProject]);

  const openProject = (project) => {
    setLoadingModal(true);
    setCurrentImageIndex(0);

    setTimeout(() => {
      setSelectedProject(project);
      setLoadingModal(false);
    }, 500);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth <= 900) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <>
      <section
        id="projects"
        className={`section section-soft reveal ${visible ? "active" : ""}`}
        ref={sectionRef}
      >
        <div className="container">
          <div className="section-heading">
            <span className="section-badge">Portfolio</span>
            <h2>Featured Projects</h2>
            <p>
              A collection of AI, computer vision, web, and mobile projects built
              with modern tools and practical real-world use cases.
            </p>
          </div>

          <div className="projects-grid premium-projects-grid">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="project-card glass-card premium-project-card tilt-card"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="project-image-wrap">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-image"
                  />
                  <span className="project-number premium-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>

                  <div className="skill-tags">
                    {project.tech.map((item, i) => (
                      <span key={i} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="project-btn premium-project-btn"
                    onClick={() => openProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {loadingModal && (
        <div className="popup-overlay popup-show">
          <div className="modal-loader-box glass-card">
            <div className="loader-ring"></div>
            <p>Loading Project Details...</p>
          </div>
        </div>
      )}

      {selectedProject && !loadingModal && (
        <div className="popup-overlay popup-show" onClick={closeProject}>
          <div
            className="popup-card glass-card popup-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <button type="button" className="popup-close" onClick={closeProject}>
              ×
            </button>

            <div className="popup-content-grid">
              <div className="popup-carousel-section">
                <div className="popup-image-wrap">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={selectedProject.title}
                    className="popup-image popup-image-animate"
                  />
                </div>

                <div className="carousel-controls">
                  <button type="button" className="carousel-btn" onClick={prevImage}>
                    ‹
                  </button>

                  <div className="carousel-dots">
                    {selectedProject.images.map((_, index) => (
                      <span
                        key={index}
                        className={`carousel-dot ${currentImageIndex === index ? "active-dot" : ""}`}
                        onClick={() => setCurrentImageIndex(index)}
                      ></span>
                    ))}
                  </div>

                  <button type="button" className="carousel-btn" onClick={nextImage}>
                    ›
                  </button>
                </div>
              </div>

              <div className="popup-text-content">
                <span className="popup-badge">Project Details</span>
                <h3 className="popup-title-animate">{selectedProject.title}</h3>
                <p className="popup-text-animate">{selectedProject.fullDescription}</p>

                <div className="skill-tags popup-tags">
                  {selectedProject.tech.map((item, i) => (
                    <span key={i} className="tag">
                      {item}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="primary-btn popup-action-btn"
                  onClick={closeProject}
                >
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}