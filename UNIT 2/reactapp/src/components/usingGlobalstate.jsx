import React from "react";

const MyContext = React.createContext();

function ChildComponent() {
  const message = React.useContext(MyContext);
  return <h2>{message}</h2>;
}

function ParentComponent() {
  return (
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}
export default ParentComponent