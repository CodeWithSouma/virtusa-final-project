import React, { useState, useContext } from "react";
import axios from "axios";
import { RailContext } from "../components/context/context";

const getToken = async () => {
  // const token =
  //   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJUZXN0QGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJwYXNzZW5nZXI6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicGFzc2VuZ2VyOndyaXRlIn0seyJhdXRob3JpdHkiOiJib29raW5nOndyaXRlIn0seyJhdXRob3JpdHkiOiJST0xFX1VTRVIifSx7ImF1dGhvcml0eSI6InVzZXI6d3JpdGUifSx7ImF1dGhvcml0eSI6InVzZXI6cmVhZCJ9LHsiYXV0aG9yaXR5IjoiYm9va2luZzpyZWFkIn0seyJhdXRob3JpdHkiOiJ2ZWhpY2xlOnJlYWQifV0sImlhdCI6MTY0NzM2MTc5MCwiZXhwIjoxNjQ4NDkyMjAwfQ.ohdEBRYsO1hqN99nrgyvoUjnso5YdE7EPaK1FvV1EzhX2R1jZ8RKoVFgNeYxV0NJaNepIBzYREH1OodjA7esEQ";
  const token = window.localStorage.getItem("userToken");
  return token;
};

export default axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
