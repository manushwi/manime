import React, { useState, useEffect } from 'react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';

const AnimePage = () => {
    const animeData = [
        {
            id: 1,
            title: "One Piece",
            spotlight: "#3 Spotlight",
            bgImage: "/onepieceCover.webp",
            duration: "24m",
            releaseDate: "Oct 20, 1999",
            likes: 1122,
            views: 1128,
            description: "Gold Roger was known as the 'Pirate King,' the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure...",
        },
        {
            id: 2,
            title: "Demon Slayer",
            spotlight: "#1 Spotlight",
            bgImage: "/demonSlayer.webp",
            duration: "22m",
            releaseDate: "Apr 6, 2019",
            likes: 1542,
            views: 1876,
            description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
        },
        {
            id: 3,
            title: "Solo Leveling",
            spotlight: "#2 Spotlight",
            bgImage: "/sololevelingCover.webp",
            duration: "24m",
            releaseDate: "Jul 5, 2019",
            likes: 987,
            views: 1045,
            description: "Solo Leveling is an action-fantasy anime that follows Sung Jin-Woo, the world’s weakest hunter, who gains a mysterious power allowing him to level up infinitely. As he faces deadly dungeons and monsters, he rises to become humanity's greatest hero.",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? animeData.length - 1 : prevIndex - 1);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const currentAnime = animeData[currentIndex];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
            <nav className="bg-[#111] p-4 flex items-center justify-between">
                <button onClick={() => window.location.href='/'} className='logo cursor-pointer flex gap-7 font-Pricedown'>
                    <div className='line flex flex-col gap-1'>
                        <div className='line w-12 h-2 bg-white'></div>
                        <div className='line w-8 h-2 bg-white'></div>
                        <div className='line w-5 h-2 bg-white'></div>
                    </div>
                    <h3 className='text-white text-4xl -mt-[10px]'>Manime</h3>
                </button>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search anime..."
                        className="bg-[#222] text-white px-4 py-2 rounded-md w-64 pr-10"
                    />
                    <FaSearch className="absolute right-3 top-3 text-gray-400" />
                </div>
            </nav>

            {/* Featured Carousel */}
            <div className="relative h-[500px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                    style={{
                        backgroundImage: `url(${currentAnime.bgImage})`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-16">
                    <p className="text-yellow-400 font-semibold mb-2">{currentAnime.spotlight}</p>
                    <h1 className="text-6xl font-bold mb-4">{currentAnime.title}</h1>

                    <div className="flex items-center space-x-4 mb-4">
                        <span className="flex items-center"><span className="h-2 w-2 bg-white rounded-full mr-2"></span> TV</span>
                        <span className="flex items-center"><span className="h-2 w-2 bg-white rounded-full mr-2"></span> {currentAnime.duration}</span>
                        <span className="flex items-center"><span className="h-2 w-2 bg-white rounded-full mr-2"></span> {currentAnime.releaseDate}</span>
                        <span className="bg-yellow-600 text-xs px-2 py-1 rounded">HD</span>
                        <span className="flex items-center bg-green-700 text-xs px-2 py-1 rounded"><span className="mr-1">👁</span> {currentAnime.views}</span>
                        <span className="flex items-center bg-red-700 text-xs px-2 py-1 rounded"><span className="mr-1">❤</span> {currentAnime.likes}</span>
                    </div>

                    <p className="max-w-2xl mb-8 text-gray-300">{currentAnime.description}</p>

                    <div className="flex space-x-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md flex items-center font-bold">
                            <FaPlay className="mr-2" /> Watch Now
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-md flex items-center font-bold">
                            <FaInfoCircle className="mr-2" /> Detail
                        </button>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-20"
                    onClick={prevSlide}
                >
                    <FaChevronLeft size={20} />
                </button>
                <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full text-white z-20"
                    onClick={nextSlide}
                >
                    <FaChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default AnimePage;
