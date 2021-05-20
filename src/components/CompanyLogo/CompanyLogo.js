import React from 'react';
import Logo from '../../assets/Logo.png';


export default function CompanyLogo() {
    return (
        <div className="flex-shrink-0 px-4 flex items-center">
            <img
                className="h-6 w-auto"
                src={Logo}
                alt="Workflow"
            />
        </div>
    )
}