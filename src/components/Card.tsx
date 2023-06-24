import { ICard } from "@/interfaces/card";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, description }: ICard) => {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <Link href={`/king/${title}`}>
                <article className="overflow-hidden shadow-lg">
                    <Image
                        alt="Placeholder"
                        className="block h-auto w-full"
                        src="https://picsum.photos/600/400/?random"
                        width={100}
                        height={100}
                    />
                    <div className="text-lg p-4">
                        <h1 className="text-lg text-blue-800">
                            {title}
                        </h1>
                        <p className="text-grey-darker text-sm text-blue-800 font-extralight mt-3">{description}</p>
                    </div>
                </article>
            </Link>
        </div >
    )
}

export default Card;