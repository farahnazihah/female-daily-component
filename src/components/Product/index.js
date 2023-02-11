import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Rating from "../Rating";

export default function Product({ data }) {
  return (
    <div className="w-48 p-3 rounded-lg bg-white">
      <div className="flex justify-center my-3">
        <Image
          loader={() => data.image}
          src={data.image}
          alt="product"
          width="0"
          height="0"
          className="w-3/5 h-auto"
        />
      </div>
      <div>
        <div className="flex flex-row mb-2">
          <span className="font-bold">{data.rating} </span>
          <div className="flex mx-2">
            <Rating rate={data.rating} />
          </div>
          (7)
        </div>
        <h6 className="font-bold">{data.name.toUpperCase()}</h6>
        <p>{data.desc}</p>
        <p className="text-neutral-400">{data.desc}</p>
      </div>
    </div>
  );
}
