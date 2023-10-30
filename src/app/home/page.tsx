
import NavBar from '../components/navigation'
import Footer from '../components/footer'

import SlideShow from './slideshow'
import MAbout from './about'
import Join from './joinSection'
import MPublication from './publication'
import MainNews from './news'
import MupcomingTraining from './training'
import MEvents from './events'

export default function HomePage() {
  return (
    <main className=' w-full overflow-hidden'>
      <NavBar/>
      {/* <SlideShow/>
      <hr className='mx-[6%]'/>   
      <MAbout/>
      <hr className='mx-[6%]'/>
      <MainNews/>
      <MEvents/>
      <hr className='mx-[6%]'/>
      <Join/>
      <hr className='mx-[6%]'/>
      <MupcomingTraining></MupcomingTraining>
      <hr className='mx-[6%]'/>
      <MPublication/> */}
      <Footer/>
    </main>
  )
}
