import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});

const builder = imageUrlBuilder(client);

import type { SanityImageSource } from "@sanity/image-url";

// ... existing imports

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
