import React from "react";
function ChildComponent(_, ref) {
  React.useImperativeHandle(ref, () => ({
    showAlert() {
      alert("Alert from Child!");
    }
  }));

  return <h2>Child Component</h2>;
}

const ForwardedChild = React.forwardRef(ChildComponent);

function ParentComponent() {
  const childRef = React.useRef();

  return (
    <>
      <ForwardedChild ref={childRef} />
      <button onClick={() => childRef.current.showAlert()}>
        Call Child Method
      </button>
    </>
  );
}
export default ParentComponent  