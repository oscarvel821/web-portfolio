const EmailForm = () => {
  return (
    <form className="lg:w-3/4">
      <input type="text" className="w-full h-15 glass p-3" placeholder="Name"/>
      <input type="email" className="w-full h-15 glass p-3 mt-10" placeholder="Email"/>
      <textarea rows={15} className="w-full glass p-3 mt-10" placeholder="Message"/>
      <button className="mt-10 bg-[#F0A273] rounded-xl p-3 outline outline-1 outline-[#262A4D] shadow hover:shadow-lg hover:bg-[#D18B4D] active:bg-[#B47634]">Send Message</button>
    </form>
  )
}

export default EmailForm;
