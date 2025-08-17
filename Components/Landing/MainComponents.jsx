'use client';
import React from 'react'
import BeeMovements from './BeeMovements';
import HomeMainTextPlants from './Plants';
import RandomBeTrip from '../Global/RandomBeTrip';

const MainComponents = () => (
    <div className='relative  h-[54vh]  flex  items-center justify-center'>
        <div className='relative   flex flex-col items-center justify-center'>
            <h1
                // className="text-4xl font-bold bg-gradient-to-r from-red-500 to-blue-500"
                style={{
                    letterSpacing: '-5px',
                    WebkitTextFillColor: 'transparent',
                    WebkitBackgroundClip:"text"
                }}
                className='text-7xl z-[3] bg-gradient-to-t  from-foreground to-foreground/60  leading-16 relative   w-[880px]  text-center font-black tracking-tighter'
            >
                Pure  Honey From The Heart Of Ida Outanan
                {/* <span
            style={{
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
            className='drop-shadow-2xl mx-3   from-yellow-400 bg-gradient-to-b via-[#d4b802]  to-[#7e6d00] '> */}


                {/* </span> */}

            </h1>
            <h2 className='text-base mt-8 opacity-70 z-[3] font-medium  tracking-tight' >100% natural, raw, and unfiltered honey straight from Moroccan hives</h2>
            <HomeMainTextPlants />
            <BeeMovements />
            <RandomBeTrip />

        </div>
    </div>
)

export default MainComponents
