import { KINGS } from "@/constants/kings";
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
    const data = KINGS as IKing[];
    return (
        <div className="container my-12 mx-auto px-4 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {data.map((king, index) => (
                    <Card key={index} id={index + 1} name={king.name} fullName={king.fullName} bio={king.bio} image={king.image} />
                ))}
            </div>
        </div>
    );
}