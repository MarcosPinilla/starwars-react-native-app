import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import { connect } from "react-redux";
import { fetchPlanetDetailsRequest } from "../../redux/actions";
import { useRoute } from "@react-navigation/native";
import { fetchMovieImage } from "../../services/api";
import { BarChart } from "react-native-chart-kit";
import { s } from "./FilmScreenStyle";

interface FilmScreenProps {
  films: any[];
  planets: any[];
  loadingPlanets: boolean;
  fetchFilmsRequest: () => void;
  fetchPlanetDetailsRequest: () => void;
}

const FilmScreen: React.FC<FilmScreenProps> = ({
  planets,
  loadingPlanets,
  fetchPlanetDetailsRequest,
}) => {
  const [movieImage, setMovieImage] = useState<string | null>(null);
  const route = useRoute<RouteProp<ParamList, "Film">>();
  const { film } = route.params;

  const renderBarChart = () => {
    if (!planets || planets?.length === 0) {
      return null;
    }

    const data = {
      labels: planets.map((planet) => planet.name),
      datasets: [
        {
          data: planets.map((planet) => parseInt(planet.orbital_period, 10)),
        },
      ],
      legend: ["Periodo Orbital"],
    };

    return (
      <BarChart
        style={{ marginVertical: 8, borderRadius: 16 }}
        data={data}
        width={350}
        height={300}
        fromZero
        showValuesOnTopOfBars
        withHorizontalLabels={false}
        chartConfig={{
          backgroundGradientFrom: "#e2cb91",
          backgroundGradientTo: "#e2cb91",
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
      />
    );
  };

  const renderPlanetInformation = () => {
    return(<View><View style={s.viewPlanets}>
      <Text style={s.textStrong}>Lista de planetas: </Text>

      {planets.map((planet) => (
        <View key={planet.name} style={s.viewPlanetInformation}>
          <Text style={s.text}>- {planet.name}</Text>
          <View style={{ marginLeft: 20, flexDirection: "column" }}>
            <Text>Clima: {planet.climate}</Text>
            <Text>Gravedad: {planet.gravity}</Text>
            <Text>Terreno: {planet.terrain}</Text>
            <Text>Habitantes: {planet.population}</Text>
          </View>
        </View>
      ))}
    </View>
    <View style={{ paddingVertical: 20 }}>
      <Text style={s.textStrong}>Periodo Orbital por planeta en horas: </Text>
      <View style={{ alignSelf: "center" }}>{renderBarChart()}</View>
    </View></View>)
  }

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
    fetchPlanetDetailsRequest(film.planets);
  }, [fetchPlanetDetailsRequest, film.title]);

  if (loadingPlanets) {
    return (
      <View style={s.viewLoading}>
        <ActivityIndicator size={50} color="#B79235"></ActivityIndicator>
        <Text style={s.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={s.view}>
      <View style={s.infoContainer}>
        <View>
          <Image source={{ uri: movieImage }} style={s.movieImage} />
        </View>
        <View style={s.infoTextContainer}>
          <Text style={s.textTitle}>
            <Text style={s.textTitleStrong}>Titulo: </Text>
            {film.title}
          </Text>
          <Text style={s.text}>
            <Text style={s.textStrong}>Fecha de emisión: </Text>
            {film.release_date}
          </Text>
          <Text style={s.text}>
            <Text style={s.textStrong}>{"Director(es): "}</Text>
            {film.director}
          </Text>
          <Text style={s.text}>
            <Text style={s.textStrong}>{"Productor(es): "}</Text>
            {film.producer}
          </Text>
          <Text style={s.text}>
            <Text style={s.textStrong}>ID de episodio: </Text>
            {film.episode_id}
          </Text>
        </View>
      </View>
      <Text style={s.textStrong}>Resumen: </Text>
      <View style={s.paragraphView}>
        <Text style={s.paragraph}>{film.opening_crawl}</Text>
      </View>
      {renderPlanetInformation()}
    </ScrollView>
  );
};

const mapStateToProps = (state: any) => ({
  planets: state.planets.planetDetails,
  loadingPlanets: state.planets.loading,
});
const mapDispatchToProps = {
  fetchPlanetDetailsRequest,
};

const connectHomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmScreen);
export { connectHomeScreen as FilmScreen };
