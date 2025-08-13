
export interface CardData {
  title: string;
  subtitle: string;
  date?: string;
  details: string[];
}

export const personalInfo = {
  name: "Samyuktha Aligate",
  title: "AWS Cloud Practitioner",

  // --- IMPORTANT ---
  // Using Google Drive for image hosting on a live website is NOT recommended.
  // It is unreliable because Google can change its links or block access at any time,
  // causing your image to disappear.
  //
  // *** THE BEST SOLUTION (Guaranteed to Work): ***
  // 1. Download your profile picture to your computer.
  // 2. Place the image file (e.g., `profile.jpg`) in the same folder as your `index.html`.
  // 3. Change the `imageUrl` below to just the filename: `imageUrl: "/profile.jpg",`
  //
  // The link below is an attempt to use a more direct Google Drive link format, but it may still fail.
  imageUrl: "https://lh3.googleusercontent.com/d/1g3d2XgY3O8z8f7kR8v9e7g5T_yHwJz4e/view?usp=sharing",
  contact: {
    email: "samyukthaaligate@gmail.com",
    phone: "+918179645161",
    linkedin: "aligate-samyuktha",
    github: "samyuktha-aligate" // Placeholder
  }
};

export const careerObjective: string = "Motivated graduate with a solid foundation in cloud computing and AWS fundamentals, eager to start a career as an AWS Cloud Practitioner. Committed to continuous learning and applying AWS best practices to help organizations optimize their cloud solutions while contributing effectively to team projects.";

export const technicalSkills: string[] = [
  "Python",
  "JavaScript",
  "Bash/Shell Scripting",
  "SQL",
  "AWS Cloud",
  "Linux"
];

export const expertise: string[] = [
  "AWS Core Services (EC2, S3, VPC, IAM)",
  "Cost Optimization Techniques",
  "AWS Pricing Models",
  "AWS Storage & Compute",
  "Basic Networking (VPCs, subnets, security groups)"
];

export const internships: CardData[] = [
  {
    title: "CISCO",
    subtitle: "Cybersecurity Intern",
    date: "June 2022 – Aug 2022",
    details: [
      "Completed foundational courses in cybersecurity, covering key principles, common threats, and risk management.",
      "Gained hands-on training with Packet Tracer for network simulation.",
      "Applied security best practices in network configuration and troubleshooting.",
      "Conducted vulnerability assessments to identify potential security weaknesses."
    ]
  },
  {
    title: "3CORTEX",
    subtitle: "Data Science Intern",
    date: "July 2022 – Aug 2022",
    details: [
      "Completed comprehensive training in data science and cloud solutions.",
      "Analyzed real-world data for forecasting and fraud detection using modern tools.",
      "Applied data science methods to identify patterns and support decision-making.",
      "Delivered actionable insights through clear, concise reports."
    ]
  }
];

export const projects: CardData[] = [
  {
    title: "Prediction of Cardiac Arrhythmia",
    subtitle: "Machine Learning Model",
    details: [
      "Developed an ML model for early cardiac arrhythmia detection using ECG data.",
      "Implemented preprocessing, normalization, and feature extraction (HRV, PQRST complex).",
      "Achieved 98% accuracy using SVM, KNN, XGBoost, and Linear Regression models.",
      "Visualized results to effectively communicate complex insights."
    ]
  },
  {
    title: "Parking Lot Space Detection",
    subtitle: "Computer Vision System",
    details: [
      "Created a real-time parking lot space detection system using OpenCV.",
      "Processed security video frames with edge detection, Gaussian blurring, and grayscale conversion.",
      "Applied binary thresholding and contour detection to classify parking spaces as occupied or vacant.",
      "Achieved 98% accuracy in identifying open spots from live video."
    ]
  }
];