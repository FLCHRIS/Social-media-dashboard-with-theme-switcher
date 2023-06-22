import React, { useState } from 'react'
import { Toggle } from './Toggle'

export const Header = () => {
  const [dark, setDark] = useState('')

  const handleTheme = () => {
    if (dark !== 'dark') {
      document.documentElement.classList.add('dark')
      setDark('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setDark('')
    }
  }

  return (
    <header className='py-[2rem] px-[1.55rem] bg-VeryPaleBlue dark:bg-VeryDarkBlueTop divide-y divide-VeryDarkBlueText dark:divide-DesaturatedBlue sm:flex sm:justify-between sm:divide-y-0 lg:px-[9rem]'>
      <div className='pb-[1.2rem] lg:pb-[0]'>
        <h1 className='font-inter text-[1.5rem] font-[700] text-VeryDarkBlueText dark:text-WhiteText lg:text-[1.75rem]'>
          Social Media Dashboard
        </h1>
        <h2 className='font-inter text-[.9rem] font-[700] text-DarkGrayishBlue dark:text-DesaturatedBlue lg:text-[.89rem] lg:leading-[1]'>
          Total Followers: 23,004
        </h2>
      </div>
      <div className='pt-[1.1rem] flex justify-between lg:gap-[.8rem]'>
        <p className='font-inter text-DarkGrayishBlue dark:text-DesaturatedBlue font-[700] text-[.9rem]'>
          Dark Mode
        </p>
        <Toggle handleTheme={handleTheme} dark={dark} />
      </div>
    </header>
  )
}
