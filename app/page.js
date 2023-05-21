import Image from "next/image";
import main from "./assets/Main.png";

export default function Home() {
  return (
    <main className="">
      <div className="grid items-center lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image src={main} alt="" />
        </div>
        <div className="padding">
          <h1 className=" font-semibold text-text text-center text-3xl ">
            Welcome to <span className="">Fintech!</span>
          </h1>
        </div>
        <button>Get Started</button>
      </div>
    </main>
  );
}
