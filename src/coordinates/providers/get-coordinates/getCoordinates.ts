import { API_COORDINATES_PATH, getClient } from "../../../common/api";
import { Coordinate } from "../../dtos/coordinate";

const getCoordinates = async (): Promise<Coordinate[]> => {
  const client = getClient();
  const { data } = await client.get<Coordinate[]>(API_COORDINATES_PATH);

  return data;
};

export default getCoordinates;
