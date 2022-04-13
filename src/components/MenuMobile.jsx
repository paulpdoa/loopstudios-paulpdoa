import { motion,AnimatePresence } from 'framer-motion';

const slideRightVar = {
    hidden: {
        x:'-5vw',
        opacity:0,
        transition:{
            type:'tween',
            duration:0.6
        }
    },
    visible: {
        x:0,
        opacity:1,
        transition: {
            type:'tween',
            duration:0.6
        }
    },
    exit: {
        x:'-5vw',
        opacity:0,
        transition:{
            type:'tween',
            duration:0.6
        }
    }
}

const MenuMobile = ({ openMenu,setOpenMenu }) => {
  return (
    <AnimatePresence>
        <motion.nav className="fixed md:hidden block top-0 h-screen w-full left-0 bg-black z-50 p-10"
            key={openMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideRightVar}
        >
            <div className="flex items-center justify-between">
                <img src="/images/logo.svg" alt="logo" />
                <img onClick={() => setOpenMenu(false)} src="/images/icon-close.svg" alt="close" />
            </div>
            <ul className="flex flex-col gap-3 uppercase font-light text-4xl text-white mt-32">
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
        </motion.nav>
    </AnimatePresence>
  )
}

export default MenuMobile