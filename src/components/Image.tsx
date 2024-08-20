interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  // fill,
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      className={`w-full h-full ${className}`}
    />
  );
};

export default Image;
