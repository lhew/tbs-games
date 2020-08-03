import React from 'react';
import { FC } from 'react';
import Home from './pages/home';
interface Props {
  foo?: string;
}

const App: FC<Props> = (props) => {
  return (
    <div {...props}>
      <Home />
    </div>
  );
};

export default App;
