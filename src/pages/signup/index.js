import usePageTitle from "../../hooks/usePageTitle";
import { useRouter } from "next/router";
import Button from "@components/Button";
import styles from '@components/Button/return-button.module.scss'

const Signup = () => {
  usePageTitle("Playnow");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col justify-center px-20 py-12">
      <div>
        <div className="flex flex-col items-center">
          <p className="text-base">steps to start playing:</p>
          <p className="my-12 text-base md:w-6/12 text-center">
            HAVE YOU SUITED UP FOR BATTLE?
          </p>
          <div className="flex text-xl justify-space-around">
            <Button
              className="mx-12 px-10 text-base"
              onClick={() => router.push("/playnow/20")}
            >
              Yes
            </Button>
            <Button
              className="mx-12 px-10 text-base"
              onClick={() => router.push("/playnow/19")}
            >
              No
            </Button>
          </div>
        </div>
        <Button
          buttonstyle='none'
          className={styles.returnButton}
          onClick={() => router.push('/')}
        >
          return
        </Button>
      </div>
    </div>
  );
};

export default Signup;
