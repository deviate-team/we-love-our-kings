import { IKing } from "@/interfaces/king";
import Card from "./Card";

async function getKingData() {
    const response = await fetch(
        "http://localhost:3000/api/kings"
    );
    if (response.ok) {
        return response.json();
    }
    return [];
}

export default async function MainPage() {
    const data = (await getKingData()) as IKing[];
    return (
        <div className="container my-12 mx-auto px-4  mt-20">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {data.map((king, index) => (
                    <Card key={index} id={index + 1} name={king.name} full_name={king.full_name} />
                ))}
            </div>
        </div>
    );
}