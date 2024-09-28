import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";
import { useParams } from "react-router";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    const { collectionId } = useParams();
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent collectionId={collectionId} {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
