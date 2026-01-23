import { Navbar } from "../component/Navbar"
export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f3b] via-[#141852] to-[#0b0f3b] text-white pb-10">
      
      
      <Navbar contact={"text-blue-600"}/>

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl font-bold my-6">CONTACT</h2>
          <p className="text-gray-300 max-w-md mb-12 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="space-y-8">
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-gray-400 text-sm">
                Depok Maharaja, Blok M12/14, <br />
                Rangkapan Jaya, Pancoran Mas, Depok.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-gray-400 text-sm">+62 889 8265 7412</p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-gray-400 text-sm">koda@mail.com</p>
            </div>
          </div>

          <div className="flex gap-4 mt-10">
              <div className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-white hover:text-black " >
                in
              </div>
              <div className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-white hover:text-black " >
                f
              </div>
              <div className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-white hover:text-black " >
                x
              </div>
              <div className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-sm cursor-pointer hover:bg-white hover:text-black " >
                ▶
              </div>
          </div>
        </div>

       
        <div className="bg-[#141852]/60 backdrop-blur-lg rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            GET IN TOUCH
          </h3>

          <form className="space-y-6">
            <input type="text" id="name" placeholder="Name" className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2"/>
            <input type="email" id="email" placeholder="Email" className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2"/>
            <input type="text" placeholder="Phone number" className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2"/>
            <textarea rows="3" placeholder="Message" className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2 resize-none"/>

            <button type="submit" className="w-full mt-6 py-3 bg-[#1b1f6b] rounded-lg font-semibold hover:bg-[#2a2fa0] transition shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

