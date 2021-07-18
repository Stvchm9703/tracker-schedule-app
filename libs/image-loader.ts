import type { ImageLoaderProps} from 'next/image';
export const imageLoader = ({ src, width, quality } :ImageLoaderProps) =>
  `public/${src}?w=${width}&q=${quality || 75}`;
