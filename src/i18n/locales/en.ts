export default {
  navigation: {
    profile: 'Profile',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    certifications: 'Certifications',
    articles: 'Articles',
    language: 'Language'
  },
  profile: {
    title: 'Profile',
    name: 'I am sea-turt1e',
    role: 'Software Engineer',
    greeting: 'Hello!',
    description: 'I work as a machine learning engineer specializing in natural language processing.\nI also do a bit of backend and frontend development, as well as infrastructure construction.',
    detailedDescription: 'I mainly work as a machine learning engineer, developing machine learning models and performing data analysis. I also do backend and frontend development, as well as infrastructure construction. My specialty is natural language processing.',
    githubLink: 'Go to GitHub',
    contactLink: 'Contact Me',
    specialization: 'Specialization',
    specializationDetail: 'ML Model Development\nNatural Language Processing',
    otherSkills: 'Other Skills',
    otherSkillDetail: 'Backend and Frontend Development\nInfrastructure Construction',
  },
  skills: {
    title: 'Skills',
    programming: 'Programming Languages',
    frameworks: 'Frameworks',
    tools: 'Tools',
    databases: 'Databases',
    proficiency: 'Proficiency'
  },
  projects: {
    title: 'Featured Projects',
    viewProject: 'View Blog Post',
    viewGithub: 'View on GitHub',
    mangagraph: {
      name: 'MangaGraph',
      description: 'API for Manga Graph DB'
    },
    kanjiconv: {
      name: 'kanjiconv',
      description: 'Python library for converting "Kanji" to "Kana/Romaji" with support for proper nouns'
    },
    yurenizer: {
      name: 'yurenizer',
      description: 'Rule-based Python library for resolving notation variations'
    },
    nbanetwork: {
      name: 'NBANetwork',
      description: 'Predicting NBA player compatibility using Graph Neural Networks'
    }
  },
  experience: {
    title: 'Work Experience',
    present: 'Present',
    zkai: {
      company: 'Z-kai Inc.',
      leader: {
        role: 'R&D Team Leader',
        year: 'Sep 2024 - Present',
        description: 'Leading machine learning model development, data analysis, and LLM prototype development. Managing project progress as team leader.'
      },
      ai: {
        role: 'Backend Engineer for AI Server',
        year: 'Oct 2023 - Present',
        description: 'Development and operation of AI-related service APIs accessed by other company services'
      },
      fullstack: {
        role: 'Backend/Frontend Engineer for B2B Services',
        year: 'Jun 2024 - Aug 2024, Apr 2025 - May 2025',
        description: 'Responsible for B2B service modifications. Backend and frontend development using Go and Vue.js.'
      }
    },
    morikatron: {
      company: 'Morikatron Inc.',
      game: {
        role: 'Backend Engineer for Game Development',
        year: 'Apr 2023 - Jul 2023',
        description: 'Prototype development of company games for indie game festivals'
      },
      textgen: {
        role: 'ML/Backend Engineer for Generative Models',
        year: 'Oct 2020 - Mar 2023',
        description: 'Development of conversational text generation models using machine learning and application to chatbots.'
      },
      nlp: {
        role: 'ML Engineer for NLP Model Development',
        year: 'Sep 2022 - Dec 2022',
        description: 'Building natural language processing classification models using neural networks'
      },
      recruitment: {
        role: 'Recruitment (ML Engineer)',
        year: 'Apr 2021 - Dec 2022',
        description: 'Casual interviews and document screening for recruitment'
      }
    }
  },
  education: {
    title: 'Education',
    degree: 'Degree',
    university: 'University',
    achievements: 'Key Achievements',
    naist: {
      school: 'NAIST (Nara Institute of Science and Technology)',
      degree: 'Master of Engineering',
      year: 'Apr 2018 - Mar 2020',
      description: 'Natural Language Processing Laboratory. Specialized research in natural language processing and machine learning.',
      achievements: {
        thesis: 'Master\'s Thesis: Sarcasm Detection Considering Context in Conversations',
        internship: 'Internship: Worked on news content algorithm improvement at NewsPicks Inc. (now Uzabase Inc.)'
      }
    },
    tsukuba: {
      school: 'University of Tsukuba',
      degree: 'Bachelor of Social Engineering',
      year: 'Apr 2014 - Mar 2018',
      description: 'Organizational Behavior Laboratory. Studied behavioral psychology and acquired fundamentals of data analysis and statistics.',
      achievements: {
        thesis: 'Graduation Thesis: Analysis and statistical research on nurses\' coping with depression',
        internship: 'Internship: Marketing work at Rarejob Philippines office'
      }
    }
  },
  certifications: {
    title: 'Certifications',
    issued: 'Issued',
    expires: 'Expires',
    awsMl: {
      name: 'AWS Certified Machine Learning - Specialty',
      description: 'Professional certification demonstrating specialized knowledge and skills in machine learning on AWS',
      skills: {
        aws: 'AWS',
        ml: 'Machine Learning',
        analysis: 'Data Analysis',
        development: 'Model Development'
      }
    },
    toeic: {
      name: 'TOEIC L&R 795 points',
      description: 'Test measuring English listening and reading comprehension abilities',
      skills: {
        english: 'English',
        listening: 'Listening',
        reading: 'Reading',
        communication: 'Communication'
      }
    }
  },
  articles: {
    title: 'Zenn Articles',
    loading: 'Loading articles...',
    error: 'Failed to load articles. Please try again later.',
    readArticle: 'Read Article',
    viewAll: 'View All Articles',
    viewOnZenn: 'View on Zenn',
    characters: 'characters',
    likes: 'likes'
  },
  common: {
    loading: 'Loading...',
    error: 'An error occurred',
    retry: 'Retry'
  }
}
