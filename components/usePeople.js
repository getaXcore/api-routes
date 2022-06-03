import useSWR from "swr";
import { PersonModel } from "../models/PersonModel.js";

const fetcher = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
  
    if (res.status !== 200) {
      throw new Error(data.message)
    }
    return data
}

export class usePeople{

    usePeopleAll(pageIndex){
        const {data, error} = useSWR(`https://swapi.dev/api/people/?page=${pageIndex}`,fetcher)
        let nData = []
        let nNext = []
        if(data){
            data.results.forEach(function newData(element,Index){
                nData.push(new PersonModel(element.name,element.height,element.mass,element.hair_color,element.skin_color,element.eye_color,element.birth_year,element.gender))
            });

            nNext.push({next:data.next})
        }

        return{
            data: nData,
            isNext: nNext,
            isLoading: !error && !data,
            isError: error
        }
    }
    usePeopleByName(id,pageIndex){
        const {data, error} = useSWR(`https://swapi.dev/api/people/?search=${id}&page=${pageIndex}`,fetcher)
        let nData = []
        let nNext = []
        if(data){
            data.results.forEach(function newData(element,Index){
                nData.push(new PersonModel(element.name,element.height,element.mass,element.hair_color,element.skin_color,element.eye_color,element.birth_year,element.gender))
            });
            
            nNext.push({next:data.next})
            
        }
        
        return{
            data: nData,
            isNext: nNext,
            isLoading: !error && !data,
            isError: error
        }
    }
}