export const profile = {
  name: 'Santhosh Mamidisetti',
  title: 'Robotics Software Engineer',
  tagline: "Building robots that make reliable decisions, even when the world doesn't cooperate.",
  bio: "Robotics software engineer at Clutterbot Technologies, designing behavior-tree state machines and safety modules for autonomous robots in C++ and ROS2. I'm drawn to the hard part of robotics: making systems that degrade gracefully and recover when things go wrong. B.Tech CSE (AI) from Amrita Vishwa Vidyapeetham, 2025.",
  contact: {
    email: 'mamidisettisanthosh2004@gmail.com',
    phone: '+91 82477 94439',
  },
  socials: {
    github: 'https://github.com/SANTHOSH-MAMIDISETTI',
    linkedin: 'https://linkedin.com/in/santhosh-mamidisetti',
    twitter: 'https://x.com/_m_santhosh_',
    instagram: 'https://instagram.com/santhosh_mamidisetti',
  },

  experience: [
    {
      role: 'Robot Software Engineer',
      company: 'Clutterbot Technologies',
      location: 'Bengaluru, India',
      range: 'Jul 2025 – Present',
      url: 'https://www.clutterbot.com',
      points: [
        'Designing a Global State Machine for robot decision-making using Behavior Trees in C++',
        "Developing and maintaining the robot's core safety module",
        'Implemented fallback strategies and improved robot behavior in uncertain and ambiguous environments',
      ],
    },
    {
      role: 'Robot Software Intern',
      company: 'Clutterbot Technologies',
      location: 'Bengaluru, India',
      range: 'Feb 2025 – Jun 2025',
      url: 'https://www.clutterbot.com',
      points: [
        'Worked with ROS2 and Behavior Trees (C++) for robot decision-making logic design',
        'Developed unit tests to validate robot behaviors and safety module',
        'Translated Behavior Tree XML structures into flowcharts for non-technical stakeholders',
      ],
    },
    {
      role: 'Project Management Intern',
      company: 'ICDT',
      companyFull: 'Innovation Center for Drone Technologies',
      location: 'Visakhapatnam, India',
      range: 'Aug 2023 – Sep 2023',
      url: 'https://icdt.in',
      points: [
        'Led a 7-person team in FOD (Foreign Object Debris) detection for runway safety',
        'Achieved 91% accuracy deploying on-site vision model for FOD detection on runways and helipads',
        'Developed and automated a mechanism to calibrate drones on the production line',
      ],
    },
  ],

  // All projects verified from resume and/or public GitHub profile
  featuredProjects: [
    {
      title: 'FinGenX',
      description:
        'Diffusion-based model for financial tabular data synthesis. Developed FinDiff using embedding-based data handling to achieve high fidelity and privacy-preserving generation of structured financial datasets.',
      tech: ['Python', 'PyTorch', 'Diffusion Models', 'VAE', 'Generative AI'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/FinGenX',
      gradient: 'from-indigo-500 to-violet-700',
    },
    {
      title: 'Global Path Planning Algorithms',
      description:
        "Implementations of Dijkstra's, A*, and RRT algorithms for global path planning in 2D grid maps. Clean, well-documented code for comparing classical planning approaches on obstacle environments.",
      tech: ['Python', 'Robotics', 'Dijkstra', 'A*', 'RRT'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/Global-Path-Planning-Algorithms',
      gradient: 'from-sky-500 to-blue-700',
    },
    {
      title: 'Brainwave-Controlled Drone',
      description:
        'EEG-based control system for drone navigation. Integrated deep learning models to interpret real-time brainwave signals and transmit movement commands to a drone via dronekit and Ardupilot.',
      tech: ['Python', 'dronekit', 'Ardupilot', 'EEG Signals', 'Deep Learning'],
      github: null,
      gradient: 'from-emerald-500 to-teal-700',
    },
    {
      title: 'Text Summarizer',
      description:
        "Fine-tuned Facebook's BART-large-cnn model for text summarization. Built and deployed a full end-to-end application on AWS using FastAPI, demonstrating production ML deployment skills.",
      tech: ['Python', 'PyTorch', 'BART', 'FastAPI', 'AWS'],
      github: null,
      gradient: 'from-amber-500 to-orange-600',
    },
  ],

  otherProjects: [
    {
      title: 'Breast Cancer Prediction',
      description:
        'Implemented K-Means, Logistic Regression, and SVM classifiers from scratch. Achieved efficient classification performance through independent model building and data pre-processing.',
      tech: ['Python', 'scikit-learn', 'Pandas'],
      github: null,
    },
    {
      title: 'SLAM',
      description: '2D and 3D SLAM implementation with ROS for simultaneous localization and mapping.',
      tech: ['Python', 'ROS', 'SLAM'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/slam',
    },
    {
      title: 'TurtleBot RRT Navigation',
      description: 'RRT-based path planning for TurtleBot3 in Gazebo simulation environments.',
      tech: ['ROS', 'Python', 'RRT', 'Gazebo'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/turtlebot_rrt_navigation',
    },
    {
      title: 'Robot Perception Costmap',
      description: 'SLAM-based costmap generation for robot navigation and obstacle avoidance.',
      tech: ['Python', 'ROS', 'SLAM', 'Perception'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/robot-perception-costmap',
    },
    {
      title: '2D Mapper Robot',
      description: 'Autonomous robot that builds 2D occupancy maps of unknown environments.',
      tech: ['Python', 'ROS', 'Mapping'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/2D-Mapper-Robot',
    },
    {
      title: 'e-Yantra 2024',
      description: "Robotics competition project for IIT Bombay's e-Yantra robotics challenge.",
      tech: ['Robotics', 'Python', 'ROS'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/Eyantra',
    },
    {
      title: 'BabyCry Classifier',
      description: 'Audio ML classifier that identifies and categorizes baby cry patterns.',
      tech: ['Python', 'PyTorch', 'Audio ML'],
      github: 'https://github.com/SANTHOSH-MAMIDISETTI/BabyCry-classifier',
    },
  ],

  skills: {
    Languages: ['Python', 'C++', 'SQL (PostgreSQL)', 'MATLAB', 'JavaScript'],
    'Robotics & Simulation': ['ROS (Noetic)', 'ROS2 (Humble)', 'Gazebo', 'PyBullet', 'SUMO', 'Nav2', 'Behavior Trees'],
    'ML & Vision': ['PyTorch', 'OpenCV', 'Stable-Baselines3', 'scikit-learn', 'NumPy', 'HuggingFace'],
    'Control & Planning': ['MPC', 'LQR / LQG', 'Particle Filters', 'A*', 'RRT / RRT*', 'Dijkstra'],
    'Tools & Platforms': ['Git', 'Docker', 'Linux', 'CMake', 'GoogleTest', 'AWS', 'Arduino'],
  },

  education: [
    {
      institution: 'Amrita Vishwa Vidyapeetham',
      degree: 'B.Tech — Computer Science and Engineering (Artificial Intelligence)',
      location: 'Kerala, India',
      range: 'Oct 2021 – Jul 2025',
    },
  ],

  achievements: [
    {
      title: 'IDC Robocon 2024 — 1st Runner-Up',
      subtitle: 'International Design Contest, ABU Robocon',
      description:
        "Led a multidisciplinary team to design and build a competitive robot for ABU Robocon's international design contest. Coordinated onsite and remote teams to secure the first runner-up position.",
      icon: '🥈',
    },
    {
      title: 'STEG Fraud Detection — Top 10',
      subtitle: 'Top 10 of 2,500+ participants',
      description:
        'Placed in the top 10 out of 2,500+ participants in a data science competition to detect fraud in electricity and gas consumption for Tunisian utility company STEG.',
      icon: '🏆',
    },
  ],

  responsibilities: [
    {
      role: 'Intel Student Ambassador',
      org: 'Intel Corporation',
      range: 'Feb 2024 – Present',
    },
    {
      role: 'Team Lead, Robotics Club',
      org: 'Amrita Vishwa Vidyapeetham',
      range: 'Dec 2022 – Jul 2025',
    },
  ],
}
