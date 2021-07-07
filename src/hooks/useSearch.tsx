import { useContext } from 'react';
import { SearchContext } from '../contexts/Search';

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context)
    throw new Error('useSearch must be used within a SearchProvider');

  const { search, setSearch, sort, sortBy, changeSearch, clearSort } = context;

  return { search, setSearch, sort, sortBy, changeSearch, clearSort };
};
