import { useRouter } from "next/router";
import Button from "../Button";

const Step9 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-24 text-base md:w-6/12 text-center">
        you can buy $mona on ethereum mainnet through uniswap and then map this
        to matic using our token bridge or you can purchase usdt from a local
        currency (i.e. usd/eur) and then swap this to $mona directly on matic.
      </p>
      <div className="flex text-xl justify-around w-full md:w-auto">
        <Button
          className="md:mx-10 px-10 md:px-20 text-base"
          onClick={() => router.push("/playnow/14")}
        >
          Uniswap
        </Button>
        <Button
          className="md:mx-10 text-base"
          onClick={() => router.push("/playnow/11")}
        >
          convert from fiat
        </Button>
      </div>
    </div>
  );
};
export default Step9;
