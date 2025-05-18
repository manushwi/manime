import React from 'react';

export default function BerserkDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">
            {/* Welcome Banner */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Berserk
            </div>

            {/* Hero Banner Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../berserkBanner.jpg"
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
                    src="../berserkStory.webp"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>


            {/* Story Description */}
            <div className="px-4 py-3">
                <p>Guts is born from the corpse of his hanged mother and raised by his abusive adoptive father, Gambino, a mercenary captain. After Gambino's death, Guts becomes a wandering warrior, and his unmatched combat skills eventually draw the attention of Griffith, leader of the mercenary Band of the Hawk. Griffith defeats Guts in battle and forces him to join the Hawks, where Guts learns of Griffith's ambition to rule his own kingdom and the mysterious Crimson Behelit he carries. The demonic warrior Nosferatu Zodd spares their lives upon seeing the Behelit, warning Guts that his bond with Griffith will lead to his doom. As Griffith gains favor with Midland's nobility and Princess Charlotte, Guts grows close to Casca, the Hawks' only female commander. When he overhears Griffith declare that he only considers those with their own dreams as equals, Guts resolves to leave the Hawks to find his own purpose. Griffith refuses unless Guts defeats him in single combat. Guts wins, but Griffith's subsequent despair leads to his arrest after he seduces Charlotte. Tortured and broken, Griffith loses the Behelit, and the Midland army massacres most of the Hawks in a brutal ambush. The Skull Knight warns Guts of an impending Eclipse, prompting him to rejoin the survivors and rescue Griffith. During this time, Guts and Casca confess their feelings for one another. The rescued Griffith is left a crippled shell of himself, but when his Behelit activates, it summons the Eclipse—a horrific merging of realms where the Godhand offer Griffith godhood in exchange for sacrificing his comrades. Branded as offerings, the Hawks are slaughtered by Apostles, with only Guts and Casca surviving. Griffith, reborn as the demonic Femto, rapes Casca as Guts loses an eye and arm trying to save her. The Skull Knight rescues them, but Casca is left mentally shattered. Marked by the Brand of Sacrifice, Guts leaves Casca in the care of Godo, Erica, and Rickert—the only Hawk untouched by the Eclipse—before arming himself with Godo's Dragonslayer and a prosthetic from Rickert. He embarks on a vengeful war against Apostles, relentlessly hunted by the Demon Child, his and Casca's corrupted unborn son, twisted by Femto's violation.

Years later, Guts—now known as the Black Swordsman—wanders with the elf Puck. Captured by Farnese of the Holy Iron Chain Knights, he escapes after saving her and returns to Godo, only to find Casca missing. His search leads him to the ruined city of St. Albion, where the Godhand prepare a ritual to incarnate one of their own. Amidst refugees fleeing the Kushan Empire, Guts rescues Casca from the fanatical bishop Mozgus as the dead rise, forming a massive Brand of Sacrifice. Farnese, her bodyguard Serpico, and the thief Isidro join him, while an Apostle beneath the city consumes the Demon Child, using its essence to restore Griffith to physical form. After battling Griffith and Zodd at Godo's home, Griffith senses lingering traces of the Demon Child's emotions within him. Hoping to find a safe haven for Casca, Guts resolves to travel to Elfhelm, the land of the elves, allowing Farnese, Serpico, and Isidro to accompany him—partly out of fear that his growing rage will endanger her. Meanwhile, Griffith reforms the Band of the Hawk with Zodd and other Apostles, waging war against the Kushan emperor Ganishka, a rogue Apostle.</p>

            </div>

            {/* Characters Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            {/* Character Gallery */}
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../berserk1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../berserk2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../berserk3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../berserk4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}