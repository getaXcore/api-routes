import { useRouter } from 'next/router'
import { usePeople } from '../../components/usePeople'
import Layout from '../../components/layout'

export default function Person() {
  let people = new usePeople()
  const { query } = useRouter()
  const {data, isLoading, isError} = people.usePeopleByName(`${query.id}`,1)
  const router = useRouter()
  //const currentState = query.page
  
  if(isError) return <Layout home><div>{error.message}</div></Layout>
  if(isLoading) return <Layout home><div>Loading...</div></Layout>

  return (
  <Layout home>
    <section className='relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10'>
      <div className='border-b border-gray-200 shadow"'>
       
        <div className="text-2xl font-bold uppercase text-center text-gray-900 bg-white">{data[0].name}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Height</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].height}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Mass</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].mass}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Hair color</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].hair_color}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Skin color</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].skin_color}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Eye color</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].eye_color}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Gender</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].gender}</div>
      </div>
      <div className='border-b border-gray-200 shadow"'>
        <div className='className="px-6 py-2 text-xs text-gray-500 bg-gray-50'>Birth Year</div>
        <div className="text-sm text-gray-900 bg-white">{data[0].birth_year}</div>
      </div>
      <div className='px-6 py-4'>
        <button onClick={() => router.push('/')} className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Return</button>
      </div>
    </section>
  </Layout>  
  )
}
