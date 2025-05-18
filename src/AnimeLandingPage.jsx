import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import "remixicon/fonts/remixicon.css"


function AnimeLandingPage() {
    let [showContent, setShowContent] = useState(false);

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to('.vi-mask-group', {
            rotate: 10,
            duration: 2,
            ease: 'power4.easeInOut',
            transformOrigin: "50% 50%"
        })
            .to('.vi-mask-group', {
                scale: 10,
                duration: 2,
                ease: 'expo.easeInOut',
                transformOrigin: '50% 50%',
                delay: -1.8,
                opacity: 0,
                onUpdate: function () {
                    if (this.progress() >= 0.99) {
                        document.querySelector('.svg').remove();
                        setShowContent(true);
                        this.kill();
                    }
                }
            })
    });

    useGSAP(() => {
        if (!showContent) return;

        gsap.to('.main', {
            scale: 1,
            rotate: 0,
            duration: 1.5,
            delay: "-1",
            ease: 'expo.easeIn',
        });
        gsap.to('.sky', {
            scale: 1.1,
            rotate: 0,
            duration: 0.5,
            delay: "-0.8",
            ease: 'expo.easeIn',
        });
        gsap.to('.bg', {
            scale: 1.1,
            rotate: 0,
            duration: 1.5,
            delay: "-0.8",
            ease: 'expo.easeIn',
        });
        gsap.to('.luffy', {
            scale: 1.3,
            rotate: 0,
            duration: 1.1,
            delay: "-0.8",
            ease: 'expo.easeInOut',
            bottom: "-30%",
            x: "-50%",
        });
        gsap.to('.text', {
            scale: 1.4,
            rotate: 0,
            duration: 1.5,
            delay: "-0.8",
            ease: 'expo.easeIn',
        });

        const main = document.querySelector('.main');

        main?.addEventListener('mousemove', function (e) {
            const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
            gsap.to(".imagesdiv .text", {
                x: -xMove * 0.8,
            });
            gsap.to(".sky", {
                x: xMove,
            });
            gsap.to(".bg", {
                x: xMove * 2,
            });
        });
    }, [showContent]);

    return (
        <>
            <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
                <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <mask id="viMask">
                            <rect width="100%" height="100%" fill="black" />
                            <g className="vi-mask-group">
                                <text
                                    x="50%"
                                    y="50%"
                                    fontSize="250"
                                    textAnchor="middle"
                                    fill="white"
                                    dominantBaseline="middle"
                                    fontFamily="Arial Black"
                                >
                                    VI
                                </text>
                            </g>
                        </mask>
                    </defs>
                    <image
                        href="./bg.png"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="xMidYMid slice"
                        mask="url(#viMask)"
                    />
                </svg>
            </div>
            {showContent && (
                <div className="main w-full overflow-hidden rotate-[-10deg] scale-[1.3]">
                    <div className='landing overflow-hidden relative w-full h-screen bg-black font-Pricedown'>
                        <div className='navbar absolute top-0 left-0 z-[10] w-full py-10 px-10'>
                            <div className='logo cursor-pointer flex gap-7 '>
                                <div className='line flex flex-col gap-1'>
                                    <div className='line w-12 h-2 bg-white'></div>
                                    <div className='line w-8 h-2 bg-white'></div>
                                    <div className='line w-5 h-2 bg-white'></div>
                                </div>
                                <h3 className='text-white text-4xl -mt-[10px]'>Manime</h3>
                            </div>
                        </div>
                        <div className='imagesdiv relative overflow-hidden w-full h-screen'>
                            <img className='absolute scale-[1.5] rotate-[-20deg] sky top-0 left-0 w-full h-full object-cover' src="./sky.png" alt="" />
                            <img className='absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover' src="./bg.png" alt="" />
                            <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.8] rotate-[-10deg]">
                                <h1 className="text-[6rem] leading-none -ml-40">manu</h1>
                                <h1 className="text-[6rem] leading-none ml-30">shwi</h1>
                                <h1 className="text-[6rem] leading-none -ml-40">anime</h1>
                            </div>
                            <img className='absolute luffy rotate-[-30deg] bottom-[-150%] left-1/2 -translate-x-1/2 scale-[3]' src="./luffy.png" alt="" />
                        </div>
                        <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
                            <div className="flex justify-between items-center w-full">
                                <div
                                    className="flex z-10 gap-4 items-center cursor-pointer"
                                    onClick={() => {
                                        const targetPosition = document.documentElement.scrollHeight / 2;
                                        const startPosition = window.pageYOffset;
                                        const distance = targetPosition - startPosition;
                                        const duration = 1200; // 1.2 seconds - smoother than default but not too slow
                                        let start = null;

                                        function animation(currentTime) {
                                            if (start === null) start = currentTime;
                                            const timeElapsed = currentTime - start;
                                            const progress = Math.min(timeElapsed / duration, 1);

                                            const ease = t => 1 - Math.pow(1 - t, 2);

                                            window.scrollTo(0, startPosition + distance * ease(progress) * 5);

                                            if (timeElapsed < duration) {
                                                requestAnimationFrame(animation);
                                            }
                                        }

                                        requestAnimationFrame(animation);
                                    }}
                                >
                                    <i className="text-3xl ri-arrow-down-line"></i>
                                    <h3 className="text-xl font-[Helvetica_Now_Display]">
                                        Scroll Down
                                    </h3>
                                </div>
                                <button
                                    onClick={() => window.open('https://www.netflix.com/in/title/80107103', '_blank')}
                                    className="cursor-pointer"
                                >
                                    <img
                                        className="h-[55px]"
                                        src="./netflix.png"
                                        alt="Netflix"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-screen flex items-center justify-center bg-black">
                        <div className="flex flex-col md:flex-row items-center justify-between w-full bg-black text-white p-8 md:p-12 rounded-xl overflow-hidden">
                            {/* Left side */}
                            <div className="relative w-full md:w-1/2 mb-8 md:mb-0">
                                <div className="relative h-full flex items-center justify-center">
                                    <img
                                        src="./fireBreathing.png"
                                        alt="Anime Character"
                                        className="w-full h-full scale-[.6] object-contain"
                                    />
                                </div>
                            </div>

                            {/* Right side */}
                            <div className="w-full md:w-1/2 md:pl-8">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide uppercase font-Pricedown">
                                    WATCH YOUR FAVORITE<br />
                                    ANIME HERE
                                </h2>

                                <p className="mb-4 text-gray-300 text-sm">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Sunt velit corrupti blanditiis error,
                                    provident ex deleniti hic possimus, sint veniam lure deleniti atque?
                                </p>

                                <p className="mb-8 text-gray-300 text-sm">
                                    Lorem ipsum dolor sit, amet consectetur adipiscing elit. Officiis amet quis, quo
                                    consequatur consequuntur eum minus voluptas officia veritate saepe, culpandam, possimus
                                    minima sit? Explicabo voluptates reiciendis adipisci earum perferendis perspiciatis blanditiis.
                                </p>

                                <button onClick={() => window.location.href = '/home'} className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 w-full text-black font-bold uppercase tracking-widest text-lg transition-colors duration-300">
                                    Watch Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default AnimeLandingPage