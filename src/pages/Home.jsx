import React,{ useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      let config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: `https://api.quran.com/api/v4/quran/translations/${158}?chapter_number=1`,
        // url: `https://api.quran.com/api/v4/resources/tafsirs`,
        headers: { 
          'Accept': 'application/json'
        }
      };
      
      axios(config)
      .then((response) => {
        console.log(response.data);
        setData(response.data.translations)
      })
      .catch((error) => {
        console.log(error);
      });
    }
    fetchData();
  },[])
  return (
    <div className='flex flex-col items-center justify-center '>
        <h1 className='text-4xl mb-4 bg-red-500 p-2 rounded-xl' >﷽</h1>
        <div className='flex flex-row-reverse items-center justify-center w-3/4 p-5 bg-gray-200 rounded-3xl flex-wrap'>
        {data?.map((item) => (
          <div key={item.id} className=' mb-2 bg-green-600 py-1 px-4 rounded-2xl text-white'>
            <h1>{item.text}</h1>
          </div>
        ))}
        </div>
        </div>
  )
};


export default Home;