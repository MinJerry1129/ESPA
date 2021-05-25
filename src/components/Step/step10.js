import { useRouter } from "next/router";
import Button from "../Button";

const Step10 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="my-12 text-base md:w-6/12 text-center">
        GREAT! ONLY ONE THING LEFT TO DO... GO SKIN YOURSELF! CLICK BELOW TO
        PURCHASE A UNIQUE IN-GAME DIGITAL FASHION AUTHENTICATOR. THIS IS YOUR
        IDENTITY MARKER AND HOW WE TAACK YOU ON THE LEADERBOARD FOR ESPA
        ESPORTS.
      </p>
      <p className="mb-12 text-base md:w-6/12 text-center">
        REMEMBER... THE FIRST ~2000 PLAYERS GET 2 FREE MATIC EACH! THAT IS CLOSE
        TO 200 FREE TRANSACTIONS EACH!!
      </p>
      <div className="flex text-xl justify-space-around">
        <button
          className="espa-bg-yellow py-5 px-10 text-base"
          onClick={() => router.push("https://skins.digitalax.xyz")}
        >
          Get Skinned
        </button>
      </div>
    </div>
  );
};
export default Step10;
