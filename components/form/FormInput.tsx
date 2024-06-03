import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormInputProps = {
    name: string;
    type: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};

// label, name, type, etc . . . are destructured
function FormInput({
    label,
    name,
    type,
    defaultValue,
    placeholder,
}: FormInputProps) {
    return (
        <div className='mb-2'>
            {/* dynamic label and input because {}  */}
            <Label htmlFor={name} className='capitalize'>
                {label || name}
            </Label>
            <Input
                id={name}
                name={name}
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                required
            />
        </div>
    );
}

export default FormInput;