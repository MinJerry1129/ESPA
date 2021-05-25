import { useRouter } from "next/router";
import usePageTitle from "../../hooks/usePageTitle";

const Mustread = () => {
  usePageTitle("Must Read");
  const router = useRouter();

  return (
    <div className="w-full flex flex-col px-12 md:px-20 pt-12">
      <div className="flex flex-col mb-12 px-0 md:px-20">
        <p className="text-4xl mb-8 text-red-500">Important Notice</p>
        <p className="mb-6 font-tw-cent text-lg">
          Cryptocurrency, although extremely beneficial and innovative, is not
          like storing value in your regular bank account, wallet or custody
          provider. Crypto is decentralised and purely electronic. When you
          create a cryptocurrency wallet to store your $MONA token you must take
          extreme care of your private seed phrase and password (If you created
          a Metamask wallet) or centralised login password i.e. email account
          password (If you created an Arkane wallet). If you lose your seed
          phrase, password then you will lose all of your funds. There is no way
          to recover them. Also, if you don't take secure care of your
          passwords, private seed phrase then someone will try and take it to
          access and steal your funds.
        </p>
        <p className="mb-4 text-4xl">Read this</p>
        <p className="mb-6 font-tw-cent text-lg">
          - Take extra care of your seed phrase and passwords. Do not store or
          save it online or somewhere on your computer where it can easily be
          hacked, copied or viewed by others. The best way is to write it down
          securely on at least 5 separate pieces of paper and store those
          securely in different locations i.e. a safe box.
          <br />- If you are going to store it on your computer, create a new
          and password secured user account and store the private seed phrase
          and password in a password protected secure folder on your computer.
          <br />- Only link to sites provided on the DIGITALAX/ESPA official web
          addresses for converting, transferring your funds. Follow our "PLAY
          NOW" steps to set up your wallet and funds correctly.
          <br />- If you have any concerns and questions please reach out
          directly to any of the DIGITALAX/ESPA team and community support
          members. We will guide you through. To verify that you are talking
          with an official team member join our discord community HERE and only
          talk with members with the roles "ESPA LEAD", "COMMUNITY WIZARD",
          "ESPA ORIGINS", "DIGITALAX ORIGINS". ANYONE ELSE that tries to
          approach you, send you a message, ask for information is a hacker,
          scammer or out to steal your funds. DO NOT hand over ANY information
          to anyone. The official DIGITALAX/ESPA team will NEVER ask for you to
          share your password or private seed phrase.
        </p>
        <p className="mb-4">Now that we have that out of the way...</p>
        <div className="flex">
          <button
            className="bg-white text-blue-400 border border-blue-400 px-12 py-3"
            onClick={() => router.push("/discover")}
          >
            Go Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mustread;
