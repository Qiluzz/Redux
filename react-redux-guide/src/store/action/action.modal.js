import { HIDEMODAL, SHOWMODAL } from "../const/modal.const"

export const hideModal = payload => ({ type: HIDEMODAL, payload })
export const showModal = payload => ({ type: SHOWMODAL, payload })
