import axios from "axios";
import merge from "lodash/merge";

const url = `${process.env.REACT_APP_BASE_URL}/api`;

const defaultOption = {
  baseURL: url
};

export const fetchData = axios.create(defaultOption);
