import React from 'react';

export default function BleachDetails() {
    return (
        <div className="max-w-screen-xl mx-auto bg-white font-sans">

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-1">
                Bleach
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../bleachBanner.jpg"
                    alt="Bleach hero banner with character and curse"
                    className="w-full h-48 object-cover border border-gray-300"
                />
            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Story
            </div>

            <div className="border-b border-gray-300 mx-2">
                <img
                    src="../bleachStory.webp"
                    alt="Bleach story image"
                    className="w-full h-36 object-cover border border-gray-300"
                />
            </div>

            <div className="px-4 py-3">
                <p>Ichigo Kurosaki is a teenager from Karakura Town who can see ghosts, a talent allowing him to meet Rukia Kuchiki, a Soul Reaper who enters the town in search of a Hollow, a kind of monstrous lost soul who can harm both ghosts and humans. Rukia is one of the Soul Reapers (死神, Shinigami, literally 'Death Gods'), soldiers trusted with ushering the souls of the dead from the World of the Living to the Soul Society (尸魂界ソウル・ソサエティ, Sōru Sosaeti, lit. "Dead Spirit World"), the afterlife realm from which she originates and with fighting Hollows. When she is severely wounded defending Ichigo from a Hollow she pursues, Rukia transfers her powers to Ichigo, so he may fight in her stead while she recovers. Rukia is thereby trapped in an ordinary human body, and she must advise Ichigo as he balances the demands of his Substitute Soul Reaper duties and attending high school. For aid in hunting the Hollows, the pair ally with a trio of other spiritually empowered allies: Ichigo's high school classmate Orihime Inoue, best friend Yasutora "Chad" Sado and Uryū Ishida, a Quincy survior and classmate with the ability to control spiritual particles.

                    Eventually, Rukia is arrested by her Soul Reaper superiors and sentenced to death for the illegal act of transferring her powers to a human. Ichigo and his friends enlist the help of ex-Soul Reaper scientist Kisuke Urahara, who trains Ichigo to access his own Soul Reaper powers, to enter the Soul Society and rescue Rukia. Shortly after the party's arrival in the Soul Society, conflict arises among the captains of the Thirteen Court Squads when the captain of the fifth company, Sōsuke Aizen, is apparently murdered. The captains believe that the intruders might have been responsible, which causes the Soul Reapers to begin fighting amongst themselves. Thereafter, the Captain Commander Genryusai Shigekuni Yamamoto, issues the Soul Reapers to arrest Ichigo and his friends as suspects. However, Ichigo saves Rukia and manages to stop the war against the Soul Society. Aizen reappears and reveals his intention to obtain the Hōgyoku (崩玉, lit. "Crumbling Orb"), an orb of immense power Urahara planted inside Rukia, by faking his death and arranging the execution. Aizen accompanies his fellow conspirators, Gin Ichimaru and Kaname Tōsen, who are the third and ninth company's captains, as they use Hollows Menos Grande to cover their escape into the Hollows' realm, Hueco Mundo (虚圏ウェコムンド, Weko Mundo, lit. "Hollow World"). Afterwards, Ichigo and Rukia reconcile with the Soul Reapers, who view the former as a powerful ally and designate him an official title as Substitute Soul Reaper.

                    Ichigo soon finds himself and his friends in escalating skirmishes with Aizen's army of humanoid Hollows, the Arrancar, as they are joined by the Vizards, Soul Reapers who were victims of Aizen's experiments in creating the Arrancar. When Ulquiorra, one of the Espada (Aizen's ten most powerful Arrancars) kidnaps Orihime, Ichigo and his allies enter Hueco Mundo to invade Las Noches. However, as Ichigo rescues Orihime after defeating Ulquiorra, Aizen reveals her abduction was a distraction as he launches an attack on Karakura Town, in order to sacrifice everyone and create a key to the Soul King's Palace, so he can kill the Soul King who reigns over the Soul Society. Anticipating Aizen's attack, the Thirteen Court Squads had already been waiting for him by moving the entire Karakura Town to the Soul Society prior to his attack. When the Vizards join the remaining Soul Reapers, Gin reveals his agenda of betraying and killing Aizen. The latter uses the Hōgyoku to become a god-like being before killing Gin. However, Ichigo sacrifices all his Soul Reaper power to defeat Aizen, and reverts to a normal human. Subsequently, Aizen is sealed and arrested by the Soul Society.</p>

            </div>

            <div className="bg-red-600 text-white text-center py-1 font-bold text-lg border-2 border-gray-300 mx-2 my-2">
                Characters
            </div>

            <div className="flex justify-center space-x-2 px-2 mb-4">
                <img src="../bleach1.jpg" alt="Character 1" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../bleach2.webp" alt="Character 2" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../bleach3.jpg" alt="Character 3" className="w-24 h-24 object-cover border border-gray-300" />
                <img src="../bleach4.jpg" alt="Character 4" className="w-24 h-24 object-cover border border-gray-300" />
            </div>
        </div>
    );
}