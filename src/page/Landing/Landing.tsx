import React from 'react'
import HeroSection from '../Hero/HeroSection'
import BestSeller from '../../components/bestseller/BestSeller'
import Collection from '../../components/Collection/Collection'
import BulletPoint from '../../components/BulletPoint/BulletPoint'

export default function Landing(){

    return(
        <>
            <HeroSection />
            <BestSeller />
            <BulletPoint />
            <Collection />
        </>
    )
}