import { isFirefox, isSafari } from "react-device-detect";

export const doesNavWork = () => {
  if (isFirefox) return false;
  if (isSafari) return false;
  return true;
};
