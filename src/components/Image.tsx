interface CustomImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

const Image: React.FC<CustomImageProps> = ({
  src,
  alt,
  fill,
  className,
  ...props
}) => {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      className={`${className} ${
        fill ? "absolute h-full w-full top-0 left-0" : ""
      }`}
    />
  );
};

export default Image;
