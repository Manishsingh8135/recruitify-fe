// ParentComponent.tsx

const ParentComponent = () => {
    return (
      <div className="flex w-full ">
        <LeftComponent />
        <RightComponent />
      </div>
    );
  };
  
  const LeftComponent = () => {
    return (
      <div className="flex flex-col w-1/3 h-screen bg-blue-200">
        <div className="flex-none p-4 bg-blue-300">
          {/* Fixed content */}
          <p>Fixed Content</p>
        </div>
        <div className="flex-grow overflow-y-auto p-4">
          {/* Scrollable content */}
          {Array.from({ length: 70 }).map((_, index) => (
            <p key={index}>Scrollable Item {index + 1}</p>
          ))}
        </div>
      </div>
    );
  };
  
  const RightComponent = () => {
    return (
      <div className="w-2/3 h-screen overflow-y-auto bg-green-200 p-4">
        {/* Scrollable content */}
        {Array.from({ length: 50 }).map((_, index) => (
          <p key={index}>Right Side Item {index + 1}</p>
        ))}
      </div>
    );
  };
  
  export default ParentComponent;
  