import { User } from "../user/user";

export interface Comment{
    id?: number;
    userId?: User;
    vote?: string;
    dateTime?: string;
    content?: string;
}