interface IFeatureCard {
    title: string,
    description: string
}

const FeatureCard = ({ description, title }: IFeatureCard) => {
    return (
        <div className=" border p-8 w-1/4 rounded-2xl text-left h-48 flex flex-col gap-4 items-left justify-center">
            <p className=" text-2xl text-white/70 font-medium u whitespace-nowrap">{title}</p>
            <p className=" text-lg/5 text-white/50 text-balance">{description}</p>
        </div>
    )
}

export default FeatureCard