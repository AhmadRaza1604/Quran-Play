import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReadQuran from './pages/ReadQuran';
import ListenQuran from './pages/ListenQuran';
import About from './pages/About';
function App() {
  const MainLayout= ({children}) => {
    return (
      <>
        <Navbar/>
        <div className='mt-20 z-20'>
        {children}
        </div>
      </>
    )
  }

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout> <Home/> </MainLayout>} />
        <Route path='/recite-quran' element={<MainLayout> <ReadQuran /> </MainLayout>} />
        <Route path='/listen-quran' element={<MainLayout> <ListenQuran/> </MainLayout>} />
        <Route path='/about' element={<MainLayout> <About /> </MainLayout>} />
      </Routes>
      </BrowserRouter>
        </div>
  )
}

export default App
