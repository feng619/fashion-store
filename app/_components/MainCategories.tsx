import Image from "next/image";
import Link from "next/link";

function ImageButton({ text, src }: { text: string; src: string }) {
  return (
    <Link
      href="/"
      className="box-border relative w-full md:w-4/12 p-2 m-0 mb-5 md:p-0 md:m-2"
    >
      <p className="relative pt-28 pb-28 sm:pt-24 sm:pb-24 z-10 text-center text-3xl text-white font-medium tracking-widest">
        {text}
      </p>
      <Image
        src={src}
        className="aspect-auto"
        fill
        style={{ objectFit: "contain" }}
        alt={text}
        sizes="100%"
      />
    </Link>
  );
}

export default function MainCategories() {
  return (
    <div className="w-full pl-5 pr-5 mt-6 mb-6">
      <div className="text-center">
        <h3 className="m-6 text-2xl">選購分類</h3>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        <ImageButton text="女士" src="/images/welcome-page-image-ww.png" />
        <ImageButton text="男士" src="/images/welcome-page-image-mw.png" />
        <ImageButton text="兒童" src="/images/welcome-page-image-kw.png" />
      </div>
    </div>
  );
}
