import Person from '../components/Person'
import usePeople from '../components/usePeople'
import { useState } from 'react'

export default function Index() {
  const [pageIndex, setPageIndex] = useState(1)
  const {data, isLoading, isError} = usePeople(`${pageIndex}`)

  if(isError) return <div>Failed to load</div>
  if(isLoading) return <div>Loading...</div>

  return (
    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
      The Star Wars Characters 
      </div>
      <div className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
        <ul className='space-y-4'>
          {
            data.results.map((p, i) => (
              <Person key={i} person={p} />
            ))
          }
        </ul>
      </div>
      <div className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex == 1}>Previous</button>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      </div>
    </div>  
  )
}
