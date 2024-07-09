import { useEffect, useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const useFetch = (ApiRequest: (requestConfig?: AxiosRequestConfig) => Promise<AxiosResponse>) => {
  const [data, setData] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState<string>()

  useEffect(() => {
    const asyncFunction = async () => {
      try {
        const { success, catalog } = (await ApiRequest()).data;

        if (success) {
          setData(catalog);
          setIsPending(false);
          setError(undefined);
        }
      }
      catch(err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setIsPending(false);
      }
    }
    asyncFunction();
  }, []);

  return { data, isPending, error }
}

export default useFetch;