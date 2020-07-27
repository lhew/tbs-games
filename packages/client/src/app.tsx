import React from 'react';
import { FC } from 'react';
import Button from '@tbs-games/components/lib/button';
interface Props {
  foo?: string;
}

const App: FC<Props> = (props) => {
  return (
    <div {...props}>
      <h1>TBS Games</h1>
      <Button>ok</Button>
    </div>
  );
};

export default App;
