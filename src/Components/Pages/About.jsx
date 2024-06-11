import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import BodyPage from "../Body/BodyPage";
import { SiCoffeescript } from "react-icons/si";

function About() {
  return (
    <div>
        <Header/>
            <BodyPage>
              <span className="p-8 h-auto">
                <div className="m-4 p-6 bg-orange-300	border-2 border-orange-700	">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae illo eum explicabo vitae ullam ut praesentium corporis illum saepe, quo alias deleniti quas ipsum obcaecati 
                    dolores doloremque, omnis tenetur vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum! Dolores animi 
                    recusandae neque cumque hic sint, aut laboriosam repudiandae veniam aperiam quae commodi explicabo vitae ex reprehenderit illo quisquam?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima nemo magnam. Accusamus provident quis quos enim nam quas 
                    consectetur perferendis, officiis saepe error vel laboriosam vero dignissimos qui iusto. 
                  </p>
                    
                  <br/><br/>
                  <div className="flex">
                    <img className="ml-6 rounded-xl w-96 h-72	" src="https://media.istockphoto.com/id/1199797903/photo/background-of-coffee-beans-and-grinded-coffee-on-a-rustic-table.jpg?s=612x612&w=0&k=20&c=Gr0oLyDuqLnDSzJoDlMtDAQ6nGjMLNQ7I1P_0ik9mL0=" alt="coffee img"/>
                    <div className="px-5 flex flex-col justify-center items-center">
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit rem maxime, eligendi voluptatem hic, tempora porro necessitatibus nam temporibus accusamus placeat. Dignissimos cupiditate quam laborum consequuntur quidem repudiandae a sed!
                        Lorem ipsum dolor sit .
                      </p>
                      <SiCoffeescript className="size-48 "/>
                    </div>
                  </div>
                </div>

                <div className="m-4 p-5 bg-orange-900 rounded-md">
                  <div className="flex">
                    <div className="border-r-2 border-l-2">
                      <p className="mx-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, vero itaque eligendi, esse id odio nulla dolorum omnis optio fuga quae obcaecati voluptatibus placeat eius debitis sequi, eaque unde enim?</p>
                    </div>
                    <div className="border-r-2">
                      <p className="mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic, itaque at quos omnis quod, repellendus, deserunt enim reiciendis quisquam doloremque dicta dignissimos sunt natus adipisci similique porro autem cum!</p>
                    </div>
                    <div className="border-r-2">
                      <p className="mx-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quisquam, odio omnis, est minus eligendi numquam</p>
                    </div>
                  </div>
                </div>
              </span>
            </BodyPage>
        <Footer/>

    </div>
  )
}

export default About
