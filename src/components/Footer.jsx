import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-black p-10">
        <div className="container mx-auto flex flex-col items-center md:items-start md:flex-row justify-between md:px-32">
            <div className="flex flex-col gap-5">
                <img className="md:w-2/5 w-full" src="/images/logo.svg" alt="logo" />
                <ul className="flex flex-col items-center md:items-start md:flex-row text-white gap-10">
                    <li className="hover:border-b-2 hover:border-white cursor-pointer">About</li>
                    <li className="hover:border-b-2 hover:border-white cursor-pointer">Careers</li>
                    <li className="hover:border-b-2 hover:border-white cursor-pointer">Events</li>
                    <li className="hover:border-b-2 hover:border-white cursor-pointer">Products</li>
                    <li className="hover:border-b-2 hover:border-white cursor-pointer">Support</li>
                </ul>
            </div>
            <div className="flex flex-col md:items-end items-center gap-5 mt-10 md:mt-0">
                <div className="flex items-center gap-3 text-gray-100 text-2xl">
                    <AiFillFacebook className="hover:border-b-2 hover:border-white cursor-pointer"/>
                    <AiOutlineTwitter className="hover:border-b-2 hover:border-white cursor-pointer"/>
                    <BsPinterest className="hover:border-b-2 hover:border-white cursor-pointer"/>
                    <AiOutlineInstagram className="hover:border-b-2 hover:border-white cursor-pointer"/>
                </div>
                <p className="text-gray-400 font-medium opacity-50">&copy; 2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer