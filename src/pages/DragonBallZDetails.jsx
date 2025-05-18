import React from 'react';

export default function DragonBallZDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Dragon Ball Z
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../DBZBanner.jpg"
                    alt="Jujutsu Kaisen hero banner with character and curse"
                    className="w-full h-48 object-cover border border-gray-300"
                />
            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Story
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../DBZStory.png"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>

            <div className="px-4 py-3">
                <p>Dragon Ball Z picks up five years after the end of the Dragon Ball series, with Son Goku now a young adult and father to his son, Gohan.

                    A humanoid alien named Raditz arrives on Earth in a spacecraft and tracks down Goku, revealing to him that he is his long-lost older brother and that they are members of a near-extinct elite alien warrior race called Saiyans (サイヤ人, Saiya-jin). Goku (originally named Kakarot (カカロット, Kakarotto) had been sent to Earth as an infant to conquer the planet, but suffered a severe blow to his head shortly after his arrival and lost all memory of his mission, as well as his blood-thirsty Saiyan nature.

                    Raditz tells Goku that along with two stronger elites, Vegeta and Nappa, they are the only remaining Saiyans after their home planet Vegeta was destroyed. Raditz asks Goku to enlist in helping conquering planets and joining the remaining Saiyans. When Goku refuses to join and help them, Raditz takes Goku and Krillin down with one strike, kidnaps Gohan, and threatens to murder him if Goku does not kill 100 humans within the next 24 hours. Goku decides to team up with his arch-enemy Piccolo, who was also defeated by Raditz in an earlier encounter, to defeat him and save his son. During the battle, Gohan's rage momentarily makes him stronger than Piccolo and Goku as he attacks Raditz to protect his father. The battle ends with Goku restraining Raditz so that Piccolo can hit them with a deadly move called Special Beam Cannon (魔貫光殺砲, Makankōsappō, lit. "Demon Penetrating, Killing Ray Gun"), mortally wounding them both, and kills them after a short while. But before Raditz succumbs to his injuries, he reveals to Piccolo that the other two Saiyans are much stronger than him and will come for the Dragon Balls in one year.

                    Having witnessed Gohan's latent potential, Piccolo takes him into the wild to train for the upcoming battle against the Saiyans. In the afterlife, Goku travels the million-kilometer Snake Way so that he can train under the ruler of the North Galaxy, King Kai. King Kai teaches Goku the Kaio-ken (界王拳, Kaiōken, lit. "Fist of Kings of Worlds") and the Spirit Bomb (元気玉, Genki Dama, lit. "Energy Sphere") techniques. Despite his gruff and villainous nature, Piccolo grows fond of Gohan while he oversees him learning to fend for himself. This forges an unlikely emotional bond between the two.

                    After a year, Goku is revived with the Dragon Balls, but King Kai panics as he realizes that Goku will have to take Snake Way again to get back and will not make it until hours after the Saiyans arrive. Goku's allies group up to fight until Goku gets back, but prove to be no match for Nappa and the "Prince of All Saiyans", Vegeta. Yamcha, Tien Shinhan, Chiaotzu and Piccolo all perish in the battle, with Piccolo's death causing both Kami and the Dragon Balls to fade from existence. When Goku finally arrives at the battlefield, he avenges his fallen friends by easily defeating Nappa before crippling him by breaking his spine in half. A furious Vegeta then executes Nappa for his failure to kill Goku.</p>

            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>
            
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../DBZ1.png" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DBZ2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DBZ3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DBZ4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}