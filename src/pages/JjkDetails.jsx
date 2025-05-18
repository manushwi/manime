import React from 'react';

export default function JjkDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">
            {/* Welcome Banner */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Jujutsu Kaisen
            </div>

            {/* Hero Banner Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../jjkBanner.jpg"
                    alt="Jujutsu Kaisen hero banner with character and curse"
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
                    src="../jjkStory.webp"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>


            {/* Story Description */}
            <div className="px-4 py-3">
                <p>The story of <span className="text-blue-600">Jujutsu Kaisen</span> is set in a world where <span className="text-blue-600">Cursed Spirits</span> feed on unsuspecting humans and fragments of the legendary and feared demon <span className="text-blue-600">Ryomen Sukuna</span> have been lost and scattered about. Should any curse consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of <span className="text-blue-600">Jujutsu Sorcerers</span> who exist to protect the precarious existence of the living from the supernatural! Yuji Itadori is a high school student with unnatural physical strength and athletic ability. One day at school, his friends attract Curses by unsealing a rotten finger talisman. Yuji swallows the finger to protect Jujutsu Sorcerer student Megumi Fushiguro—on site to retrieve the finger—unwittingly becoming host to the powerful ancient sorcerer Ryomen Sukuna. The leaders of the Jujutsu Society intend to exorcise Sukuna, and Yuji by extension. However, noticing his capability to retain control over his body, Satoru Gojo—Megumi's teacher and the strongest sorcerer in the modern Jujutsu world—brings him to the Tokyo Prefectural Jujutsu High School to train him. Gojo has Yuji's execution postponed until he consumes all twenty of Sukuna's fingers, so the Curse can be eliminated permanently with his death.

                    Meanwhile, a group of intelligent Cursed Spirits plot an elaborate attack to reform the Jujutsu world as they see fit, starting with sealing Gojo away, as he is too strong to kill and his presence maintains order in the Jujutsu world. The group is led by mysterious sorcerer and Curse User Suguru Geto, supposedly killed by Gojo a year prior. His entourage includes the sadistic Curse Mahito, fire Curse Jogo, and nature Curse Hanami. Gojo's class of first-years—Yuji, Megumi, and Nobara Kugisaki—are trained by going on missions to exorcise low-level Curses; during these, Sukuna takes an interest in Megumi, due to his cursed technique and potential. Yuji is devastated after Mahito kills his friend Junpei Yoshino, experiencing first-hand the harsh reality of the Jujutsu world he has become part of. During a competition between the Tokyo and Kyoto Jujutsu schools, Mahito steals three "Death Paintings"—dormant half-human half-Curses—from the Tokyo school, summoning them to their full form. Yuji and Nobara kill two of them during a mission, leaving Choso as the sole surviving Death Painting.</p>

            </div>

            {/* Characters Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            {/* Character Gallery */}
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../jjk1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../jjk2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../jjk3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../jjk4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}