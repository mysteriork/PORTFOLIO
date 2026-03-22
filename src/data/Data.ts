export const data = [
  {
    id: 1,
    title: "DeepGuard: Deepfake detection system",
    brief: `DeepGuard is a full-stack deepfake detection system. It acts like a " Dgital Forensic investigator " that uses a combination of advanced Artificial Intelligence (AI) and custom mathematical checks to determine if an image or video is real or Al-generated.`,
    objective:
      "The objective of DeepGuard is to provide a forensic tool that detects deepfake media using deep learning and signal analysis. It extracts spatial features and classifies authenticity with high accuracy to assist analysts in identifying manipulated content.",
    approach: `The system uses an Express.js server to handle file uploads via Multer and forwards them to a Python FastAPI server for heavy AI processing. It employs a three-tier face detection fallback—RetinaFace, MTCNN, or full-image analysis—to ensure the system never crashes on low-quality input. The core analysis relies on a weighted ensemble of three " Hugging Face " models (40%, 35%, and 25% weights) combined with heuristic scores like - FFT Artifact analysis for digital fingerprints and Edge Warp detection. For videos, a temporal consistency layer samples frames and applies a "Flicker Penalty" to detect the jumping inconsistencies typical of AI generation.`,
    impact: `DeepGuard achieved a competitive detection accuracy of approximately 90% for images and 87% for videos while minimizing false positives. A custom decision threshold of 0.55 was implemented to ensure that only highly suspicious media is flagged as "Fake," making the system more reliable than standard single-model detectors.`,
    Tech_stack:
      "Reactjs , Nodejs , Expressjs , Hugging Face Transformers, MTCNN, RetinaFace , Python , TensorFlow , Flask , Vercel (frontend) , HugginFace (backend)",
    Explore_More: {
      Github:
        "https://github.com/mysteriork/DeepGuard-Deep-Fake-Detection-System",
      Live_Demo: "https://deep-fake-detection-system.vercel.app/",
    },
  },
  {
    id: 2,
    title: "MiniLinked-In : simplified linkedin clone",
    brief:
      "LinkedIn Lite is a full-stack social platform built with the MERN stack that enables professional networking through JWT-based authentication, real-time post creation with media support, and interactive commenting. It features a stateless architecture with a global feed and a specialized profile management system deployed on Vercel and Render.",
    objective:
      "The objective is to build a lightweight professional networking platform that allows users to register, authenticate, and manage their professional identity. It aims to provide a functional environment for sharing posts, commenting on profiles, and viewing a community-driven content feed.",
    approach:
      "The system uses a MERN-based architecture featuring stateless JWT authentication, where the server verifies signatures without storing session data to ensure scalability. For the frontend, React.lazy() and Suspense were implemented to perform code-splitting and lazy loading on the Profile component, reducing the initial bundle size and improving performance. Data management is handled through MongoDB Atlas, utilizing a schema that links Users and Posts via Objectid references. A key security feature is the two-layer authorization logic for post deletion: the UI hides the delete button from non-owners, while the Node.js/Express backend independently verifies the requester's ID from the JWT before allowing any deletion. Additionally, the project uses bcrypt for one-way password hashing to ensure user data remains secure even if the database is compromised.",
    impact:
      "This project serves as a comprehensive demonstration of full-stack capability, successfully implementing the end-to-end lifecycle of a social platform from hashed registration to secure logout. It highlights technical maturity through the use of modern patterns like protected routing and conditional rendering based on user ownership.",
    Tech_stack:
      "MongoDB atlas, Expressjs, Reactjs, Node.js, JWT Auth , Vercel (frontend) , Render (backend)",
    Explore_More: {
      Github: "https://github.com/mysteriork/LinkedIn-Lite",
      Live_Demo: "https://linkedin-lite-virid.vercel.app/",
    },
  },
  {
    id: 3,
    title: "BLACKHOLE Search Engine: Custom search engine",
    brief:
      "BlackHole is a custom search engine prototype built with the MERN stack that automates the process of web crawling, indexing, and data retrieval. It utilizes a Breadth-First Search (BFS) algorithm to traverse the web, extracting and storing structured data in MongoDB to mimic the core functionality of a modern search engine.",
    objective:
      "The objective of BlackHole is to develop a functional prototype capable of crawling and indexing live web data for structured retrieval. It serves as a practical implementation of complex concepts like graph traversal, HTML parsing, and case-insensitive query handling to demonstrate a deep understanding of search architecture.",
    approach: `The application’s core is an Express.js backend that runs a BFS-based crawler starting from a user-provided seed URL. It uses a Queue to process pages level-by-level and a Visited Set to prevent infinite loops and re-crawling the same URLs. For each page, Axios fetches the raw HTML, and Cheerio parses it to extract the title, meta description, and all anchor links, which are then stored as indexed documents in MongoDB. The search functionality is powered by a case-insensitive Regex query on the backend, allowing the React frontend to retrieve matches regardless of their casing (e.g., "react" matches "React"). A unique feature is the self-improving index: clicking a result link in the UI triggers a background crawl of that URL, automatically expanding the engine's database as people use it.`,
    impact:
      "This project demonstrates advanced data engineering skills by applying textbook data structures—like Queues and Sets—to a real-world problem. It proves the ability to build a full data pipeline, covering everything from live HTTP requests and HTML parsing to optimized indexing and retrieval.",
    Tech_stack:
      "Reactjs , Nodejs , Expressjs , Crawling & Web Scraping , Cheerio , Search Indexing , Netlify (frontend) , Render (backend)",
    Explore_More: {
      Github: "https://github.com/mysteriork/BLACKHOLE-search-engine",
      Live_Demo: "https://blackhole-search-engine.vercel.app/",
    },
  },
  {
    id: 4,
    title: "D-LoGGer Malware Detection System",
    brief:
      "A behavior-based malware detection system monitoring processes and network activity to identify stealth keyloggers.",
    objective:
      "To detect stealth keyloggers and suspicious monitoring software using behavioral analysis instead of signature-based detection.",
    approach:
      "Combined process monitoring, keyboard hook inspection, and network activity tracking with heuristic scoring to reduce false positives.",
    impact:
      "Demonstrates practical cybersecurity defense techniques and advanced process/network monitoring strategies.",
    Tech_stack:
      "Python , PySide6 , Process Monitoring , Networking Analysis , Pyinstaller , Inno setup Compiler",
    Explore_More: {
      Github: "https://github.com/mysteriork/D-loGGER-malware-detection-system",
    },
  },
  {
    id: 5,
    title: "LeakScan Data Breach Checker",
    brief:
      "A breach intelligence full-stack web application built with the MERN stack  tool that checks compromised credentials and alerts users about potential exposure risks.",
    objective:
      "To help users determine whether their credentials like Email, Usernames ( social media handles ) etc have been exposed in known data breaches.",
    approach:
      "Integrated breach intelligence APIs like ( BreachDirectory etc ) and secure query mechanisms to validate potential credential exposure safely.",
    impact:
      "Improves user security awareness while demonstrating secure API integration and threat intelligence usage.",
    Tech_stack:
      "Reactjs , Nodejs , Expressjs , Api integration , Security analysis , OAuth2 , Netlify (frontend) , Render (backend)",
    Explore_More: {
      Github: "https://github.com/mysteriork/LeakScan-Data-Breach-Checker",
      Live_Demo: "https://leak-scan.netlify.app/",
    },
  },
  {
    id: 6,
    title: "Advanced Keylogger Simulation: Cyber Security Project",
    brief:
      "An educational and Offensive Security malware simulation demonstrating Keystroke Logging , Clipboard capture, and Encrypted data exfiltration on Discord Webhook API etc.",
    objective:
      "To simulate advanced monitoring malware behavior for cybersecurity research and defensive analysis.",
    approach:
      "Implemented keystroke capture, clipboard monitoring, screenshot logging, and encrypted data exfiltration mechanisms for educational threat simulation.",
    impact:
      "Helps understand attacker techniques, enabling better defensive and forensic countermeasures.",
    Tech_stack:
      "Python , Encryption , System Hooks , API integration , Security Research",
    Explore_More: {
      Github: "https://github.com/mysteriork/Advanced_KeyLogger",
    },
  },
];
