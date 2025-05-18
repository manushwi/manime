import { useNavigate } from 'react-router-dom';
import { HeartIcon, ClockIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid, ClockIcon as ClockIconSolid } from '@heroicons/react/24/solid';
import { useBookmarks } from '../context/BookmarksContext';

const AnimeCard = ({ title, duration, isTrending = false, image }) => {
    const { toggleFavorite, toggleWatchLater, isFavorite, isWatchLater } = useBookmarks();
    const favorite = isFavorite(title);
    const watchLater = isWatchLater(title);
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/anime/${title}`);
    };
    
    return (
        <div className="group cursor-pointer" onClick={handleCardClick}>
            <div className="relative overflow-hidden rounded-lg aspect-[2/3] bg-gray-800 mb-2">
                <img
                    src={image || 'https://via.placeholder.com/300x450'}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite({ title, duration, isTrending, image });
                        }}
                        className="p-1 bg-gray-900/80 rounded-full hover:bg-red-500/80 transition-colors"
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                        title={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {favorite ? (
                            <HeartIconSolid className="h-4 w-4 text-red-500" />
                        ) : (
                            <HeartIcon className="h-4 w-4 text-white" />
                        )}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleWatchLater({ title, duration, isTrending, image });
                        }}
                        className="p-1 bg-gray-900/80 rounded-full hover:bg-yellow-500/80 transition-colors"
                        aria-label={watchLater ? "Remove from watch later" : "Add to watch later"}
                        title={watchLater ? "Remove from watch later" : "Add to watch later"}
                    >
                        {watchLater ? (
                            <ClockIconSolid className="h-4 w-4 text-yellow-500" />
                        ) : (
                            <ClockIcon className="h-4 w-4 text-white" />
                        )}
                    </button>
                </div>
                
                {duration && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-2">
                        <p className="text-white text-xs">{duration}</p>
                    </div>
                )}
                
                {isTrending && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        Trending
                    </div>
                )}
            </div>
            
            <h3 className="text-white font-medium text-sm line-clamp-2 hover:text-purple-400 transition-colors">
                {title}
            </h3>
        </div>
    );
};

export default AnimeCard;