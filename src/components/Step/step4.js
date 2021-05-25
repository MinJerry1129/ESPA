import { useRouter } from "next/router";
import Button from "../Button";

const Step4 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-24 text-base md:w-6/12 text-center">
        Great! Do you have a metamask or ARKANE cryptocurrency wallet? DIGITALAX
        IS NOW LIVE ON MATIC NETWORK for near zero transaction fees, rapid
        scalability and better user experience.
      </p>
      <div className="flex text-xl justify-space-around">
        <Button
          className="mx-10 px-20 text-base"
          onClick={() => router.push("/playnow/6")}
        >
          YES
        </Button>
        <Button
          className="mx-10 px-20 text-base"
          onClick={() => router.push("/playnow/7")}
        >
          NO
        </Button>
      </div>
    </div>
  );
};
export default Step4;
