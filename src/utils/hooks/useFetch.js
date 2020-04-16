import { useEffect, useState } from 'react';

export default (api) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const res = await fetch(api);
      const json = await res.json();
      setData(json);
      setIsLoaded(false);
    } catch (err) {
      setError(err);
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { data, isLoaded, error };
};
