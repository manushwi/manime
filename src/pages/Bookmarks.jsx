import { useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import { useBookmarks } from '../context/BookmarksContext';

const Bookmarks = () => {
  const [activeTab, setActiveTab] = useState('Favorites');
  const { favorites, watchLater } = useBookmarks();
  
  return (
    <div className="bg-gray-900 min-h-screen p-4 md:p-6 text-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">My Bookmarks</h1>
      </div>
      
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('Favorites')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'Favorites' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          Favorites
        </button>
        <button
          onClick={() => setActiveTab('Watch Later')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'Watch Later' 
              ? 'bg-yellow-500 text-white' 
              : 'bg-gray-700 text-gray-300'
          }`}
        >
          Watch Later
        </button>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {activeTab === 'Favorites' ? (
          favorites.length > 0 ? (
            favorites.map((anime, index) => (
              <AnimeCard 
                key={index} 
                title={anime.title}
                duration={anime.duration}
                isTrending={anime.isTrending}
                image={anime.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400 text-lg">No favorites added yet</p>
              <p className="text-gray-500 mt-2">
                Click the heart icon on any anime to add it to favorites
              </p>
            </div>
          )
        ) : (
          watchLater.length > 0 ? (
            watchLater.map((anime, index) => (
              <AnimeCard 
                key={index} 
                title={anime.title}
                duration={anime.duration}
                isTrending={anime.isTrending}
                image={anime.image}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400 text-lg">No watch later items added yet</p>
              <p className="text-gray-500 mt-2">
                Click the clock icon on any anime to add it to watch later
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Bookmarks;