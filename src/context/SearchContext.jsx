import React from 'react'

import { createContext, useState } from 'react';


export const SearchContext = createContext();
const SearchProvider = ({ children }) => {
  const [searchquery, setsearchQuery] = useState('');




  return (
    <SearchContext.Provider value={{ searchquery, setsearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
