import React from 'react'
import { IoLogoHtml5} from "react-icons/io";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const About = () => {
 const Skillicon = [{icon : <IoLogoHtml5/> , text : "HTML 5"},
                    {icon : <FaCss3/>,text : "CSS 3"},
                    {icon : <IoLogoJavascript/> ,text : " Java Script"},
                    {icon : <FaReact/> , text : "React"},
                    {icon : <FaGithub/> , text :"Git hub"}];

  return (
   <>
   <div className="container">
   <div className="summary">
    <h1>Summary</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus corporis quasi cum laboriosam necessitatibus iusto id sunt repellat alias! Magnam eaque quo a dolor illo suscipit ut harum eos enim</p>
   </div>
   <div className="experience">
    <h1>Experience</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, rem?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque sunt vel reiciendis fugit provident odio tempore, rerum quas perferendis aliquam debitis accusantium doloribus cum laboriosam. Ratione, nam obcaecati. Laborum tempora repellat obcaecati facere accusamus iste excepturi aliquam voluptas cumque quia? Magnam ad distinctio, cumque earum vitae saepe mollitia excepturi ratione!</p>
   </div>
   <div className="skills">
          <h1>Skills</h1>
    {Skillicon.map((item,index)=>(
       <div key={index} className="icons">
              <i> {item.icon} </i>
              <label >{item.text}</label>
       </div>
    ))}
   </div>
   </div>
   </>

  )
}

