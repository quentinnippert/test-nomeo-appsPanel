import React, { useState } from "react";

// ____ GRAFIC ELEMENTS ____ //
import {
  View,
  Text,
  KeyboardAvoidingView,
} from "react-native";

// ____ COMPONENTS ____ //
import Input from "../components/Input";
import ButtonSubmit from "../components/ButtonSubmit";

const Authentication = () => {
  const [email, set_Email] = useState("");
  const [name, set_Name] = useState("");
  const [phone, set_Phone] = useState("");
  const [message, set_Message] = useState("");

  // Functions to handle reverse data flow //
  const handleEmail = (e) => {
    set_Email(e);
  };
  const handleName = (e) => {
    set_Name(e);
  };
  const handlePhone = (e) => {
    set_Phone(e);
  };

  // Sending authentication request //
  const handleSubmit = async () => {
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("phone", phone);
    try {
      await fetch("https://test-pgt-dev.apnl.ws/authentication/register", {
        method: "POST",
        headers: {
          "X-AP-Key": "uD4Muli8nO6nzkSlsNM3d1Pm",
          "X-AP-DeviceUID": "Documentation",
          Accept: "application/json",
          "Accept-Language": "fr-FR",
          "Content-Type": "multipart/form-data",
        },
        body: formdata,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            set_Message(data.success.message);
          } else {
            set_Message(data.error.message);
          }
        });
    } catch (err) {
      console.log({
        message: err,
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1
      }}
    >
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          keyboard="default"
          placeholder="Name"
          onChangeInput={handleName}
          type="name"
          value={name}
        />
        <Input
          keyboard="email-address"
          placeholder="Email"
          onChangeInput={handleEmail}
          type="emailAddress"
          value={email}
        />
        <Input
          keyboard="phone-pad"
          placeholder="Phone"
          onChangeInput={handlePhone}
          type="telephoneNumber"
          value={phone}
        />
      </View>
      {message !== "" ? <Text>{message}</Text> : null}
      <ButtonSubmit submit={handleSubmit} />
    </KeyboardAvoidingView>
  );
};


export default Authentication;
