import { useRouter } from "next/router";
import Button from "../Button";

const Step3 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-24 text-base md:w-6/12 text-center">
        Have you ever used cryptocurrency before? Do you know what it is?
      </p>
      <div className="flex text-xl justify-space-around">
        <Button
          className="mx-10 px-20 text-base"
          onClick={() => router.push("/playnow/4")}
        >
          YES
        </Button>
        <Button
          className="mx-10 px-20 text-base"
          onClick={() => router.push("/playnow/5")}
        >
          NO
        </Button>
      </div>
    </div>
  );
};

export default Step3;
