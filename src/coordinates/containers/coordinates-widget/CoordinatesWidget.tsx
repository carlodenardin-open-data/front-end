import * as React from "react";
import Visualizer from "../../components/visualizer/Visualizer";
import useCoordinates from "../../hooks/use-coordinates/useCoordinates";

const CoordinatesWidget: React.FC = () => {
  const { data: coordinates, error: coordinatesError } = useCoordinates();

  if (coordinatesError) {
    return <div>Failed to load coordinates</div>;
  }

  if (!coordinates) {
    return <div>Loading...</div>;
  }

  return <Visualizer coordinates={coordinates} />;
};

export default CoordinatesWidget;
