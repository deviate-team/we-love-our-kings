import { IKing } from "@/interfaces/king";
import Card from "./Card";

async function getKingData() {
  const response = await fetch(
    "https://raw.githubusercontent.com/deviate-team/we-love-our-kings/dev/src/data/kings.json"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
}

export default async function MainPage() {
  const data = (await getKingData()) as IKing[];

  return (
    <div className="container my-12 mx-auto px-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {data.map((king, index) => (
          <Card
            key={index}
            id={index + 1}
            name={king.name}
            fullName={king.fullName}
            bio={king.bio}
            image={king.image}
          />
        ))}
      </div>
    </div>
  );
}
