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
          wow! you are in for a ride! it’s going to be exciting. there are a few things to look out for. first tAKE A QUICK LOOK AT OUR MUST READ!
          </p>
          <div className="text-xl text-center">
            <Button
              buttonstyle='mustread'
              className="mx-12 text-base w-198 h-57"
              onClick={() => router.push("/playnow/20")}
            >
              must read
            </Button>
            <p className="text-base mb-8">still daring to continue your quest?</p>
            <Button
              className="mx-12 text-base w-198 h-57"
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
          onClick={() => router.push('/signup')}
        >
          return
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Cryptoyes;
