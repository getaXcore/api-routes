import useSWR from "swr";

//const fetcher = (url) => fetch(url).then((res) => res.json())
const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
}
  

export default function usePeople(pageIndex){
    const {data, error} = useSWR(`https://swapi.dev/api/people/?page=${pageIndex}`,fetcher)

    return{
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function usePeopleById(id){
    const {data, error} = useSWR(`https://swapi.dev/api/people/${id}`,fetcher)

    return{
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}

export function usePeopleByName(id){
    const {data, error} = useSWR(`https://swapi.dev/api/people/?search=${id}`,fetcher)

    return{
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}