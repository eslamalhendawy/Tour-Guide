function ContactUs() {
  return (
    <div className="container mx-auto py-3 px-3">
      <h1 className="text-center text-white font-bold text-5xl mt-24 mb-12">Contact Us</h1>
      <div className="bg-white p-6 rounded-xl max-w-3xl mx-auto mb-12">
        <div className="md:flex gap-6 mb-6">
          <div className="flex flex-col basis-1/2">
            <span className="text-brownOrange block mb-2 font-semibold">Full Name</span>
            <input className="bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C]" type="text" placeholder="Name" />
          </div>
          <div className="flex flex-col basis-1/2">
            <span className="text-brownOrange block mb-2 font-semibold">E-mail</span>
            <input className="bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C]" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="flex flex-col mb-6">
          <span className="text-brownOrange block mb-2 font-semibold">Subject</span>
          <input className="bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C]" type="text" placeholder="I'd like to ask about..." />
        </div>
        <div className="flex flex-col">
          <span className="text-brownOrange block mb-2 font-semibold">Message</span>
          <textarea className="bg-[#D9D9D9] px-2 py-2 rounded-lg focus:outline-none placeholder:text-[#3333338C] resize-none" placeholder="Write a message" name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
