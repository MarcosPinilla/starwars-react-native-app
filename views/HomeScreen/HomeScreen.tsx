import React, { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { fetchFilmsRequest } from "../../redux/actions/";
import { useNavigation } from "@react-navigation/native";
import { FilmCard } from "@components";
import { s } from "./HomeScreenStyle";

interface HomeScreenProps {
  films: any[];
  loadingFilms: boolean;
  fetchFilmsRequest: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({
  films,
  loadingFilms,
  fetchFilmsRequest,
}) => {
  const navigation = useNavigation();
  useEffect(() => {
    fetchFilmsRequest();
  }, [fetchFilmsRequest]);

  if (loadingFilms) {
    return (
      <View style={s.view}>
        <ActivityIndicator size={50} color="#B79235"></ActivityIndicator>
        <Text style={s.loadingText}>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={s.view}>
      <FlatList
        key={"#"}
        data={films}
        renderItem={({ item }) => (
          <FilmCard
            film={item}
            onPress={() => navigation.navigate("Film", { film: item })}
          />
        )}
        keyExtractor={(item) => item.episode_id}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  films: state.films.films,
  loadingFilms: state.films.loading,
});
const mapDispatchToProps = {
  fetchFilmsRequest,
};

const connectHomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
export { connectHomeScreen as HomeScreen };
