import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api-factory.simbirsoft1.com/api/db/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "x-requested-with, Content-Type, origin, authorization, accept, x-api-factory-application-id",
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
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
    })
  }
 
};
