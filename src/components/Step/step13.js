import { useRouter } from "next/router";
import Button from "../Button";

const Step13 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-12 text-base md:w-6/12 text-center">
        NOW IT IS TIME TO SWAP YOUR USDT FOR $MONA. READ MORE ABOUT $MONA HERE.
      </p>
      <p className="mb-12 text-base md:w-6/12 text-center">
        GO TO OUR CUSTOM SWAP PAGE.
      </p>
      <div className="flex flex-col text-xl justify-space-around">
        <div className="flex justify-center mb-10">
          <Button
            className="text-base w-60 px-2 text-center"
            target="_blank"
            onClick={() => window.open("https://skins.digitalax.xyz/swap")}
          >
            Swap to $mona
          </Button>
        </div>
        <p className="mb-12 text-base text-center">done swapping?</p>
        <div className="flex justify-center mb-10">
          <button
            className="py-3 text-base text-white espa-bg-yellow w-60 text-center"
            onClick={() => router.push("/playnow/10")}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
};
export default Step13;
