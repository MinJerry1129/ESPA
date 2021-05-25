import usePageTitle from "../../hooks/usePageTitle";
import { useRouter } from "next/router";
import styles from './quest.module.scss'
import Button from "@components/Button";
// import styles from '@components/Button/return-button.module.scss'

const Quest = () => {
  usePageTitle("Quest");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center px-20 py-12">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pb-8">
          <p className="text-5xl pb-8 font-inter font-bold">Web3 Newbie?</p>
          <p className="text-xl max-w-732 text-center font-inter font-normal">If this is your first time using crypto or creating a crypto wallet then please make sure to follow the steps for full clear conditions! Click sign up to begin.</p>
        </div>
        <Button
            buttonstyle = "overlay"
            className={`${styles.btnOverlay} text-base w-198 h-57 mb-5`}
            onClick={() => router.push('/playnow')}
          >
            SIGN UP
        </Button>
        <Button
            className="text-base w-198 h-57"
            onClick={() => router.push('/signin')}
        >
            SIGN IN
        </Button>
      </div>
      <Button
            className="text-base w-198 h-57 fixed return"
            onClick={() => router.push('/')}
        >
            RETURN
        </Button>
    </div>
  );
};

export default Quest;
