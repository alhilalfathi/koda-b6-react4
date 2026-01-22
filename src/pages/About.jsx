
import { Navbar } from "../component/Navbar"

export const About = ()=>{
    return(
        <div>
            <Navbar about={"text-blue-600"}/>
            <div className="bg-[url('/src/assets/img/2.jpg')] bg-cover bg-center bg-no-repeat h-screen w-full  flex items-center px-12">
                <div className="w-2/3"></div>
                <div className="w-1/3 h-full flex flex-col px-8 py-8 items-center text-white bg-gray-950/20">
                    <p className="w-128 flex justify-center font-bold text-7xl">About</p>
                    <p className="text-center my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam nesciunt quibusdam praesentium aspernatur nam quod omnis, enim eveniet vitae velit quae accusamus dolorum ut harum suscipit natus excepturi voluptates assumenda obcaecati. Maiores harum ipsam, quod delectus, aut veniam exercitationem at optio tempora dolorem obcaecati. Fugiat autem dolore inventore cumque id.</p>
                </div>
            </div>
                
            
        </div>
    )
}