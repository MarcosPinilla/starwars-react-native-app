import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  viewLoading: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F9F9F9",
  },
  loadingText: {
    alignSelf: "center",
  },
  infoContainer: {
    flexDirection: "row",
  },
  movieImage: {
    alignSelf: "center",
    width: 120,
    height: 200,
  },
  text: {
    fontSize: 18,
  },
  textTitle: {
    fontSize: 24,
    paddingBottom: 10,
  },
  textStrong: {
    fontWeight: "bold",
    fontSize: 18,
  },
  textTitleStrong: {
    fontWeight: "bold",
    fontSize: 24,
    justifyContent: "center",
  },
  infoTextContainer: {
    paddingLeft: 15,
    flex: 1,
  },
  paragraphView: {
    alignItems: "center",
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
  viewPlanets: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  viewPlanetInformation: {
    paddingRight: 10,
  },
});

export default { s };
