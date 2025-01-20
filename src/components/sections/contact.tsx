import ContactForm from "../contact-form";
import HeroSocialLinks from "../ui/HeroSocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-2 my-20 sm:mx-12 mb-8 md:mx-20 lg:mx-32 p-8 bg-black bg-opacity-50 border rounded-md border-opacity-50 border-violet-500">
      <h2 className="text-3xl text-center mb-2">Contact Me</h2>
      <div
        className={`mb-8 h-1 w-40 m-auto bg-violet-800 transition-[width] duration-700 ease-in-out`}></div>
      <div className="flex justify-center my-4">
        <HeroSocialLinks />
      </div>
      <ContactForm />
    </section>
  );
}
