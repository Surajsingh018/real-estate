import { useParams } from 'react-router-dom';
import PropertyForm from '../PropertyForm';
import { Layout } from 'lucide-react';

const EditProperty = () => {
  const { id } = useParams();

  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-blue-900">Edit Property</h1>
          <p className="text-gray-500 mt-1">
            Update property information and details
          </p>
        </div>
        <PropertyForm propertyId={id} isEdit={true} />
      </div>
    </Layout>
  );
};

export default EditProperty;
