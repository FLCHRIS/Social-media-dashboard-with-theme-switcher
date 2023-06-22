import React from 'react'
import PropTypes from 'prop-types'

export const Toggle = ({ handleTheme, dark }) => {
  return (
    <button aria-label='Button to change theme' onClick={handleTheme} className={dark === 'dark' ? 'bg-gradient-to-r from-toggleLight to-toggleLight dark:bg-gradient-to-r dark:from-toggleDarkFrom dark:to-toggleDarkTo p-[.25rem] w-[3rem] h-[1.5rem] rounded-xl flex items-center justify-start' : 'bg-gradient-to-r from-toggleLight to-toggleLight dark:bg-gradient-to-r dark:from-toggleDarkFrom dark:to-toggleDarkTo p-[.25rem] w-[3rem] h-[1.5rem] rounded-xl flex items-center justify-end'}>
      <div className='bg-white dark:bg-VeryDarkBlueTop w-[1.1rem] h-[1.1rem] rounded-full' />
    </button>
  )
}
Toggle.propTypes = {
  handleTheme: PropTypes.func,
  dark: PropTypes.string
}
