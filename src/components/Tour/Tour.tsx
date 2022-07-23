import React from "react";

export interface TourProps {
  label: string;
}

const Tour = (props: TourProps) => {
  return <label>{props.label}</label>;
};

export default Tour;