import { FaRegSmile } from "react-icons/fa";
import EmailForm from "@/components/email/EmailForm";
import SocialMediaIcons from "@/components/navbar/links/socialMediaIcons/SocialMediaIcons";

const ContactPage = () => {
  return (
    <main className="p-4 grow">
      <section className="font-RobotoFlex">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <div className="mt-5 flex items-center">
        <h3 className="me-2 text-2xl text-opacity-80">Feel Free To Shoot Me A Message</h3>
          <FaRegSmile size={25}/>
        </div>
      </section>
      <section className="mt-5">
        <EmailForm/>
      </section>
      <section className="mt-5">
        <SocialMediaIcons/>
      </section>
    </main>
  )
}

export default ContactPage;
