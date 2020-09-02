import { model, Schema, Document } from 'mongoose';

export interface IProductSchema extends Document {
  name: string;
  category: string;
  subcategory: string;
  brand?: string;
  description?: string;
  image?: string;
  price: number;
}

const ProductSchema = new Schema(
  {
    active: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    subcategory: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    amount: {
      type: Number,
    },
    tags: [{ type: String }],
    description: {
      type: String,
    },
    image: {
      type: String,
      default: 'image.png',
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IProductSchema>('Product', ProductSchema);
