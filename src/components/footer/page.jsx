import Image from "next/image";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white fixed bottom-0 w-full py-5">
      <section className="max-w-screen-xl flex justify-between m-auto">
        <div>
          <p>Support by</p>
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        </div>

        <div>
          <p>Pre</p>
          <Image src="/assets/logo.png" alt="logo" width={50} height={50} />
        </div>

        <div>
          <p>Contact</p>
          <FaFacebookSquare />
          <FaInstagramSquare />
          <FaTelegram />
          <FaLinkedin />
        </div>

        <div>
          <p>Location</p>
          <p>Phone Number</p>
          <p>Email</p>
          <p>Website</p>
        </div>
      </section>
      <p>© 2021</p>
    </footer>
  );
};

export default Footer;
