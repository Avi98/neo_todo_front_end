import axios from "axios";
import merge from "lodash/merge";

const url = `${process.env.REACT_APP_BASE_URL}/api`;

const defaultOption = {
  baseUrl: url
};

export const fetch = axios.create(defaultOption);
