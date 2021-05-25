import { useRouter } from "next/router";
import Button from "../Button";

const Step14 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex flex-col items-center md:mx-24 w-full md:w-6/12 ">
        <p className="mb-8 text-base text-center">
          Go to Uniswap and purchase some $MONA tokens. You must also hold some
          Ethereum in your wallet too. YOUR SCREEN WILL LOOK LIKE THE ONE ON THE
          RIGHT WHEN SWAPPING ETH OR USDT TO $MONA. CLICK HERE TO GO TO UNISWAP.
        </p>
        <Button
          className="mx-10 px-20 text-base mb-8"
          onClick={() =>
            router.push(
              "https://app.uniswap.org/#/swap?inputCurrency=0x275f5ad03be0fa221b4c6649b8aee09a42d9412a "
            )
          }
        >
          go to uniswap
        </Button>
        <p className="mb-12 text-base text-center">got your $MONA now?</p>
        <div className="flex text-xl justify-space-around">
          <Button
            className="mx-10 px-20 text-base"
            onClick={() => router.push("/playnow/15")}
          >
            YES
          </Button>
          <Button
            className="mx-10 px-20 text-base"
            onClick={() => router.push("/playnow/9")}
          >
            NO
          </Button>
        </div>
      </div>
      <div className="w-full md:w-6/12 flex mt-10 md:mt-0">
        <div className="mx-10">
          <img src="/uniswap1.png" />
        </div>
        <div className="mr-10">
          <img src="/uniswap2.png" />
        </div>
      </div>
    </div>
  );
};
export default Step14;
