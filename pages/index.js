import Person from '../components/Person'
import { usePeople } from '../components/usePeople'
import { useState } from 'react'
import Layout from '../components/layout'
//import Router,{ useRouter } from 'next/router'

export default function Index() {
  let people = new usePeople()
  //const { query } = useRouter()
  //const currentState = query.page ? query.page : 1
  const [pageIndex, setPageIndex] = useState(1)
  const {data, isNext, isLoading, isError} = people.usePeopleAll(`${pageIndex}`)

  if(isError) return <Layout home><div>Failed to load</div></Layout>
  if(isLoading) return <Layout home><div>Loading...</div></Layout>

  return (
    <Layout home>
      <section className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
      <ul className='space-y-4'>
          {
            
            data.map((p, i) => (
              <Person key={i} person={p} currentState={pageIndex}/>
            ))
          }
      </ul>
      </section>
      <section className='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4'>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => setPageIndex(pageIndex - 1)} disabled={pageIndex == 1}>Previous</button>
        <button className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => setPageIndex(pageIndex + 1)} disabled={isNext[0].next == null}>Next</button>
      </section>
    </Layout>
  )
}
