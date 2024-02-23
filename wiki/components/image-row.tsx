type ImageRowProps = {
  sp: string;
  pc: string;
};

export const ImageRow = ({ sp, pc }: ImageRowProps) => {
  return (
    <div
      style={{
        display: 'flex',
        marginBottom: '16px',
        width: '100%',
        padding: '5px',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid gray',
        borderRadius: '10px',
      }}
    >
      <img
        src={sp}
        alt=""
        style={{
          flexGrow: 1,
          height: 'auto',
          maxWidth: '28.79%',
          borderRight: '1px solid gray',
        }}
      />
      <img
        src={pc}
        alt=""
        style={{
          flexGrow: 1,
          height: 'auto',
          maxWidth: '71.21%',
        }}
      />
    </div>
  );
};
