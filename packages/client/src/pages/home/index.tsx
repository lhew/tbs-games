import React from 'react';
import { FC, useState } from 'react';
import { GameOptionsWrapper, StyledButton, Canvas } from './styles';
import { Popup, Button, FormField } from '@tbs-games/components/lib';

const Home: FC = () => {
  const [popupState, setPopupState] = useState<'new' | 'join' | null>(null);
  return (
    <Canvas>
      <h2>TBS Games</h2>
      <GameOptionsWrapper>
        <StyledButton onClick={() => setPopupState('new')}>New game</StyledButton>
        <StyledButton onClick={() => setPopupState('join')} type="secondary">
          Create game
        </StyledButton>
      </GameOptionsWrapper>

      {popupState === 'join' && (
        <Popup>
          <h3>Join game</h3>
          <FormField name="game" type="text" label="Type a game code to join" />
          <Button>Join game</Button>
        </Popup>
      )}
    </Canvas>
  );
};

export default Home;
