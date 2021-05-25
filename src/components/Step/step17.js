import { useRouter } from "next/router";
import Button from "../Button";

const Step17 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-12 text-base md:w-6/12 text-center">
        AWESOME! CLICK BELOW AND DOWNLOAD THE MOD DIRECTLY. IF YOU WANT TO
        ENGAGE IN BATTLE LATER, MAKE SURE TO GET SKINNED.
      </p>
      <p className="mb-12 text-base md:w-6/12 text-center">
        TO PLAY THIS MOD, YOU WILL STILL NEED TO SIGN UP ON OUR MARKETPLACE.
        CLICK BELOW TO FOLLOW THE STEPS.
      </p>
      <div className="flex flex-col text-xl justify-space-around">
        <div className="flex justify-center mb-10">
          <Button
            className="text-base w-60 px-2 text-center"
            onClick={() => router.push("/playnow/18")}
          >
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Step17;
