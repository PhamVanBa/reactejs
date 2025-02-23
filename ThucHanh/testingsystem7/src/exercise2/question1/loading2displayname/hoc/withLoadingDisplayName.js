import React from "react";

function withLoadingDisplayName(WrappedComponent) {
  class HOC extends React.Component {
    render() {
      if (this.props.isLoading) {
        return <p>loading...</p>;
      }

      return <WrappedComponent {...this.props} />;
    }
  }

  HOC.displayName = `WithLoading(${getDisplayName(WrappedComponent)})`;

  return HOC;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default withLoadingDisplayName;
