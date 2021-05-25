import { useRouter } from "next/router";
import Button from "../Button";

const Step18 = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center">
      <p className="text-base">steps to start playing:</p>
      <p className="mt-12 text-base md:w-6/12 text-center">
        You will need to create an account on the digitalax marketplace. click
        below to go to our marketplace and sign up. once you have signed up come
        back to this page for next steps!{" "}
        <span className="text-yellow-400">
          IF YOU ARE A FIRST TIME USER AND NEW TO CRYPTOCURRENCY SIGN UP WITH AN
          ARKANE WALLET.           
          <a 
            href="https://drive.google.com/file/d/1xSZGNAMZRVxImeOXKZ0di3PSqr3cW_1A/view"
            target="_blank"
            className="text-yellow-400 ml-2 my-12 text-base md:w-6/12 text-center underline"
          >
            WATCH THIS FOR THE STEPS TO SET UP AN ARKANE WALLET
          </a>.
        </span>
      </p>
      <p className="my-5 text-base md:w-6/12 text-center">Your Arkane Wallet will automatically be generated on Matic Network.</p>
      <div className="flex flex-col text-xl justify-space-around">
        <div className="flex justify-center mb-10">
          <Button
            className="px-20 text-base"
            onClick={() => router.push("https://skins.digitalax.xyz")}
          >
            signup
          </Button>
        </div>
        <p className="my-8 text-base text-center">
          DONE SIGNING UP ON THE DIGITALAX MARKETPLACE? NOW GO INTO PRACTISE
          MODE!
        </p>
        <div className="flex justify-center">
          <Button
            className="px-20 text-base"
            onClick={() => router.push("/esports")}
          >
            Click here
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Step18;
