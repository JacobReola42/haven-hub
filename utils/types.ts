/**
 * Defines a type for action functions used in form handling.
 * 
 * @param prevState - The previous state of the form before the current submission.
 * @param formData - The FormData object containing the data submitted in the form.
 * @returns A promise that resolves to an object containing a message string.
 */
export type actionFunction = (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string }>;

  export type PropertyCardProps = {
    image: string;
    id: string;
    name: string;
    tagline: string;
    country: string;
    price: number;
  };