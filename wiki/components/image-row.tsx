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
          borderRadius: '10px',
          borderRight: '1px solid gray',
          borderTopRightRadius: '0',
          borderBottomRightRadius: '0',
        }}
      />
      <img
        src={pc}
        alt=""
        style={{
          flexGrow: 1,
          height: 'auto',
          maxWidth: '71.21%',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};
