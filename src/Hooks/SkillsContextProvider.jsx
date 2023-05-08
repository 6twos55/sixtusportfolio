import React, { createContext,useContext } from 'react'
import { IconGlobe,IconAppleLogo,IconAndroidLogo,IconFolder,IconDatabase, IconCloud, IconFigmaLogo } from '@vtex/phosphor-icons';

const SkillsContext = createContext();

export const useSkills = () => {
  return useContext(SkillsContext);
};

export const SkillsContextProvider = ({children}) => {
  const size = 30;

    const codeSnippets = {
        h1Open: "<h1>",
        h1Close:"</h1>",
        pOpen: "<p>",
        pClose: "</p>"
    }

    const skills = [
        {
        skillIconOne : (<IconGlobe size={size} />),
        skillIconTwo : (<IconFolder size={size}/>),
        skillText: "Frontend Development"
        },
        {
        skillIconOne : (< IconCloud size = {size} />),
        skillIconTwo : (<IconDatabase size = {size}/>),
        skillText: "Backend Development"
        },
        {
        skillIconOne : (<IconAndroidLogo size={size}/>),
        skillIconTwo : (<IconAppleLogo size={size} />),
        skillText: "Mobile App Development"
        },
        
        {
        skillIconOne : (< IconFigmaLogo size= {size}/>),
        skillIconTwo : "",
        skillText: "UI/UX Design"
        }
    ]
    
    const technologies = ["HTML", "CSS", "Sass","JavaScript", "React.js","Node.js", "Express", "MongoDB", "Java", "Kotlin", "Figma", "Python", "Firebase", "Bootstrap", "Material UI", "C#", "Git"]

    const Projects = [
      {
      prImg:require("../Assets/ip-address.png"),
      prName:"IP Address Tracker",
      prSiteLink:"https://ipaddress-tracker-location.netlify.app",
      prDes:"IP Address Tracker is an IP address finder built with HTML, CSS and Javascript API. IP Address looks for the location, timezone and ISP of the inputed IP address.",
      gitLink:"https://github.com/6twos55/ip-address-tracker"

      },
      {

      prImg:require("../Assets/thrift-fashion.png"),
      prName:"Thrift Fashion Store",
      prSiteLink:"https://thrift-fashion-secondhand.netlify.app",
      prDes:"Thrift-Fashion is an online shopping store built with JavaScript. Thrift-fashion was built by team Achievers in the Techwiz Competition 2022, where I was the team leader.",
      gitLink:"https://github.com/6twos55/Thrift-fashion"

      },
      {
      prImg:require("../Assets/match-game.png"),
      prName:"Match Game",
      prSiteLink:"https://match-cardgame.netlify.app/",
      prDes:"Match Game is a simple matching game of cards built with Javascript. Enjoy a short yet enjoyably challenging game of choice as you advance through the levels!",
      gitLink:"https://github.com/6twos55/Match-game"
      },
      {
      prImg:require("../Assets/space-shooter.png"),
      prName:"Space Shooter",
      prSiteLink:"https://spacerocks-shooter.netlify.app/",
      prDes:"Space Shooter is a shooting game, more or less, created with Javascript. Use the arrow keys to shoot falling rocks and gain points.",
      gitLink:"https://github.com/6twos55/Space-shooter"
      },
      {
      prImg:require("../Assets/advice-generator.png"),
      prName:"Advice Generator",
      prSiteLink:"https://advice-generator-dice.netlify.app/",
      prDes:"An advice generator built with Javascript API. It generates random helpful tips per button click.",
      gitLink:"https://github.com/6twos55/Advice-generator"
      }
    ]

  return (
    <SkillsContext.Provider value={{codeSnippets,skills,technologies,Projects}}>
        {children}
    </SkillsContext.Provider>
  )
}
