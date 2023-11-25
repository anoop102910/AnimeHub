import Image from "next/image";
import React from "react";

function About() {
  return (
    <div>
      <Image
        className="w-full h-[400px] object-top rounded-md mt-10 object-cover"
        src="/about.png"
        width={2000}
        height={2000}
      />
      <div className="md:flex justify-between items-start  mt-10">
        <div className="w-[35%]">
          <h4 className="h4-primary">What are we?</h4>
          <p className="p-primary mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sapiente adipisci rem nostrum recusandae.
            Repellendus non quasi possimus quaerat, quis eum.
          </p>
        </div>
        <div className="w-[35%]">
          <h4 className="h4-primary">What we do</h4>
          <p className="p-primary mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, facilis?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Sapiente adipisci rem nostrum recusandae.
            Repellendus non quasi possimus quaerat, quis eum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
