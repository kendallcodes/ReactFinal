import { useState, useEffect } from "react";
import axios, { CancelToken, CancelTokenSource, AxiosError } from "axios";

function useData(url) {
  const [query, setQuery] = useState({ query: "react hooks" });
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState(undefined);
// query changed, make API call


  useEffect(() => {
    if (token) {
      token.cancel("REQUEST_CANCELLED");
    }
    async function fetchData() {
      setError("");
      setLoading(true);
      setData([]);
      const token = axios.CancelToken.source();
      setToken(token);

        const response = await axios.get(url, {
        cancelToken: token.token,
        params: query
      });

      setToken(undefined);
      setData(response.data);
      setLoading(false);
    

    fetchData().catch((error) => {
      if (error.message !== "REQUEST_CANCELLED") {
        const msg = error.message;
        setError(msg);
      }
      setToken(undefined);
    });
  }
  }, [query]);
  
return [data, query, setQuery, loading, error];
}
export default useData;
