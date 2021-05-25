import usePageTitle from "../../hooks/usePageTitle";
import styles from "./styles.module.scss";

const SherifMod = () => {
  usePageTitle("Esports");

  return (
    <div className="w-full flex flex-col px-8 md:px-20 pt-12 py-20">
      <div className="w-full items-center flex flex-col-reverse md:flex-row mb-20 md:mb-32 ">
        <div className={`w-full md:w-6/12 relative`}>
          <img src="/modder.png" className="w-full" />
          <p
            className={`${styles.text} font-tw-cent md:text-detail text-detail-sm`}
          >
            Woah there players, Woodi’s the OG Sheriff around these mods.
            Outlaws are welcome to play, but you best be a fast draw in this
            tournament’s wild west.
            <br />
            <br />
            Woodi’s six gunnin the mod scene and he’s doing it in style.{" "}
          </p>
          <p className={`${styles.modder} md:text-mod text-mod-sm`}>
            Modder showcase
          </p>
        </div>
        <div className="w-full md:w-6/12 px-4 pl-10 mb-10 md: mb-0">
          <p className="text-3xl mb-4">AMONG US SHERIFF MOD</p>
          <img src="/sheriff.png" />
          <p className="text-2xs text-right">
            The mod is only available for players on PC, but hopefully developer
            InnerSloth will add official roles to Among Us in the future.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full mb-20">
          <p className="text-xl text-center md:text-left md:text-3xl mb-4">
            espa beta: how it works
          </p>
          <p className="mb-6 text-xl md:text-2xl font-tw-cent">
            For the ESPA BETA there are two modes: Esports Mode and Practise
            Mode. The Esports Mode will take place at select intervals, where
            only Players who have suited up from the DIGITALAX Marketplace with
            a digital fashion skin are eligible to join the server and start
            engaging in the battles for their chance to win. See how the
            tournament works{" "}
            <a
              href="#rules"
              className="mb-6 text-xl md:text-2xl font-tw-cent underline"
            >
              here!
            </a>
            .
          </p>
          <p className="mb-6 text-xl md:text-2xl font-tw-cent">
            During practise periods, anyone can join the mod to start playing,
            as long as they have registered and made an account on the DIGITALAX
            marketplace. You can start in practise mode and then when you are
            ready to engage in battle mode make sure to get skinned{" "}
            <a
              href="https://skins.digitalax.xyz"
              target="_blank"
              className="mb-6 text-xl md:text-2xl font-tw-cent underline"
            >
              here!
            </a>
          </p>
        </div>
        <div className="w-full md:w-8/12 mb-20">
          <p className="text-xl text-center md:text-left md:text-3xl mb-4">
            HOW TO PLAY SHERIFF MOD:
          </p>
          <p className="text-2xl font-tw-cent">What is a Sheriff?</p>
          <p className="text-xl font-tw-cent md:text-left mb-6">
            A Sheriff is a crewmate class whose primary goal is to catch and
            kill the Impostor in order to achieve immediate victory.
          </p>
          <p className="text-2xl font-tw-cent">Sheriff Role:</p>
          <p className="text-xl font-tw-cent md:text-left mb-12">
            - As a Sheriff, you’re essentially the leader of the pack.
            <br />- You have a button to kill anyone at any time. Should you
            falsely execute a crewmate, you will also die in the process leaving
            a massive advantage to the Impostors.
            <br />- Just like the Impostor, you would have to hide your identity
            since they will do what they can to eliminate you from the game as
            soon as possible.
            <br />- If you’ve successfully killed the Impostor/s, the round will
            end and your team will be victorious
          </p>
          <p className="mb-6 text-4xl font-tw-cent underline">
            <a
              href="https://drive.google.com/file/d/1FAOxcmby9d5m5NTf7zMN6-g4OBZJN7gv/view?usp=sharing"
              className="mb-6 text-4xl font-tw-cent underline"
              target="_blank"
            >
              Download the Sheriff Mod here.
            </a>
          </p>
        </div>
        <div className="w-full md:w-8/12 mb-20">
          <p className="text-2xl text-center md:text-left md:text-3xl mb-4">
            INSTALL TO PLAY!
          </p>
          <p className="mb-6 text-2xl font-tw-cent">
            Sheriff is a fun mod, so you must install it to play! See full
            instructions{" "}
            <a
              href="https://docs.google.com/document/d/1EP4KKTVLAQYEJlcI8G-MZfQzKFX_z6QyRAHGzezlyLA/edit?usp=sharing"
              target="_blank"
              className="mb-6 text-2xl font-tw-cent underline"
            >
              here.
            </a>
          </p>
          <p className="text-3xl font-tw-cent">Pre-requisite Requirements:</p>
          <p className="text-xl font-tw-cent md:text-left ml-6 mb-12">
            - Latest Among Us Game Client Can be downloaded on Steam. If you don't have it, join the ESPA Discord. We'll help you get set up.
            <br />- Mods are really only for PC/Windows. We have included steps
            to play on Mac but it’s much lengthier the process.
          </p>
          <p className="text-3xl font-tw-cent">Windows Users:</p>
          <p className="text-xl font-tw-cent md:text-left ml-6 mb-12">
            - Open the Among Us Sheriff DIGITALAX file
            <br />- Make sure that you have a file extraction software installed
            like Winrar for this to work
            <br />- Double click on the Among Us Sheriff folder to see its
            contents
            <br />- Launch steam and go to your Library
            <br />- Find Among Us from the list, right click {">"} Manage {">"}{" "}
            Browse Local Files
            <br />- A window would open showing the Among Us game folder
            <br />- Go back to the Sheriff Mod folder that you’ve opened then
            select all of the files then drag it to the Among us client file
            window
            <br />- Wait for the files to be copied and select Replace files if
            you get a prompt
            <br />- Once done, launch Among Us from Steam
            <br />- Select Online then click on the globe icon at the bottom
            right to select the server
            <br />- The modded files were successfully installed if you see
            DIGITALAX from the server list
          </p>

          <p className="text-3xl font-tw-cent">Mac Users:</p>
          <p className="text-xl font-tw-cent md:text-left mb-12">
            Mods work best on PC. If you are keen to play and have a Mac, you
            can follow these steps{" "}
            <a
              href="https://docs.google.com/document/d/1EP4KKTVLAQYEJlcI8G-MZfQzKFX_z6QyRAHGzezlyLA/edit?usp=sharing"
              target="_blank"
              className="mb-6 text-2xl font-tw-cent underline"
            >
              here
            </a>
            .
          </p>
        </div>
        <div className="mb-16">
          <p className="text-3xl mb-8">skins in the game</p>
          <p className="text-2xl font-tw-cent">
            In the ESPA ecosystem, the digital fashion is what grants the
            Players with Skin in the Game. These wearables are the official
            in-game authentication system and identity markers for the Players.
            They allow Players to be eligible for $MONA token payouts +
            leaderboard qualification. It is how the Players are recognised
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
              <span className="text-base text-yellow-400 mr-2">semi-rare</span>
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
              <span className="text-base text-yellow-400 mr-2">exclusive</span>
              Fashion item tournament access longevity
            </p>
          </div>
        </div>

        <div className="w-full mb-10">
          <p
            className="text-xl text-center md:text-left md:text-3xl mb-4"
            id="rules"
          >
            SHERIFF TOURNAMENT RULES
          </p>
          <p className="mb-6 text-xl font-tw-cent">Casual battles are being run out of the <a href="https://discord.com/invite/QM6CktUsKw" className="text-xl font-tw-cent">ESPA Discord</a> to begin with. Hop on in and we’ll help you get started. Remember you must suit up for battle. The treasury is helping to actively onboard Players, join the discord and speak to our mods to find out more about how we are helping Players like you GET SKINNED!</p>
          <br /><br />
          <h3 className="text-xl text-center md:text-left md:text-3xl mb-4">Tier One</h3>
          - 3 game winning streaks in a row
          <br /><br />- 20 second content generation with your skin in the game and share + tag ESPA on three social media platforms: Youtube, Twitch, Reddit, Twitter, TikTok 
          <br /><br />- 1x friend referral to join the game in the <a href="https://discord.com/invite/QM6CktUsKw" className="text-xl">ESPA discord</a> 
          <br /><br />- Prize: ~$5 worth of $MONA
          <br /><br />
          <br /><br />
          <h3 className="text-xl text-center md:text-left md:text-3xl mb-4">Tier Two</h3>
          - 5 game winning streaks in a row
          <br /><br />- 2 x friend referrals to join the game in the <a href="https://discord.com/invite/QM6CktUsKw" className="text-xl">ESPA discord</a>
          <br /><br />- Prize: ~$10 worth of $MONA
          <br /><br />
          <br /><br />
          <h3 className="text-xl text-center md:text-left md:text-3xl mb-4">Tier Three</h3>
          - 8 game winning streaks in a row
          <br /><br />- 5 x friend referrals to join the game in the <a href="https://discord.com/invite/QM6CktUsKw" className="text-xl">ESPA discord</a>
          <br /><br />- Prize: ~$15 worth of $MONA
          <br /><br />
          <br /><br />
          <h3 className="text-xl text-center md:text-left md:text-3xl mb-4">Tier Four</h3>
          - 10 game winning streaks in a row
          <br /><br />- 10 x friend referrals to join the game in the <a href="https://discord.com/invite/QM6CktUsKw" className="text-xl">ESPA discord</a>
          <br /><br />- Prize: ~$20 worth of $MONA
          <br /><br />
        </div>
        <div className="w-full">
          <p className="text-xl text-center md:text-left md:text-3xl mb-4">
            INCREASING SKIN LONGEVITY: RECHARGING
          </p>
          <p className="mb-6 text-2xl font-tw-cent">
            The longevity of the access granted into ESPA by the skins can be
            increased by Players. Players are able to suit up with a new skin
            from the marketplace when their access longevity runs out. They are
            also able to complete certain rejuvenation tasks in the ESPA
            meta-game. These tasks will be announced shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SherifMod;
