// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
import { SubmitButton } from "@/components/form/Buttons";

const createProfileAction = async (formData: FormData) => {
  'use server';
  const firstName = formData.get('firstName') as string;
  console.log(firstName);
};

function CreateProfile() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className='border p-8 rounded-md max-w-lg'>

        <form action={createProfileAction}>

          {/* shadcn uses old school html for id, name, etc for Input tag...made better in FormInput.tsx */}
          {/* <div className='mb-2'>
            <Label htmlFor='firstName'>First Name</Label>
            <Input id='firstName' name='firstName' type='text' />
          </div> */}
{/* 
          <Button type='submit' size='lg'>
            Create Profile
          </Button> */}

          

        </form>

      </div>
    </section>
  );
}
export default CreateProfile;