import Head from "next/head";
import Image from 'next/image';

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import Lottie from 'react-lottie';
import animationData from '../public/animation.json';
import { Link } from 'react-scroll';
import { FaPython, FaHtml5, FaCss3Alt, FaJsSquare, } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPandas, SiJupyter, SiMysql , SiNumpy} from 'react-icons/si';


const ContactMe = () => {
  const [showPhone, setShowPhone] = useState(false);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzjxXSOsNnUjQH3vXQ6fKw0WR_coKhrrNCr5kShOAf8W3rCzv7pHFEKMoq2dg-CltwDCw/exec';
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    try {
      const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form)});
      alert("Sent Successfully!");
      form.reset();
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    
<section id="contactme" className="bg-gray-100 py-20 dark:bg-gray-800">
  <div id="contact" className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="contact-left w-full md:w-1/2 px-4 mb-8 md:mb-0">
      <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Contact Information</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4"><i className="fas fa-paper-plane"></i>Email: adarshgogineni@gmail.com</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            <i className="fas fa-phone "></i>
            <span onClick={() => setShowPhone(!showPhone)}>
              Phone: {showPhone ? '732-692-9668' : 'Click to show'}
            </span>
        </p>        
          <div className="flex ">
          <a className="transform hover:scale-125 p-2 transition-transform duration-500 ease-in-out" href="https://linkedin.com/in/adarshgogineni" target="_blank" rel="noopener noreferrer" >
                <AiFillLinkedin size={42}/>
          </a>
          <a className="transform hover:scale-125 p-2 transition-transform duration-500 ease-in-out" href="https://github.com/adarshgogineni" target="_blank" rel="noopener noreferrer">
                <AiFillGithub size={42}/>
          </a>
        </div>
        <a href="/Adarsh Resume 2023.pdf" download className="btn btn2 mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded">Download Resume</a>
      </div>
      <div className="contact-right w-full md:w-1/2 px-4">
        <form name="submit-to-google-sheet" onSubmit={handleSubmit} className="bg-white p-6 rounded shadow dark:bg-gray-700">
          <input type="text" name="Name" placeholder="Your Name" required className="w-full mb-4 p-2 border border-gray-200 rounded text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600" />
          <input type="email" name="Email" placeholder="Your Email" required className="w-full mb-4 p-2 border border-gray-200 rounded text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600" />
          <textarea name="Message" rows="6" placeholder="Your Message" className="w-full mb-4 p-2 border border-gray-200 rounded text-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"></textarea>
          <button type="submit" className="btn btn2 w-full bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
};


