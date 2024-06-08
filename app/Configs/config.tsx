const Config = {
  mode: "light", //* Default Mode
  highlightList: [
    //* Write the words you want to emphasize in the description in the About You section using lowercase letters.
    "machine",
    "learning", 
    "engineer",
    "engineering",
    "innovation",
    "artificial",
    "intelligence",
    "web3",
    "digital",
    "trading",
    "freelancing",
    "ai",
    "bachelor’s",
    "3nsai",
    "asset",
    "assets",
    "cnn",
    "gan",
    "software",
    "technology",
    "revolutionize",
  ],
  skills: {
    software: [
      {
        id: 1,
        name: "Python",
        icon: "logos:python",
      },
      {
        id: 2,
        name: "Tensorflow",
        icon: "devicon:tensorflow",
      },
      {
        id: 3,
        name: "Pytorch",
        icon: "devicon:pytorch",
      },
      {
        id: 4,
        name: "Scikit-Learn",
        icon: "devicon:scikitlearn",
      },
      {
        id: 5,
        name: "Langchain",
        icon: "twemoji:parrot",
      },
      {
        id: 6,
        name: "Huggingface",
        icon: "logos:hugging-face-icon",
      },
      {
        id: 7,
        name: "Nividia Cuda",
        icon: "vscode-icons:file-type-cuda",
      },
      {
        id: 8,
        name: "Git",
        icon: "devicon:git",
      },
      {
        id: 9,
        name: "Keras",
        icon: "devicon:keras",
      },
    ],
    ui: [
      {
        id: 1,
        name: "Typescript",
        icon: "skill-icons:typescript",
      },
      {
        id: 2,
        name: "Javascript",
        icon: "skill-icons:javascript",
      },
      {
        id: 3,
        name: "HTML5",
        icon: "skill-icons:html",
      },
      {
        id: 4,
        name: "CSS3",
        icon: "skill-icons:css",
      },
      {
        id: 5,
        name: "ReactJs",
        icon: "skill-icons:react-dark",
      },
      {
        id: 6,
        name: "NextJs",
        icon: "skill-icons:nextjs-dark",
      },
      {
        id: 7,
        name: "NodeJs",
        icon: "skill-icons:nodejs-dark",
      },
      {
        id: 8,
        name: "MongoDB",
        icon: "skill-icons:mongodb",
      },
      {
        id: 9,
        name: "PostgreSQL",
        icon: "devicon:postgresql",
      },
      {
        id: 10,
        name: "Flask",
        icon: "devicon:flask",
      },
      {
        id: 11,
        name: "Bootstrap",
        icon: "devicon:bootstrap",
      },
    ],
    programs: [
      {
        id: 1,
        name: "Jira",
        icon: "devicon:jira",
      },
      {
        id: 2,
        name: "BitBucket",
        icon: "devicon:bitbucket",
      },
      {
        id: 3,
        name: "Zapier",
        icon: "cib:zapier",
      },
      {
        id: 4,
        name: "MS Teams",
        icon: "logos:microsoft-teams",
      },
      {
        id: 5,
        name: "Agile",
        icon: "iconoir:agile",
      },
    ],
  },
  information: {
    name: "Moiz Khuzema",
    email: "moizkhuzema@gmail.com",
    phone: "+923363374481",
    country: "Pakistan",
    city: "Karachi",
    degree: "Bachelor's of Science in Artificial Intelligence",
    freelance: true,
    remote: true,
    birthDay: "28 January 2002",
    title: "Machine Learning Engineer",
  },
  social: [
    {
      id: "github",
      name: "Github",
      icon: "mdi:github",
      url: "https://github.com/MoizKhuzema",
    },
    // {
    //   id: "twitter",
    //   name: "Twitter",
    //   icon: "mdi:twitter",
    //   url: "https://x.com/uzandev",
    // },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: "https://www.linkedin.com/in/moiz-khuzema/",
    },
    // {
    //   id: "stackoverflow",
    //   name: "StackoverFlow",
    //   icon: "mdi:stackoverflow",
    //   url: "https://stackoverflow.com/users/12782922/halit-uzan",
    // },
    // {
    //   id: "codewars",
    //   name: "Codewars",
    //   icon: "cib:codewars",
    //   url: "https://www.codewars.com/users/halituzan",
    // },
  ],
  workHistories: [
    {
      id: 1,
      job: "Machine Learning Engineer",
      company: "3NS.ai",
      url: "https://3ns.ai/",
      companyLocation: "United Kingdom",
      workStart: "Feb 2024",
      workEnd: "Present",
      description: "description1",
      technologies: [
        "Langchain",
        "Langgraph",
        "OpenAI",
        "Cohere",
        "Flask",
        "Typescript",
        "HTML",
        "Tailwind CSS",
        "NextJs",
        "PostgreSQL",
        "Figma",
      ],
      project: [],
    },
    {
      id: 2,
      job: "Fullstack Developer",
      company: "InfinixAi",
      url: "https://infinixai.com/",
      companyLocation: "United States",
      workStart: "July 2023",
      workEnd: "Oct 2023",
      description: "description2",
      technologies: [
        "Langchain",
        "OpenAI",
        "BinanceAPI",
        "TA-Lib",
        "Javascript",
        "HTML",
        "CSS",
        "ReactJs",
      ],
      project: [],
    },
  ],
  portfolio: [
    {
      id: 1,
      title: "Crypto Trading Signal Generation",
      technologies: ["Langchain", "Python", "OpenAI", "BinanceAPI", "Streamlit"],
      icons: [
        "twemoji:parrot",
        "logos:python",
        "logos:openai-icon",
        "simple-icon:binance",
        "devicon:streamlit",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/Automated-Crypto-Trading-Signal-Generator.git",
        live: false,
      },
      description:
        "I developed a novel method to automate the generation of crypto trading signals by utilizing binance api for historical data, autoGPT for market/news sentiment, TALib for technical analysis, and OpenAI for language generation.",
      img: "/projects/entegrenity.jpg",
    },
    {
      id: 2,
      title: "Firesmart Community",
      technologies: ["Agisoft", "Yolov5", "Roboflow"],
      icons: [
        "devicon:blender",
        "devicon:pytorch",
        "devicon:python",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/FireSmart-Community",
        live: false,
      },
      description:
        "I wrote a script to combine multiple images into a 3d orthomosiac mesh, preprocessed it into 8x8 tiles and trained a yolov5 model to detect potential fire hazards. The model also measures the level of threat based on how close the threat is to houses.",
      img: "/projects/barcode-finder.jpg",
    },
    {
      id: 3,
      title: "Live NFL Streaming Website",
      technologies: ["Selenium", "Streamlit"],
      icons: [
        "devicon:selenium",
        "devicon:streamlit",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/NFL-Streamer",
        live: false,
      },
      description:
        "I created a website that scrapes nfl match schedules and live streaming links from https://reddit1.nflbite.com/ and allows user to view matches live for free.",
      img: "/projects/barcode.jpg",
    },
    {
      id: 4,
      title: "Webpage Aesthetics Scorer",
      technologies: ["Tensorflow", "Selenium", "Scikit-Learn"],
      icons: ["devicon:tensorflow", "devicon:selenium", "devicon:scikitlearn"],
      url: {
        repo: "https://github.com/MoizKhuzema/WebsiteScorer",
        live: false,
      },
      description:
        "Wrote a script that takes screenshots of webpages using selenium. Developed a CNN model that scores the webpage aesthetics on a scale of 10. The model is capable of recognizing the genre of webpage (news, sports, entertainment, etc) and score respectively. The model is trained on 20000 images from Kaggle's Webscreenshots dataset.",
      img: "/projects/tdk.jpg",
    },
    {
      id: 5,
      title: "Floorplan Generation using GAN",
      technologies: ["Pytorch", "Python"],
      icons: [
        "devicon:pytorch",
        "devicon:python",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/Automated-FloorPlan-Generator",
        live: false,
      },
      description:
        "I developed a GAN model from scratch that takes house and room dimensions as input and generates a blueprint of floorplan. The model is trained on LIFULL HOME’s dataset comprising 117,000 floor plans. The model follows the chinese residency regulations.",
      img: "/projects/lingo-web.jpg",
    },
    {
      id: 6,
      title: "Litter Detection from High Rise Building",
      technologies: ["OpenCV", "Python"],
      icons: [
        "devicon:opencv",
        "devicon:python",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/Litter-Detection",
        live: false,
      },
      description:
        "Developed a tracking system to detect and track litter falling from high-rise buildings. The system is capable of detecting litter apart from weather conditions, birds, bugs, and other noises. The system uses kalman filtering to identify which window the littering was done from. I integrated the tracking system into a HIKSVISION CCTV camera and developed a dashboard to record littering evidence.",
      img: "/projects/lingo-web.jpg",
    },
    {
      id: 7,
      title: "EDA on Kaggle's Datasets",
      technologies: ["Pandas", "Scikit-Learn", "Kaggle"],
      icons: [
        "devicon:pandas",
        "devicon:scikitlearn",
        "devicon:kaggle",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/EDA-Analysis",
        live: false,
      },
      description:
        "I performed Exploratory Data Analysis on the following Kaggle Datasets: CIFAR-10, Pak-Wheels, Play Tennis, Breast Cancer, Titanic, Iris, Pima Indians Diabetes",
      img: "/projects/lingo-web.jpg",
    },
    {
      id: 8,
      title: "Sentiment Analysis on Kaggle's Datasets",
      technologies: ["Scikit-Learn", "Kaggle"],
      icons: [
        "devicon:scikitlearn",
        "devicon:kaggle",
      ],
      url: {
        repo: "https://github.com/MoizKhuzema/Sentimental-Analysis",
        live: false,
      },
      description:
        "I performed Sentiment Analysis on the following Kaggle Datasets: cyber bullying, amazon data analysis, fake/real news, earthquake tweets, elon musk tweets, movie reviews, ecommerce reviews",
      img: "/projects/lingo-web.jpg",
    },
  ],
};
export default Config;
