export interface SanityImageAsset {
  _ref?: string;
  url?: string;
  alt?: string;
  asset?: {
    _ref?: string;
    url?: string;
    metadata?: any;
  };
}

export interface Post {
  _id: string;
  title: string;
  slug?: { current: string };
  mainImage?: SanityImageAsset;
  author?: { _id: string; name?: string };
  categories?: { _id: string; title?: string }[];
  publishedAt?: string;
  body?: any[];
}

export interface PostListItem extends Post {
  excerpt?: string;
}
