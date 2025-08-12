import React, { useState, useEffect, useRef } from 'react';
import StarRating from './StarRating';

const SkillsSection = ({
  title = "Technical Skills",
  subtitle = "A comprehensive overview of my development expertise across various technologies and frameworks",
  summaryTitle = "Constantly Learning & Evolving",
  summaryText = "I'm passionate about staying current with emerging technologies and best practices in web development. Always excited to take on new challenges and expand my skill set!",
  skillsData = null
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const categoryRefs = useRef([]);

  // Default skills data
  const defaultSkillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5 & CSS3", rating: 5, level: "Expert" },
        { name: "JavaScript", rating: 5, level: "Expert" },
        { name: "React.js", rating: 4, level: "Advanced" },
        { name: "Tailwind", rating: 4, level: "Advanced" },
        { name: "TypeScript", rating: 3, level: "Intermediate" },
        { name: "PhotoShop", rating: 2, level: "Beginner" }

      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Python", rating: 4, level: "Advanced" },
        { name: "Express.js", rating: 4, level: "Advanced" },
        { name: "Node.js", rating: 3, level: "Intermediate" },
        { name: "PHP", rating: 3, level: "Intermediate" },
        { name: "RESTful APIs", rating: 3, level: "Intermediate" }
      ]
    },
    {
      category: "",
      skills: [
        { name: "MySQL", rating: 4, level: "Advanced" },
        { name: "R", rating: 3, level: "Intermediate" },
        { name: "AWS", rating: 3, level: "Intermediate" },
        { name: "Tableau", rating: 3, level: "Intermediate" }
      ]
    },
    {
      category: "",
      skills: [
        { name: "Git & GitHub", rating: 5, level: "Expert" },
        { name: "Docker", rating: 3, level: "Intermediate" },
        { name: "VS Code", rating: 5, level: "Expert" }
      ]
    }
  ];

  const skills = skillsData || defaultSkillsData;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.indexOf(entry.target);
            setIsVisible(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    categoryRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);



  const SkillItem = ({ skill }) => (
    <div className="flex justify-between max-w-[95vw]  items-center mb-2 py-3">
      <span className="text-gray-700 xl:!text-xl text-lg font-medium a6">{skill.name}</span>
      <div className="flex sm:max-w-2/5 sm:w-1/2 max-w-1/2  flex-row sm:justify-between justify-start ">
        <StarRating rating={skill.rating} skillName={skill.name} />
        <span className="text-md text-gray-500 ml-2 a3 font-medium">{skill.level}</span>
      </div>
    </div>
  );

  const SkillCategory = ({ categoryData, index }) => (
    <div
      ref={el => categoryRefs.current[index] = el}
      className="bg-none rounded-2xl lg:p-8 p-0  "
    >
      <h3 className="text-xl font-semibold text-gray-800 text-center c3 relative">
        {categoryData.category}
      </h3>
      {categoryData.skills.map((skill, skillIndex) => (
        <SkillItem key={skillIndex} skill={skill} />
      ))}
    </div>
  );

  return (
    <div className="font-sans bg-none p-10 md:p-5 min-h-[140vh]">
      <div
        className={`min-w-[70vw] w-[85vw] h-auto place-self-center grid  grid-cols-1 grid-rows-auto lg:gap-10 gap-8 pb-0 bg-none  content-start
        grid-cols-[repeat] min-h-screen  h-auto grid-rows-[90px_auto] pt-10 `}>
        <div className='col-span-full row-span-1 mt-4 '>
          <div className='bg-linear-to-br from-gray-500 to-slate-500  justify-self-center
          lg:h-16 lg:w-80 md:h-13 md:w-60 xs:h-11 xs:w-50 xs:max-w-[60%] h-1/2 max-w-[60%]'>
            <p className='text-neutral-700 py-1 sm:ml-7 a6 sm:pt-2 weight-500 lg:text-8xl lg:w-80 md:text-7xl md:w-60 sm:text-6xl xs:w-[110%] xs:text-[9cqw] w-[110%] text-[8cqw] ml-3'>
              Skills
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 grid-rows-auto pt-10">

          <div className="row-span-1 col-span-1 grid grid-rows-[90px_2] grid-cols-1 space-y-10">
            <div className='relative flex flex-col justify-center items-center h-20'>
              <h1 className='text-center a6'>Web Development</h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
            {skills.slice(0, 2).map((categoryData, index) => (
              <SkillCategory
                key={index}
                categoryData={categoryData}
                index={index}
              />
            ))}
          </div>
          <div className="row-span-1 col-span-1 flex flex-col justify-start space-y-10 ">
            <div className='relative flex flex-col justify-center items-center h-20'>
              <h1 className='text-center a6'>Database & Cloud</h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
            {skills.slice(2, 3).map((categoryData, index) => (
              <SkillCategory
                key={index}
                categoryData={categoryData}
                index={index}
              />
            ))}
            <div className='relative flex flex-col justify-center items-center h-20'>
              <h1 className='text-center a6'>Tools & Workflow</h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
            </div>
            {skills.slice(3, 5).map((categoryData, index) => (
              <SkillCategory
                key={index}
                categoryData={categoryData}
                index={index}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsSection;