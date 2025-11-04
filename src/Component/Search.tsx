import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import { ApiSearchProducts } from '../Axios/Axios';

function Search() {
 const [searchData, setSearchData] = useState<string>("");
  const {data}=useQuery({
        queryKey:["search",searchData],
        queryFn:()=>ApiSearchProducts(searchData),
  })
  console.log(data)
  return (
       <div className="mr-2.5">
          <input
            type="text"
            className="px-2 py-1 border-2 text-black rounded-2xl"
            placeholder="search"
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
          />
        </div>
  )
}

export default Search