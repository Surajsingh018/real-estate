import PropertyForm from "../PropertyForm";


const CreateProperty = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#4e0dff]">Create Property</h1>
        <p className="text-gray-500 mt-1">
          Add a new property to your investment portfolio
        </p>
      </div>
      <PropertyForm/>
    </div>
  );
};

export default CreateProperty;