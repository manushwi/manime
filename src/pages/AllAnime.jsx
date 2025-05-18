import { useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import SectionHeader from '../components/SectionHeader';

const Allanime = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const trendingAnime = [
    { title: 'One Piece', isTrending: true, image: './onePiece.jpg' },
    { title: 'Solo Leveling', isTrending: true, image: './solo.webp' },
    { title: 'Naruto Shippuden', isTrending: true, image: './naruto.jpg' },
    { title: 'Bleach', isTrending: true, image: './bleach.jpg' },
    { title: 'Dragon Ball Z', isTrending: true, image: './dragonBallZ.jpg' },
    { title: 'Attack on Titan', isTrending: true, image: './AOT.jpg' },
  ];

  const latestEpisodes = [
    { title: 'Attack on Titan', isTrending: true, image: './AOT.jpg' },
    { title: 'Bleach', isTrending: true, image: './bleach.jpg' },
    { title: 'Berserk', duration: 'TV - 24m', image: './berserk.jpg' },
    { title: 'Chainsaw Man', duration: 'TV - 24m', image: './ChainsawMAn.png' },
    { title: 'Death Note', duration: 'TV - 4m', image: './deathnote.webp' },
    { title: 'Demon Slayer', duration: 'TV - 4m', image: './dSlayer.webp' },
    { title: 'Dragon Ball Z', isTrending: true, image: './dragonBallZ.jpg' },
    { title: 'Haikyuu', duration: 'TV - 24m', image: './haikyuu.jpg' },
    { title: 'Jujutsu Kaisen', duration: 'TV - 24m', image: './jjk.jpg' },
    { title: 'Naruto Shippuden', isTrending: true, image: './naruto.jpg' },
    { title: 'One Piece', isTrending: true, image: './onePiece.jpg' },
    { title: 'Solo Leveling', isTrending: true, image: './solo.webp' },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-4 md:p-6 text-white">
      <SectionHeader title="Trending" />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {trendingAnime.map((anime, index) => (
          <AnimeCard
            key={index}
            title={anime.title}
            isTrending={anime.isTrending}
            image={anime.image}
          />
        ))}
      </div>
      
      <SectionHeader title="All Anime" />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {latestEpisodes.map((episode, index) => (
          <AnimeCard
            key={index}
            title={episode.title}
            duration={episode.duration}
            isTrending={episode.isTrending}
            image={episode.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Allanime;