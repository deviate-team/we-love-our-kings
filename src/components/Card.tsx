import { IKing } from "@/interfaces/king";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, fullName, image }: IKing) => {
    return (
        <Link href={`/king/${id}`}>
            <div className="h-full flex-1 bg-white relative shadow-lg">
                <div className="h-80 relative rounded-lg">
                    <div className="block h-full relative">
                        <Image src={image} alt="test" className="h-full absolute object-cover object-top" width={1000} height={1000} />
                    </div>
                </div>
                <div className="text-lg p-4">
                    <h1 className="text-lg text-blue-800">
                        {name}
                    </h1>
                    <p className="text-grey-darker text-sm text-blue-800 font-extralight mt-3">{fullName}</p>
                </div>
                <Image src='/border-card.png' alt="border-card" height={1000} width={1000} className="absolute bottom-0" />
            </div>
        </Link>
    )
}

export default Card;