
const Creations = () => {
  return (
    <section className="h-auto mb-36">
        <div className="container mx-auto px-44">
            <div className="flex justify-between">
                <h1 className="text-5xl uppercase font-light">Our Creations</h1>
                <button className="uppercase tracking-widest border-2 border-gray-900 w-36 hover:bg-black hover:text-white duration-200 transition">See All</button>
            </div>
            <div className="grid grid-cols-4 justify-items-center mt-10 gap-5">
                <div className="relative cursor-pointer z-50 bg-gray-400">
                    <img className="z-0" src="/images/desktop/image-deep-earth.jpg" alt="deep earth" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">DEEP EARTH</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-night-arcade.jpg" alt="night arcade" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">NIGHT ARCADE</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-soccer-team.jpg" alt="soccer team" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">SOCCER TEAM VR</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-grid.jpg" alt="the grid" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-1/2">THE GRID</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-from-above.jpg" alt="from above" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">FROM UP ABOVE VR</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-pocket-borealis.jpg" alt="pocket borealis" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">POCKET BOREALIS</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-curiosity.jpg" alt="curiosity" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">THE CURIOSITY</h2>
                </div>
                <div className="relative cursor-pointer">
                    <img src="/images/desktop/image-fisheye.jpg" alt="fisheye" />
                    <h2 className="absolute bottom-0 text-white uppercase text-4xl font-extralight p-7 w-auto">MAKE IT FISHEYE</h2>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Creations