import Image from "next/image";
import Link from "next/link";
import React from "react";
const items = [
  { src: '/illustration.png', text: 'Illustrations', link: '/portfolio/illustrations' },
  { src: '/application.png', text: 'Applications', link: '/portfolio/applications' },
  { src: '/website.png', text: 'Websites', link: '/portfolio/websites' },
];
function Portfolio() {
  return (
    <div className=" mt-10">
      <div className="flex gap-10">
        {items.map((item, index) => (
          <Link href={item.link} key={index} className="text-center relative">
            <Image src={item.src} width={1000} height={1000} alt="" className="w-[200px] h-[250px] ring-4 ring-slate-200 object-cover object-center opacity-60" />
            <span className="absolute bottom-0 right-2 text- text-2xl font-semibold">{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
