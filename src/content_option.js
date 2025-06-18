const logotext = "SNS";
const meta = {
    title: "Satria Nugraha Saputra",
    description: "I’m Satria Nugraha Saputra data scientist _ Data Analytics",
};


// Gambar project
import port1 from "../src/assets/images/project1.png";
import port2 from "../src/assets/images/project2.png";
import port3 from "../src/assets/images/project3.png";
import port4 from "../src/assets/images/project4.png";
import port5 from "../src/assets/images/foto1.jpg";
import port6 from "../src/assets/images/Analisis_Sentimen_WA.png";
import port7 from "../src/assets/images/Customer Segmentation and Classification using Clustering and Decision Tree.png";


const introdata = {
    title: "I’m Satria Nugraha Saputra",
   animated: {
        first: "I Build AI-Powered Solutions",
        second: "I Analyze Data for Insights",
        third: "I Code with Python & SQL"
    },
    description: "A fresh graduate in Informatics Engineering from Universitas Semarang with a strong passion for Artificial Intelligence, Data Science, and data-driven decision-making. Experienced in Python programming, data analysis, machine learning, and data visualization. Participated in the IBM SkillsBuild for AI & Cybersecurity program and various data-related projects. Known for being a fast learner with strong problem-solving skills, eager to contribute as a junior AI Engineer in a collaborative and innovative team environment.",
    your_img_url: port5,
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "Fresh graduate from Semarang University who wants to become a professional in the data field who is able to transform raw data into high-value insights to support strategic decision making. As a graduate of Informatics Engineering, I have a strong interest in data analysis, programming (Python, SQL), and machine learning. I am also interested in database management and data visualization to convey information effectively. Problem-solving skills and a desire to continue learning are my main assets in facing challenges in the fields of data science and data engineering. With determination and commitment, I am sure I can become a competent Data Scientist or Data Engineer and contribute to technological progress.",
};
const worktimeline = [{
        jobtitle: "IT Support Team",
        where: "CV Solusi Arya Prima",
        date: "2024",
    },
    {
        jobtitle: "Student Internship",
        where: "PT Hacktivate Teknologi Indonesia",
        date: "2024",
    },
];

const skills = {
  "Programming & Libraries": [
    { name: "Python", value: 85 },
    { name: "SQL", value: 75 },
    { name: "Pandas", value: 80 },
    { name: "NumPy", value: 75 },
    { name: "Scikit-learn", value: 70 },
    { name: "TensorFlow / Keras", value: 65 },
  ],
  "Visualization Tools": [
    { name: "Excel", value: 80 },
    { name: "Power BI", value: 75 },
    { name: "Looker Studio", value: 70 },
    { name: "Matplotlib / Seaborn", value: 70 },
  ],
  "NLP & Text Processing": [
    { name: "Natural Language Processing (NLP)", value: 70 },
    { name: "Text Mining", value: 70 },
  ],
  "Productivity & Collaboration": [
    { name: "Google Sheets / Spreadsheet", value: 80 },
    { name: "Microsoft Office", value: 80 },
    { name: "Git & GitHub", value: 75 },
  ],
};


const services = [
    {
        title: "🧠 Data Analysis & Visualization",
        description: "Providing actionable insights through data processing, analysis, and clear visualizations using Power BI, Tableau, Excel, and Python-based libraries such as Matplotlib and Seaborn.",
    },
    {
        title: "🤖 Machine Learning & Predictive Modeling",
        description: "Building and evaluating machine learning models to uncover patterns, make predictions, and support data-driven decisions using tools such as scikit-learn and TensorFlow.",
    },
    {
        title: "🧾 Text Mining & Natural Language Processing",
        description: "Extracting insights from text data using NLP techniques such as sentiment analysis, topic modeling, and keyword extraction, applied to reviews, articles, and social media content.",
    },
    {
        title: "📊 Database Management & SQL",
        description: "Designing, querying, and managing relational databases using SQL (MySQL, PostgreSQL), enabling efficient data storage, retrieval, and transformation.",
    },
    {
        title: "📈 Data Productivity Tools",
        description: "Utilizing Microsoft Office Suite (Word, Excel, PowerPoint, etc.) and Google Suite (Docs, Sheets, Slides, etc.) to support documentation, data organization , and profesional reporting in business environtments.",
    }
];


