export interface MetadataProps {
  plugin: 'seo_metatags';
  _uid: string;
  title: string;
  description: string;
  og_image: string;
  og_title: string;
  og_description: string;
  twitter_image: string;
  twitter_title: string;
  twitter_description: string;
}

/**
 * The function extracts title and description metadata from an object, returning them as an object.
 * @param {MetadataProps} [metadata] - metadata is an optional object parameter of type MetadataProps
 * that contains information about the metadata of a webpage, such as its title and description. If the
 * metadata parameter is not provided, it will be undefined.
 */
export const getMetaDataFromSB = (metadata?: MetadataProps) => ({
  title: metadata?.title || undefined,
  description: metadata?.description || undefined,
});
