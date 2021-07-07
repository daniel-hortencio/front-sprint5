import React, { useState, createContext } from 'react';

interface ISearchProvider {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sort: 1 | -1 | undefined;
  sortBy: string;
  changeSearch: (by: string) => void;
  clearSort: () => void;
}

export const SearchContext = createContext({} as ISearchProvider);

export const SearchProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<1 | -1 | undefined>(undefined);
  const [sortBy, setSortBy] = useState<string>('');

  function changeSearch(paramSortby: string) {
    setSort(sort && sort > 0 ? -1 : 1);
    setSortBy(paramSortby);
  }

  const clearSort = () => {
    setSort(undefined);
    setSortBy('');
  };

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        sort,
        sortBy,
        changeSearch,
        clearSort,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
