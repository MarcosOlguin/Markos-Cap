import { useState, useEffect } from "react";

export function useFetch(url, update) {
  const [data, setData] = useState(null);
  const [err, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(url, {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        });

        if (!res.ok) {
          let err = new Error("Error en la peticion Fetch");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrio un Error";
          throw err;
        }

        const json = await res.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!signal.aborted) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    fetchData();

    return () => abortController.abort();
  }, [url, update]);

  return { data, err, loading };
}
