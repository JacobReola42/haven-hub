'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from '@/utils/types';

// Define the initial state for the form, starting with an empty message.
const initialState = {
  message: '',
};

/* 
  FormContainer component takes an action function and children elements as props.
  - `action`: a function that will handle the form submission logic.
  - `children`: React nodes that will be rendered inside the form.
  This component is used in app/profile/create/page.tsx to handle form submissions.
*/
function FormContainer({action,children,}:
{
  action: actionFunction;
  children: React.ReactNode;
}) {
  // useFormState hook initializes form state and provides a function to submit the form.
  // It takes the action function and initial state as arguments.
  const [state, formAction] = useFormState(action, initialState);

  // useToast hook provides a function to display toast notifications.
  const { toast } = useToast();

  // useEffect hook to show a toast message when the state.message changes and is not empty.
  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state]); // Dependency array includes state to react to its changes.
  
  // Render a form element that executes formAction on submit and contains the children elements.
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;