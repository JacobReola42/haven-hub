import { createClient } from '@supabase/supabase-js';

/* must match the name on supabase */
const bucket = 'home-away';

const url = process.env.SUPABASE_URL as string;
const key = process.env.SUPABASE_KEY as string;

const supabase = createClient(url, key);

export const uploadImage = async (image: File) => {
  const timestamp = Date.now();
  const newName = `${timestamp}-${image.name}`;
  const { data } = await supabase.storage
    .from(bucket)
    .upload(newName, image, { cacheControl: '3600' });

  if (!data) throw new Error('Image upload failed');
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};


/*
In the given code snippet, the $ symbol is used in the template literal ${timestamp}-${image.name} 
to perform string interpolation. 
It allows you to embed expressions within a string. 
In this case, it is used to concatenate the timestamp variable with a 
hyphen and the image.name variable to form a new string.

In JavaScript, the use of backticks for template literals allows for string interpolation and 
multiline strings, while single quotes '' are used for regular string literals. 
Template literals provide more flexibility and functionality compared to single quotes, 
especially when you need to embed variables or expressions within a string. */