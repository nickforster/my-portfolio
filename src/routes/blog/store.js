// @ts-nocheck
import { writable, derived } from 'svelte/store';

// define the return object, which is an array
export const apiData = writable([]);

/** Data transformation.
For our use case, we only care about the drink names, not the other information.
Here, we'll create a derived store to hold the drink names.
**/

export const images = derived(apiData, ($apiData) => {
  if ($apiData.images){
    return $apiData.images.map(image => ({
        src: image.image_data,
        text: image.text_data
    }));
    
  }
  return [];
});