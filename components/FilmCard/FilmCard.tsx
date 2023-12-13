import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { fetchMovieImage } from "../../services/api";
import { s } from "./FilmCardStyle";

type Film = {
  id: string;
  title: string;
  episode_id: number;
};
type IFilmCardProps = {
  film: Film;
  onPress(): void;
};

const FilmCard: React.FC<IFilmCardProps> = ({ film, onPress }) => {
  const [movieImage, setMovieImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const imageUrl = await fetchMovieImage(film.title);
        setMovieImage(imageUrl);
      } catch (error) {
        console.error("Error fetching movie image:", error);
      }
    };

    fetchImage();
  }, [film.title]);

  return (
    <TouchableOpacity onPress={() => onPress()} style={s.cardContainer}>
      <View style={{ flex: 1 }}>
        {movieImage && (
          <Image source={{ uri: movieImage }} style={s.movieImage} />
        )}
      </View>
      <Text style={s.titleText}>{film.title}</Text>
      <Text style={s.episodeText}>Episodio {film.episode_id}</Text>
    </TouchableOpacity>
  );
};

const styles = {};

export { FilmCard };
