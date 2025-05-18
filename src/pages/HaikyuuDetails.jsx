import React from 'react';

export default function HaikyuuDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">
            {/* Welcome Banner */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Haikyuu
            </div>

            {/* Hero Banner Image */}
            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../HBanner.jpg"
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
                    src="../HStory.jpg"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>


            {/* Story Description */}
            <div className="px-4 py-3">
                <p>Junior high school student, Shoyo Hinata, becomes obsessed with volleyball after catching a glimpse of Karasuno High School playing in the Nationals on TV. Of short stature himself, Hinata is inspired by a player the commentators nickname 'The Little Giant', Karasuno's short but talented wing spiker. Though inexperienced, Hinata is athletic and has an impressive vertical jump. He joins his school's volleyball club—only to find he is its sole member, forcing him to spend the next two years trying to convince other students to help him practice.

                    In the third and final year of junior high, some of Hinata's friends agree to join the club so he can compete in a tournament. In his first official game ever, they suffer a crushing defeat to the team favored to win the tournament—that included third-year Tobio Kageyama, a prodigy setter nicknamed 'The King of the Court' for both his skill and his brutal play style. The two spark a short rivalry, and after the game, Hinata vows to defeat Kageyama in high school.

                    Hinata studies and is accepted to Karasuno, the same high school the "Little Giant" played for, but is shocked to discover that Kageyama has also chosen to attend Karasuno. Karasuno is revealed to have lost its reputation as a powerhouse school following the era of the Little Giant, often being referred to as 'The Wingless Crows' by other local teams. However, by combining Kageyama's genius setting skills with Hinata's remarkable athleticism, the duo create an explosive new volleyball tactic and develop an unexpected but powerful setter-spiker partnership.

                    Along the way, Hinata and Kageyama push each other into reaching their full potential, and Hinata develops relationships with his first real team, thus beginning Karasuno's journey of redemption to restore their reputation and make it to the Nationals.

                    Both Hinata and Kageyama aspire to be professional volleyball players, and make a promise to one another after they graduate from high school that no matter what, they will both play on the same court again. They have a remarkable bond and devote their lives to each other and the sport of volleyball.</p>

            </div>

            {/* Characters Section Header */}
            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            {/* Character Gallery */}
            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../H1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../H2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../H3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../H4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}