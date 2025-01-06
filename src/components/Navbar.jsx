import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars} from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [show, setShow] = useState(false)
    const links=[
        {
            name:'Home',
            url:'/'
        },
        {
            name:'Read Quran',
            url:'/read-quran'
        },
        {
            name:'Listen Quran',
            url:'/listen-quran'
        },
        {
            name:'About',
            url:'/about'
        },
    ]
    return (
        <>
        <div className='w-full h-fit bg-gray-800 z-50 fixed top-0  py-4 px-10  text-white flex justify-between items-center'>
            <div>
                <h1 className='text-2xl font-thin text-green-200'>QuranPlay</h1>
            </div>
            <div className=' md:flex hidden bg-green-400 w-10/12 h-12 rounded-full items-center justify-end px-4'>
            <div>

                {links.map((link)=>(
                    <Link to={link.url} key={link.name} className=' mx-1 hover:bg-green-800 font-semibold py-2 px-4 duration-300 transition-all  ease-in  rounded-full '>{link.name}</Link>
                ))}
            </div>
            </div>
            <div className='sm:flex md:hidden bg-green-400 w-fit h-12 rounded-full items-center flex justify-end px-1'>
            <div>
                <button onClick={()=>setShow(!show)} className='mx-1 hover:bg-green-800 font-semibold py-1 px-2 duration-300 transition-all  ease-in  rounded-full '>{show?<IoClose/>:<FaBars/>}</button>
                </div>
                </div>
                
                
            
        </div>
        {show &&
                 <div className=' flex flex-col top-20 z-50 fixed bg-green-400 w-full h-fit justify-end gap-3'>
                 <div className='flex flex-col justify-end'>
     
                     {links.map((link)=>(
                         <Link to={link.url} key={link.name} onClick={()=>setShow(false)} className=' mx-1 font-semibold py-2 px-4 text-white  flex justify-end'>{link.name}</Link>
                     ))}
                 </div>
                 </div>
                }
                </>
    );
};

export default Navbar;