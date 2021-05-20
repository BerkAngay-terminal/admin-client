import { useState } from 'react';
import { MenuAlt2Icon } from '@heroicons/react/outline'
import ProfileIcon from '../../components/ProfileIcon/ProfileIcon';
import Notification from '../../components/Notification/Notification';
import SearchBar from '../../components/SearchBar/SearchBar';
import SideBar from '../../components/SideBar/SideBar';
import Orders from '../../components/Orders/Orders';

export default function MainLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    // !! TODO !! 
    // Crete navigation array with navigation pages & their names. 

    return (
        <div className="h-screen overflow-hidden flex bg-gray-50">

            {/* SIDEBAR AREA */}
                {/* Maybe I can send some navigation properties */}
                <SideBar sidebarOpen={sidebarOpen} />
            {/* SIDEBAR AREA */}

            <div className="flex-1 max-w-4xl mx-auto w-0 flex flex-col md:px-8 xl:px-0">

                {/*HEADER AREA*/}
                <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex ">

                    {/* Create component with button */}
                    <button
                        className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                        onClick={() => setSidebarOpen(true)}>
                        <span className="sr-only">Open sidebar</span>
                        <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="flex-1 flex justify-between px-4 md:px-0">

                        {/* Search Bar Component */}
                        <SearchBar />

                        <div className="ml-4 flex items-center md:ml-6">

                            {/* Notifications Icon Component*/}
                            <Notification />

                            {/* Profile Dropdown Component */}
                            <ProfileIcon />

                        </div>

                    </div>
                </div>
                {/*HEADER AREA*/}

                {/* CONTENT AREA */}
                <main className="flex-1 relative overflow-y-auto focus:outline-none scrollbar-hide">
                    <div className="py-6">
                        <div className="px-4 sm:px-6 md:px-0">
                            <h1 className="text-2xl font-semibold text-gray-700">Raporlar</h1>
                        </div>
                        <div className="px-4 sm:px-6 md:px-0">

                            {/* REPLACE WITH NEW CONTENT */}
                            <div className="py-4">
                                <Orders/>
                            </div>
                            {/* REPLACE WITH NEW CONTENT */}

                        </div>
                    </div>
                </main>
                {/* CONTENT AREA */}

            </div>

        </div>
    )
}