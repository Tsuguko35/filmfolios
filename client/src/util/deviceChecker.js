import { useEffect } from "react";
import { setDeviceType } from "../context/slices/deviceTypeSlice";
import { useDispatch } from "react-redux";
import { GetWindowWidth } from "./getWindowWidth";

const useDeviceChecker = () => {
  const windowWidth = GetWindowWidth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDeviceType(windowWidth <= 1024 ? "mobile" : "desktop"));
  }, [dispatch, windowWidth]);
};

export default useDeviceChecker;
