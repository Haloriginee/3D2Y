import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons";

const Box = ({ text, link, btn }) => (

  <div className='info-box'>

    <p className='font-medium sm-text-xl text-center'>
      {text}
    </p>

    <Link
      to={link}
      className='neo-brutalism-white neo-btn'
    >
      {btn}
      <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
    </Link>

  </div>

)

const renderContent = {

  1: (
    <h1 className='px-8 py-4 mx-5 text-white sm:leading-snug sm:text-xl text-center neo-brutalism-blue'>
      Hi, I am <span className='font semibold'>Kévin</span>🫡
      <br />
      A Software engineer & a professional Slacker
    </h1>
  ),
  2: (

    <Box
      text="Are you ready to witness a JavaScript extravaganza? Behold, my latest project showcasing my mad JS skills! It's like a circus of code."
      link="/projects"
      btn="Check it out"
    />

  ),
  3: (

    <Box
      text="I've collected skills like rare Pokémon cards in my career journey. Ready to show you my full deck and bring some magic to your team!"
      link="/skill"
      btn="Learn More"
    />

  ),
  4: (

    <Box
      text="Need a Project done ? I'm just a few keystrokes away."
      link="/contact"
      btn="Let's Go !"
    />

  ),
}

const Info = ({ CurrentStage }) => {

  return renderContent[CurrentStage] || null;

}

export default Info
