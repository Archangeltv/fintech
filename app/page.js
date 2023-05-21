import Image from "next/image";
import main from "./assets/Main.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="padding">
      <div className="py-10 padding flex justify-center">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-text"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              style={{ enableBackground: "new 0 0 225 225" }}
              xmlSpace="preserve"
            >
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl text-text tracking-wide ml-2 font-semibold">
            Fintech.
          </div>
        </div>
      </div>
      <div className="grid items-center lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image src={main} alt="" />
        </div>
        <div className="padding">
          <h1 className=" font-semibold text-text text-center lg:text-left text-3xl ">
            Welcome to <span className="">Fintech!</span>
          </h1>
          <p className="text-text text-center lg:text-left mt-5">
            Unlock the potential of technology and revolutionize your financial
            experience with Fintech Solutions. We offer innovative solutions
            tailored to your needs, combining cutting-edge technology with
            expert financial guidance.
          </p>
          <div className="flex items-center justify-center">
            <button className="h-12 w-56 rounded-lg place-self-center mt-10 grad text-xl text-text ">
              <Link href="/sign-up">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
