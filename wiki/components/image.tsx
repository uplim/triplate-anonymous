type ImageProps = {
  src: string;
  size: number;
  width?: number;
};

export const Image = ({ src, size, width }: ImageProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: width ? `${width}px` : `${size}px`,
        height: width ? 'auto' : `${size}px`,
        padding: '4px',
        borderRadius: '4px',
        border: '1px solid gray',
        marginBottom: '4px',
      }}
    >
      <img alt="" src={src} />
    </div>
  );
};
