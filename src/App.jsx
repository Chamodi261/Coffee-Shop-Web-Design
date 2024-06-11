import BodyPage from "./Components/Body/BodyPage"
import Carousel from "./Components/Body/Carousel"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import { SiBuymeacoffee } from "react-icons/si";
import { GiTeapotLeaves } from "react-icons/gi";

function App() {

  return (
    <>
      <Header/>
      <BodyPage>
        <div>
          <Carousel/>
          <div className='p-8'>
            <div className='flex items-center	items-center	'>
              <h1 className='font-mono text-white text-6xl'>Grab your Coffee</h1>
                <span>
                  <SiBuymeacoffee className='items-center	 size-28 text-white'/>
                </span>
            </div>
            <div className="flex justify-center">
              <div className='flex items-center bg-amber-200 mt-8 max-w-4xl'>
                  <p className='max-w-3xl p-5 bg-amber-200 mt-4 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus in assumenda corrupti laboriosam illum? Laudantium nostrum vero blanditiis tempore, aliquam aut ipsam! Et vitae pariatur ea quibusdam officiis accusamus deleniti.
                    <GiTeapotLeaves className='size-28'/>
                  </p>
                  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZwiYAKuRtnxQLPIFD_yKvFkf_4WmAuqWgV6jV2k1_7W1dGIKDgN3BRJ4-bTY4Id5O9PM&usqp=CAU' className='w-80 h-80 pt-8 p-4'/>
              </div>
            </div>
            <div className='flex justify-center pt-8'>
              <span className='text-amber-400'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti sint, a quas, molestias reiciendis laborum incidunt explicabo porro nam beatae minus quos fugiat odit mollitia aliquam labore neque. Iure, repellat.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo ut eum consectetur dolores libero consequatur similique sunt nisi! Dignissimos beatae sapiente porro quod nihil maiores, nulla laudantium quis? Labore, harum.</p>
              </span>
            </div>
          </div>
        </div>
        
      </BodyPage>
      <Footer/>
    </>
  )
}

export default App
