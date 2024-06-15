'use client';

import { usePathname } from 'next/navigation';
import FormContainer from '../form/FormContainer';
import { toggleFavoriteAction } from '@/utils/actions';
import { CardSubmitButton } from '../form/Buttons';

type FavoriteToggleFormProps = {
  propertyId: string;
  favoriteId: string | null;   // if property is not a fav. for user, it's null.
};

function FavoriteToggleForm({
  propertyId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();

  // pass the server actions downwards
  const toggleAction = toggleFavoriteAction.bind(null, {
    propertyId,
    favoriteId,
    pathname,
  });

  return (
    <FormContainer action={toggleAction}>
      <CardSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
export default FavoriteToggleForm;