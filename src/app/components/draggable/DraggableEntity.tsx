import React from 'react';
import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';
import { COLOR, ELEVATION } from 'app/constants';
import { rem } from 'utilities';

export interface DragabbleEntity {
  id: string;
  content: JSX.Element;
}

interface DraggableEntityProps {
  entity: DragabbleEntity;
  order: number;
  entitiesDirection: 'vertical' | 'horizontal';
}

const EntityContainer = styled.div<
Pick<DraggableEntityProps, 'entitiesDirection'> & { isDragging: boolean }
>(({ entitiesDirection, isDragging }) => ({
  label: 'EntityContainer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: rem(16, 24),
  border: isDragging
    ? `${rem(1)} solid ${COLOR.primary}`
    : `${rem(1)} solid ${COLOR.neutralGrey10}`,
  borderRadius: rem(8),
  backgroundColor: COLOR.neutralWhite,

  ...(entitiesDirection === 'horizontal' && {
    marginRight: rem(8),
    ':last-of-type': {
      marginRight: 0,
    },
  }),
  ...(entitiesDirection === 'vertical' && {
    marginBottom: rem(8),
    ':last-of-type': {
      marginBottom: 0,
    },
  }),
  ...(!!isDragging && {
    boxShadow: ELEVATION[6],
  }),
}));

export const DraggableEntity: React.FC<DraggableEntityProps> = ({
  entity,
  order,
  entitiesDirection,
}) => {
  const { id, content } = entity;

  return (
    <Draggable draggableId={id} index={order}>
      {(provided, snapshot) => (
        <EntityContainer
          ref={provided.innerRef}
          entitiesDirection={entitiesDirection}
          isDragging={snapshot.isDragging}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {content}
        </EntityContainer>
      )}
    </Draggable>
  );
};
