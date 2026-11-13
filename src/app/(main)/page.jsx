import CtaSection from '@/components/mainUI/home/CtaSection';
import FaqSection from '@/components/mainUI/home/FaqSection';
import FeaturesSection from '@/components/mainUI/home/FeaturesSection';
import HeroSection from '@/components/mainUI/home/HeroSection';
import HowItWorksSection from '@/components/mainUI/home/HowItWorksSection';
import LifecycleSection from '@/components/mainUI/home/LifecycleSection';
import RolesSection from '@/components/mainUI/home/RolesSection';
import React from 'react';


const HomePage = () => {
    return (
        <div className=''>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <RolesSection />
            <LifecycleSection />
            <FaqSection />
            <CtaSection />
        </div>
    );
};

export default HomePage;