import FormInput from '@/components/form/FormInput';
import { SubmitButton } from '@/components/form/Buttons';
import FormContainer from '@/components/form/FormContainer';
import { createProfileAction } from '@/utils/actions';

/* moved to utils/actions.ts */
// const createProfileAction = async (prevState: any, formData: FormData) => {
//   'use server';
//   const firstName = formData.get('firstName') as string;

//   if (firstName !== 'shakeAndBake') return { message: 'there was an error...' };
//   return { message: 'Profile Created' };
// };

function CreateProfile() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      {/* <div className='border p-8 rounded-md max-w-lg'> */}
      <div className='border p-8 rounded-md'>
        <FormContainer action={createProfileAction}>
          {/* <div className='grid gap-4 mt-4 '> */}
          <div className='grid md:grid-cols-2 gap-4 mt-4'>
            <FormInput type='text' name='firstName' label='First Name' />
            <FormInput type='text' name='lastName' label='Last Name' />
            <FormInput type='text' name='username' label='Username' />
          </div>
          <SubmitButton text='Create Profile' className='mt-8' />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateProfile;












// // import { Label } from '@/components/ui/label';
// // import { Input } from '@/components/ui/input';
// // import { Button } from '@/components/ui/button';
// import { SubmitButton } from "@/components/form/Buttons";

// const createProfileAction = async (formData: FormData) => {
//   'use server';
//   const firstName = formData.get('firstName') as string;
//   console.log(firstName);
// };

// function CreateProfile() {
//   return (
//     <section>
//       <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
//       <div className='border p-8 rounded-md max-w-lg'>

//         <form action={createProfileAction}>

//           {/* shadcn uses old school html for id, name, etc for Input tag...made better in FormInput.tsx */}
//           {/* <div className='mb-2'>
//             <Label htmlFor='firstName'>First Name</Label>
//             <Input id='firstName' name='firstName' type='text' />
//           </div> */}
// {/* 
//           <Button type='submit' size='lg'>
//             Create Profile
//           </Button> */}



//         </form>

//       </div>
//     </section>
//   );
// }
// export default CreateProfile;