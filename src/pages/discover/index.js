import { useState } from "react";
import usePageTitle from "../../hooks/usePageTitle";

import Button from '../../components/Button';

const Discover = () => {
  usePageTitle("Discover");

  return (
    <div className="w-full flex flex-col justify-center px-12 md:px-20 py-12">
      <div className="flex mb-12">
        <div className="w-full">
          <p
            className="text-xs text-2xl md:text-4xl mx-10 text-center"
          >
            DISCOVER OTHER DIGI-NATIVES
          </p>
          <p
            className="text-1xl md:text-3xl mt-4 mb-16 text-center"
          >
            REP FOR YOUR GUILD
          </p>
          <div className="mb-16 text-center">
            <div className="flex flex-col justify-center md:flex-row">
              <input placeholder="Enter An ID" className="input-discover pl-2 pr-2 gradient-border flex flex-col items-center w-full sm:w-4/12 mx-2 my-2" />
              <Button className="gradient-border flex flex-col items-center w-full sm:w-2/12 mx-2 my-2">GO Discover</Button>
            </div>
            <p className="mt-1">DISCOVER OTHER DIGI + META IDs</p>
          </div>
          <p
            className="text-1xl md:text-3xl mt-24 text-center"
          >
            TOP METAVERSAL ID
          </p>
          <div className="mb-16">
            <div className="flex flex-col justify-center md:flex-row">
              <div className="flex mb-10 md:mb-0 flex-wrap">
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="flex mb-10 md:mb-0 flex-wrap">
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center md:flex-row">
              <div className="flex mb-10 md:mb-0 flex-wrap">
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
                <div className="flex flex-col items-center w-full sm:w-4/12">
                  <img src="/leaderboard/tier4.png" />
                  <div className="bg-white text-black h-10 w-60 p-2 items-center flex">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <p
            className="text-yellow-400 text-3xl mb-8"
            style={{
              background:
                "linear-gradient(to bottom right, #7000FF, rgba(204, 0, 255, 0.73))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover
          </p>
          <div className="mb-16">
            <p className="text-base mb-10">how people used to trade</p>
            <p className="text-lg font-tw-cent">
              To us, trading with paper money has become a normal day to day
              activity. We don't question it nor do we think deeply where it
              originated from. Before paper money existed, Metals have been used
              as currency throughout history. The reason why people would trade
              with these metals is because of its scarcity. this scarcity led
              people to trust it and use it as a means of transaction. People
              agreed to the metals’ value, trusting that they'll be able to use
              that coin to exhange goods with someone else in the future.
              problems arose when individuals have trouble storing and bringing
              these metals. THis is where paper notes came into fruition.
            </p>
          </div>
          <div className="mb-16">
            <p className="text-base mb-8">THE INCEPTION OF PAPER MONEY</p>
            <p className="text-lg font-tw-cent">
              Paper money has existed in many forms. In its purest form, the
              govERNMENT would issue a paper note which they would promise AS AN
              exchange for a set amount of silver and gold. People got used to
              trading these paper notes between each other without handing them
              ever in the silver and gold equivalent. Eventually the gov't just
              severed the relationship between the paper NOTES and metals. It
              also meant that the gov't could continue printing paper notes
              without ever having the storage of those precious metals. This
              means that all of this is controlled by a central entity and they
              decide on how much money is printed and is in circulation. They're
              in control of all of the transactions that are happening and they
              keep a record of it. Corruption can enter into that or if there's
              no corruption, it’s not a transparent system. The finance sector
              records who transacts with who, decides on whether the
              transactions are accepted or who can be involved. IT also decides
              which countries can be transacted with. This is the meaning of a
              centralized finance system.
            </p>
          </div>
          <div className="mb-16">
            <p className="text-base mb-8" style={{ color: "#4AFFA8" }}>
              cryptocurrency
            </p>
            <p className="mb-4 text-lg font-tw-cent">
              now individuals don't have to rely on the central bank to approve
              transactions and record them. there is a more efficient and
              transparent way of having all of this happen. A peer-to-peer
              electronic cash system. This is where cryptocurrency comes in.
            </p>
            <p className="text-lg font-tw-cent">
              Cryptocurrency has the potential to change the way we live our
              lives just like the internet changed everything about how we live
              our day to day lives.
            </p>
          </div>
          <div className="mb-16">
            <p className="text-base mb-8" style={{ color: "#00F0FF" }}>
              NON FUNGIBLE TOKEN
            </p>
            <p className="mb-6 text-lg font-tw-cent">
              Non-fungible tokens (NFTs) are unique, digital items with
              blockchain-managed ownership. Examples include collectibles, game
              items, digital art, event tickets, domain names, and even
              ownership records for physical assets.
            </p>
            <p className="text-lg font-tw-cent mb-8">
              Most discussions about non-fungible tokens begin by introducing
              the idea of fungibility, which is defined as “able to replace or
              be replaced by another identical item”. We think this
              overcomplicates things. To get a better sense of what might
              constitute a non-fungible asset, just think about most of the
              stuff you own. The chair you’re sitting in, your phone, your
              laptop, anything you could go and sell on eBay. All of these fall
              under the category of non-fungible things.
            </p>
            <p className="text-lg font-tw-cent mb-6">
              It turns out that fungible assets are actually the odd ones out. A
              currency is a classic example of a fungible asset. Five dollars is
              always five dollars no matter the serial number on the specific
              five-dollar bill, or whether its five dollars sitting in your bank
              account. The ability to replace a five-dollar bill with another
              five-dollar bill (or five ones, for that matter) is what makes
              currency fungible.
            </p>
            <p className="text-lg font-tw-cent mb-6">
              Note that fungibility is relative; it really only applies when
              comparing multiple things. Consider business class, economy class,
              and first-class flight tickets. Each ticket is roughly fungible
              within its class, but you couldn’t fairly swap a first-class
              ticket for a business class ticket. Even the chair you’re sitting
              in is roughly fungible with a chair of the same model, unless
              you’ve developed a special attachment to your particular chair.
            </p>
            <p className="text-lg font-tw-cent">
              Interestingly, fungibility can also be subjective. Back to the
              flight ticket example: a person that cares about sitting in a
              window seat vs. an aisle seat might not consider two economy class
              tickets interchangeable. Similarly, a rare penny might be worth 1
              cent to me but worth much more to a coin collector. We’ll see that
              some of these nuances become important when representing these
              items on blockchains.
            </p>
          </div>
          <div className="mb-16">
            <p className="text-yellow-400 text-base mb-8">$mona coin</p>
            <p className="text-lg font-tw-cent mb-6">
              $MONA is espa’s key utility TOKEN. it is used as the ledger and
              income stream for both the Developers and winning Players $MONA is
              the gas that ties together a triad of interdependence between
              Players, Developers and Designers in a world that is merging the
              digital and real. It links between the DIGITALAX Digital Fashion
              marketplace and ESPA Casual Play platform.
            </p>
            <p className="text-lg font-tw-cent">
              $MONA is the Player’s transparent ledger of activity for recording
              their game pl ay results, where the more positive the Player’s
              ledger is (i.e. more winning plays) the more $MONA they are able
              to accumulate and make a livelihood off. The more $MONA held by a
              Player also makes them eligible for unlocking additional content
              within the platform, when it comes to engaging in more competitive
              play and gaining exposure for digital fashion / brand sponsorships
              from the marketplace.
            </p>
          </div>
          <div className="mb-16 flex flex-col md:flex-row items-center md:items-start">
            <div
              className="mr-12 w-4/12 min-w-xl mb-10 md:mb-0"
              style={{ minWidth: "150px" }}
            >
              <img src="/monacoin.png" />
            </div>
            <div>
              <p className="text-base mb-10">
                <span className="text-yellow-400">$mona</span> as governance
              </p>
              <p className="text-lg font-tw-cent mb-10  md:ml-20">
                $MONA token acts as the core governance token in the ecosystem.
                Holders of $MONA will engage directly with the platform, owning
                the governance rights to decide the percentage split of sale
                profits from the marketplace.
              </p>
              <p className="text-base mb-10">
                <span className="text-yellow-400">$mona</span> as skin
              </p>
              <p className="text-lg font-tw-cent mb-10 md:ml-20">
                When reaching certain $MONA amount thresholds, the Players can
                stake their $MONA, as skin in the game, in order to be eligible
                to be chosen by fashion brands on the DIGITALAX marketplace to
                be digitally sponsored. the fashion brand provides a $MONA loan
                to the Player that is overcollateralized in relation to the
                Player’s staked $MONA. conditions require Players to buy digital
                fashion assets on the marketplace under the sponsoring brands
                label, acting as a mechanism for the Player’s on-chain identity
                maintenance.
              </p>
              <p className="text-lg font-tw-cent md:ml-20 mb-10">
                Players repay the loan through further activity and increasing
                the “positivity” of their activity stored in the ledger through
                more winning plays.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <p className="text-base mb-8">skins in the game</p>
            <p className="text-lg font-tw-cent">
              In the ESPA ecosystem, the digital fashion is what grants the
              Players with Skin in the Game. These wearables are the official
              in-game authentication system and identity markers for the
              Players. They allow Players to be eligible for $MONA token payouts
              + leaderboard qualification. It is how the Players are recognised
              through our database and verified on the blockchain through our
              contracts. The digital fashion doesn’t interfere with game play
              within the game — it purely establishes and authenticates the
              Player’s meta-game and eligibility in the ESPA ecosystem. This is
              the Player’s proof-of-identity.
            </p>
          </div>
          <div className="text-base mb-10">
            three core categories of digital fashion NFTs in ESPA, according to
            three different rarity levels.
          </div>
          <div className="mb-16">
            <div className="mb-10">
              <div
                className="w-4/12 h-10 mb-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(112, 0, 255, 0.63), rgba(204, 0, 255, 0.33) 70%)",
                }}
              ></div>
              <p>
                <span className="text-base text-yellow-400 mr-2">common</span>
                Fashion item tournament access longevity
              </p>
            </div>
            <div className="mb-10">
              <div
                className="w-8/12 h-10 mb-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(112, 0, 255, 0.63), rgba(204, 0, 255, 0.33) 70%)",
                }}
              ></div>
              <p>
                <span className="text-base text-yellow-400 mr-2">
                  semi-rare
                </span>
                Fashion item tournament access longevity
              </p>
            </div>
            <div className="mb-10">
              <div
                className="w-11/12 h-10 mb-1"
                style={{
                  background:
                    "linear-gradient(to right, rgba(112, 0, 255, 0.63), rgba(204, 0, 255, 0.33) 70%)",
                }}
              ></div>
              <p>
                <span className="text-base text-yellow-400 mr-2">
                  exclusive
                </span>
                Fashion item tournament access longevity
              </p>
            </div>
          </div>
          <div className="mb-16">
            <p className="text-lg font-tw-cent mb-6">
              Common: Either fixed supply or circulating (unlimited) supply with
              an instant buy listed price in $MONA, on the DIGITALAX
              marketplace.
            </p>
            <p className="text-lg font-tw-cent mb-6">
              Semi-Rare: Fixed supply with an instant buy listed price in $MONA,
              on the DIGITALAX marketplace.
            </p>
            <p className="text-lg font-tw-cent">
              Exclusive: Single edition and listed for auction on the DIGITALAX
              marketplace in $MONA.
            </p>
          </div>
          <div>
            <p className="text-lg font-tw-cent mb-6">
              The rarity level of the digital fashion item determines and weighs
              in on the longevity of the Player’s access to specific esports
              tournaments in the ESPA ecosystem i.e. more common fashion pieces
              run out faster in terms of the access they provide to the specific
              in-game compatible esports tournaments.
            </p>
            <p className="text-lg font-tw-cent">
              The fashion doesn’t affect the specific in-game play or
              functionality, it is purely related to the ESPA meta-game. This is
              not a pay to win ecosystem.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Discover;
