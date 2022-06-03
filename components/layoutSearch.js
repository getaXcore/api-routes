import {useRef} from 'react'
//import Layout from './layout';
//import { usePeople } from './usePeople';
import Router from 'next/router'
//import { useState } from 'react'


export default function LayoutSearch({head}){
    const searchForm = useRef(null)
    const onSubmitted = () => {
        const form = searchForm.current;
        const valname = form['txtSearch'].value

        Router.push({
            pathname:'/search',
            query:{name:valname}
        })

    }

    //const name = form['txtSearch'].value;
    /*let people = new usePeople()
    const onSubmitted = () => {
        const form = searchForm.current;
        const {data, isLoading, isError} = people.usePeopleByName(`${form['txtSearch'].value}`);

        if(isError) return <Layout home><div>Failed to load</div></Layout>
        if(isLoading) return <Layout home><div>Loading...</div></Layout>

        console.log(`${form['txtSearch'].value}`)

    }

     
    

    
    const onSubmitted = async () => {
        const form = searchForm.current;
        const res = await fetch('/api/find',{
            body: JSON.stringify({
              name: `${form['txtSearch'].value}`, 
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST'
        });
        const response = await res.json();
        console.log(response.data.results)
        return (
            <div>{response.data.count}</div>
        )
    }

    */

    return(
        <div>
            <form className="w-full max-w-sm" ref={searchForm}>
                <div className="flex items-center border-b border-teal-500 py-2">
                    <input name='txtSearch' className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="find your favorite character" aria-label="Full name" required/>
                    <button type='button' name='search' onKeyDown={(e) => {e.key === 'Enter' && e.preventDefault}} onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault}} onClick={onSubmitted} className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded">
                    GO
                    </button>
                </div>
            </form>
            {!head && (
                <div>
                    <Link href='/'>
                        <a className='px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}