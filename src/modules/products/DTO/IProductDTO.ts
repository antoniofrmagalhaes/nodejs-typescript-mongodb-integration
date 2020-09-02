export default interface IProductDTO {
  active: boolean;
  name: string;
  category: string;
  subcategory: string;
  brand?: string;
  amount: number;
  tags: [string];
  description?: string;
  image?: string;
  price: number;
}
