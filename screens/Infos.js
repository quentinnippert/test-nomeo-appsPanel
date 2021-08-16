import React, { useEffect, useState } from "react";

// ____ GRAFIC ELEMENTS ____ //
import { StyleSheet } from "react-native";
import { WebView } from 'react-native-webview';

const Infos = () => {

    const [html, set_Html] = useState('');


    // Fetching data from WS //
  useEffect(() => {
    const getData = async () => {
      try {
        await fetch("https://test-pgt-dev.apnl.ws/html", {
          headers: {
            "X-AP-Key": "uD4Muli8nO6nzkSlsNM3d1Pm",
            "X-AP-DeviceUID": "Documentation",
            "Accept-language": "fr-FR",
            "Accept": "text/html",
          },
        })
          .then((response) => {
            return response.text();
          })
          .then((data) => {
            set_Html(data);
          });
      } catch (err) {
        console.log({
          message: err,
        });
      }
    };
    getData();
  }, []);

  return (
      <WebView source={{html: html}} />
  );
};

const styles = StyleSheet.create({
  infosContainer: {
    flex: 1,
  },
});

export default Infos;
