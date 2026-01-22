import { Navbar } from "../component/Navbar"
import { Header } from "../component/Header"
import { Link } from "react-router-dom"


export const Home = ()=>{
    return(
        <div>
            <Navbar home={"text-blue-600"} />
            <Header>
                <div className="w-1/3 text-white justify-center ml-10">
                    <h1 className="text-7xl font-bold">Lorem, ipsum dolor</h1>
                    <p className="text-xl py-2" >Lorem ipsum dolor sit amet.</p>
                    <div className="flex gap-10 ">
                        <div className="w-24 h-12 bg-white rounded flex justify-center items-center font-bold text-xl">
                            <Link to="/about" className="text-black">About</Link>
                        </div>
                        <div className="w-24 h-12 bg-white rounded flex justify-center items-center font-bold text-xl">
                            <Link to="/contact" className="text-black">Contact</Link>
                        </div>
                    </div>
                </div>
            </Header>
            
        </div>
    )
}