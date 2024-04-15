import { FaHouseUser } from "react-icons/fa6";
import { FaMapMarker, FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-900 text-white">
        <nav>
            <h2 className="text-3xl font-bold">Corporate office</h2>
            <hr className="text-white" />
            <div className="flex">
            <FaMapMarker className="text-2xl mr-3"></FaMapMarker>
            <p className="text-base">  Plot # 217/G, Block# C, Uttara Housing Soceity, <br />Road No - 2 Uttara, Dhaka-1212</p>
            </div>
            <div className="flex">
                <FaPhone className="text-2xl mr-3"></FaPhone>
                <p className="text-base">  +880 12345678-85</p>
            </div>
            <div className="flex">
                <MdOutlineEmail className="text-2xl mr-3"></MdOutlineEmail>
                <p className="text-base">info@abc.bd.com</p>
            </div>
        </nav> 
        <nav>
            <h6 className="footer-title">Company</h6> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </nav> 
        <nav className="ml-10">
            <h6 className="footer-title text-white">Our Projects</h6> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Dhaka</a>
            <a className="link link-hover">Chattogram</a>
            <a className="link link-hover">Sylhet</a>
            <a className="link link-hover">Cox's Bazar</a>
        </nav>
        </footer> 
        <footer className="footer px-10 py-4 border-t bg-slate-900 text-white border-base-300">
        <aside className="items-center grid-flow-col">
            <FaHouseUser className="text-3xl mr-3"></FaHouseUser>
            <p>ABCs Properties Limited. <br/>Providing reliable service since 1990</p>
        </aside> 
        <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
            <FaTwitter className="text-3xl"></FaTwitter>
            <FaYoutube className="text-3xl"></FaYoutube>
            <FaInstagram className="text-3xl"></FaInstagram>
            <FaFacebookF className="text-3xl"></FaFacebookF>
            </div>
        </nav>
        </footer>
        <aside className="text-center bg-base-300 mb-6">
            <p>Copyright © 2024 - All right reserved by ABCs Properties Limited</p>
        </aside>
                </div>
            );
        };

export default Footer;