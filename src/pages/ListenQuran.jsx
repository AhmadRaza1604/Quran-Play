import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ListenQuran = () => {
    const [reciters, setReciters] = useState([])
    const [chapters, setChapters] = useState([])
    const [chapter, setChapter] = useState(-1)
    const [reciter, setReciter] = useState(-1)
    const [recitation, setRecitation] = useState()
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    useEffect(() => {
        
        const fetchReciter = async () => {
            let config = {
                method: 'get',
              maxBodyLength: Infinity,
              url: 'https://api.quran.com/api/v4/resources/recitations',
              headers: { 
                  'Accept': 'application/json'
                }
              };
              
              axios(config)
              .then((response) => {
                console.log((response.data));
                setReciters(response.data.recitations)
              })
              .catch((error) => {
                console.log(error);
              });
        }
        const fetchChapters = async () => {
            let config = {
                method: 'get',
              maxBodyLength: Infinity,
              url: 'https://api.quran.com/api/v4/chapters',
              headers: { 
                  'Accept': 'application/json'
                }
              };
              
              axios(config)
              .then((response) => {
                console.log((response.data));
                setChapters(response.data.chapters)
              })
              .catch((error) => {
                console.log(error);
              });
        }
        fetchChapters()
        fetchReciter()
    }
    , [])
    const fecthRecitation = async () => {
        setShow(false)
        if(reciter === -1){
            return}
        let config = {
            method: 'get',
          maxBodyLength: Infinity,
          url: `https://api.quran.com/api/v4/chapter_recitations/${reciter}/${chapter}`,
          headers: { 
              'Accept': 'application/json'
            }
          };
          
          axios(config)
          .then((response) => {
            console.log((response.data));
            setRecitation(response.data.audio_file)
            setShow(true)
            setShow1(true)
          })
          .catch((error) => {
            console.log(error);
          });
    }

    useEffect(() => {
      if (chapter !== -1 && reciter !== -1) {
          fecthRecitation();
      }
  }, [chapter, reciter]);

    return (
      <>
      <div className='w-full flex flex-row justify-center items-center'>
      <img src='/assets/Quran4.jpg' className='w-full   object-fill max-h-96 min-h-44 '/>
      <h1 className='absolute md:text-5xl text-2xl bg-black opacity-60 w-full text-center py-1 text-white font-semibold '>Listen The Quran</h1>
    </div>
        <div className='justify-center flex flex-col items-center pt-6'>
               <div className='flex flex-row  gap-4 items-center w-11/12 md:w-4/6 lg:w-2/4'>
               <select value={reciter} onChange={(e)=>{setReciter(e.target.value)
                setShow(false)
                setShow1(false)
               }}  defaultValue={-1} className='bg-green-400 focus:!outline-none px-2 py-2 rounded-xl text-white justify-center flex mb-3 w-2/4'>
                <option value={-1}>Select Reciter</option>
                {reciters?.map((reciter)=>(
                    <option key={reciter.id} value={reciter.id}>{reciter.reciter_name} {reciter.style?`(${reciter.style})`:''}</option>
                ))}
               </select>
                <select value={chapter} onChange={(e)=>{setChapter(e.target.value)
                // setShow(false)
                setShow1(false)
                }
                } defaultValue={-1} className='bg-green-400 px-2 py-2 rounded-xl focus:!outline-none text-white justify-center flex mb-3 w-2/4'>
                <option value={-1}>Select Surah</option>
                {chapters?.map((chapter)=>(
                    <option key={chapter.id} value={chapter.id}>{chapter.name_simple}</option>
                ))}
                </select>
               </div>
            
                           
                            {show1 &&
                            <div className='flex flex-col items-center  bg-green-500 p-4 rounded-xl text-white w-11/12 md:w-4/6 lg:w-2/4'>
                                <h1 className='mb-3 font-semibold text-lg'>Surah {chapters[chapter-1]?.name_simple} by: {reciters[reciter-1]?.reciter_name}</h1>
                            {show &&
                                <audio controls className='w-11/12'>
                            <source src={recitation.audio_url} type="audio/mpeg"/>
                            </audio>
                            }
                            <div className='flex flex-row justify-around mt-4 w-full'>
                                <button disabled={1===chapter} onClick={()=>{
                                    setChapter((prev) => prev - 1);
                                    setShow(false)
                                }} className='bg-white text-green-700 p-1 w-2/5 text-sm md:text-lg rounded-full'>Previous Surah</button>
                                <button disabled={114===chapter} onClick={()=>{
                                    setChapter((prev) => Number(prev) + 1);
                                    console.log(chapter)
                                    setShow(false)
                                }} className='bg-white text-green-700 p-1 w-2/5 text-sm md:text-lg rounded-full'>Next Surah</button>
                                 </div>
                            </div>}
        </div>
      </>
    );
};

export default ListenQuran;