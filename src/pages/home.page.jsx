import React from 'react'
import HeroGrid from '@/components/HeroGrid.jsx'
import Trending from '@/components/Trending.jsx'
import CasualInspirations from '@/components/CasualInspirations'
import NewArrivals from '@/components/NewArrivals'
import BestSellers from '@/components/BestSellers'
import Footer from '@/components/Footer'



function HomePage() {
  return (
    
    <main className='flex flex-col gap-8 md:gap-12 pb-8'>
        
        <HeroGrid/> 
        <CasualInspirations/> 
        <Trending/>
        <NewArrivals/>
        <BestSellers/>
        <Footer/>
        

    </main>
  )
}

export default HomePage