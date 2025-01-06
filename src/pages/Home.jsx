import React,{ useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {

      let config = {
        method: 'get',
      maxBodyLength: Infinity,
        url: 'https://api.quran.com/api/v4/quran/verses/imlaei?chapter_number=55',
        headers: { 
          'Accept': 'application/json'
        }
      };
      
      axios(config)
      .then((response) => {
        console.log(response.data.verses);
        setData(response.data.verses)
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
          <div key={item.id} className=' mb-2 bg-green-600 py-1 px-4 rounded-full text-white'>
            <h1>o{item.text_imlaei}</h1>
          </div>
        ))}
        </div>
        </div>
  )
};


export default Home;