import React from 'react';
import styled from '@emotion/styled';
import { rem } from 'utilities';
import { Icon, IconName } from 'app/components';
import { COLOR, ColorName } from '../../constants';

export interface ShapeProps {
  icon?: IconName;
  className?: string;
  circular?: boolean;
  color?: ColorName;
}

const StyledShapeWrapper = styled.div({
  width: rem(16),
  height: rem(16),
});

const commonStyles = ({ circular }: { circular?: boolean }) => ({
  borderRadius: circular ? '50%' : 'unset',
  width: '100%',
  height: '100%',
});

const StyledShape = styled.div<{
  backgroundColor?: string;
  circular?: boolean;
}>(commonStyles, ({ backgroundColor }) => ({ backgroundColor }));

const StyledIcon = styled(Icon)<{ color?: string; circular?: boolean }>(
  {
    display: 'flex',
  },
  ({ color }) => ({ color }),
  commonStyles,
);

export const Shape: React.FC<ShapeProps> = (props): JSX.Element => {
  const {
    icon = null,
    className = '',
    circular = true,
    color = 'primary',
  } = props;

  return (
    <StyledShapeWrapper className={className}>
      {icon ? (
        <StyledIcon color={COLOR[color]} circular={circular} icon={icon} />
      ) : (
        <StyledShape backgroundColor={COLOR[color]} circular={circular} />
      )}
    </StyledShapeWrapper>
  );
};
