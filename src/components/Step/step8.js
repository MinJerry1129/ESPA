import { useRouter } from "next/router";
import Button from "../Button";

const Step8 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-12 text-base md:w-6/12 text-center">
        is your $mona or eth in your wallet on{" "}
        <span className="text-yellow-400">matic network?</span>
      </p>
      <p className="mb-12 text-base md:w-6/12 text-center">
        the digitalax marketplace is now on matic network. this allows for near
        zero gas fees, rapid scalability and a better user experience.
      </p>
      <div className="flex text-xl justify-space-around">
        <Button
          className="mx-10 px-20 text-base"
          onClick={() => router.push("/playnow/10")}
        >
          YES
        </Button>
        <Button
          className="mx-10 px-20 text-base"
          onClick={() => router.push("/playnow/15")}
        >
          NO
        </Button>
      </div>
    </div>
  );
};
export default Step8;
