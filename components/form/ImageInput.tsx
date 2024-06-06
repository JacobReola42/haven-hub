import { Label } from '../ui/label';
import { Input } from '../ui/input';

/* this is universal */
function ImageInput() {
  const name = 'image';
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        Image
      </Label>
      <Input
        id={name}
        name={name}
        type='file'
        required
        accept='image/*'
        className='max-w-xs'
      />
    </div>
  );
}
export default ImageInput;

// the htmlFor={name} is associating the label with the input element that 
// has the same id as the value stored in the name variable, 
// hich is 'image' in this case. 