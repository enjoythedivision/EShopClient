import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../api/products.js";
export default function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(id).then(setProduct);
  }, [id]);

  return <main></main>;
}

//todo: fetch product by id and display it
