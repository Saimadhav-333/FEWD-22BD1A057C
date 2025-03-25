function ChildComponent({ sendDataToParent }) {
    return (
      <button onClick={() => sendDataToParent("Data from Child")}>
        Click Me
      </button>
    );
  }
  
  function ParentComponent() {
    const handleDataFromChild = (data) => {
      alert(data);
    };
  
    return <ChildComponent sendDataToParent={handleDataFromChild} />;
  }
export default ParentComponent 