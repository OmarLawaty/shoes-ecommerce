interface Product {
  id: string;
  company: ProductCompany;
  title: string;
  description: string;
  price: ProductPrice;
  images: ProductImage[];
  stock: number;
}

interface ProductPrice {
  currency: string;
  value: number;
  discount: number | null;
}

interface ProductImage {
  thumb: string;
  image: string;
}

interface ProductCompany {
  name: string;
  logo: string;
}
