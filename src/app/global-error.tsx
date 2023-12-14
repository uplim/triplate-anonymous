'use client';

type GlobalErrorProps = {
  error: Error;
  reset: () => void;
};

const GlobalError = ({ reset }: GlobalErrorProps) => {
  return (
    <html lang="ja">
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
};

export default GlobalError;
