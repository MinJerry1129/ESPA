import { useDispatch } from "react-redux";
import usePageTitle from "../../hooks/usePageTitle";
import Button from "../../components/Button";
import { openConnectMetamaskModal } from "@actions/modals.actions";
import { useRouter } from "next/router";

const Closeaccount = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openConnectMetamaskModal());
  };
  usePageTitle("Close Account");

  const router = useRouter();

  return (
    <div className="w-full flex flex-col px-12 md:px-20 py-12">
      <div className="flex flex-col lg:mx-40">
        <div className="flex flex-col items-center pb-8 m-auto max-w-1021">
          <p className="text-4x1875 pb-8 text-center font-inter font-bold">Your Mission Has Only Just Begun. Mod the Metagame to Level Up and Go From Amateur to Pro.</p>
          <p className="text-4x1875 pb-8 text-center font-inter font-bold">Are You Ready?</p>
          <p className="text-4x1875 pb-8 text-center font-inter font-bold">Make Sure to Suit Up for Battle Here to Enter Casual Esports Mode and Earn $MONA.</p>
        </div>
        <div className="flex justify-center">
          <Button
            buttonstyle='none'
            className="mx-10 md:px-20 text-base w-3/6 lg:w-auto"
          >
            <img src="/play.png" alt="play" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Closeaccount;
