import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch } from 'react-icons/fa';
import Allanime from './Allanime';

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
            description: "Gold Roger was known as the 'Pirate King,' the strongest and most infamous being to have sailed the Grand Line...",
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
            description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko...",
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
            description: "Solo Leveling follows Sung Jin-Woo, the world's weakest hunter, who gains a mysterious power...",
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const allanimeRef = useRef(null);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    const prevSlide = () => setCurrentIndex((prevIndex) => prevIndex === 0 ? animeData.length - 1 : prevIndex - 1);

    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, []);

    const scrollToAllanime = () => {
        allanimeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const currentAnime = animeData[currentIndex];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navbar */}
            <nav className="bg-[#111] p-4 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
                <button onClick={() => window.location.href = '/'} className="flex gap-4 items-center font-Pricedown">
                    <div className="flex flex-col gap-1">
                        <div className="w-12 h-2 bg-white"></div>
                        <div className="w-8 h-2 bg-white"></div>
                        <div className="w-5 h-2 bg-white"></div>
                    </div>
                    <h3 className="text-white text-3xl sm:text-4xl">Manime</h3>
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                        onClick={() => window.location.href = '/Bookmarks'}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md w-full sm:w-auto"
                    >
                        Your Anime
                    </button>

                    <div className="relative w-full sm:w-64">
                        <input
                            type="text"
                            placeholder="Search anime..."
                            className="bg-[#222] text-white px-4 py-2 rounded-md w-full pr-10"
                        />
                        <FaSearch className="absolute right-3 top-3 text-gray-400" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
                    style={{ backgroundImage: `url(${currentAnime.bgImage})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto">
                    <p className="text-yellow-400 font-semibold mb-2 text-sm sm:text-base">{currentAnime.spotlight}</p>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">{currentAnime.title}</h1>

                    <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base mb-4">
                        <span className="flex items-center"><span className="h-2 w-2 bg-white rounded-full mr-2"></span>TV</span>
                        <span className="flex items-center"><span className="h-2 w-2 bg-white rounded-full mr-2"></span>{currentAnime.duration}</span>
                        <span className="flex items-center"><span className="h-2 w-2 bg-white rounded-full mr-2"></span>{currentAnime.releaseDate}</span>
                        <span className="bg-yellow-600 text-xs px-2 py-1 rounded">HD</span>
                        <span className="flex items-center bg-green-700 text-xs px-2 py-1 rounded"><span className="mr-1">👁</span>{currentAnime.views}</span>
                        <span className="flex items-center bg-red-700 text-xs px-2 py-1 rounded"><span className="mr-1">❤</span>{currentAnime.likes}</span>
                    </div>

                    <p className="max-w-2xl mb-6 text-gray-300 text-sm sm:text-base">{currentAnime.description}</p>

                    <div className="flex space-x-4">
                        <button
                            onClick={scrollToAllanime}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-md flex items-center font-bold"
                        >
                            <FaPlay className="mr-2" /> Watch Now
                        </button>
                    </div>
                </div>

                {/* Arrows */}
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

            {/* All Anime Section */}
            <div ref={allanimeRef}>
                <Allanime />
            </div>
        </div>
    );
};

export default AnimePage;
