import { IKing } from "@/interfaces/king";
import Image from "next/image";
import Link from "next/link";

const Card = ({ id, name, full_name }: IKing) => {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link href={`/king/${id}`}>
                <article className="overflow-hidden shadow-lg">
                    <Image
                        alt="image"
                        className="block h-auto w-full"
                        src="/banner.jpeg"
                        width={100}
                        height={100}
                    />
                    <div className="text-lg p-4 bg-white">
                        <h1 className="text-lg text-blue-800">
                            {name}
                        </h1>
                        <p className="text-grey-darker text-sm text-blue-800 font-extralight mt-3">{full_name}</p>
                    </div>
                    <Image src='/border-card.png' alt="border-card" height={1000} width={1000} className=" w-full" />
                </article>
            </Link>
        </div >
    )
}

export default Card;