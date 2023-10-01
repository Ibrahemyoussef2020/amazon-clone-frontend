import axios from "axios";

console.log(axios);

const api = axios.create({
  baseURL: "http://localhost:4000/",
});

const fetchData = async (dynamicData , setData) => {
  return await api.get(dynamicData).then((res) => {
    setData(res?.data);
  });
};

const fetchSlectedData = async (dynamicData, setData, id) => {
  return await api.get(`${dynamicData}/${id}`).then((res) => {
    setData(res?.data);
  });
};

export { fetchData, fetchSlectedData, api };
