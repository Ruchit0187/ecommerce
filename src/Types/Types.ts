export interface InputForm {
  name: string;
  email: string;
  description: string;
}
interface dimensions {
  width: number;
  height: number;
  depth: number;
}
interface reviews {
  rating: number;
  comment: number;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}
interface meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
export interface ApidataType {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tages: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: reviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: meta;
  images: string[];
  thumbnail: string;
}
export interface QuantityApidata extends ApidataType{
  quantity:number
  totalQuantity: number
}