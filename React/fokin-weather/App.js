import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}