import React from 'react';
import styled from '@emotion/styled';

import { rem } from 'utilities';
import {
  Header,
  HEADER_VARIANT,
  Icon,
  ICON_NAME,
  ICON_SIZE,
  useNotifications,
  IconName,
} from 'app/components';
import { COLOR } from 'app/constants';

const StyledIconPreset = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: rem(1340),
  margin: '0 auto',
});

const breakpoints = [480, 620, 860, 1100];

const mq = breakpoints.map(
  (breakPoint) => `@media (min-width: ${rem(breakPoint)})`,
);

const StyledIconTopWrapper = styled.div({
  position: 'relative',

  '&:hover': { backgroundColor: COLOR.text5 },

  [mq[0].toString()]: {
    width: '100%',
    paddingBottom: '100%',
  },

  [mq[1].toString()]: {
    width: '50%',
    paddingBottom: '50%',
  },

  [mq[2].toString()]: {
    width: '33.3333%%',
    paddingBottom: '33.3333%%',
  },

  [mq[3].toString()]: {
    width: '25%',
    paddingBottom: '25%',
  },
});

const StyledIconWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  position: 'absolute',
  padding: '25% 0',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
});

export const Presets: React.FC = () => {
  const notify = useNotifications();

  const copyToClipBoard = async (text: string): Promise<void> => {
    await navigator?.clipboard?.writeText(text);
    notify({ message: 'Copied to clipboard!' });
  };

  return (
    <StyledIconPreset>
      {Object.values(ICON_NAME).map((name: IconName) => (
        <StyledIconTopWrapper
          key={name}
          onClick={(): Promise<void> => copyToClipBoard(name)}
        >
          <StyledIconWrapper>
            <Icon icon={name} size={ICON_SIZE.LARGE} />
            <Header variant={HEADER_VARIANT.H6}>{name}</Header>
          </StyledIconWrapper>
        </StyledIconTopWrapper>
      ))}
    </StyledIconPreset>
  );
};

export default Presets;
