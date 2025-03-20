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
import port5 from "../src/assets/images/foto.jpg";


const introdata = {
    title: "I’m Satria Nugraha Saputra",
    animated: {
        first: "I Love Analytics",
        second: "I Code Cool Visual Analytics",
        third: "I Design Analytics Dashboard",
    },
    description: "Saya adalah lulusan Teknik Informatika dengan minat besar di bidang analisis data dan machine learning. Memiliki keahlian dalam pemrograman menggunakan Python dan SQL, serta mampu mengolah, menganalisis, dan memvisualisasikan data untuk menghasilkan insight yang mendukung pengambilan keputusan.",
    your_img_url: port5,
};

const dataabout = {
    title: "abit about my self",
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

const skills = [{
        name: "Python",
        value: 80,
    },
    {
        name: "SQL",
        value: 70,
    },
    {
        name: "Excel",
        value: 80,
    },
    {
        name: "Spreadsheet",
        value: 80,
    },
    {
        name: "Power BI",
        value: 70,
    },
];

const services = [{
        title: "Data Analysis & Visualization",
        description: "Mengolah dan menganalisis data untuk memberikan wawasan yang mendalam dan visualisasi yang mudah dipahami, menggunakan alat seperti Power BI, Tableau, dan Excel.",
    },
    {
        title: "UI & UX Design",
        description: "Mendesain antarmuka yang menarik dan pengalaman pengguna yang optimal untuk aplikasi dan situs web, dengan fokus pada kemudahan penggunaan dan estetika.",
    },
    {
        title: "Microsoft Office",
        description: "Meningkatkan produktivitas dengan Microsoft Office, termasuk pembuatan dokumen, analisis data di Excel, dan desain presentasi PowerPoint yang profesional.",
    },
];

const dataportfolio = [{
        img: port1,
        description: "Menampilkan data penjualan secara visual dan interaktif dengan Excel.",
        link: "https://github.com/satrians/Dashboard-Sales-Transaction_with_Excel",
    },
    {
        img: port3,
        description: "Memonitoring data prediksi bencana alam.",
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
        img: "https://ieee-dataport.org/sites/default/files/styles/3x2/public/dataset-cover_1.jpg?itok=d3rZzJJi",
        description: "Menganalisis prediksi penyakit Stroke.",
        link: "https://github.com/satrians/Project_Machine_Learning_Prediction_Healtchare_Stroke",
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
