import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Person({ person,currentState }) {
  const router = useRouter()

  return (
    <li className='flex items-center'>
      <svg className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2" strokeLinecap='round' strokeLinejoin='round'>
        <circle cx="12" cy="12" r="11" />
        <path d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9" fill="none" />
      </svg>
      <p className="ml-4">
        {/*<button onClick={() => router.push({pathname: `/person/${person.name}`,query:{page:currentState}})}>{person.name}</button>*/}
        <button onClick={() => router.push(`/person/${person.name}`)}>{person.name}</button>
      </p>
    </li>
  )
}
