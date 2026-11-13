import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainPage = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default MainPage;