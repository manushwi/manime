import React from 'react';

export default function ChainsawManDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">
            {/* Welcome Banner */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Chainsaw Man
            </div>

            {/* Hero Banner Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../chainBanner.png"
                    alt="Chainsaw Man hero banner with character and curse"
                    className="w-full h-48 object-cover border border-gray-300"
                />
            </div>


            {/* Story Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Story
            </div>

            {/* Story Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../chainStory.webp"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>


            {/* Story Description */}
            <div className="px-4 py-3">
                <p>Denji is a teenager trapped in poverty, working off his deceased father's debt to the yakuza by working as a Devil Hunter, aided by Pochita, his canine companion and the Chainsaw Devil. Denji is betrayed by the yakuza, who kill him for a contract with the Zombie Devil. Pochita makes a contract with Denji, merging with him as a Devil-human hybrid, under the condition that Denji live out his modest dreams of living a basic life such as having bread with jam, or falling in love with a woman and being intimate with one. By pulling on a cord in his chest, Denji then becomes Chainsaw Man and massacres the yakuza.

                    In the aftermath, Denji joins a team of governmental Devil Hunters, the Public Safety Division, led by Makima, who assigns him to kill the Gun Devil. After being paired with a more experienced Devil Hunter named Aki Hayakawa, Denji begins training with his partner, Power the Blood Fiend, under the veteran Devil Hunter Kishibe. Together, they fight several enemies who seek Denji's power, including the yakuza, other Devils, and assassins sent by various countries.

                    Makima is later revealed to be the Control Devil, who is ultimately seeking to control Pochita, as he has the power to erase concepts from existence by consuming their Devils. The Gun Devil—whose body had secretly been divided among several countries as a superweapon—is sent by the United States to kill Makima, but she defeats it, forcing it to enter Aki's body as the Gun Fiend, whom Denji kills in self-defense. Makima later kills Power in front of Denji, rendering him catatonic and forcing Pochita to take over his body.

                    Kishibe organizes a raid to rescue Denji alongside cowardly Public Safety operative Kobeni Higashiyama. With their help and the last of Power's blood, Denji kills Makima. Some time later, Kishibe places the reborn Control Devil—a little girl named Nayuta—in Denji's care. In a dream, Pochita thanks Denji for showing him his dreams, and encourages him to live his life to the fullest. Denji begins attending high school while also fighting Devils as a vigilante.</p>

            </div>

            {/* Characters Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            {/* Character Gallery */}
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../chain1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../chain2.avif" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../chain3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../chain4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}