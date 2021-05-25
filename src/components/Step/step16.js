import usePageTitle from "../../hooks/usePageTitle";
import { useRouter } from "next/router";
import Button from "../Button";

const Step16 = () => {
  usePageTitle("Playnow");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center px-20 py-12">
      <div>
        <div className="flex flex-col items-center">
          <p className="text-base">steps to start playing:</p>
          <p className="my-24 text-base text-center px-40">
            Do you have any compatible DIGITALAX digital fashion that you
            purchased with $MONA from
            <span
              className="underline cursor-pointer ml-2"
              onClick={() => router.push("https://skins.digitalax.xyz")}
            >
              skins.digitalax.xyz
            </span>
            ? THIS IS HOW WE VERIFY YOU FOR THE TOURNAMENTS. YOU MUST OWN A
            GARMENT TO SUIT UP FOR BATTLE.
          </p>
          <div className="flex text-xl justify-space-around">
            <Button
              className="mx-10 px-20 text-base"
              onClick={() => router.push("/esports")}
            >
              YES
            </Button>
            <Button
              className="mx-10 px-20 text-base"
              onClick={() => router.push("/playnow/3")}
            >
              NO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step16;
