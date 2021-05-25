import { useRouter } from "next/router";
import Button from "../Button";

const Step5 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-12 text-base md:w-6/12 text-center">
        wow! you are in for a ride! it’s going to be exciting. there are a few
        things to look out for. first take a read through our discover page.
      </p>
      <div className="flex flex-col text-xl justify-space-around">
        <div className="flex justify-center mb-4">
          <button
            className="py-3 px-12 text-base text-red-500 border border-3 border-red-500 bg-white"
            onClick={() => router.push("/mustread")}
          >
            Must read
          </button>
        </div>
        <div className="flex justify-center">
          <Button
            className="px-10 text-base"
            onClick={() => router.push("/discover")}
          >
            Go discover
          </Button>
        </div>
        <p className="my-12 text-base text-center">
          NOW THAT YOU ARE MORE UP TO SPEED, YOU NEED TO CREATE A WALLET.
        </p>
        <div className="flex justify-center">
          <Button
            className="px-12 text-base"
            onClick={() => router.push("/playnow/7")}
          >
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Step5;
