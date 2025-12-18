import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Data Analyst with some hand-on projects. With prior experience in data analytics and knowledge in MySQL, Python and Power BI. Eager to combine my strong technical skills like data analytics and front-development (HTML, CSS, JavaScript, React.Js). With a passioni for creative innovation and solving complex problems, I am eager to further implement my skills and improve my data analysis experience. `;

export const ABOUT_TEXT = `I am a dedicated Python Developer and AI/ML Developer with approximately one year of hands-on experience in building intelligent, efficient, and user-focused applications. I have worked with a wide range of technologies, including Python, Machine Learning, Data Analytics tools and methods, Power BI, React, Node.js, MySQL, and PostgreSQL.
My journey in software development began with a deep curiosity about how systems work and has evolved into a passion for developing data-driven and AI-powered solutions. I continuously strive to learn, adapt, and apply emerging technologies to solve real-world problems. I thrive in collaborative environments and enjoy tackling complex challenges to deliver high-quality, scalable solutions. Outside of development, I enjoy staying active, exploring advancements in AI and machine learning, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Medical Recommendation System",
    image: project1,
    description:
      "Medical Recommendation System is an online platform which can detect the disease using given symptoms. A fully functional machine learning based project with features like disease detection, providing prescription, diet analysis, medicine recommending and workout details.",
    technologies: ["Python", "Flask", "Machine Learning"],
    href:"#",
  },
  {
    title: "Face-Recognition Based Smart Attendance System",
    image: project2,
    description:
      "FRBSAS(Face-Recognition Based Smart Attendance System) is an application which mark the attendance using the camera using one of the library of python known open-cv. Using this application, management of attendance becomes easier.  ",
    technologies: ["Python", "Open-cv"],
    href:"#",
  },
  {
    title: "Mamba AI",
    image: project3,
    description:
      "Mamba AI, a replica of Gemini AI, is built using ReactJS and APIs to deliver intelligent responses and real-time data analysis. ReactJS manages the frontend, while APIs handle communication with machine learning models, offering dynamic and interactive user experiences.",
    technologies: ["Python","Tensor-flow" ],
    href:"#",
  },
  {
    title: "Netflix Clone",
    image: project4,
    description:
      "A Netflix clone using ReactJS and Firebase allows users to browse and stream content. Firebase handles authentication, real-time database for movie data, and hosting, while React manages the UI/UX.",
    technologies: ["HTML", "CSS", "React JS ", "Vite"],
  },
];

export const CONTACT = {
  address: "Noida, Uttar Pradesh",
  phoneNo: "+91-9695047580",
  email: "achintyashri2202@gmail.com",
};
