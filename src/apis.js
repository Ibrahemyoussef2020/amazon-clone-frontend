import axios , { CancelToken }  from "axios";


const api = axios.create({
  baseURL: "https://amazon-clone-data.onrender.com",
  timeout:0
});

const source = CancelToken.source()

const fetchData = async (dynamicData , setData) => {
  return await api.get(dynamicData).then((res) => {
    setData(res?.data);
  },{cancelToken: source.token});
};

const fetchSlectedData = async (dynamicData, setData, id) => {
  return await api.get(`${dynamicData}/${id}`).then((res) => {
    setData(res?.data);
  },{cancelToken: source.token});
};

source.cancel("Operation cancelled by the user.");

export { fetchData, fetchSlectedData, api };
