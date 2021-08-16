import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

// ____ GRAFIC ELEMENTS ____ //
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";

// ____ COMPONENTS ____ //
import NewsCard from "../components/NewsCard";

const Actus = (props) => {
  const [events, set_Events] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, set_Loading] = useState(true);

  useEffect(() => {
    // User get asked permission to use his location //
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      // Fetching WS data //
      const events_Call = async () => {
        try {
          await fetch("https://test-pgt-dev.apnl.ws/events", {
            headers: {
              "X-AP-Key": "uD4Muli8nO6nzkSlsNM3d1Pm",
              "X-AP-DeviceUID": "trial",
              Accept: "application/json",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              set_Events(
                data.sort(function (a, b) {
                  return new Date(b.published_at) - new Date(a.published_at);
                })
              );
              set_Loading(false);
            });
        } catch (err) {
          console.log({
            message: err,
          });
        }
      };
      events_Call();
    })();
  }, []);

  const eventsList = events.map((e, i) => {
    return (
      <NewsCard
        key={i}
        image={
          e.picture_url
            ? e.picture_url
            : "https://www.freeiconspng.com/uploads/no-image-icon-15.png"
        }
        title={e.title}
        desc={e.description}
        latitude={e.latitude}
        longitude={e.longitude}
        location={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }}
        date={e.published_at}
        index={i}
      />
    );
  });

  return (
    <View style={{ height: "100%" }}>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: "10%" }} />
      ) : (
        <ScrollView
          style={{ height: "80%" }}
          contentContainerStyle={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {eventsList}
        </ScrollView>
      )}
      {!loading ? (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate("Map", {
                events: events,
              })
            }
            style={styles.mapIcon}
          >
            <FontAwesomeIcon icon={faMap} />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mapIcon: {
    backgroundColor: "#99DBE2",
    padding: "4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  buttonContainer: {
    height: "10%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default Actus;
