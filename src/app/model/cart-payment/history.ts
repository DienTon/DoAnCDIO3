import { User } from "../user/user";

export interface HistoryPayment{
    id:number;
    userId: User;
    phone: string;
    address: string;
    note: string;
    methodPayment: boolean;
}