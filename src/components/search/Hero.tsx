import category from "@/data/category";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

function Hero() {

  return (
    <div className="text-center">
      <div>
        <Image
          src="/bg.png"
          alt="hero-image"
          width={800}
          height={200}
          className="absolute mt-[-100px] w-full"
        />
        <div className="z-10 mt-[40px]">
          <h2
            className="text-[55px] font-semibold tracking-widest text-blue-800"
          >
            DISCOVER
          </h2>
          <h2 className="text-[20px]">Your Amazing City</h2>
          <form
            className="z-10 mt-5 flex items-center justify-center gap-2"
            action="/search"
          >
            <input
              type="text"
              name="q"
              placeholder="Search Anything"
              className=" z-10 w-[36%] rounded-full border-[1px] bg-white p-3 px-5 shadow-lg outline-blue-300"
            />
            <button
              className="z-10 cursor-pointer rounded-full bg-blue-800 p-3 shadow-md transition-all hover:scale-105"
            >
              <Search className="h-6 w-6 text-white" />
            </button>
          </form>
          <div
            className="mt-5 flex flex-col items-center justify-center"
          >
            <h2 className="text-xs text-gray-500">Or Browse the category</h2>
            <div
              className="mt-3 grid w-[50%] grid-cols-3 justify-center gap-5 md:grid-cols-7"
            >
              {category.map((item, index) => (
                <Link
                  key={index}
                  href={`/search?category=${item.name}`}
                  className="z-10 w-[60px] cursor-pointer rounded-full border-[1px] bg-white p-4 shadow-lg transition-all hover:scale-110 hover:border-blue-800"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={30}
                    height={30}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
