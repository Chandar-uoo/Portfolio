
import React from 'react';
import myImage from './assets/FB_IMG_1687234429213.jpg';


export const Projects = () => {
  const data = [
    { img: myImage, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime aliquam quisquam deserunt id iure!" },
    { img: myImage, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime aliquam quisquam deserunt id iure!" },
    { img: myImage, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi maxime aliquam quisquam deserunt id iure!" }
  ];

  return (
    <div className="ProjectsContainer">
      {data.map((item, index) => (
        <div key={index} className="ProjectCard">
          <div className="imgContainer">
            <img src={item.img} alt="Project" />
          </div>
          <div className="projectBrief">
            <p>{item.text}</p>
          </div>
          <div className="viewButton">
            <button>View</button>
          </div>
        </div>
      ))}
    </div>
  );
};

