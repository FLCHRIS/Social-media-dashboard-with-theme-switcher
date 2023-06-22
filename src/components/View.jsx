import React from 'react'
import PropTypes from 'prop-types'

export const View = ({ title, red, number, today, color, icon }) => {
  return (
    <article className='bg-LightGrayishBlue cursor-pointer hover:bg-LightGrayishBlueHover px-[1.5rem] pt-[1.53rem] pb-[.94rem] rounded-md shadow-md dark:bg-DarkDesaturatedBlue dark:hover:bg-DarkDesaturatedBlueHover'>
      <h2 className='flex justify-between items-center font-inter font-[700] text-[.89rem] text-DarkGrayishBlue dark:text-DesaturatedBlue'>
        {title}
        <img src={red} alt='' role='none presentation' className='mr-[.3rem]' />
      </h2>
      <p className='font-inter font-[700] text-VeryDarkBlueText mt-[1rem] text-[2rem] flex justify-between items-center dark:text-WhiteText'>
        {number}
        <span className={color === 'green' ? 'text-[.8rem] mr-[.3rem] mt-[.9rem] text-limeGreen' : 'text-[.8rem] mr-[.3rem] mt-[.9rem] text-brightRed'}>
          <img src={icon} alt='' role='none presentation' className='inline-block' />
          {today}
        </span>
      </p>
    </article>
  )
}

View.propTypes = {
  title: PropTypes.string,
  red: PropTypes.string,
  number: PropTypes.string,
  today: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.string
}
