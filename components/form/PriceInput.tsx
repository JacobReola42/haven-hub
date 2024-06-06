import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Prisma } from '@prisma/client';

const name = Prisma.PropertyScalarFieldEnum.price;
// const name = 'price'; // another option for .scaler . . .
type FormInputNumberProps = {
  defaultValue?: number;
};

function PriceInput({ defaultValue }: FormInputNumberProps) {
  return (
    <div className='mb-2'>
      <Label htmlFor='price' className='capitalize'>
        Price ($)
      </Label>
      <Input
        id={name}
        type='number'
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        required
      />
    </div>
  );
}
export default PriceInput;

/*
PropertyScalarFieldEnum is an enum type provided by Prisma that represents the 
scalar fields of a property entity in the database schema. 
It helps in type-checking and ensuring that only valid scalar 
fields are used when interacting with the database using Prisma.
*/