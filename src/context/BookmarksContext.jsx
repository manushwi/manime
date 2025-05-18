import { createContext, useContext, useState, useEffect } from 'react';

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
    // Initialize state from localStorage if available
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('animeFavorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    
    const [watchLater, setWatchLater] = useState(() => {
        const savedWatchLater = localStorage.getItem('animeWatchLater');
        return savedWatchLater ? JSON.parse(savedWatchLater) : [];
    });
    
    // Save to localStorage whenever state changes
    useEffect(() => {
        localStorage.setItem('animeFavorites', JSON.stringify(favorites));
    }, [favorites]);
    
    useEffect(() => {
        localStorage.setItem('animeWatchLater', JSON.stringify(watchLater));
    }, [watchLater]);
    
    // Toggle favorite status for an anime
    const toggleFavorite = (anime) => {
        setFavorites(prev => {
            const exists = prev.find(item => item.title === anime.title);
            if (exists) {
                return prev.filter(item => item.title !== anime.title);
            }
            return [...prev, anime];
        });
    };
    
    // Toggle watch later status for an anime
    const toggleWatchLater = (anime) => {
        setWatchLater(prev => {
            const exists = prev.find(item => item.title === anime.title);
            if (exists) {
                return prev.filter(item => item.title !== anime.title);
            }
            return [...prev, anime];
        });
    };
    
    // Check if an anime is in favorites
    const isFavorite = (title) => {
        return favorites.some(item => item.title === title);
    };
    
    // Check if an anime is in watch later
    const isWatchLater = (title) => {
        return watchLater.some(item => item.title === title);
    };
    
    return (
        <BookmarksContext.Provider value={{
            favorites,
            watchLater,
            toggleFavorite,
            toggleWatchLater,
            isFavorite,
            isWatchLater
        }}>
            {children}
        </BookmarksContext.Provider>
    );
};

export const useBookmarks = () => {
    const context = useContext(BookmarksContext);
    if (!context) {
        throw new Error('useBookmarks must be used within a BookmarksProvider');
    }
    return context;
};