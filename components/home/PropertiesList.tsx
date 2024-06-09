import PropertyCard from '../card/PropertyCard';
import type { PropertyCardProps } from '@/utils/types';

function PropertiesList({ properties }: { properties: PropertyCardProps[] }) {
  return (
    <section className='mt-4 gap-8 grid sm:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4'>
      {properties.map((property) => {
        /* property = {property}, gets passed to the card */
        return <PropertyCard key={property.id} property={property} />;
      })}
    </section>
  );
}
export default PropertiesList;

// In the PropertiesList component, a list of properties is being displayed in a grid layout. 
// For each property in the list, the PropertyCard component is rendered with the property details passed as props. 
// The PropertyCard component receives the property information such as name, image, price, country, tagline, and property ID.
// Within the PropertyCard component, the property details are used to display an article containing the property image, name (truncated to 30 characters), 
// tagline (truncated to 40 characters), price formatted as currency, and other relevant information. Additionally, there is a link to view more details of the property, 
// and a favorite toggle button is also present.
// Overall, the PropertiesList component iterates over the list of properties and renders a PropertyCard component for each property, 
// displaying the property information in a structured manner within a grid layout.