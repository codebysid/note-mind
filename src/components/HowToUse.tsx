import Image from "next/image"

const howToUse = [
    {
        id: 1,
        image: "/step-1.png",
        size: " h-96 w-[30%]"
    },
    {
        id: 2,
        image: "/step-2.png",
        size: " h-96 w-[1000px]"

    },
    {
        id: 3,
        image: "/step-3.png",
        size: " h-96 w-[30%]"

    },
    {
        id: 4,
        image: "/step-4.png",
        size: " h-80 w-[1000px]"

    },
]

const HowToUse = () => {
    return (
        <div className=" space-y-10">
            <h2 className="heading2">How To Use</h2>
            <div className=" flex flex-row flex-wrap gap-4 px-10">
                {
                    howToUse.map(({ id, image, size }) => {
                        return <div key={id} className={`relative ${size}`}>
                            <Image src={image} alt="how to use Note Mind" className=" absolute" sizes="90vw" fill />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default HowToUse