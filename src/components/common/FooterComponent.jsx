import React from 'react';
import { CFooter } from '@coreui/react'

const FooterComponent = () => {
    return (
        <CFooter fixed={false}>
            <div>
                <a href="#!" target="_blank" rel="noopener noreferrer">ELK KOREA</a>
                <span className="ml-1">&copy; 2020 creativeLabs.</span>
            </div>
            <div className="mfs-auto">
                <span className="mr-1">Powered by</span>
                <a href="#!" target="_blank" rel="noopener noreferrer">ELK KOREA for React</a>
            </div>
        </CFooter>
    )
}


export default FooterComponent;