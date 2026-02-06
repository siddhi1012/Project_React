import React from 'react'
import { assets } from '../assets/assets'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()

    return (
        <div
            className="relative flex flex-col items-start justify-center gap-4 
            px-6 md:px-16 lg:px-36 h-screen pt-24 text-white 
            bg-no-repeat bg-cover md:bg-center bg-top"
            style={{
                backgroundImage: 'url("/backgroundImage.png")',
                imageRendering: 'auto',
            }}
        >
            {/* Gradient overlay (does NOT block clicks) */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r 
                from-black/70 via-black/30 to-transparent">
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl">
                <img
                    src={assets.marvelLogo}
                    alt="Marvel Logo"
                    className="h-11 mb-4"
                />

                <h1 className="text-5xl md:text-[70px] leading-tight font-semibold">
                    Guardians <br /> of the Galaxy
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-gray-200 mt-4">
                    <span>Action | Adventure | Sci-fi</span>

                    <div className="flex items-center gap-1">
                        <Calendar className="w-5 h-5" />
                        <span>2018</span>
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock className="w-5 h-5" />
                        <span>2h 8m</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="relative z-10 max-w-md text-white/70">
                Guardians of the Galaxy is a Marvel sci-fi action movie set in outer space
                that follows Peter Quill, also known as Star-Lord, a human raised by space pirates.
                He forms an unlikely team with Gamora, Drax, Rocket, and Groot while trying to
                protect a powerful cosmic artifact.
            </p>

            {/* Button */}
            <button
                onClick={() => navigate('/movies')}
                className="relative z-10 flex items-center gap-1 px-6 py-3 text-sm 
                bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer"
            >
                Explore Movies
                <ArrowRight className="w-5 h-5 ml-1" />
            </button>
        </div>
    )
}

export default HeroSection
