import React from "react";

// ____ GRAFIC ELEMENTS ____ //
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";


const Map = (props) => {
  let markers = props.route.params.events.map((marker, index) => (
    <Marker
      key={index}
      coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
      title={marker.title}
      description={marker.description}
    />
  ));

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 45.764043,
        longitude: 4.835659,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate("Home")
        }
        style={styles.backIcon}
      >
        <Text style={styles.goBack}>Retour</Text>
      </TouchableOpacity>
      {markers}
    </MapView>
  );
};

const styles= StyleSheet.create({
    backIcon: {
        position: 'absolute',
        top: 50,
        left: 20,
        backgroundColor: '#99DBE2',
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    goBack: {
        fontWeight: 'bold',
        color: 'black'
    }
})

export default Map;
