import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/Pharmeasy Clone.png"
import IMG2 from "../../assets/Fiverr-Clone.png"
import IMG3 from "../../assets/Quiz App.png"


const data=[
  
  {id:1,
  image:IMG1,
  title:"Pharmeasy-Clone",
  desp:"This is a clone of PharmEasy, India's highly trusted online pharmacy and medical website. Operating as an e-commerce platform, it provides a wide range of pharmaceutical and healthcare products for individuals to purchase, including medicines and various healthcare-related equipment conveniently.",
  github:"https://github.com/theahmadshaikh/pharmeasy",
  demo:"https://pharmeasyclone2024.netlify.app/"
},

{id:2,
  image:IMG2,
  title:"Fiverr-Clone",
  desp:"The Fiverr Clone Project is a dynamic and responsive platform designed to connect freelancers with clients for various services. It features an intuitive interface with advanced search functionality, secure payment gateways, and robust user account management for tracking orders and managing gigs.",
  github:"https://github.com/khushikumari05/project",
  demo:"https://project-kohl-chi-89.vercel.app/"
}, 


{id:3,
  image:IMG3,
  title:"Quiz App",
  desp:"The QuizMaster app is an interactive and engaging quiz platform built using React, designed to offer a seamless and enjoyable user experience. It features a sleek and intuitive interface with well-organized categories for different quiz topics, powerful search functionality, and detailed quiz descriptions.",
  github:"https://github.com/khushikumari05/Quiz-App",
  demo:"https://quiz-app-a8oh.vercel.app/"
},
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
         data.map(({id,image,title,desp,github,demo})=>{
           return(
            <article key={id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desp}</p>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target="_blank">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio