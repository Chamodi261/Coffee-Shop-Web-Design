import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import BodyPage from '../Body/BodyPage'

function Shop() {
  return (
    <div>
        <Header/>
            <BodyPage>
              <div className="">
                <p className='p-8 text-white text-4xl	italic'>Select Your Choice..</p>
                <div className='flex flex-row justify-center gap-40 p-8'>
                    <span>
                      {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/027/927/578/small_2x/coffee-logo-ai-generative-free-png.png"/> */}
                        <img className="h-64 w-86 bg-amber-800 cursor-pointer	p-1 rounded-xl hover:h-72 w-96" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJY7eOaiPrZfKoGYMb54ePndqcTnNjs9-tuuLkcb8yyUv_gvJnoGdmT1JqsjfLO2HBgwo&usqp=CAU" alt="Image 1"/>
                        <p className='text-white text-center text-lg	'>Cappuccino </p>
                    </span>
                    <span>
                        <img className="h-64 w-86 bg-amber-800 cursor-pointer p-1 rounded-xl hover:h-72 w-96" src="https://www.tastingtable.com/img/gallery/the-perfect-milk-to-coffee-ratio-for-your-homemade-cappuccino/l-intro-1670945507.jpg" alt="Image 2"/>
                        <p className='text-white text-center text-lg'>Latte</p>
                    </span>
                </div>

                <div className='flex flex-row justify-center gap-40 p-8'>
                    <span>
                        <img className="h-80 w-86 bg-amber-800 cursor-pointer	p-1 rounded-xl hover:h-96 w-96" src="https://bakingmischief.com/wp-content/uploads/2022/03/coffee-milkshake-square.jpg" alt="Image 3"/>
                        <p className='text-white text-center text-lg	'>Coffe Milkshake </p>
                    </span>
                    <span>
                        <img className="h-80 w-86 bg-amber-800 cursor-pointer p-1 rounded-xl hover:h-96 w-96" src="https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg" alt="Image 4"/>
                        <p className='text-white text-center text-lg'>Iced Coffee</p>
                    </span>
                </div>   
              </div>
            </BodyPage>
        <Footer/>
    </div>
  )
}

export default Shop