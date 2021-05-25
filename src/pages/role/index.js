import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";
import Button from "../../components/Button";
import { useRouter } from "next/router";

export default function Role() {
  usePageTitle("Role");

  const router = useRouter();

  const [ecosystem, setEcosystem] = useState(0);
  const prev = (
    <button
      className="w-12 mr-10"
      onClick={() => setEcosystem(ecosystem - 1 ? ecosystem - 1 : 3)}
    >
      <img src="/arrow-left.png" />
    </button>
  );
  const next = (
    <button
      className="w-12 ml-10"
      onClick={() => setEcosystem(((ecosystem + 1) % 3) + 1)}
    >
      <img src="/arrow-right.png" />
    </button>
  );

  const handleReturn = () => {
    if (ecosystem) setEcosystem(0);
    else router.push("/");
  };
  return (
    <div className="w-full flex flex-col right-pane px-20 py-12 justify-center relative">
      {ecosystem === 0 && (
        <div className="flex flex-col md:flex-row items-center justify-center">
          <button className="w-60" onClick={() => setEcosystem(1)}>
            <img src="/thinking.png" />
          </button>
          <button className="w-60" onClick={() => setEcosystem(2)}>
            <img src="/gaming.png" />
          </button>
          <button className="w-60" onClick={() => setEcosystem(3)}>
            <img src="/illustration.png" />
          </button>
        </div>
      )}
      {ecosystem === 1 && (
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-6/12 text-left">
            <p className="text-3xl mb-12 text-center md:text-left">Developer</p>
            <p className="text-base text-justify md:text-left">
              Indie devs and mods are tasked to showcase their content on ESPA.
              they will be able to plug their content directly into ESPA’s
              Esports Kit— leaderboard results (Local and Global), user
              authentication, player matching, digital fashion asset database— a
              trustless solution that leverages the security and decentralised
              verification of the entire Ethereum blockchain network.
            </p>
            <p className="text-base mt-4 mb-10">
              espa gives devs the power to make their games “esports ready”.
            </p>
            <Button
              className="ml-0 text-base"
              onClick={() => window.open("https://espadigitalax.typeform.com/to/gvUzwQpO")}
            >
              Join Now
            </Button>
          </div>
          <div className="w-full md:w-6/12 flex justify-center my-10 mb:mt-0">
            {prev}
            <img className="w-40" src="/thinking.png" />
            {next}
          </div>
        </div>
      )}
      {ecosystem === 2 && (
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-6/12 text-left">
            <p className="text-3xl mb-12 text-center md:text-left">Player</p>
            <p className="text-base text-justify md:text-left">
              Players can log in at anytime and start engaging in Esports
              battles with the games and content of their choice. stored across
              local and global leaderboards.
            </p>
            <p className="text-base mt-4 mb-10 text-justify md:text-left">
              Players are identified through their digital fashion unique NFT
              token IDs. Earning through play will be as easy as ever in espa—
              no need to enter a stadium, no need to predict what the next big
              “hot” studio game will be and try and jump on the same wagon, and
              no need to guarantee live stream to an audience. It is just the
              Player in his zone, anywhere. ESPA is for every Player.
            </p>
            <Button
              className="ml-0 text-base"
              onClick={() => window.open("https://espadigitalax.typeform.com/to/fNLLPW0y")}
            >
              Join Now
            </Button>
          </div>
          <div className="w-full md:w-6/12 flex justify-center my-10 mb:mt-0">
            {prev}
            <img className="w-40" src="/gaming.png" />
            {next}
          </div>
        </div>
      )}
      {ecosystem === 3 && (
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-6/12 text-left">
            <p className="text-3xl mb-12 text-center md:text-left">Designer</p>
            <p className="text-base text-justify md:text-left">
              Designers and Brands are positioned to provide a continuous
              content pipeline that is verified, & authenticated on-chain, and
              highly scalable and tightly reactive, iterative to Player demand
              and influence.
            </p>
            <p className="text-base mt-4 mb-10 text-justify md:text-left">
              Fashion brings with it an emotional experience, and being able to
              translate this same into a digital environment with digital
              clothing is absolutely vital to being able to scale online worlds
              that can create meaningful memories, emotional experiences and new
              connections and relationships for the user.
            </p>
            <Button
              className="ml-0 text-base"
              onClick={() => window.open("https://espadigitalax.typeform.com/to/kq1ekQhK")}
            >
              Join Now
            </Button>
          </div>
          <div className="w-full md:w-6/12 flex justify-center my-10 mb:mt-0">
            {prev}
            <img className="w-40" src="/illustration.png" />
            {next}
          </div>
        </div>
      )}
      <div className="flex justify-center md:absolute bottom-0 right-0 md:mr-10 mb-10">
        <Button className="px-12 py-4" onClick={handleReturn}>
          Return
        </Button>
      </div>
    </div>
  );
}