const AboutMe = () => {
  const [selectedTab, setSelectedTab] = useState('Education');

  return (
    <div>
      {/* Other content in your About Me section */}

      <div className="flex justify-start pl-72 my-4">
        <button 
          className={`mx-4 py-2 px-6 border-b-4 transition-all duration-300 ease-in-out rounded-lg shadow-md hover:scale-105 hover:shadow-lg ${selectedTab === 'Education' ? 'border-blue-500 bg-blue-100 text-blue-800 dark:border-blue-300 dark:bg-gray-700 dark:text-blue-200' : 'border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300'}`} 
          onClick={() => setSelectedTab('Education')}
        >
          Education
        </button>
        <button 
          className={`mx-4 py-2 px-6 border-b-4 transition-all duration-300 ease-in-out rounded-lg shadow-md hover:scale-105 hover:shadow-lg ${selectedTab === 'Experience' ? 'border-blue-500 bg-blue-100 text-blue-800 dark:border-blue-300 dark:bg-gray-700 dark:text-blue-200' : 'border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300'}`} 
          onClick={() => setSelectedTab('Experience')}
        >
          Experience
        </button>
      </div>

      {selectedTab === 'Education' && (
        <div className="ml-20 py-10 transition-all duration-500 fade-in">
          { <div>
                <div className="text-lg ml-4 justify-end">
                  <a href="https://www.stevens.edu/program/machine-learning-masters" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold">Stevens Institute of Technology, Hoboken NJ</a>
                  <ul className="list-disc ml-10 py-5">
                    <li className="font-bold">Master of Science in Machine Learning | GPA: 3.8/4.0</li>
                    <li>Graduation Date: May 2025</li>
                    <li>Relevant Coursework: Fundamentals of Machine Learning, Knowledge Discovery and Data Mining, Web Programming, Deep Learning, Human Computer Interaction</li>
                  </ul>
                  <a href="https://www.ece.rutgers.edu/undergraduate-overview" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold">Rutgers University, New Brunswick, NJ</a>
                    <ul className="list-disc ml-10 py-5">
                      <li className="font-bold">Bachelor of Science in Electrical and Computer Engineering; Computer Engineering Concentration</li>
                      <li>Minor in Computer Science | GPA: 3.44/4.0 | Honors: Magna Cum Laude, Dean’s List</li>
                      <li>Graduation Date: May 2020</li>
                      <li>Relevant Coursework: Software Engineering, Operating Systems, Data Management, Algorithms, Numerical Analysis, Intro to AI</li>
                    </ul>
                  </div>
              </div>}
        </div>
      )}

      {selectedTab === 'Experience' && (
        <div className="ml-20 py-10 transition-all duration-500 fade-in">
          {<div>
                <div className="text-lg ml-4 justify-end">
                  <h3  className="text-2xl font-bold">Data Engineer - CDW</h3>
                  <h3  >March 2022 – May 2023</h3>
                  <ul className="list-disc ml-10 py-5">
                    <li>Designed, developed, and maintained multiple scalable ETL Pipelines in SSIS and Azure Data Factory</li>
                    <li>Performed data analysis, preparation, cleaning, integration, and automation of billions of records from heterogeneous sources</li>
                    <li>Ensured daily data integrity and system availability with all projects</li>
                    <li>Created, modified, and updated large scale SQL scripts aggregating billions of records including Sales, Marketing, and Customer data</li>
                    <li>Modified data models and schemas based on business and engineering requirements, automating many manual tasks</li>
                    <li>Trained Neural Networks with Keras on the preprocessed data while considering the gradient descent variations</li>
                    <li>Developed and extended many design processes, frameworks, and reusable components for use in various data engineering functions</li>
                  </ul>
                  <h3  className="text-2xl font-bold">Technical Support Engineer - LIGL</h3> 
                  <h3  >January 2021 – March 2022</h3>                  
                  <ul className="list-disc ml-10 py-5">
                    <li>Planned and developed programs (SQL and Python) to compile data from all aspects of a legal case lifecycle, from initial complaint to analysis and review, into an interactive dashboard</li>
                    <li>Processed datasets with thousands of files in order to import data with the correct format into company databases</li>
                    <li>Wrote SQL queries to extract PII’s (Personally Identifiable Information), automate retrieval of key metrics, and solve support tickets</li>
                    <li>Worked with niche in house proprietary programs (DataNavigator, Automate, and Totalhold) to individually suit a client’s needs and produce real time dynamic case reports</li>
                    <li>Worked with partners such as Nuix, Relativity, NeConnective, EnCase Forensic, IPro, and Clairvoya</li>
                    <li>Day to day activity monitoring and problem-solving involving security keys, crashes, and data sorting/manipulation, SQL server replication and taking adhoc backups</li>
                  </ul>
                  </div>
              </div>}
        </div>
      )}
    </div>
  );
};

