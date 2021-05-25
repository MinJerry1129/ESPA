import { useRouter } from "next/router";
import Button from "../Button";

const Step11 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-6 text-base md:w-6/12 text-center">
        NOW YOU NEED TO BUY SOME CRYPTOCURRENCY. TO BUY CRYPTOCURRENCY WITH FIAT
        (I.E USD/EUR) first GO TO YOUR PROFILE PAGE ON THE DIGITALAX
        MARKETPLACE.
      </p>
      <p className="mb-8 text-base md:w-6/12 text-center">
        copy your connected wallet address by clicking on the copy icon.
      </p>
      <div className="flex flex-col text-xl justify-space-around">
        <div className="flex justify-center">
          <img src="/walletscreenshot.png" />
        </div>
        <p className="mt-10 mb-6 text-base text-center">
          DONE COPYING your wallet address?
        </p>
        <div className="flex justify-center mb-10">
          <Button
            className="mx-10 px-20 text-base"
            onClick={() => router.push("/playnow/12")}
          >
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Step11;
