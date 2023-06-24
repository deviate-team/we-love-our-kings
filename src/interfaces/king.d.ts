interface IKing {
    name: string;
    full_name: string;
    work: IWork;
}

interface IWork {
    title: string;
    description: string;
}