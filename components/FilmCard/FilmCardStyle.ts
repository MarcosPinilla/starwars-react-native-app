import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  cardContainer: {
    borderRadius: 19,
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 1,
    flex: 1,
    margin: 10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 6,
  },
  titleText: {
    marginTop: 10,
    alignSelf: "center",
  },
  episodeText: {
    alignSelf: "center",
    marginBottom: 10,
  },
  movieImage: {
    width: "100%",
    height: 250,
    borderRadius: 19,
  },
});

export default { s };
