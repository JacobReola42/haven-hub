/* user clicks on card and details appear i.e. properties details page */

import { fetchPropertyDetails } from '@/utils/actions';
import { redirect } from 'next/navigation';
import BreadCrumbs from '@/components/properties/BreadCrumbs';
import FavoriteToggleButton from '@/components/card/FavoriteToggleButton';
import ShareButton from '@/components/properties/ShareButton';
import ImageContainer from '@/components/properties/ImageContainer';
import PropertyRating from '@/components/card/PropertyRating';
import BookingCalendar from '@/components/properties/booking/BookingCalendar';

async function PropertyDetailsPage({ params }: { params: { id: string } }) {
  const property = await fetchPropertyDetails(params.id);

  if (!property) redirect('/');

  const { baths, bedrooms, beds, guests } = property;
  const details = { baths, bedrooms, beds, guests };

  return (
    <section>
      <BreadCrumbs name={property.name} />
      <header className='flex justify-between items-center mt-4'>
        <h1 className='text-4xl font-bold '>{property.tagline}</h1>
        <div className='flex items-center gap-x-4'>
          {/* share button */}
          <ShareButton name={property.name} propertyId={property.id} />
          <FavoriteToggleButton propertyId={property.id} />
        </div>
      </header>

      <ImageContainer mainImage={property.image} name={property.name} />

      <section className='lg:grid lg:grid-cols-12 gap-x-12 mt-12'>
        
        <div className='lg:col-span-8'>
          <div className='flex gap-x-4 items-center'>
            <h1 className='text-xl font-bold'>{property.name}</h1>
            <PropertyRating inPage propertyId={property.id} />
          </div>
        </div>

        <div className='lg:col-span-4 flex flex-col items-center'>
          {/* calendar */}
          <BookingCalendar />
        </div>

      </section>
    </section>
  );
}
export default PropertyDetailsPage;

/*
The calendar is actually on the right side because it is placed in a column that spans 4 out of the 12 columns, 
which positions it on the right side of the section.
*/