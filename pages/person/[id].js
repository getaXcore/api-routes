import { useRouter } from 'next/router'
import { usePeopleByName } from '../../components/usePeople'
import Link from 'next/link'

export default function Person() {
  const { query } = useRouter()
  const {data, isLoading, isError} = usePeopleByName(`${query.id}`)
  
  if(isError) return <div>{error.message}</div>
  if(isLoading) return <div>Loading...</div>

  return (
    <div className="container flex justify-center mx-auto">
      <div className="flex flex-col">
        <div className="w-full">
          <div className="border-b border-gray-200 shadow">
            <table className='hover:table-auto'>
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Name</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Height</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Mass</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Hair color</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Skin color</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Eye color</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Gender</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Birth Year</th>
                </tr>
              </thead>
              <tbody className='bg-white'>
                <tr className='whitespace-nowrap'>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].name}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].height}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].mass}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].hair_color}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].skin_color}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].eye_color}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].gender}</div></td>
                  <td className='px-6 py-4'><div className="text-sm text-gray-900">{data.results[0].birth_year}</div></td>
                </tr>
                <tr className='whitespace-nowrap'>
                  <td colSpan={7} className='px-6 py-4'>
                    <Link href="/"><a className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>Return</a></Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  )
}
