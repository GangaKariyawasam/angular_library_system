import {Author} from "./Author";
import {Supplier} from "./Supplier";
import {Rack} from "./Rack";
import {Category} from "./Category";

export interface BookCustom {
  refNo: string,
  bookId: string,
  barcode: string,
  englishName: string,
  sinhalaName: string,
  year: number,
  price: number,
  medium: string,
  pages: number,
  note: string,
  image: string,
  author: Author,
  isReference: boolean,
  supplier: Supplier,
  rackNo: Rack,
  categories: Category[],
  isAvailable: boolean
}
