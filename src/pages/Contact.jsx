import { Navbar } from "../component/Navbar"
import { useEffect, useState } from "react"

export const Contact = () => {
  const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })

    const [messages, setMessages] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("contactMessages")) || []
        setMessages(data)
      }, [])
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.id]: e.target.value,
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault()

        const newMessage = {
          ...form,
          date: new Date().toLocaleString(),
        }

        
        const updatedMessages = [...messages,newMessage]
        setMessages(updatedMessages)

        localStorage.setItem(
          "contactMessages",
          JSON.stringify(updatedMessages)
        )

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      }

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

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Messages</h3>

            {messages.length === 0 && (
              <p className="text-gray-400 text-sm">Belum ada pesan</p>
            )}

            <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className="border border-white/20 rounded-lg p-4 text-sm"
                >
                  <p className="font-semibold">{msg.name}</p>
                  <p className="text-gray-300">{msg.email}</p>
                  <p className="text-gray-400">{msg.phone}</p>
                  <p className="mt-2">{msg.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{msg.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

       
        <div className="bg-[#141852]/60 backdrop-blur-lg rounded-xl p-10 shadow-lg">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            GET IN TOUCH
          </h3>

          <form className="space-y-6"onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2"/>
            <input type="email" id="email" placeholder="Email" value={form.email} onChange={handleChange}  className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2"/>
            <input type="text" id="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2"/>
            <textarea rows="3" id="message" placeholder="Message" value={form.message} onChange={handleChange} className="w-full bg-transparent border-b border-white/30 focus:outline-none focus:border-white py-2 resize-none"/>

            <button type="submit" className="w-full mt-6 py-3 bg-[#1b1f6b] rounded-lg font-semibold hover:bg-[#2a2fa0] transition shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

