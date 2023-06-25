export interface IKing {
    id: number;
    name: string;
    fullName: string;
    bio: string;
    image: string;
    work?: IWork[];
}

interface IWork {
    title: string;
    description: string;
}