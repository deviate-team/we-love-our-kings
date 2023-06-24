import { IKing } from "@/interfaces/king";

async function getKnigDataById(id: number) {
    const response = await fetch(`http://localhost:3000/api/kings/${id}`);
    if (response.ok) {
        return response.json();
    }
    return [];
}

export default async function DetailPage({ id }: { id: number }) {
    const data = (await getKnigDataById(id)) as IKing;
    return (
        <section className="bg-[url('/header-bg.png')] bg-repeat min-h-screen">
            <div className="py-8 text-left lg:py-16 lg:px-12 mt-10">
                <h1 className="mb-4 text-4xl font-normal tracking-tight leading-none text-blue-800 md:text-xl lg:text-2xl">{data.name}</h1>
                <p className="mb-8 text-lg font-normal text-blue-700 lg:text-base text-left"></p>
                {data.work?.map((work, index) => (
                    <div key={index} className="mb-8">
                        <h2 className="mb-4 text-2xl font-normal tracking-tight leading-none text-blue-800 md:text-xl lg:text-2xl">{work.title}</h2>
                        <p className="mb-8 text-lg font-normal text-blue-700 lg:text-base text-left">{work.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}