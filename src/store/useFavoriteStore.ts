import { create } from 'zustand';
import { storage } from '../services/storage';

export interface Movie {
    id: number;
    title: string;
}

export interface FavoriteStore {
    favorites: Movie[];
    setFavorites: (favorites: Movie[]) => void;
    isMovieInWishList: (movieId: number) => boolean;
    onBookMarkPress: (movie: Movie) => void;
}

export const useFavoriteStore = create<FavoriteStore>((set, get) => ({
    favorites: [],

    setFavorites: (favorites: Movie[]) => set({ favorites }),

    isMovieInWishList: (movieId: number) =>
        !!get().favorites.find((movie) => movie.id === movieId),

    onBookMarkPress: (movie: Movie) => {
        const { favorites, setFavorites } = get();
        const isMovieInList = favorites.find((item) => item.id === movie.id);
        let updatedFavorites: Movie[] = []
        if (isMovieInList) {
            updatedFavorites = favorites.filter((item) => item.id !== movie.id);
            setFavorites(updatedFavorites);
        } else {
            updatedFavorites = [movie, ...favorites];
            setFavorites(updatedFavorites);
        }
        storage.set('favorites', JSON.stringify(updatedFavorites))

    },
}));
