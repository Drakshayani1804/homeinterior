import React from 'react'
import MainCarasel from '../../components/HomeCarosel/MainCarasel'
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel'

const HomePage = () => {
  return (
    <div>
      <MainCarasel/>

      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
       <HomeSectionCarosel/>
       <HomeSectionCarosel/>
       <HomeSectionCarosel/>
       
      </div>
    </div>
  )
}

export default HomePage
