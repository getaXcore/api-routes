//import { usePeople } from "../../components/usePeople"
//import useSWR from "swr"

export default async function handler(req, res) {
    
    try{
        // Get data submitted in request's body.
        const body = req.body

        //fetch data
        const resData = await fetch(
            "https://swapi.dev/api/people/?search="+ body.name
        )
        const response = await resData.json();

        // Optional logging to see the responses
        // in the command line where next.js app is running.
        //console.log('body: ', body)

        // Guard clause checks for first and last name,
        // and returns early if they are not found
        if (!body.name) {
            // Sends a HTTP bad request error code
            return res.status(400).json({ data: 'Name not found' })
        }else{

            // Found the name.
            // Sends a HTTP success code
            //res.status(200).json({ data: `${body.name}` })
            res.status(200).json({ data: response })

        }

    }catch(error){
        res.status(500).json({ data: error.message })

    }
  }