const Footer = () => {
  return (
    <div className="fixed bottom-0  w-full">
      <div className="bg-black py-2 px-4 md:px-12 flex flex-col lg:flex-row text-xs lg:text-base text-white items-end justify-end">
        <div className="flex items-center">
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/ESPA4play/"
          >
            <img src="/socials/facebook.png" width={26} height={26} alt="facebook" />
          </a>
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/espa4play"
          >
            <img src="/socials/twitter.png" width={26} height={26} alt="twitter" />
          </a>
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/espa4play/"
          >
            <img src="/socials/ig.png" width={26} height={26} alt="ig" />
          </a>
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/digitalax-digital-fashion/"
          >
            <img src="/socials/linkedin_logo.png" width={26} height={26} alt="linkedin" />
          </a>          
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@espa4play"
          >
            <img src="/socials/tiktok.png" width={26} height={26} alt="tiktok" />
          </a>
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/espa4play"
          >
            <img src="/socials/twitch.png" width={26} height={26} alt="twitch" />
          </a>
          <a
            className="mr-2"
            target="_blank"
            rel="noreferrer"
            href="https://discord.com/invite/QM6CktUsKw"
          >
            <img src="/socials/discord.png" width={26} height={26} alt="discord" />
          </a>
          <a
            className="mr-6"
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCoZ1xSTFChe-k6QcUVWUTVw"
          >
            <img src="/socials/youtube.png" width={26} height={26} alt="youtube" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="text-base"
            href="https://digitalax.xyz/"
          >
            DIGITALAX
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
