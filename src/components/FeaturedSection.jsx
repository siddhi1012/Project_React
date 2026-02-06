import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlueCircle from './BlueCircle'  // fixed import

const FeaturedSection = () => {
    const navigate = useNavigate()

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
            <div className='relative flex items-center justify-between pt-20 pb-10'>
               <BlueCircle top='0' right='-80px' /> {/* fixed component name */}
                <p className='text-gray-300 font-medium text-lg'>Now Showing</p>

                <button
                    onClick={() => navigate('/movies')}
                    className='group flex items-center gap-2 text-sm text-gray-300 cursur-pointer' 
                >
                    View All
                    <ArrowRight className='w-4 h-4 transition group-hover:translate-x-0.5' />
                </button>
            </div>

            {/* Placeholder for featured movies */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {/* Movie cards go here */}
            </div>
        </div>
    )
}

export default FeaturedSection
