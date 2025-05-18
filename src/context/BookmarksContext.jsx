import { createContext, useContext, useState, useEffect } from 'react';

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('animeFavorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });
    
    const [watchLater, setWatchLater] = useState(() => {
        const savedWatchLater = localStorage.getItem('animeWatchLater');
        return savedWatchLater ? JSON.parse(savedWatchLater) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('animeFavorites', JSON.stringify(favorites));
    }, [favorites]);
    
    useEffect(() => {
        localStorage.setItem('animeWatchLater', JSON.stringify(watchLater));
    }, [watchLater]);
    
    const toggleFavorite = (anime) => {
        setFavorites(prev => {
            const exists = prev.find(item => item.title === anime.title);
            if (exists) {
                return prev.filter(item => item.title !== anime.title);
            }
            return [...prev, anime];
        });
    };
    
    const toggleWatchLater = (anime) => {
        setWatchLater(prev => {
            const exists = prev.find(item => item.title === anime.title);
            if (exists) {
                return prev.filter(item => item.title !== anime.title);
            }
            return [...prev, anime];
        });
    };
    
    const isFavorite = (title) => {
        return favorites.some(item => item.title === title);
    };
    
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