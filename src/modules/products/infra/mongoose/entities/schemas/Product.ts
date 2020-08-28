import { model, Schema, Document } from 'mongoose';

export interface IProductSchema extends Document {
  name: string;
  description?: string;
  image?: string;
  price: number;
}

const ProductSchema = new Schema(
  {
    name: String,
    description: String,
    image: String,
    price: Number,
  },
  {
    timestamps: true,
  },
);

export default model<IProductSchema>('Product', ProductSchema);
