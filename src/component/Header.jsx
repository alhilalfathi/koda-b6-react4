
export const Header = (p)=>{
    return(
        <div>
            <div className="bg-[url('/src/assets/img/1.jpg')] flex items-center px-12 bg-cover bg-center bg-no-repeat h-screen w-full">
                {p.children}
            </div>
        </div>
    )
}