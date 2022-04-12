import { AiFillFacebook,AiOutlineTwitter,AiOutlineInstagram } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-black p-10">
        <div className="container mx-auto flex justify-between px-32">
            <div className="flex flex-col gap-5">
                <img className="w-2/5" src="/images/logo.svg" alt="logo" />
                <ul className="flex text-white gap-10">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="flex flex-col items-end gap-5">
                <div className="flex items-center gap-3 text-gray-100 text-2xl">
                    <AiFillFacebook />
                    <AiOutlineTwitter />
                    <BsPinterest />
                    <AiOutlineInstagram />
                </div>
                <p className="text-gray-400 font-medium">&copy; 2021 Loopstudios. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer