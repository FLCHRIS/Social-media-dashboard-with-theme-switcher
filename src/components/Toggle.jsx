import React from 'react'
import PropTypes from 'prop-types'

export const Toggle = ({ handleTheme, dark }) => {
  return (
    <div aria-label='Button to change theme' className={dark === 'dark' ? 'bg-gradient-to-r from-toggleLight to-toggleLight dark:bg-gradient-to-r dark:from-toggleDarkFrom dark:to-toggleDarkTo p-[.25rem] w-[3rem] h-[1.5rem] rounded-xl flex items-center justify-start' : 'bg-gradient-to-r from-toggleLight to-toggleLight dark:bg-gradient-to-r dark:from-toggleDarkFrom dark:to-toggleDarkTo p-[.25rem] w-[3rem] h-[1.5rem] rounded-xl flex items-center justify-end'}>
      <button onClick={handleTheme} className='bg-white dark:bg-VeryDarkBlueTop w-[1.1rem] h-[1.1rem] rounded-full' />
    </div>
  )
}
Toggle.propTypes = {
  handleTheme: PropTypes.func,
  dark: PropTypes.string
}
