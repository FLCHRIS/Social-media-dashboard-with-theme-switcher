import React from 'react'

import youtube from '../assets/icon-youtube.svg'
import twitter from '../assets/icon-twitter.svg'
import facebook from '../assets/icon-facebook.svg'
import instagram from '../assets/icon-instagram.svg'

import down from '../assets/icon-down.svg'
import up from '../assets/icon-up.svg'
import { Card } from './Card'
import { View } from './View'

export const Main = () => {
  const data = [
    {
      red: facebook,
      icon: up,
      followers: '1987',
      today: '12 Today',
      name: '@nathanf',
      color: 'green'
    },
    {
      red: twitter,
      icon: up,
      followers: '1044',
      today: '99 Today',
      name: '@nathanf',
      color: 'green'
    },
    {
      red: instagram,
      icon: up,
      followers: '11k',
      today: '1099 Today',
      name: '@realnathanf',
      color: 'green'
    },
    {
      red: youtube,
      icon: down,
      followers: '8239',
      today: '144 Today',
      name: 'Nathan F.',
      color: 'red'
    }
  ]
  const views = [
    {
      title: 'Page Views',
      red: facebook,
      number: '87',
      today: '3%',
      color: 'green',
      icon: up
    },
    {
      title: 'Likes',
      red: facebook,
      number: '52',
      today: '2%',
      color: 'red',
      icon: down
    },
    {
      title: 'Likes',
      red: instagram,
      number: '8462',
      today: '2257%',
      color: 'green',
      icon: up
    },
    {
      title: 'Profile Views',
      red: instagram,
      number: '52k',
      today: '1375%',
      color: 'green',
      icon: up
    },
    {
      title: 'Retweets',
      red: twitter,
      number: '117',
      today: '303%',
      color: 'green',
      icon: up
    },
    {
      title: 'Likes',
      red: twitter,
      number: '507',
      today: '553%',
      color: 'green',
      icon: up
    },
    {
      title: 'Likes',
      red: youtube,
      number: '107',
      today: '19%',
      color: 'red',
      icon: down
    },
    {
      title: 'Total Views',
      red: youtube,
      number: '1407',
      today: '12%',
      color: 'red',
      icon: down
    }
  ]
  return (
    <main className='px-[1.55rem] pt-[.5rem] bg-White dark:bg-VeryDarkBlue lg:px-[9rem] lg:pt-[1rem]'>
      <section className='grid gap-[1.6rem] pb-[2rem] sm:grid-cols-2 lg:grid-cols-4'>
        {data.map((article, index) => (
          <Card {...article} key={index} />
        ))}
      </section>
      <section className='mt-[.6rem] pb-[2.9rem]'>
        <h2 className='font-inter font-[700] text-[1.53rem] text-VeryDarkBlueText mb-[1.5rem] dark:text-WhiteText'>Overview - Today</h2>
        <div className='grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-4 lg:gap-[1.5rem]'>
          {views.map((view, index) => (
            <View {...view} key={index} />
          ))}
        </div>
      </section>
    </main>
  )
}
