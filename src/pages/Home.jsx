import { Link } from "react-router-dom"
export const Home = ()=>{
    return(
        <div>
            <div className="flex flex-col">
                <h1>Home</h1>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}