const dataportfolio = [{
        img: port1,
        description: "Menampilkan data penjualan secara visual dan interaktif dengan Excel.",
        link: "https://github.com/satrians/Dashboard-Sales-Transaction_with_Excel",
    },
    {
        img: port3,
        description: "Memprediksi Teks Bencana Alam Dengan NLP.",
        link: "https://github.com/satrians/Projek_Machine_Learning_with_NLP",
    },
    {
        img: port2,     
        description: "Menampilkan data penjualan secara visual dan interaktif dengan Looker Studio",
        link: "https://github.com/satrians/Retail_Transaction_Dashboard_With_Looker_Studio",
    },
    {
        img: "https://image.myskill.id/elearning-portfolio/GZhMNg4kKJUuU2xVt7pN/full.png",
        description: "Menampilkan data Time Series secara visual dan interaktif.",
        link: "https://github.com/satrians/Time_Series_Analysis",
    },
    {
        img: "https://miro.medium.com/v2/resize:fit:594/1*DVONSUOkxm_c3XALlSP1lg.png",
        description: "Menganalisis sentimen Pengguna Aplikasi di Google Play Store.",
        link: "https://github.com/satrians/Comparison-Model-RNN-and-CNN-in-Sentiment-Classification-of-User-Reviews-on-the-Play-Store",
    },
    {
        img: port4,
        description: "Menampilkan Bike Sharing secara visual dan interaktif dengan streamlit.",
        link: "https://github.com/satrians/bike-sahring-dashboard",
    },
    {
        img: "https://miro.medium.com/v2/resize:fit:966/1*rnko_Sy3iEQ-sUbzmU4A-A.png",
        description: "Menganalisis klasifikasi pesan spam atau tidak.",
        link: "https://github.com/satrians/Project_Text_classification_Email_Spam",
    },
    {
        img: "https://media.licdn.com/dms/image/v2/C4D12AQHjc3c5eqQpRA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1636651730602?e=2147483647&v=beta&t=b0h9Jb3UHLkxwGqAWIECP6MGP7yhkLLuRdGLpgr6PGE",
        description: "Menganalisis prediksi penyakit Stroke.",
        link: "https://github.com/satrians/Project_Machine_Learning_Prediction_Healtchare_Stroke",
    },
    {
        img: "https://image.myskill.id/elearning-portfolio/ZTdlsfp90liSlgYjkBCS/full.png",
        description: "Suatu kegiatan untuk mengetahui apakah terdapat perilaku user yang kembali bertransaksi atau menggunakan suatu produk.",
        link: "https://github.com/satrians/User_Retention_Analysis/tree/main",
    },
    {
        img: port6,
        description: "Menganalisis Sentimen Review pesan Whatsapp.",
        link: "https://github.com/satrians/Project_Analysis_Sentiment_Review_Whatsapp",
    },
    {
        img: port7,
        description: "Menganalisis Customer Segmentation dan Classification menggunakan Clustering dan Decision Tree.",
        link: "https://github.com/satrians/Project_Supervised_and_Unsupervised_Learning",
    }
];

const contactConfig = {
    YOUR_EMAIL: "satrians49@gmail.com",
    YOUR_FONE: "(+62) 817-7059-8205",
    description: "Untuk informasi lebih lanjut atau untuk memulai proyek bersama, Anda dapat menghubungi melalui salah satu metode berikut:",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_054hgwt",
    YOUR_TEMPLATE_ID: "template_z8rvhmp",
    YOUR_USER_ID: "vW2WXyXM-VjdfgEIt",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
