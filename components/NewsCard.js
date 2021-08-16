import React, { useState } from "react";
// ____ GRAFIC ELEMENTS ____ //
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ImageView from "react-native-image-viewing";

// ____ FUNCTIONS ____ //
import distance from "../functions/Distance";
import dateFormat from "../functions/DateFormat";
import hourFormat from "../functions/HourFormat";

const NewsCard = (props) => {
  const [visible, setIsVisible] = useState(false);
  const [imageModal, setImageModal] = useState("");

  // Functions used to format data //
  const km = distance(
    props.latitude,
    props.longitude,
    props.location.latitude,
    props.location.longitude
  );
  const eventDate = dateFormat(props.date);
  const eventHour = hourFormat(props.date);

  return (
    <View style={styles.cardContainer}>
      <ImageView
        images={[{ uri: imageModal }]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      <TouchableOpacity
        onPress={() => {
          setIsVisible(true);
          setImageModal(props.image);
        }}
      >
        <Image
          alt={props.title}
          style={styles.eventImage}
          source={{
            uri: props.image,
            cache: "force-cache",
          }}
        />
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <Text style={styles.eventTitle}>{`${props.title.substring(
          0,
          30
        )}...`}</Text>
        <Text>{eventDate}</Text>
        <Text style={styles.eventDesc}>
          {`${props.desc.substring(0, 50)}...`}
        </Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.eventHour}>{eventHour}</Text>
        <Text style={styles.hour}>{`${km.toFixed(0)}km`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: "1%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "98%",
    height: 80,
    backgroundColor: "#E1E1E1",
    marginTop: "3%",
    paddingTop: "2%",
    paddingBottom: "2%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "60%",
    height: "100%",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "15%",
    height: "100%",
  },
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: "1%",
  },
  eventTitle: {
    fontWeight: "bold",
  },
});

export default NewsCard;
