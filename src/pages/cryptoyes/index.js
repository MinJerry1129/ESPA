import usePageTitle from "../../hooks/usePageTitle";
import { useRouter } from "next/router";
import Button from "@components/Button";
import styles from '@components/Button/return-button.module.scss'

const Cryptoyes = () => {
  usePageTitle("Mona");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center px-20 py-12">
      <div>
        <div className="flex flex-col items-center">
          <p className="text-base">steps to start playing:</p>
          <p className= "my-12 text-base text-center ctyptoyes_description">
          Great! Do you have a metamask or ARKANE cryptocurrency wallet? DIGITALAX IS NOW LIVE ON MATIC NETWORK for near zero transaction fees, rapid scalability and better user experience.
          </p>
          <div className="flex text-xl justify-space-around">
            <Button
              className="mx-12 px-10 text-base w-198 h-57"
              onClick={() => router.push("/wallet")}
            >
              Yes
            </Button>
            <Button
              className="mx-12 px-10 text-base w-198 h-57"
              onClick={() => router.push("/playnow/19")}
            >
              No
            </Button>
          </div>
        </div>
        <div className="bottom_button">
        <Button
          buttonstyle='none'
          className="btnOverlay w-198 h-57"
          onClick={() => router.push('/')}
        >
          skip
        </Button>
        <Button
          buttonstyle='none'
          className="returnButton w-198 h-57"
          onClick={() => router.push('/cryptoyes')}
        >
          return
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Cryptoyes;
