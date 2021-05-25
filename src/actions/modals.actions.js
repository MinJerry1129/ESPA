import modalsReducer from '../reducers/modals.reducer';

const { actions } = modalsReducer;

const hideScroll = (scroll) => {
  const widthScroll = window.innerWidth - document.documentElement.clientWidth;
  if (scroll === 'hideScroll') {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${widthScroll}px`;
  }
};

const showScroll = (scroll) => {
  if (scroll === 'addScroll') {
    document.body.style.overflow = 'initial';
    document.body.style.paddingRight = '0px';
  }
};

export const openModal = (modalNameInReducer, statusScroll, params) => (dispatch) => {
  dispatch(actions.setValue({ field: 'params', value: params }));
  dispatch(actions.setValue({ field: modalNameInReducer, value: true }));
  hideScroll(statusScroll);
};

export const closeModal = (modalNameInReducer, statusScroll) => (dispatch) => {
  dispatch(actions.setValue({ field: modalNameInReducer, value: false }));
  dispatch(actions.setValue({ field: 'params', value: null }));
  showScroll(statusScroll);
};

export const openConnectMetamaskModal = () => (dispatch) => dispatch(openModal('isShowModalConnectMetamask', 'hideScroll'));
export const closeConnectMetamaskModal = () => (dispatch) => dispatch(closeModal('isShowModalConnectMetamask', 'addScroll'));

export const openNotInstalledMetamask = () => (dispatch) => dispatch(openModal('isShowNotificationConnectMetamask'));
export const closeNotInstalledMetamask = () => (dispatch) => dispatch(closeModal('isShowNotificationConnectMetamask'));

export const openPlaceBidModal = (params) => (dispatch) => dispatch(openModal('isShowModalPlaceBid', 'hideScroll', params));
export const closePlaceBidModal = () => (dispatch) => dispatch(closeModal('isShowModalPlaceBid', 'addScroll'));


export const openWithdrawModal = (params) => (dispatch) => dispatch(openModal('isShowModalWithdrawBid', 'hideScroll', params));
export const closeWithdrawModal = () => (dispatch) => dispatch(closeModal('isShowModalWithdrawBid', 'addScroll'));

export const openBuynowModal = (params) => (dispatch) => dispatch(openModal('isShowBuyNow', 'hideScroll', params));
export const closeBuynowModal = () => (dispatch) => dispatch(closeModal('isShowBuyNow', 'addScroll'));

export const openPreviewMaterialModal = (params) => (dispatch) => dispatch(openModal('isShowPreviewMaterial', 'hideScroll', params));
export const closePreviewMaterialModal = () => (dispatch) => dispatch(closeModal('isShowPreviewMaterial', 'addScroll'));

export const openRaiseModal = (params) => (dispatch) => dispatch(openModal('isShowModalRaiseBid', 'hideScroll', params));
export const closeRaiseModal = () => (dispatch) => dispatch(closeModal('isShowModalRaiseBid', 'addScroll'));

export const openSignupModal = (params) => (dispatch) => dispatch(openModal('isShowModalSignup', 'hideScroll', params));
export const closeSignupModal = () => (dispatch) => dispatch(closeModal('isShowModalSignup', 'addScroll'));

export const openESPAReadyModal = (params) => (dispatch) => dispatch(openModal('isShowModalESPAReady', 'hideScroll', params));
export const closeESPAReadyModal = () => (dispatch) => dispatch(closeModal('isShowModalESPAReady', 'addScroll'));

export const openConnectMaticModal = (params) => (dispatch) => dispatch(openModal('isShowModalConnectMatic', 'hideScroll', params));
export const closeConnectMaticModal = () => (dispatch) => dispatch(closeModal('isShowModalConnectMatic', 'addScroll'));