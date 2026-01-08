
import { Experience, Project, Skill } from './types';

export const RESUME_DATA = {
  name: "Libin Babu",
  location: "Kochi, Kerala, India",
  email: "Libinbabukalapurackal@gmail.com",
  linkedin: "linkedin.com/in/libin-babu",
  github: "github.com/LibinBabu2003",
  role: "AI & Machine Learning Engineer",
  summary: "AI and Machine Learning fresher with a strong academic background and hands-on experience in Python, data analysis, and machine learning model development. Certified in Hugging Face AI Agents Fundamentals and Oracle Cloud Infrastructure AI Foundations.",
  
  experiences: [
    {
      title: "Data Science Intern",
      company: "Senscript Technologies",
      location: "India",
      date: "Jul 2025 – Present",
      description: [
        "Processed and analyzed structured datasets using Python, Pandas, and NumPy.",
        "Performed exploratory data analysis (EDA) to identify trends and anomalies.",
        "Built and evaluated machine learning models using Scikit-learn, improving accuracy by 10%.",
        "Automated data preprocessing steps, reducing manual cleaning time by 30%.",
        "Documented experiments and results for team reference."
      ]
    }
  ] as Experience[],

  projects: [
    {
      title: "ML Task Prediction System",
      description: [
        "Developed end-to-end ML pipeline using Python and Scikit-learn.",
        "Implemented Logistic Regression to predict task completion probability.",
        "Evaluated performance using precision, recall, and confusion matrix."
      ],
      tech: ["Python", "Scikit-learn", "ML Pipeline"]
    },
    {
      title: "Customer Churn Prediction",
      description: [
        "Built supervised ML models using Logistic Regression and Random Forest.",
        "Achieved 85% prediction accuracy and derived actionable insights."
      ],
      tech: ["Logistic Regression", "Random Forest", "Cross-validation"]
    },
    {
      title: "System Log Data Analysis",
      description: [
        "Analyzed large-scale system log files using Python.",
        "Identified performance bottlenecks using statistical methods.",
        "Visualized insights using Matplotlib."
      ],
      tech: ["Python", "Statistics", "Matplotlib"]
    }
  ] as Project[],

  skills: [
    { name: "Python", category: "Programming" },
    { name: "C++", category: "Programming" },
    { name: "Pandas", category: "Data Analysis" },
    { name: "NumPy", category: "Data Analysis" },
    { name: "Scikit-learn", category: "ML" },
    { name: "TensorFlow", category: "Deep Learning" },
    { name: "Keras", category: "Deep Learning" },
    { name: "MySQL", category: "Databases" },
    { name: "PostgreSQL", category: "Databases" },
    { name: "Git", category: "Tools" },
    { name: "VS Code", category: "Tools" }
  ] as Skill[]
};
