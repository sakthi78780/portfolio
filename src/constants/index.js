import {
  resume,
  MDA,
  CS,
  Airos,
  DP,
  Power,
  Google,
  MPL,
  R,
  SQL,
  Sea,
  Plotly,
  HC,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "cv",
    title: "Resume",
    pdfUrl:resume,
  },
];

const services = [
  {
    title: "PowerBi Developer",
    icon: web,
  },
  {
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Business Analytics Enthusiast",
    icon: backend,
  },
  {
    title: "Data Analytics Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Power BI",
    icon: Power,
  },
  {
    name: "SQL",
    icon: SQL,
  },
  {
    name: "Python",
    icon: redux,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "Plotly",
    icon: Plotly,
  },
  {
    name: "Seaborn",
    icon: Sea,
  },
  {
    name: "Matplotlib",
    icon: MPL,
  },
  {
    name: "Google Data Studio:",
    icon: Google,
  },  
];
/*
Comprehensive drone tech understanding, including components and functionalities.
Hands-on with drone software, AI-driven autonomy, and GIS integration.
Collaborated within a team, honing communication and problem-solving skills.
Explored real-world drone business applications and challenges.
*/
const experiences = [
  {
    title: "Business Analyst ",
    company_name: "CodersCave",
    icon: Airos,
    iconBg: "#383E56",
    date: "November  2023 - December 2023",
    points: [
      "Led process analysis, data cleaning, and statistical analysis independently, ensuring data accuracy..",
      "Transformed complex data into clear visuals independently, effectively communicating insights..",
      "Applied analytical techniques solo, deriving meaningful insights for decision-making.",
      "Demonstrated proactive involvement in solo tasks, highlighting adaptability in navigating business analysis challenges..",
    ],
  },
  {
    title: "Data Analyst ",
    company_name: "Meriskill",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2024 - March 2024",
    points: [
      "Completed hands-on data analytics internship at Merkill, gaining valuable experience in Python and Power BI for comprehensive data analysis..",
      "Demonstrated expertise in utilizing Python for tasks such as data manipulation, statistical analysis, and automation within a real-world context..",
      "Showcased adeptness in using Power BI tools to transform raw data into clear visualizations and reports, emphasizing effective communication of complex insights..",
      "Applied analytical skills to contribute meaningful data-driven insights, aligning with Merkill's objectives and making a tangible impact during the internship.",
    ],
  },


];

const  testimonials = [
  {
    testimonial:
    "Sakthi vel.R demonstrated an outstanding work ethic, eagerness to learn, and a genuine passion for their chosen field .They consistently exhibited a high level of professionalism and adaptability, adapting quickly to new challenges and responsibilities.",
    name: "Coders Cave",
    designation: "Team",
    company: "Coderscae",
  
  },
  {
    testimonial:
    "Sakthi vel.r demonstrated a deep understanding of data analytics concepts, as well as proficiency in using various data analysis tools and programming languages. They exhibited a strong ability to gather, clean, and interpret data, providing valuable insights that informed our strategic decisions.",
    name: "Meriskill",
    designation: "Team",
    company: "Meriskil",
  },
  
];

const projects = [
  {
    name: "Mark Analysis Dashboard in PowerBi",
    description:
      "Completed semester 1 and 2 mark analysis for the Class Performance Dashboard project in Power BI. Implemented real-time features, enhancing data insights and contributing to dynamic academic monitoring.",
    tags: [
      {
        name: "PowerBi",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "data visualization.",
        color: "pink-text-gradient",
      },
    ],
    image: MDA,
  },
  {
    name: "Marketing Analytics: Customer Segmentation ",
    description:
      "Implemented advanced data analysis techniques in Python to categorize customers based on behaviors and preferences. Extracted actionable insights to optimize marketing strategies, conveyed findings through visualizations, and delivered strategic recommendations for enhanced customer engagement and business growth..",
    tags: [
      {
        name: " Data analysis",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Visualizations",
        color: "pink-text-gradient",
      },
    ],
    image: CS,
    source_code_link: "https://www.linkedin.com/posts/sakthi-vel-71a873248_marketing-analytics-customer-segmentation-activity-7141124147991994368-McUF?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Diabetes Data Exploration and Predictive Analysis",
    description:
      "In this impactful data analysis project, I delved into the realm of diabetes data to conduct comprehensive exploration and predictive analysis. Leveraging Python for data manipulation, visualization, and machine learning, I aimed to unravel insights and build a predictive model for diabetes outcomes..",
    tags: [
      {
        name: "Machine Learning Model Development",
        color: "blue-text-gradient",
      },
      {
        name: "Data Exploration and Cleaning",
        color: "green-text-gradient",
      },
      {
        name: "Model Evaluation",
        color: "pink-text-gradient",
      },
    ],
    image: DP,
    source_code_link: "https://www.linkedin.com/posts/sakthi-vel-71a873248_diabetes-prediction-activity-7151092414126915585-xldQ?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: " Health Care Exploratory Data Analysis",
    description:
      "In this insightful data analysis project, I focused on Exploratory Data Analysis (EDA) within the context of healthcare. The project aimed to derive meaningful insights and patterns from a health care dataset, utilizing statistical and visualization techniques to inform decision-making and improve understanding.",
    tags: [
      {
        name: "Descriptive Statistics:",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Exploratory Data Analysis Techniques",
        color: "pink-text-gradient",
      },
    ],
    image: HC,
    source_code_link: "https://www.linkedin.com/posts/sakthi-vel-71a873248_health-care-exploratory-data-analysiseda-activity-7146164519856222208-1nZs?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "HR Analytics Dashboard Project in Power BI",
    description:
      "In this project, I undertook the development of a robust HR Analytics Dashboard using the powerful capabilities of Power BI. The objective was to create a comprehensive tool for visualizing and analyzing key HR metrics to aid in strategic decision-making.",
    tags: [
      {
        name: "Power BI:",
        color: "blue-text-gradient",
      },
      {
        name: "Excel",
        color: "green-text-gradient",
      },
      {
        name: "Predictive Analytics",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/posts/sakthi-vel-71a873248_datavisualization-powerbi-datadrivendecisions-activity-7142001676214808576-lww4?utm_source=share&utm_medium=member_desktop",
  },
];



export { services, technologies, experiences, testimonials, projects };
