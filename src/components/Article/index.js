import Image from "next/image";

export default function Article({ articleData }) {
  const src = articleData.image;
  return (
    <>
      <div className="w-80 p-2">
        <Image
          loader={() => src}
          src={src}
          alt="product"
          width="0"
          height="0"
          className="w-full h-auto rounded-lg mb-3"
        />
        <h4 className="font-bold text-xl mb-3">{articleData.title}</h4>
        <p className="text-gray-400">
          <span className="font-semibold">{articleData.author}</span> |{" "}
          {articleData.published_at}
        </p>
      </div>
    </>
  );
}
