import React from 'react';

export default function AotDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">
            {/* Welcome Banner */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Attack on Titan
            </div>

            {/* Hero Banner Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../aotBanner.jpg"
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
                    src="../aotStory.jpg"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>


            {/* Story Description */}
            <div className="px-4 py-3">
                <p>Eren Yeager is a boy who lives in the town of Shiganshina, located on the outermost of three circular walls which protect their inhabitants from Titans. In the year 845, the first wall, Wall Maria, is breached by two new types of Titans, the Colossal Titan and the Armored Titan. During the incident, Eren's mother is eaten by a Smiling Titan while Eren escapes. He swears revenge on all Titans and enlists in the military along with his childhood friends Mikasa Ackerman and Armin Arlert.

                    Five years after Shiganshina's fall, the Colossal Titan attacks the city of Trost, located in the second innermost wall, Wall Rose. Eren helps to successfully defend the city after he discovers a mysterious ability to turn himself into a sentient Attack Titan. Additionally, he regains memories of his father Grisha Yeager giving him this ability shortly after the fall of Wall Maria, and telling him that the truth about their world can be found in their basement in Shiganshina. These events draw the attention of the Survey Corps and their commander, Erwin Smith, who intend to use his power to reclaim Wall Maria and reach the Yeagers' basement. Eren, Mikasa, and Armin are transferred to the Special Operations Squad, under the care of Levi Ackerman and Hange Zoë. During an expedition into the forest between the walls, Eren and his companions encounter a sentient Female Titan, whom they later expose as their fellow military comrade Annie Leonhart. With help from his friends, Eren fights and defeats Annie, who encases herself in crystal and is put in custody. After the fight, it is discovered that there are Titans lying dormant within the walls, known as Wall Titans.

                    Shortly thereafter, Pure Titans mysteriously appear within Wall Rose with no evidence of how they got in, accompanied by the sentient Beast Titan. Ymir, one of the new Survey Corps graduates, reveals that she can transform into the sentient Jaw Titan, while Ymir's close friend Krista Lenz reveals herself as Historia Reiss, a member of the royal family. Two other members of the Survey Corps, Reiner Braun and Bertholt Hoover, reveal themselves as the Armored and Colossal Titan respectively. They attempt to kidnap Eren and Ymir, but fail. In the ensuing battle, Eren discovers another power within himself called "the Coordinate", that allows him to control other Titans, which he uses to kill the Smiling Titan and send a horde of Pure Titans to attack Reiner and Bertholt. This forces the two to escape, whereupon Ymir willingly flees with them, offering herself as sacrifice to prevent Historia from being targeted by the enemy. In the aftermath of these events, it is determined that the Pure Titans who suddenly appeared within Wall Rose were the inhabitants of various villages within Wall Rose, who had in some way been transformed into Titans. This leads the characters to the conclusion that all Pure Titans are, in fact, transformed human beings.

                    Eren and his friends join Levi Squad while the Survey Corps is targeted by the Military Police led by Kenny Ackerman, Levi's uncle. In the occasion, they discover that by transforming into a Pure Titan via a serum made of Titan spinal fluid and eating another Titan shifter, a person can gain its abilities, and that Historia and her father, Rod Reiss, are the only surviving members of the royal bloodline. Rod kidnaps Eren because he is in possession of the Founding Titan, obtained by his father Grisha upon eating Frieda Reiss (Historia's half-sister), and by Eren through eating his father. Rod tries to convince Historia to allow herself to be transformed into a Titan, so she can eat Eren and regain the Founder's power. After Historia refuses and breaks Rod's vial of spinal fluid, Rod attempts to consume the serum himself, transforming into a monstrously large Abnormal Titan and mortally wounding Kenny; he is then killed by Historia (with the help of the Survey Corps), who is thereafter declared Queen.</p>

            </div>

            {/* Characters Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            {/* Character Gallery */}
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../aot1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../aot2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../aot3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../aot4.png" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../aot5.jpg" alt="Character 5" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}