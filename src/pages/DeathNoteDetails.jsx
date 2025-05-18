import React from 'react';

export default function DeathNoteDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Death Note
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../DNbanner.png"
                    alt="Jujutsu Kaisen hero banner with character and curse"
                    className="w-full h-48 object-cover border border-gray-300"
                />
            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Story
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../DNStory.jpg"
                    alt="Jujutsu Kaisen story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>

            <div className="px-4 py-3">
                <p>In Tokyo, a disaffected high school student named Light Yagami finds the "Death Note", a mysterious black notebook with rules that can end anyone's life in seconds as long as the writer knows both the target's true name and face. Light uses the notebook to kill high-profile criminals and is visited by Ryuk, a shinigami and the Death Note's original owner. Ryuk, invisible to anyone who has not touched the notebook, reveals that he dropped the notebook into the human world out of boredom and is amused by Light's actions.[5]

                    Global media suggest that a single mastermind is responsible for the mysterious murders and name them "Kira" (キラ, the Japanese transliteration of the word "killer"). Interpol requests the assistance of the enigmatic detective L to assist in their investigation. L tricks Light into revealing that he is in the Kanto region of Japan by manipulating him to kill a decoy. Light vows to kill L, whom he views as obstructing his plans. L deduces that Kira has inside knowledge of the Japanese police investigation, led by Light's father, Soichiro Yagami. L assigns a team of FBI agents to monitor the families of those connected with the investigation and designates Light as the prime suspect. Light graduates from high school to college. L recruits Light into the Kira Task Force.

                    Actress-model Misa Amane obtains a second Death Note from a shinigami named Rem and makes a deal for shinigami eyes, which reveal the names of anyone whose face she sees, at the cost of half her remaining lifespan. Seeking to have Light become her boyfriend, Misa uncovers Light's identity as the original Kira. Light uses her love for him to his advantage, intending to use Misa's shinigami eyes to discern L's true name. L deduces that Misa is likely the second Kira and detains her. Rem threatens to kill Light if he does not find a way to save Misa. Light arranges a scheme in which he and Misa temporarily lose their memories of the Death Note, and has Rem pass the Death Note to Kyosuke Higuchi of the Yotsuba Group.

                    With memories of the Death Note erased, Light joins the investigation and, together with L, deduces Higuchi's identity and arrests him. Light regains his memories and uses the Death Note to kill Higuchi, regaining possession of the book. After restoring Misa's memories, Light instructs her to begin killing as Kira, causing L to cast suspicion on Misa. Rem realizes Light's plan to have Misa sacrifice herself to kill L. After Rem kills L, she disintegrates and Light obtains her Death Note. The task force agrees to have Light operate as the new L. The investigation stalls but crime rates continue to drop.</p>

            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../DN1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DN2.jpg" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DN3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../DN4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}