import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Data Analyst with some hand-on projects. With prior experience in data analytics and knowledge in MySQL, Python and Power BI. Eager to combine my strong technical skills like data analytics and front-development (HTML, CSS, JavaScript, React.Js). With a passioni for creative innovation and solving complex problems, I am eager to further implement my skills and improve my data analysis experience. `;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];

export const PROJECTS = [
  {
    title: "Medical Recommendation System",
    image: project1,
    description:
      "Medical Recommendation System is an online platform which can detect the disease using given symptoms. A fully functional machine learning based project with features like disease detection, providing prescription, diet analysis, medicine recommending and workout details.",
    technologies: ["Python", "Flask", "Machine Learning"],
  },
  {
    title: "Face-Recognition Based Smart Attendance System",
    image: project2,
    description:
      "FRBSAS(Face-Recognition Based Smart Attendance System) is an application which mark the attendance using the camera using one of the library of python known open-cv. Using this application, management of attendance becomes easier.  ",
    technologies: ["Python", "Open-cv"],
  },
  {
    title: "Fashion Dress Predictor",
    image: project3,
    description:
      "Fashion Dress Predictor is a model which can predict the fashion items that are provided to the model.",
    technologies: ["Python","Tensor-flow" ],
  },
  {
    title: "Currency Convertor App",
    image: project4,
    description:
      "Currency Convertor App is a conversion tool used to convert one currency to another.",
    technologies: ["HTML", "CSS", "React JS ", "Vite"],
  },
];

export const CONTACT = {
  address: "Noida, Uttar Pradesh",
  phoneNo: "+91-9695047580",
  email: "achintyashri2202@gmail.com",
};
