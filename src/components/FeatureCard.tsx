interface IFeatureCard {
    title: string,
    description: string
}

const FeatureCard = ({ description, title }: IFeatureCard) => {
    return (
        <div className=" border p-4 lg:p-8 lg:w-1/4 rounded-2xl text-left h-32 lg:h-48 flex flex-col gap-2 lg:gap-4 items-left justify-center">
            <p className="text-xl lg:text-2xl text-white/70 font-medium">{title}</p>
            <p className="text-sm/4 lg:text-lg/5 text-white/50 text-balance">{description}</p>
        </div>
    )
}

export default FeatureCard