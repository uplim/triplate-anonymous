type ImageProps = {
  src: string;
  size: number;
};

export const Image = ({ src, size }: ImageProps) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: `${size}px`,
        height: `${size}px`,
        padding: '4px',
        borderRadius: '4px',
        border: '1px solid gray',
        marginBottom: '4px'
      }}
    >
      <img alt="" src={src} />
    </div>
  );
};
