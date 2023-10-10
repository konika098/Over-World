const Contact = () => {
    
    



    
    return (
       <>
        <div className="w-full min-h-screen bg-[url('https://i.ibb.co/fDchNpp/pexels-photo-7562007.jpg')] bg-cover bg-center ">
        
          <div className="w-full min-h-screen h-full  flex flex-col  justify-center items-center backdrop-brightness-50">
          <h1 className="lg:mb-32 mb-3 mt-4 text-white text-base md:text-xl md:mt-3 md:mb-8 lg:text-4xl  font-semibold italic">CONTACT US AND FIND YOUR OVERWORLD</h1>
          
           


           <div   className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-4">
           <div   data-aos="fade-up-right" className="bg-base-100 w-96  flex flex-col items-center p-10 justify-center text-white">
              <img className="w-10 h-10 " src="https://i.ibb.co/N6JVwnQ/maps-and-flags.png" alt="" />
              <h1 className="text-2xl font-semibold mt-4 mb-2">Our Main Office</h1>
              <p className="text-lg font-semibold">B-3/4,Road-4,Gulshan 1</p>
            </div>
            
           <div data-aos="fade-down-right" className="bg-base-100 w-96  flex flex-col items-center p-10 justify-center text-white">
              <img className="w-10 h-10 " src="https://i.ibb.co/dtkZsxx/call.png" alt="" />
              <h1 className="text-2xl font-semibold mt-4 mb-2">Phone Number</h1>
              <p className="text-lg font-semibold">+09934567</p>
            </div>
            
           <div data-aos="fade-up-left" className="bg-base-100 w-96  flex flex-col items-center p-10 justify-center text-white">
              <img className="w-10 h-10 " src="https://i.ibb.co/vHBY0b9/email.png" alt="" />
              <h1 className="text-2xl font-semibold mt-4 mb-2">Email</h1>
              <p className="text-lg font-semibold">OverWorld@gmail.com</p>
            </div>
            

           </div>
           
          </div>
        </div>
       </>
    );
};

export default Contact;