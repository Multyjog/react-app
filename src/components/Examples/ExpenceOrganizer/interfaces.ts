export interface IExpence {
    description: string;
    amount: number;
    category: string;
    id?: number
}
export interface ICategory {
    value: string;
    name: string;
}