// Define a single project component
const Project = ({ imgSrc, altText, projectLink, title, description }) => (
  <a href={projectLink} target="_blank" rel="noopener noreferrer" className="project">
    <Image className="project-image rounded-lg shadow-2xl" src={imgSrc} alt={altText} width={600} height={600} />
    <div className="layer project-content">
      <h3 className="text-4xl p-4">{title}</h3>
      <p>{description}</p>
    </div>
  </a>
);


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.style.setProperty('--background-color', 'black');
      document.documentElement.style.setProperty('--text-color', 'white');
    } else {
      document.documentElement.style.setProperty('--background-color', 'white');
      document.documentElement.style.setProperty('--text-color', 'black');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
   
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" main-content px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between ">
            <h1 className="font-burtons text-xl">Adarsh Gogineni</h1>
            <ul className="flex items-center">
              <li className="mr-10">
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <button className="transform hover:scale-125 transition-transform duration-500 ease-in-out text-lg font-bold">
                      About Me
                    </button>
                  </Link>
              </li>
              <li className="mr-10">
                  <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        <button className="transform hover:scale-125 transition-transform duration-500 ease-in-out text-lg font-bold">
                          Projects
                        </button>
                      </Link>
              </li>
              <li className="mr-10">
                    <Link
                              activeClass="active"
                              to="contactme"
                              spy={true}
                              smooth={true}
                              offset={-70}
                              duration={500}
                            >
                              <button className="transform hover:scale-125 transition-transform duration-500 ease-in-out text-lg font-bold">
                                Contact Me
                              </button>
                      </Link>
              </li>
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="transform hover:scale-125 transition-transform duration-500 ease-in-out cursor-pointer text-2xl"
                />
              </li>
              <li>
              <a
                className="inline-block transform hover:scale-125 transition-transform duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="/Adarsh Resume 2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl fade-in">
              Adarsh Gogineni
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl fade-in">
              Machine Learning, AI, and Web Development
            </h3>
            <p className="text-md py-5 leading-8 max-w-xl mx-auto md:text-xl fade-in">
            Specializing in Machine Learning, AI, and Web Development. Let&apos;s dive into the world of intelligent applications and interactive web experiences. Get started with me today!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 ">
              <a className="transform hover:scale-125 transition-transform duration-500 ease-in-out" href="https://linkedin.com/in/adarshgogineni" target="_blank" rel="noopener noreferrer" >
                <AiFillLinkedin />
              </a>
              <a className="transform hover:scale-125 transition-transform duration-500 ease-in-out" href="https://github.com/adarshgogineni" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Lottie options={{
                  loop: true,
                  autoplay: true, 
                  animationData: animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }} height={400} width={400} />
            </div>
          </div>
        </section>
        <section className=" fade-in py-20 "id="about" >
              <h2 className="text-5xl font-bold mb-2 text-center">About Me</h2>
              <div className="flex">
              <div className="relative w-64 h-64 mt-40">
                <Image className="rounded-full" src="/profilepicsmall.jpg" alt="Profile" layout='fill' objectFit="cover" />
              </div>                
              <AboutMe />
              </div>
              
            <p className="text-lg py-4">
              As a dedicated student in the field of Machine Learning at Stevens Institute of Technology in Hoboken NJ, I am deeply fascinated by the limitless possibilities of AI and its potential to revolutionize various sectors. My academic background in electrical and computer engineering from Rutgers Unviersity has given me a robust foundation in the technical aspects of this field, fueling my ambition to become a skilled machine learning engineer.
            </p> 
            <p className="text-lg py-2">
              My pursuit in this dynamic area is driven by a commitment to innovation and a passion for tackling complex challenges. I am enthusiastic about learning and applying cutting-edge AI techniques, and I am excited to contribute to the advancement of machine learning technologies that have the power to make significant impacts in the world.
            </p>
            <br></br>
            <h3 className="text-2xl text-center py-10">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
              <div className="flex flex-col items-center justify-center"><FaPython className="text-4xl" /><p>Python</p></div>
              <div className="flex flex-col items-center justify-center"><FaHtml5 className="text-4xl" /><p>HTML</p></div>
              <div className="flex flex-col items-center justify-center"><FaCss3Alt className="text-4xl" /><p>CSS</p></div>
              <div className="flex flex-col items-center justify-center"><FaJsSquare className="text-4xl" /><p>JavaScript</p></div>
              <div className="flex flex-col items-center justify-center"><SiTensorflow className="text-4xl" /><p>TensorFlow</p></div>
              <div className="flex flex-col items-center justify-center"><SiScikitlearn className="text-4xl" /><p>Scikit-Learn</p></div>
              <div className="flex flex-col items-center justify-center"><SiPandas className="text-4xl" /><p>Pandas</p></div>
              <div className="flex flex-col items-center justify-center"><SiJupyter className="text-4xl" /><p>Jupyter Notebooks</p></div>
              <div className="flex flex-col items-center justify-center"><SiMysql className="text-4xl" /><p>SQL</p></div>
              <div className="flex flex-col items-center justify-center"><SiNumpy className="text-4xl" /><p>Numpy</p></div>
              
            </div>


      </section>
      <section className="fade-in py-20" id="projects">
  <h2 className="text-5xl font-bold mb-2 pb-6 text-center ">Projects</h2>

  
<div className="flex justify-between">
  <Project
    
    imgSrc="/animerecommender.jpg"
    altText="Project 1"
    projectLink="https://github.com/adarshgogineni/AnimeRecommenderFlask"
    title="Anime Recommender System"
    description="Gives recommendations of Similar Anime based on the anime that is searched for. Cleaned and preprocessed anime data and trained an ML Model - Cosine Similarity to create recommendations."
  />
  <Project
    imgSrc="/work-2.png"
    altText="Project 2"
    projectLink="https://github.com/adarshgogineni/Home-Automation--Sensors"
    title="Hazard Prevention System"
    description="Implemented various sensors with the Arduino NodeMCU WiFi modules to detect signals around the house such as gas leaks, floods, and break- ins. Connected sensors to a basic android app built on Android Studio, backed by Google Firebase, to send notifications to users when sensors pick up signals in the house"
  />
  <Project
    imgSrc="/RoommateRoulette.jpg"
    altText="Project 3"
    projectLink="https://github.com/adarshgogineni/CS-546-Group-33-Final-Project"
    title="Roommate Roulette"
    description="Roommate Roulette is an application designed to help you find the perfect roommate(s) for your living situation. Whether you're searching for a single roommate or a group, this tool simplifies the process of finding compatible housemates."
  />
</div>
  
<div className="flex justify-center">
  <a
    className="transform hover:scale-125 transition-transform duration-500 ease-in-out bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md text-lg font-bold"
    href="https://github.com/adarshgogineni"
    target="_blank"
    rel="noopener noreferrer"
  >
    See More
  </a>
</div>

</section>


      <section id="contactme">
        <h1 className="text-5xl font-bold mb-2 pb-5 text-center">Contact Me</h1>
        <ContactMe />
              
      </section>

      <div className="copyright flex justify-center items-center h-16">
        <p className="text-lg">Copyright © Adarsh Gogineni</p>
      </div>
        
        
      </main>
    </div>
  );
}
