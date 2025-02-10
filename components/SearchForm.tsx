import React from 'react'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

const SearchForm = ({query}:{query?:string}) => {
    // const query=useSearchParams().get('query')
  return (
    <form action="/" className="search-form">
        <input 
        key={query}
        name='query'
        defaultValue={query}
        placeholder='search'
        className='search-input'
         />

         <div className='flex gap-2'>
            {query && <SearchFormReset/>}
            <button type='submit' className='search-btn text-white'>
                <Search className='size-5'/>
            </button>
         </div>

    </form>
  )
}

export default SearchForm