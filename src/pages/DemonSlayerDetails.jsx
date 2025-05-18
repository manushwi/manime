import React from 'react';

export default function DemonSlayerDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">
            {/* Welcome Banner */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Demon Slayer
            </div>

            {/* Hero Banner Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../DSBanner.jpg"
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
                    src="../DSStory.jpg"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>


            {/* Story Description */}
            <div className="px-4 py-3">
                <p>Tanjiro Kamado is a kind-hearted and intelligent boy who lives with his family in the mountains. After his father's death, he became his family's breadwinner and travels to the nearby village to sell charcoal. One day, Tanjiro comes home to discover his family was slaughtered by a demon. His sister Nezuko is the sole survivor of the incident; though she has been transformed into a demon, Nezuko still shows signs of human emotion and thought. Following an encounter with Giyu Tomioka, the Water Hashira of the Demon Slayer Corps, Tanjiro is sent to train with Giyu's former instructor Sakonji Urokodaki in becoming a Demon Slayer and begins his quest to help Nezuko turn into a human again.

                    Two years later, Tanjiro learns the "Water Breathing" style and takes part in a formidable exam. He is one of the few to pass, officially making him a member of the Corps. Sakonji has hypnotized Nezuko to not harm humans and she aids Tanjiro in dire situations as he starts his work of hunting down and slaying demons. One of their assignments bring them to Asakusa where they encounter Muzan Kibutsuji, the progenitor of all demons and the one responsible for the murder of their family. Tanjiro and Nezuko also meet Tamayo and Yushiro, two demons free from Muzan's control. They ally to develop a cure for Nezuko, though it will require Tanjiro to supply Tamayo with blood samples from the Twelve Kizuki, the twelve most powerful demons under Muzan's command, split into the six Lower Ranks and the six Upper Ranks.

                    Along their journey, Tanjiro and Nezuko meet fellow Demon Slayers Zenitsu Agatsuma and Inosuke Hashibira; they team up after Tanjiro's mission to kill Kyogai, the former Lower Six. They later join other Demon Slayers in facing the family of Lower Five Rui. In the midst of battle, Tanjiro unlocks a mysterious Breathing Style known as "Hinokami Kagura", but Rui ultimately outmatches him, while Inosuke and Zenitsu are injured and the expedition is slaughtered. Giyu and Insect Hashira Shinobu Kocho rescue the survivors, who are brought back to the Corps' headquarters. Tanjiro is put on trial by the Hashira – Giyu, Shinobu, Flame Hashira Kyojuro Rengoku, Sound Hashira Tengen Uzui, Love Hashira Mitsuri Kanroji, Stone Hashira Gyomei Himejima, Mist Hashira Muichiro Tokito, Serpent Hashira Obanai Iguro, and Wind Hashira Sanemi Shinazugawa – who, with the exception of Giyu and Mitsuri, do not believe he and Nezuko should be allowed to live. Nonetheless, the Corps' leader Kagaya Ubuyashiki, is able to convince them to accept Nezuko and see Tanjiro's importance, believing it is with their help that Muzan can be defeated.</p>

            </div>

            {/* Characters Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            {/* Character Gallery */}
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../DS1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DS2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DS3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DS4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}