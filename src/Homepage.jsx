import Button from 'react-bootstrap/Button';
import Contact from './Contact';
import "./index.css"
export default function Homepage() {
    return (
        <div class="justify self centre" >
            <p class=" py-10 px-20 text-4xl md:text-5xl xl:text-7xl font-semi--bold text-white" style={{ display: "flex", textAlign: "center" }}>
                We can only preserve the planet for generations to come if companies and governments act together to build a clear path towards carbon neutrality.
            </p>
            <br></br>
            <br></br>
            <br></br>
            <div class="container">
                <div class="center">
                <Button variant="dark text-4xl">SignIn</Button>
                <br></br>
                <br></br>
                <br></br>
                
                <Button variant="dark text-4xl">SignUp</Button>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Contact></Contact>
        </div>
    )
}