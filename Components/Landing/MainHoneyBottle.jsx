'use client'

const MainHoneyBottle = () => {
    return (
        <div className="mb-10 relative">
            <div style={{
                filter: "drop-shadow(-10px 0 5px var(--filter-color))"
            }} className="w-[330] -right-4 top-[-50] h-[330] bg-[#FDCE3D] absolute rounded-full"></div>
            <img
                style={{
                    filter: "drop-shadow(-10px 0 5px var(--filter-color))"
                }}
                className='h-[300]' src={"/media/HoneyBottle.png"} />
        </div>
    )
}

export default MainHoneyBottle
