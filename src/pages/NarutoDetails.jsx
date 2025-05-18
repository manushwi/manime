import React from 'react';

export default function NarutoDetails() {
    return (
        <div className="max-w-screen-xl  mx-auto bg-white font-sans">

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Naruto
            </div>

            <div className="border-b  border-gray-300 mx-2">
                <img
                    src="../NBanner.jpg"
                    alt="Jujutsu Kaisen hero banner with character and curse"
                    className="w-full h-80 object-cover border border-gray-300"
                />
            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Story
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../NStory.webp"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-40 object-cover border border-gray-300"
                />
            </div>

            <div className="px-4 py-3">
                <p>Two and a half years later, Naruto returns from his training with Jiraiya. The Akatsuki starts kidnapping the hosts of the powerful Tailed Beasts. Team 7 and other Leaf ninja fight against them and search for their teammate Sasuke. The Akatsuki succeeds in capturing and extracting seven of the nine Tailed Beasts, killing all the hosts except Gaara, who is now the Kazekage. Meanwhile, Sasuke betrays Orochimaru and faces Itachi to take revenge. After Itachi dies in battle, Sasuke learns from the Akatsuki founder Tobi that Itachi had been ordered by Konoha's superiors to destroy his clan to prevent a coup; he accepted, on the condition that Sasuke would be spared. Devastated by this revelation, Sasuke joins the Akatsuki to destroy Konoha in revenge. As Konoha ninjas defeat several Akatsuki members, the Akatsuki figurehead leader, Nagato, kills Jiraiya and devastates Konoha, but Naruto defeats and redeems him, earning the village's respect and admiration.

                    With Nagato's death, Tobi, disguised as Madara Uchiha (one of Konoha's founding fathers), announces that he wants to capture all nine Tailed Beasts to cast an illusion powerful enough to control all humanity and achieve world peace. The leaders of the five ninja villages refuse to help him and instead join forces to confront his faction and allies. That decision results in a Fourth Shinobi World War between the combined armies of the Five Great Countries (known as the Allied Shinobi Forces) and Akatsuki's forces of zombie-like ninjas. The Five Kage try to keep Naruto, unaware of the war, in a secret island turtle near Kumogakure (Hidden Cloud Village), but Naruto finds out and escapes from the island with Killer Bee, the host of the Eight-Tails. At that time, Naruto—along with the help of Killer Bee—gains control of his Tailed Beast and the two of them head for the battlefield.</p>

            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../N1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../N2.png" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../N3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../N4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../N5.jpg" alt="Character 5" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../N6.jpg" alt="Character 6" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}