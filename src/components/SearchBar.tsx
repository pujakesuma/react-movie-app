import { FormEvent, useEffect, useState } from 'react';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Import icons from Heroicons React library
import { useNavigate } from 'react-router-dom';
import useQueryParams from '../hooks/useQueryParams';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()
  const { query } = useQueryParams()

  const clearSearch = () => {
    setSearchValue('')
  }

  const toSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(`/results?query=${searchValue}`)
  }

  useEffect(() => {
    if (query) {
      setSearchValue(query)
    }
  }, [query])

  return (
    <div className="relative w-full md:w-1/4">
      <form onSubmit={toSearch} className="bg-white flex items-center border border-gray-300 rounded-md">
        <input
          className="px-4 py-2 w-full focus:outline-none text-black rounded-md"
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {searchValue && (
          <button type="button" onClick={clearSearch} className="p-2 focus:outline-none bg-white">
            <XMarkIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
          </button>
        )}
        <button type="submit" className="focus:outline-none bg-white py-2 pl-0 pr-2">
          <MagnifyingGlassIcon className="h-4 w-4 text-gray-500 hover:text-gray-700" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
