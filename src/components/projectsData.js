// projectsData.js

const projects = [
  {
    title: "Medical Recommendation System",
    details: "Medical Recommendation System is an online platform which can detect the disease using given symptoms. A fully functional machine learning based project with features like disease detection, providing prescription, diet analysis, medicine recommending and workout details.",
    image: "https://s3-alpha.figma.com/hub/file/5401068013/ac9e79a5-535e-431a-8c2f-3924780c3761-cover.png",
    techStack: ["Python", "Machine Learning", "Flask", "Django"],
    projectLink: "#",
    OverView: "A Medical Recommendation System is an intelligent web application that helps users identify potential health conditions based on symptoms and provides tailored suggestions. It combines machine learning with Python-based web frameworks like Flask and Django to deliver real-time, smart health assistance.",
    ListDown: [
      { id: 1, content: "Disease Prediction" },
      { id: 2, content: "Recommended medications" },
      { id: 3, content: "Precautionary measures" },
      { id: 4, content: "Workouts" },
      { id: 5, content: "Diet plans" },
      { id: 6, content: "Home Remedies" }
    ],
    systemArchitecture: "Frontend (React/HTML) → Flask API → ML Model → Django Backend + Database",
    keyFeatures: ["Disease detection", "Medicine suggestions", "Precaution tips", "Home remedies", "Diet", "Workout plans", "Admin dashboard"],
    benefits: [
      "Assists in early diagnosis",
      "Improves accessibility",
      "Supports personal healthcare",
      "Easy to scale"
    ],
    conclusion: "A powerful tool that blends ML and Python frameworks for smart healthcare recommendations"
  },
  {
    title: "Feast of Flavours",
    details: "Feast of Flavour is a vibrant recipe showcase website that celebrates culinary creativity. It features a wide variety of delicious recipes, from quick meals to gourmet dishes, offering step-by-step instructions to inspire both beginner and experienced cooks to explore diverse flavors.",
    image: "https://s3-alpha.figma.com/hub/file/6090747941/acb2e473-5d7c-434d-9782-9a2110830fc5-cover.png",
    techStack: ["HTML", "Tailwind CSS", "React Js"],
    projectLink: "#",
    OverView: "Feast of Flavours is a recipe hub for food lovers. It offers categorized recipes with visual appeal and detailed steps to help users cook with ease.",
    ListDown: [
      { id: 1, content: "Recipe browsing" },
      { id: 2, content: "Categorized meals" },
      { id: 3, content: "Step-by-step guides" },
      { id: 4, content: "Responsive UI" }
    ],
    systemArchitecture: "React-based frontend, recipe data in JSON or API, styled with Tailwind CSS",
    keyFeatures: ["Modern UI", "Intuitive Navigation", "Wide Recipe Collection", "Cooking Instructions"],
    benefits: [
      "Great for beginners and food enthusiasts",
      "Visually appealing layout",
      "Organized recipe database"
    ],
    conclusion: "An engaging platform for exploring global flavors and boosting cooking confidence"
  },
  {
    title: "Parkison Disease Detection",
    details: "Parkison Disease Detection is an online platform which can detect the disease using given symptoms. A fully functional machine learning based project with features like disease detection, providing prescription, diet analysis, medicine recommending and workout details.",
    image: "https://lnpuk.com/wp-content/uploads/2020/10/LNP-Banner-images-1800-x-1125-6-3-1024x640.jpg",
    techStack: ["Python", "Machine Learning", "Streamlit"],
    projectLink: "https://eshushri202-parkison-disease-detection-main-0jxv8j.streamlit.app/",
    OverView: "This project predicts the likelihood of Parkinson's disease using patient input symptoms and voice analysis features.",
    ListDown: [
      { id: 1, content: "Symptom-based diagnosis" },
      { id: 2, content: "Machine learning prediction" },
      { id: 3, content: "Prescription and care advice" }
    ],
    systemArchitecture: "Streamlit UI → Python ML Model → Display of result",
    keyFeatures: ["Simple UI", "Symptom Input", "ML Prediction"],
    benefits: [
      "Early detection support",
      "Accessible design",
      "Easy to use"
    ],
    conclusion: "An efficient and user-friendly tool for Parkinson's disease risk assessment"
  },
  {
    "title": "Company X Template",
    "details": "Company X’s template website, built with React.js and Tailwind CSS, features a modern, responsive design. React enables dynamic content management, while Tailwind CSS ensures a customizable, efficient, and visually appealing user interface, optimized for performance.",
    "image": "https://as2.ftcdn.net/v2/jpg/05/44/23/79/1000_F_544237902_yi7ivAoP3PuyCj2LD5Mb4ZrKXvUuHsiT.jpg",
    "techStack": ["HTML", "Tailwind CSS", "React Js"],
    "projectLink": "https://company-x-demo.vercel.app/",
    "OverView": "A responsive company website template built with React.js and Tailwind CSS, offering a modern design and dynamic content structure tailored for startups or corporate websites.",
    "ListDown": [
      { "id": 1, "content": "Fully responsive layout" },
      { "id": 2, "content": "Dynamic content components" },
      { "id": 3, "content": "Dark/light mode design" },
      { "id": 4, "content": "Fast page load & clean code structure" }
    ],
    "systemArchitecture": "React components for modular UI → Tailwind CSS for utility-first styling → Static deployment via Vercel",
    "keyFeatures": ["Responsive design", "Modular component structure", "SEO-optimized", "Mobile-first UI", "Clean design aesthetics"],
    "benefits": [
      "Rapid UI development with Tailwind",
      "Component-based structure",
      "SEO and mobile-optimized"
    ],
    "conclusion": "Perfect starter template for businesses seeking a clean and scalable online presence."
  }
  ,
  {
    "title": "Stock Price Prediction Model",
    "details": "A stock price prediction model leverages historical stock data, technical indicators, and sometimes market sentiment to estimate future price movements. It often employs machine learning techniques, including LSTM, ARIMA, and regression, for time-series analysis and forecasting.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMVRMXfIOBXt8z5GGv10QPw6r6vzyhCTyjXA&s",
    "techStack": ["Python", "Machine Learning", "Streamlit"],
    "projectLink": "https://eshushri202-stock-price-prediction-model-app-4emffq.streamlit.app/",
    "OverView": "A time-series forecasting application that predicts stock prices using machine learning techniques such as LSTM and ARIMA, and presents the results through an interactive Streamlit dashboard.",
    "ListDown": [
      { "id": 1, "content": "Historical stock data analysis" },
      { "id": 2, "content": "Time-series forecasting using LSTM & ARIMA" },
      { "id": 3, "content": "Feature engineering and preprocessing" },
      { "id": 4, "content": "Interactive prediction dashboard" },
      { "id": 5, "content": "Real-time visualizations and trends" }
    ],
    "systemArchitecture": "Data Preprocessing & Feature Engineering → Model Training (LSTM/ARIMA) → Streamlit for interactive visualization",
    "keyFeatures": ["Stock forecasting", "Time-series ML models", "Streamlit UI", "Historical trend visualization"],
    "benefits": [
      "Data-driven investment insights",
      "Use of advanced models (LSTM, ARIMA)",
      "Real-time predictions with Streamlit UI"
    ],
    "conclusion": "Efficient tool for traders or researchers analyzing stock trends using ML."
  }
  ,
  {
    "title": "News App",
    "details": "Built with JavaScript, this news app delivers timely updates and personalized content to users across web and mobile. It uses JavaScript for dynamic data rendering, seamless navigation, and real-time notifications, creating an engaging and responsive news-reading experience.",
    "image": "https://colorlib.com/wp/wp-content/uploads/sites/2/9_best_news_website_design.jpg",
    "techStack": ["HTML", "CSS", "React Js"],
    "projectLink": "https://news-app-rho-jet.vercel.app/",
    "OverView": "A modern, responsive news application delivering real-time news updates and tailored content using React.js. It ensures smooth navigation and content loading for an enhanced user experience.",
    "ListDown": [
      { "id": 1, "content": "Real-time News Updates" },
      { "id": 2, "content": "Category-wise News Feed" },
      { "id": 3, "content": "Dynamic Content Rendering" },
      { "id": 4, "content": "Mobile and Web Friendly UI" },
      { "id": 5, "content": "Interactive News Cards" }
    ],
    "systemArchitecture": "Frontend (React) → News API Integration → Dynamic State Management",
    "keyFeatures": ["Real-time news", "Category filters", "Responsive layout", "API-based integration", "User-friendly UI"],
    "benefits": [
      "Stay informed with current news",
      "Fast and dynamic experience",
      "Accessible across devices",
      "Lightweight and efficient"
    ],
    "conclusion": "A sleek and real-time news application built for speed, simplicity, and user engagement."
  }
  ,
  {
    "title": "Mamba AI",
    "details": "Mamba AI, a React.js-based clone of Gemini, replicates Gemini’s conversational AI features. Utilizing React’s component-driven architecture, it delivers real-time interactions, smooth UI updates, and AI responses, offering users a seamless, dynamic chat experience similar to Gemini.",
    "image": "https://i.ytimg.com/vi/iV0ZIczwX3I/maxresdefault.jpg",
    "techStack": ["HTML", "CSS", "React Js"],
    "projectLink": "https://mamba-ai.netlify.app/",
    "OverView": "Mamba AI is a conversational chatbot interface built with React.js, mimicking Gemini’s interactive design and real-time communication flow using modern frontend technologies.",
    "ListDown": [
      { "id": 1, "content": "Conversational UI with AI-like behavior" },
      { "id": 2, "content": "Real-time message exchange" },
      { "id": 3, "content": "Component-based architecture" },
      { "id": 4, "content": "Lightweight, fast interface" }
    ],
    "systemArchitecture": "React Frontend → Message Handler Component → AI Response Engine (Simulated)",
    "keyFeatures": ["Live chatting", "Gemini-style design", "Fast rendering", "Clean UI", "Component reusability"],
    "benefits": [
      "Simulates AI interactions",
      "Enhances frontend skillset",
      "Great UI/UX practice",
      "Easily extendable for AI integration"
    ],
    "conclusion": "An engaging frontend-based chatbot that delivers a Gemini-like experience with real-time responsiveness."
  }
  ,
  {
    "title": "Smart Attendance System",
    "details": "A smart attendance system using facial recognition automates attendance tracking by identifying individuals through their facial features. It enhances accuracy, reduces fraud, and streamlines processes by recording attendance in real time, offering a seamless and secure alternative to traditional methods.",
    "image": "https://www.lystloc.com/blog/wp-content/uploads/2022/11/ezgif.com-gif-maker-6.webp",
    "techStack": ["Python", "OpenCV"],
    "projectLink": "#",
    "OverView": "A facial recognition-based attendance system using Python and OpenCV to automatically mark attendance, enhancing security and reducing manual effort.",
    "ListDown": [
      { "id": 1, "content": "Face Detection and Recognition" },
      { "id": 2, "content": "Real-time Attendance Marking" },
      { "id": 3, "content": "Secure Identity Verification" },
      { "id": 4, "content": "Logs and Reports Generation" }
    ],
    "systemArchitecture": "Camera Input → OpenCV Face Recognition → Attendance Logic → Log Storage",
    "keyFeatures": ["Face recognition", "Real-time attendance", "Fraud prevention", "Automated logging"],
    "benefits": [
      "Minimizes manual work",
      "Reduces proxy attendance",
      "Enhances accuracy",
      "Easily integrable with HR systems"
    ],
    "conclusion": "An intelligent and secure solution for managing attendance using modern facial recognition technology."
  }
  ,
  {
    "title": "Netflix Clone",
    "details": "This Netflix clone, created with React.js, provides a responsive, interactive streaming experience. Using React components, it supports features like movie browsing, user authentication, and video playback. The app dynamically fetches data, offering a user-friendly interface similar to Netflix.",
    "image": "https://cdn3.f-cdn.com//files/download/128385152/netflix1.jpg?width=780&height=401&fit=crop",
    "techStack": ["HTML", "CSS", "React Js"],
    "projectLink": "https://netflix-clone-beta-rust.vercel.app/",
    "OverView": "A feature-rich Netflix-inspired streaming UI built using React.js that mimics the design and user flow of a real OTT platform.",
    "ListDown": [
      { "id": 1, "content": "Movie Browsing with Categories" },
      { "id": 2, "content": "Dynamic API-based Content Fetching" },
      { "id": 3, "content": "User Authentication UI (Basic)" },
      { "id": 4, "content": "Responsive Design & Smooth Transitions" }
    ],
    "systemArchitecture": "React Frontend → TMDB API Integration → Routing & UI Rendering → Firebase/Auth (Optional)",
    "keyFeatures": ["Category filtering", "Data fetching via APIs", "Streaming UI", "Authentication layout"],
    "benefits": [
      "OTT UI replication",
      "Hands-on API integration",
      "Great frontend practice",
      "Visually engaging"
    ],
    "conclusion": "An interactive, responsive Netflix-inspired app showcasing React.js development capabilities for media platforms."
  }
  ,
  {
    "title": "Corona Survival Dashboard",
    "details": "The Corona Survival Dashboard, created using Power BI, visualizes key COVID-19 data like cases, recoveries, and vaccination rates. It provides real-time insights through interactive charts, helping users track trends and make informed decisions based on up-to-date information.",
    "image": "https://aaqr.org/images/article_images/2020/10/0314_fig1.png",
    "analysis": "https://aaqr.org/images/article_images/2020/10/0314_fig1.png",
    "techStack": ["Power BI"],
    "OverView": "This Power BI dashboard tracks the COVID-19 pandemic through real-time data visualizations including cases, recoveries, deaths, and vaccination progress worldwide.",
    "ListDown": [
      { "id": 1, "content": "🦠 Total Cases and Death Trends" },
      { "id": 2, "content": "💉 Vaccination Distribution Stats" },
      { "id": 3, "content": "📈 Recovery and Mortality Analysis" },
      { "id": 4, "content": "🌍 Country-wise Tracking & Comparison" }
    ],
    "performance": "📌 Regional Performance: Countries with higher vaccination rates showed lower mortality and higher recovery trends.",
    "trends": "📊 Trends Over Time: Clear wave patterns in COVID-19 spikes, vaccine rollouts, and corresponding changes in active cases are evident.",
    "projectLink": "#"
  },

  {
    "title": "Indian Oil Corporation Report Analysis",
    "details": "A comprehensive analysis of Indian Oil Corporation's share price trends over time. It visualizes key metrics like open, close, high, and low prices, alongside adjusted close prices and trading volumes. It helps investors track performance and market trends.",
    "image": "https://media.licdn.com/dms/image/v2/D5622AQHwjhHWcfLchw/feedshare-shrink_800/feedshare-shrink_800/0/1733425518066?e=1747267200&v=beta&t=y99wheuPuyNy9xvwI34ZZQq3OxXPLqjnSQnHHX7B-js",
    "analysis": "https://media.licdn.com/dms/image/v2/D5622AQHwjhHWcfLchw/feedshare-shrink_800/feedshare-shrink_800/0/1733425518066?e=1747267200&v=beta&t=y99wheuPuyNy9xvwI34ZZQq3OxXPLqjnSQnHHX7B-js",
    "techStack": ["Power BI"],
    "OverView": "An in-depth Power BI dashboard analyzing Indian Oil's stock performance over time, helping visualize trends and inform investment decisions.",
    "ListDown": [
      { "id": 1, "content": "📊 Open, Close, High, Low Price Trends" },
      { "id": 2, "content": "📉 Adjusted Close and Market Volatility" },
      { "id": 3, "content": "📦 Trading Volume Analysis" },
      { "id": 4, "content": "🕰️ Time-Series Pattern Recognition" }
    ],
    "performance": "📌 Sector Performance: Shares demonstrated moderate volatility with positive recovery in post-COVID markets.",
    "trends": "📈 Trends Over Time: Share price and volume metrics reveal strong seasonal and policy-driven impacts.",
    "projectLink": "#"
  }
  ,
  {
    "title": "Project Management Report Dashboard",
    "details": "A comprehensive Power BI dashboard designed to monitor and analyze project performance across multiple dimensions. This dashboard provides actionable insights into key project metrics, empowering data-driven decision-making.",
    "image": "https://media.licdn.com/dms/image/v2/D5622AQHwpZ_f4ekD6g/feedshare-shrink_800/feedshare-shrink_800/0/1733486566460?e=1743638400&v=beta&t=ll88GojZbns8cDgXE69qh-S0oXfJpFWsBblo5CgcRtw",
    "analysis": "https://media.licdn.com/dms/image/v2/D5622AQHwpZ_f4ekD6g/feedshare-shrink_800/feedshare-shrink_800/0/1733486566460?e=1743638400&v=beta&t=ll88GojZbns8cDgXE69qh-S0oXfJpFWsBblo5CgcRtw",
    "techStack": ["Power BI"],
    "OverView": "This dashboard gives a clear snapshot of project statuses, timelines, and budget adherence, helping stakeholders make data-informed decisions.",
    "ListDown": [
      { "id": 1, "content": "🗂️ Project Health Overview" },
      { "id": 2, "content": "⏱️ Timeline & Milestone Tracking" },
      { "id": 3, "content": "💰 Budget vs Actual Cost Breakdown" },
      { "id": 4, "content": "👥 Team-wise Task Allocation" }
    ],
    "performance": "📌 Project Performance: Metrics show consistent delivery timelines with occasional delays flagged early through visual indicators.",
    "trends": "📈 Trends Over Time: Improved delivery pace and resource allocation observed in later project phases.",
    "projectLink": "#"
  }
  ,
  {
    title: "North Sea Export Sales Report (2010 - 2013) Dashboard",
    details: "The North Sea Export Sales Report (2010–2013) reveals $9.30M in sales, $8.97M in costs, and $120.61K in losses. Sales varied across regions, with furniture having the highest loss. Technology led in sales after discounts.",
    image: "https://gcaptain.com/wp-content/uploads/2016/01/THEO-T-first-US-crude-export.jpg",
    analysis: "https://media.licdn.com/dms/image/v2/D5622AQGtCC70ldBo2g/feedshare-shrink_800/B56ZT2BLLtGUAg-/0/1739294292873?e=1747267200&v=beta&t=rJzMvz11DgIeFDHpaIbGJDIdPIbmAswMHKy2mKvEqik",
    techStack: ["Power BI"],
    OverView: "Our latest North Sea Export Sales Report provides a data-driven view of sales, costs, and losses across different regions and product categories from 2010 to 2013.",
    ListDown: [
      { id: 1, content: "✅ Total Sales: $9.30M" },
      { id: 2, content: "✅ Total Cost: $8.97M" },
      { id: 3, content: "✅ Total Loss: $120.61K (1.34% loss)" },
      { id: 4, content: "✅ Total Sales After Discount: $8.85M" },
      { id: 5, content: "✅ Total Orders: 6,455" },
    ],
    performance: "🔍 Regional Performance: Sales losses vary across different states and regions, with notable differences between East, West, South, and Central regions.",
    trends: "📊 Trends Over Time: Sales after discount have seen an upward trend over the years, with a steady increase in order volume. This report provides valuable insights into where improvements can be made to optimize costs, increase sales, and minimize losses.",
    projectLink: "#"
  },

  {
    "title": "Dog & Cat Classification",
    "details": "Dog & Cat Classification using TensorFlow leverages deep learning models, typically Convolutional Neural Networks (CNNs), to accurately classify images as either dogs or cats. The model is trained on labeled image datasets to recognize distinctive features of each animal.",
    "image": "https://cdn.analyticsvidhya.com/wp-content/uploads/2021/06/how-to-do-Cat-and-Dog-Classification-using-CNN_-How-to-do-Cat-and-Dog-Classification-using-CNN_-01-scaled.jpg",
    "techStack": ["Python", "TensorFlow"],
    "projectLink": "#",
    "OverView": "This deep learning model uses CNNs to classify input images as either cats or dogs, trained on large labeled datasets.",
    "ListDown": [
      { "id": 1, "content": "Image classification using CNN" },
      { "id": 2, "content": "Binary classifier: Dog or Cat" },
      { "id": 3, "content": "Trained on large dataset" },
      { "id": 4, "content": "High accuracy model" }
    ],
    "systemArchitecture": "Image Input → Preprocessing → CNN Model (TensorFlow) → Classification Output",
    "keyFeatures": ["CNN-based classifier", "Image preprocessing", "Fast inference", "High precision"],
    "benefits": [
      "Quick classification of pet images",
      "Accurate breed differentiation",
      "Real-world application in pet care and image search"
    ],
    "conclusion": "A lightweight and effective TensorFlow project demonstrating basic image classification using deep learning."
  },
  {
    "title": "Medico-Brain Stroke Prediction",
    "details": "The Medico-Brain Stroke Prediction project uses machine learning to analyze patient data and predict the likelihood of a brain stroke. Brain strokes are a leading cause of disability and death worldwide. By examining various health metrics, it aids in early detection and prevention strategies.",
    "image": "https://media-hosting.imagekit.io/73ae32124c4f44b1/Screenshot%202025-04-03%20230533.png?Expires=1838309748&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=neIzOscIj1ztf~3-zF7OTqNcGhgvpfLnb8c4VDqOoUXuTsT6qR9hPquqBDn3oGK9vYTPdt4OOP2AdT5RDiF-d6BXGu8TO1OZm5KgveMSohUW6omFlLoFzPEwIFwcLX31pr8yLBkC4O~yb7c~VxQCephgucq0KGNQEa3YtlVIasIPfBC5Zq3a9Ev8ya82~jmBe2GpJWymeciH076Yb6ANMDYDKPhw-kle6xtddVkmrFCMYqOMO0ALlpDUyFJ2il7gVvdiE1ouLNXb8bEy~0FmOGzrXxZs9RcHt-tnTsyg6vcza-NalwLFanLj115vcqsJcs5vxpGwrC-LSFvXJYCvDQ__",
    "techStack": ["Python", "ML", "Flask", "React Js", "Firebase"],
    "projectLink": "https://brain-stroke-prediction-six.vercel.app/",
    "OverView": "A machine learning web app that predicts the chances of brain stroke based on patient data inputs and visualizes results.",
    "ListDown": [
      { "id": 1, "content": "User input form for medical details" },
      { "id": 2, "content": "Brain stroke risk prediction" },
      { "id": 3, "content": "Graphical analysis of input vs output" },
      { "id": 4, "content": "Firebase for authentication & hosting" }
    ],
    "systemArchitecture": "React Frontend → Flask API → ML Model → Firebase DB/Auth",
    "keyFeatures": ["Stroke prediction", "Visualization", "Real-time feedback", "Modern frontend"],
    "benefits": [
      "Early diagnosis of stroke risk",
      "Educational and preventive utility",
      "Easy user interface with high engagement"
    ],
    "conclusion": "A proactive stroke risk predictor built on an end-to-end ML pipeline integrated into a modern web stack."
  }
];

export default projects;