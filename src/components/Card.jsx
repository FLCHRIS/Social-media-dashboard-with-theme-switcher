import React from 'react'
import PropTypes from 'prop-types'

export const Card = ({ red, icon, followers, today, name, color }) => {
  return (
    <article className='top-bar bg-LightGrayishBlue rounded-md shadow-md overflow-hidden dark:bg-DarkDesaturatedBlue cursor-pointer hover:bg-LightGrayishBlueHover dark:hover:bg-DarkDesaturatedBlueHover'>
      <a href='/' className='mt-[2.1rem] block text-center text-[.75rem] font-inter font-[700] text-DarkGrayishBlue dark:text-DesaturatedBlue'>
        <img src={red} alt='' aria-disabled='true' className='inline-block mr-3' />
        {name}
      </a>
      <h1 className='text-center mt-[1.4rem] font-inter font-[700] text-[3.5rem] leading-[1] text-VeryDarkBlueText dark:text-WhiteText'>
        {followers}
      </h1>
      <p className='font-inter mt-[.1rem] tracking-[.2rem] text-center  text-[.9rem] text-DarkGrayishBlue dark:text-DesaturatedBlue'>
        FOLLOWERS
      </p>
      <p className={color === 'red' ? 'mt-[1.2rem] mb-[1.3rem] text-center font-inter font-[700] text-[.83rem] text-brightRed' : 'mt-[1.2rem] mb-[1.3rem] text-center font-inter font-[700] text-[.83rem] text-limeGreen'}>
        <img src={icon} alt='' className='inline-block ml-[.3rem]' aria-disabled='true' />
        {today}
      </p>
    </article>
  )
}
// limeGreen brightRed

Card.propTypes = {
  red: PropTypes.string,
  icon: PropTypes.string,
  followers: PropTypes.string,
  today: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string
}
