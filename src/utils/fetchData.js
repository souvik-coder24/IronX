export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_EXERCISEDB_API_KEY,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    },
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  };
  