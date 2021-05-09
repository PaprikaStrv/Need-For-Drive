import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "x-requested-with, Content-Type, origin, authorization, accept, x-api-factory-application-id",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
  },
});

const instanceGeoCode = axios.create({
  baseURL:
    "https://geocode-maps.yandex.ru/1.x/?apikey=a514df5b-163d-423e-b12e-b007b4649231&format=json&geocode=",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers":
      "x-requested-with, Content-Type, origin, authorization, accept, x-api-factory-application-id",
  },
});

export const simbirsoftAPI = {
  getCities() {
    return instance.get(`city`).then((response) => {
      return response.data;
    });
  },
  getPoints() {
    return instance.get(`point`).then((response) => {
      return response.data;
    });
  },
  getCars() {
    return instance.get(`car`).then((response) => {
      return response.data;
    });
  },

  getCategories() {
    return instance.get(`category`).then((response) => {
      return response.data;
    });
  },

  addressGeocode(address, city) {
    return instanceGeoCode.get(`${address} " " ${city}`).then((response) => {
      return response.data;
    });
  },

  coordsGeocode(ln,lat) {
    return instanceGeoCode.get(ln,lat).then((response) => {
      return response.data;
    })
  }
};
