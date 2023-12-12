import React, { useEffect } from 'react';
import { View , Text} from 'react-native'
import { connect } from 'react-redux';
import { fetchFilmsRequest } from '../../redux/actions/';

interface HomeScreenProps {
  films: any[];
  loadingFilms: boolean;
  fetchFilmsRequest: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ films, loadingFilms, fetchFilmsRequest }) => {
  useEffect(() => {
    fetchFilmsRequest();
  }, [fetchFilmsRequest]);

  console.log(loadingFilms);
  
  if(loadingFilms){
    return (
        <View>
            <Text>Cargando...</Text>
        </View>
    )
  }
  return (
    <View>
      {/* Renderiza la información de las películas */}
      {films.map((film) => (
        <Text key={film.title}>{film.title}</Text>
      ))}
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  films: state.films.films,
  loadingFilms: state.films.loading
});

const mapDispatchToProps = {
  fetchFilmsRequest,
};

const connectHomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
export { connectHomeScreen as HomeScreen };
