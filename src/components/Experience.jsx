// import { useEffect, useRef, useState } from "react";

// export default function Experience() {
//   const ref = useRef(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.12 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       id="experience"
//       className={`section reveal ${visible ? "active" : ""}`}
//       ref={ref}
//     >
//       <div className="container">
//         <div className="section-header">
//           <p>Experience & Education</p>
//           <h2>My Journey</h2>
//         </div>

//         <div className="timeline-wrapper">
//           <div className="timeline-card glass-card">
//             <h3>Professional Experience</h3>
//             <div className="timeline-item">
//               <h4>Trainee Machine Learning Developer</h4>
//               <span>Spherenex Innovation Labs | Dec 2025 – Present | Bengaluru</span>
//               <ul>
//                 <li>Worked on machine learning and computer vision-based applications</li>
//                 <li>Performed data preprocessing using Pandas and NumPy</li>
//                 <li>Built and tested models using PyTorch</li>
//                 <li>Used OpenCV and YOLO for object detection tasks</li>
//                 <li>Gained real-world experience in AI and ML workflows</li>
//               </ul>
//             </div>
//           </div>

//           <div className="timeline-card glass-card">
//             <h3>Education</h3>
//             <div className="timeline-item">
//               <h4>Bachelor of Engg</h4>
//               <span>07/2023 – 05/2025 | Ramanagara | CGPA: 7.1</span>
//             </div>
// {/* 
//             <div className="timeline-item">
//               <h4>Diploma – Mechanical</h4>
//               <span>Government Polytechnic College | 07/2018 – 04/2021 | Ramanagara | 66.4%</span>
//             </div> */}

//             {/* <div className="timeline-item">
//               <h4>SSLC</h4>
//               <span>Adarsha High School | 2017 – 2018 | 59.06%</span>
//             </div> */}
//           </div>

//           <div className="timeline-card full-width glass-card">
//             <h3>Courses & Certifications</h3>
//             <div className="timeline-item">
//               <h4>Python Full Stack Development – QSpiders</h4>
//               <span>05/2025 – 11/2025 | Bengaluru</span>
//               <p>
//                 Trained in Python, Oracle SQL, HTML, CSS, JavaScript, React.js,
//                 React Native, and Django with hands-on project experience.
//               </p>
//             </div>

//             <div className="certificate-list">
//               <div className="certificate-box">
//                 Python Full Stack Development Certification – QSpiders
//               </div>
//               <div className="certificate-box">
//                 React.js Development Certification – QSpiders
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useEffect, useRef, useState } from "react";
import fullstackCertificate from "../assets/projects/FULLSTACK_CERTIFIATE.jpeg";
import reactCertificate from "../assets/projects/REACT_CERTIFICATE.jpeg";

export default function Experience() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className={`section reveal ${visible ? "active" : ""}`}
      ref={ref}
    >
      <div className="container">
        <div className="section-header">
          <p>Experience & Education</p>
          <h2>My Journey</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-card glass-card">
            <h3>Professional Experience</h3>
            <div className="timeline-item">
              <h4>Trainee Machine Learning Developer</h4>
              <span>Spherenex Innovation Labs | Dec 2025 – Present | Bengaluru</span>
              <ul>
                <li>Worked on machine learning and computer vision-based applications</li>
                <li>Performed data preprocessing using Pandas and NumPy</li>
                <li>Built and tested models using PyTorch</li>
                <li>Used OpenCV and YOLO for object detection tasks</li>
                <li>Gained real-world experience in AI and ML workflows</li>
              </ul>
            </div>
          </div>

          <div className="timeline-card glass-card">
            <h3>Education</h3>
            <div className="timeline-item">
              <h4>Bachelor of Engg</h4>
              <span>07/2023 – 05/2025 | Ramanagara | CGPA: 7.1</span>
            </div>
          </div>

          <div className="timeline-card full-width glass-card">
            <h3>Courses & Certifications</h3>

            <div className="timeline-item">
              <h4>Python Full Stack Development – QSpiders</h4>
              <span>05/2025 – 11/2025 | Bengaluru</span>
              <p>
                Trained in Python, Oracle SQL, HTML, CSS, JavaScript, React.js,
                React Native, and Django with hands-on project experience.
              </p>
            </div>

            <div className="certificate-list">
              <a
                href={fullstackCertificate}
                target="_blank"
                rel="noreferrer"
                className="certificate-box certificate-image-card"
              >
                <img
                  src={fullstackCertificate}
                  alt="Python Full Stack Development Certificate"
                  className="certificate-image"
                />
                <div className="certificate-content">
                  <h4>Python Full Stack Development Certification</h4>
                  <p>QSpiders</p>
                </div>
              </a>

              <a
                href={reactCertificate}
                target="_blank"
                rel="noreferrer"
                className="certificate-box certificate-image-card"
              >
                <img
                  src={reactCertificate}
                  alt="React.js Development Certificate"
                  className="certificate-image"
                />
                <div className="certificate-content">
                  <h4>React.js Development Certification</h4>
                  <p>QSpiders</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}