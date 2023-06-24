import { IKing } from "@/interfaces/king";
import { useState } from "react";
import Card from "./Card";

const MainPage = () => {
    const [data, setData] = useState<IKing[]>([])

    getKingData().then((data) => {
        setData(data)
    })
    return (
        <div className="container my-12 mx-auto px-4 md:px-12 mt-20">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {data.map((king, index) => (
                    <Card key={index} name={king.name} full_name={king.full_name} />
                ))}
            </div>
        </div>
    );
}

const getKingData = async () => {
    const response = await fetch('http://localhost:3000/api/kings')
    if (response.ok) {
        return response.json();
    }
    return [];
}

export default MainPage;