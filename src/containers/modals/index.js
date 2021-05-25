import React, { memo } from "react";
import { useSelector } from "react-redux";
import ModalConnectWallet from "@containers/modals/modal-connect-wallet";
import ModalSignup from "@containers/modals/modal-sign-up";
import ModalConnectMatic from "./modal-connect-matic";

const Modals = () => {
  const modals = useSelector((state) => state.modals.toJS());
  const {
    isShowModalConnectMetamask,
    isShowModalSignup,
    isShowModalConnectMatic,
  } = modals;

  return (
    <>
      {isShowModalConnectMetamask && <ModalConnectWallet />}
      {isShowModalSignup && <ModalSignup />}
      {isShowModalConnectMatic && <ModalConnectMatic />}
    </>
  );
};

export default memo(Modals);
