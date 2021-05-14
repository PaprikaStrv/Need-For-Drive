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
    "https://geocode-maps.yandex.ru/1.x/?apikey=8a72b731-1468-41f2-b794-9621a5f205e2&format=json",
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

  getRate() {
    return instance.get(`rate`).then((response) => {
      return response.data;
    });
  },

  addressGeocode(address, city) {
    return instanceGeoCode.get('',{
      params: {
        geocode: `${address} ${city}`
      }
    }).then((response) => {
      return response.data;
    });
  },

  coordsGeocode(coords) {
    return instanceGeoCode.get('',{
      params: {
        geocode: `${coords}`
      }
    }).then((response) => {
      return response.data;
    });
  },

};
