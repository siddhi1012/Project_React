import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { dummyTrailers } from '../assets/assets.js';
import BlueCircle from './BlueCircle';

const TrailersSection = () => {
    const [currentTrailer] = useState(dummyTrailers[0]);

    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-24 2xl:px-44 py-20">
            <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
                Trailers
            </p>

            <div className="relative mt-6 w-full max-w-[960px] mx-auto aspect-video">
                <BlueCircle top="-100px" left="-100px" />

                <ReactPlayer
                    url={currentTrailer.videoUrl}
                    controls
                    playing
                    muted
                    width="100%"
                    height="100%"
                    config={{
                        youtube: {
                            playerVars: { autoplay: 1 },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default TrailersSection;
