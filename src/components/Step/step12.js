import { useRouter } from "next/router";
import Button from "../Button";

const Step12 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center w-full">
      <p className="text-base mb-10">steps to start playing:</p>
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-6/12 flex flex-col items-center md:mx-24">
          <p className="mb-8 text-base text-center">
            go to the transak page and choose the amount of local currency (i.e.
            usd/eur) you want to convert into into usdt.
            <br />
            <span className="text-yellow-400">
              MAKE SURE YOU HAVE CHOSEN USDT FOR MATIC NETWORK.
            </span>
          </p>
          <p className="mb-8 text-base text-center">
            After you click <span className="text-yellow-400">buy now</span>,
            paste your wallet address that you copied from your digitalax
            marketplace profile page.
          </p>
          <p className="mb-8 text-base text-center">
            FOLLOW THE TRANSAK VERIFICATION and kyc STEPS TO COMPLETE YOUR
            TRANSFER.
          </p>
          <p className="mb-8 text-base text-center">
            <span className="text-yellow-400">DOUBLE CHECK</span> you have
            entered the correct cryptocurrency{" "}
            <span className="text-yellow-400">
              usdt address for matic network
            </span>{" "}
            before confirming the transfer.
          </p>
          <div className="flex flex-col text-xl justify-space-around">
            <div className="flex justify-center md:mb-10">
              <Button
                className="px-2 text-base"
                target="_blank"
                onClick={() => window.open("https://global.transak.com/")}
              >
                Go to transak
              </Button>
            </div>
            <p className="mb-4 text-base text-center hidden md:block">
              do you have usdt in your wallet on matic network?
            </p>
            <div className="md:flex justify-center hidden">
              <Button
                className="px-20 text-base"
                onClick={() => router.push("/playnow/13")}
              >
                Yes
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 flex flex-col md:flex-row mt-10 md:mt-0">
          <div className="mx-10">
            <img src="/screen1.png" />
          </div>
          <div className="mx-10 mt-6 md:mt-0">
            <img src="/screen2.png" />
          </div>
          <p className="my-8 text-base text-center md:hidden">
            do you have usdt in your wallet on matic network?
          </p>
          <div className="flex justify-center md:hidden">
            <Button
              className="px-20 text-base"
              onClick={() => router.push("/playnow/13")}
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Step12;
