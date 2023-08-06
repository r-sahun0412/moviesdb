import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
import useFetch from '../useFetch/useFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=c71b1469`;
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('transformers');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`)

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
