import useSWR from "swr";
import getCoordinates from "../../providers/get-coordinates/getCoordinates";

export const COORDINATES_RID = "coordinates";

const useCoordinates = () => {
  return useSWR(COORDINATES_RID, getCoordinates);
};

export default useCoordinates;
