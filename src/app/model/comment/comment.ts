import { SaleProduct } from "../product/sale/saleproduct";
import { User } from "../user/user";

export interface Comment{
    id?: number;
    userId?: User;
    productId?: SaleProduct
    vote?: number;
    dateTime?: string;
    content?: string;
}