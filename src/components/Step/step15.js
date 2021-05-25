import { useRouter } from "next/router";
import Button from "../Button";

const Step15 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-12 text-base md:w-6/12 text-center">
        you need to bridge your $mona to matic network. don’t worry, we have you
        covered. we created a custom bridge just for you! MAKE SURE TO HAVE YOUR
        WALLET SET UP FOR MATIC. HERE RRE THE STEPS FOR A{" "}
        <a
          className="underline text-base text-center"
          href="https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844"
          target="_blank"
        >
          METAMASK WALLET
        </a>{" "}
        AND{" "}
        <a
          className="underline text-base text-center"
          href="https://arkane.network/blog/matic-wallets"
          target="_blank"
        >
          ARKANE WALLET
        </a>
        .
      </p>
      <p className="mb-12 text-base md:w-6/12 text-center">
        go bridge your $mona!{" "}
        <span className="text-yellow-400">
          p.s. make sure to come back here when you are done, still some more
          steps to complete. you are almost there.
        </span>
      </p>
      <div className="flex flex-col text-xl justify-space-around">
        <div className="flex justify-center mb-10">
          <Button
            className="px-10 text-base"
            onClick={() => router.push("https://skins.digitalax.xyz/bridge/")}
          >
            go to bridge
          </Button>
        </div>
        <p className="mb-6 text-base text-center">
          done bridging YOUR $MONA TO MATIC?
        </p>
        <div className="flex justify-center mb-10">
          <Button
            className="px-12 text-base"
            onClick={() => router.push("/playnow/10")}
          >
            click here
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Step15;
