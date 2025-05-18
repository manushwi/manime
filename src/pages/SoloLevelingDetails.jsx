import React from 'react';

export default function SoloLevelingDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Solo Leveling
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../SLBanner.jpg"
                    alt="Jujutsu Kaisen hero banner with character and curse"
                    className="w-full h-48 object-cover border border-gray-300"
                />
            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Story
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../SLStory.jpg"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>

            <div className="px-4 py-3">
                <p>In a world where hunters — human warriors who possess supernatural abilities — must battle deadly monsters to protect all mankind from certain annihilation, a notoriously weak hunter named Sung Jin-woo finds himself in a seemingly endless struggle for survival. One day, after narrowly surviving an overwhelmingly powerful double dungeon that nearly wipes out his entire party, a mysterious program called the System chooses him as its sole player and in turn, gives him the unique ability to level up in strength. This is something no other hunter is able to do, as a hunter's abilities are set once they awaken. Jinwoo then sets out on a journey as he fights against all kinds of enemies, both man and monster, to discover the secrets of the dungeons and the true source of his powers. He soon discovers that he has been chosen to inherit the position of Shadow Monarch, essentially turning him into an immortal necromancer who has absolute rule over the dead. He is the only Monarch who fights to save humanity, as the other Monarchs are all trying to kill him and wipe out the humans.</p>

            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../SL1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../SL2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../SL3.avif" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../SL4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}