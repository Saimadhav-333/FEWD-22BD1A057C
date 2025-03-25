function ChildComponent({ message }) {
    return <h2>{message}</h2>;
  }
  
  function ParentComponent() {
    return <ChildComponent message="Hello from Parent to Child!" />;
  }
export default ParentComponent 