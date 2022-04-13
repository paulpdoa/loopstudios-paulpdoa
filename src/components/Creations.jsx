
const Creations = () => {
  return (
    <section className="h-auto mb-36">
        <div className="container mx-auto md:px-44">
            <div className="flex md:justify-between justify-center">
                <h1 className="md:text-5xl text-4xl uppercase font-light">Our Creations</h1>
                <button className="hidden md:block uppercase tracking-widest border-2 border-gray-900 w-36 hover:bg-black hover:text-white duration-200 transition">See All</button>
            </div>
            {/* For desktop */}
            <div className="hidden md:grid md:grid-cols-4 grid-cols-1 justify-items-center mt-10 gap-5">
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-deep-earth.jpg" alt="deep earth" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">DEEP EARTH</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-night-arcade.jpg" alt="night arcade" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">NIGHT ARCADE</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-soccer-team.jpg" alt="soccer team" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-6 w-auto">SOCCER TEAM VR</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-grid.jpg" alt="the grid" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-1/2">THE GRID</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-from-above.jpg" alt="from above" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-3 w-auto">FROM UP ABOVE VR</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-pocket-borealis.jpg" alt="pocket borealis" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">POCKET BOREALIS</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-curiosity.jpg" alt="curiosity" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">THE CURIOSITY</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/desktop/image-fisheye.jpg" alt="fisheye" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">MAKE IT FISHEYE</h2>
                </div>
            </div>
            {/* For Mobile */}
            <div className="grid grid-cols-1 mx-5 gap-5 my-4 md:hidden">
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/mobile/image-deep-earth.jpg" alt="deep earth" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/2">DEEP EARTH</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 bg-blend-darken transition duration-300" src="/images/mobile/image-night-arcade.jpg" alt="night arcade" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/2">NIGHT ARCADE</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/mobile/image-soccer-team.jpg" alt="soccer team" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/2">SOCCER TEAM VR</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 bg-blend-darken transition duration-300" src="/images/mobile/image-grid.jpg" alt="the grid" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/3">THE GRID</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/mobile/image-from-above.jpg" alt="from above" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-4/5">FROM UP ABOVE VR</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/mobile/image-pocket-borealis.jpg" alt="pocket borealis" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/2">POCKET BOREALIS</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/mobile/image-curiosity.jpg" alt="curiosity" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/2">THE CURIOSITY</h2>
                </div>
                <div className="relative cursor-pointer group">
                    <img className="group-hover:opacity-50 transition duration-300" src="/images/mobile/image-fisheye.jpg" alt="fisheye" />
                    <h2 className="group-hover:text-black absolute bottom-0 text-white uppercase text-3xl font-extralight p-3 w-1/2">MAKE IT FISHEYE</h2>
                </div>
            </div>
            <div className="flex justify-center md:hidden">
                <button className="border-2 border-black tracking-widest uppercase font-semibold p-2 w-32">See All</button>
            </div>
        </div>
    </section>
  )
}

export default Creations