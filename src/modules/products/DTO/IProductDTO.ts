export default interface IProductDTO {
  name: string;
  category: string;
  subcategory: string;
  brand?: string;
  description?: string;
  image?: string;
  price: number;
}
