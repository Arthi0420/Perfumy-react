

import one from "../assets/images/p1.jpg"
import two from "../assets/images/p3.jpg"
import three from "../assets/images/p2.jpg"



//Products Component
function Products(){
    return(<div class="products">

        <div class="box">
            <img src={one} alt="one"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam placeat quisquam magnam fuga unde
                error beatae velit? Sunt, deleniti. Doloremque laborum libero expedita illo dolor! Error a dicta
                molestias!</p>
        </div>

        <div class="box">
            <img src={two} alt="two"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam placeat quisquam magnam fuga unde
                error beatae velit? Sunt, deleniti. Doloremque laborum libero expedita illo dolor! Error a dicta
                molestias!</p>
        </div>

        <div class="box">
            <img src={three} alt="three"></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veniam placeat quisquam magnam fuga unde
                error beatae velit? Sunt, deleniti. Doloremque laborum libero expedita illo dolor! Error a dicta
                molestias!</p>
        </div>


    </div>
)
}

export default Products