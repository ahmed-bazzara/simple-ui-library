import React from 'react';
import styled from '@emotion/styled';
import { Droppable } from 'react-beautiful-dnd';
import { COLOR } from 'app/constants';
import { rem } from 'utilities';
import { DragabbleEntityType, DraggableEntity } from '.';
import { Button, Header } from 'app/components';
import { css } from '@emotion/css';

export interface DragabbleContainerType {
  id: string;
  title?: string;
  entities: DragabbleEntityType[];
}
export interface DropableContainerProps extends DragabbleContainerType {
  entitiesDirection: 'vertical' | 'horizontal';
  containersDirection: 'vertical' | 'horizontal';
  hasBorder?: boolean;
  canAddEntities?: boolean;
  onEditContent?: (entityId: string, content: string) => void;
  onAddButtonClick: (containerId: string) => void;
}

const StyledDropableContainer = styled.div<
Pick<DropableContainerProps, 'containersDirection'> & { hasBorder?: boolean }
>(({ containersDirection, hasBorder }) => ({
  label: 'DropableContainer',
  display: 'flex',
  border: hasBorder ? `${rem(1)} solid ${COLOR.neutralGrey28}` : 'unset',
  width: '100%',
  alignItems: 'center',

  ...(containersDirection === 'horizontal' && {
    marginRight: rem(32),
    ':last-of-type': {
      marginRight: 0,
    },
  }),
  ...(containersDirection === 'vertical' && {
    marginBottom: rem(32),
    ':last-of-type': {
      marginBottom: 0,
    },
  }),
}));

const HeaderContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  padding: rem(0, 24),
});

const EntitiesContainer = styled.div<
Pick<DropableContainerProps, 'entitiesDirection'> & {
  isDraggingOver: boolean;
}
>(({ entitiesDirection, isDraggingOver }) => ({
  label: 'EntitiesContainer',
  transition: 'background-color 0.2s ease-in-out',
  backgroundColor: isDraggingOver ? COLOR.secondary24 : 'transparent',
  display: 'flex',
  flexDirection: entitiesDirection === 'horizontal' ? 'row' : 'column',
  flex: '1',
  height: '100%',
  justifyContent: 'flex-start',
  padding: rem(8),
}));

export const DropableContainer: React.FC<DropableContainerProps> = ({
  entities,
  id,
  title = '',
  entitiesDirection,
  containersDirection,
  hasBorder,
  canAddEntities,
  onAddButtonClick,
  onEditContent,
}) => {

  return (
    <StyledDropableContainer
      containersDirection={containersDirection}
      hasBorder={hasBorder}
    >
      <Droppable droppableId={id} direction={entitiesDirection}>
        {(provided, snapshot) => (
          <EntitiesContainer
            ref={provided.innerRef}
            entitiesDirection={entitiesDirection}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            <HeaderContainer>
              <Header className={css({ padding: rem(0, 24) })} color="text" variant="H4">{title}</Header>
              {canAddEntities && (
                <Button appearance="square" onClick={() => onAddButtonClick(id)} size="TINY" theme="neutral">+</Button>
              )}
            </HeaderContainer>
            {entities?.map(
              (entity, index) =>
                entity && (
                  <DraggableEntity
                    key={entity.id}
                    entitiesDirection={entitiesDirection}
                    order={index}
                    onEditContent={onEditContent}
                    {...entity}
                  />
                ),
            )}
            {provided.placeholder}
          </EntitiesContainer>
        )}
      </Droppable>
    </StyledDropableContainer>
  );
};
