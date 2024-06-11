import React from 'react'
import Header from '../../Header/Header'
import BodyPage from '../../Body/BodyPage'
import Footer from '../../Footer/Footer'

function Menu(props) {
  return (
    <div>
        <Header/>
        <BodyPage>
            <div className='bg-orange-700 h-auto'>
                {props.children}
            </div>
        </BodyPage>
        <Footer/>

    </div>
  )
}

export default Menu