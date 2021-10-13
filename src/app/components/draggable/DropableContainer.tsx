import React from 'react';
import styled from '@emotion/styled';
import { Droppable } from 'react-beautiful-dnd';
import { COLOR } from 'app/constants';
import { rem } from 'utilities';
import { DragabbleEntityType, DraggableEntity } from '.';
import { Button, Header, Icon } from 'app/components';
import { css } from '@emotion/css';

export interface ContainerType {
  id: string;
  title?: string;
  entityIds: string[]
}

export interface DropableContainerProps extends Pick<ContainerType, 'id' | 'title'> {
  containerEntities: DragabbleEntityType[];
  entitiesDirection: 'vertical' | 'horizontal';
  containersDirection: 'vertical' | 'horizontal';
  hasBorder?: boolean;
  editEntityId?: string;
  onEditContentDone?: (entityId: string, content: string) => void;
  setEditingEntityId: (entityId?: string) => void;
  onAddButtonClick: (containerId: string) => void;
  onRemove?: () => void;
}

const StyledDropableContainer = styled.div<
Pick<DropableContainerProps, 'containersDirection'> & { hasBorder?: boolean }
>(({ containersDirection, hasBorder }) => ({
  label: 'DropableContainer',
  display: 'flex',
  border: hasBorder ? `${rem(1)} solid ${COLOR.neutralGrey28}` : 'unset',
  backgroundColor: COLOR.neutralGrey10,
  borderRadius: rem(4),
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
  padding: rem(0, 4),
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
  containerEntities,
  id,
  title = '',
  entitiesDirection,
  containersDirection,
  hasBorder,
  editEntityId,
  onAddButtonClick,
  onEditContentDone,
  setEditingEntityId,
  onRemove,
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
              {!!onAddButtonClick && (
                <Button
                  appearance="square"
                  className={css({ marginRight: rem(8) })}
                  isDisabled={!!editEntityId}
                  onClick={() => onAddButtonClick(id)}
                  size="TINY"
                  theme="secondary"
                >
                  <Icon icon="PLUS" size="SMALL" />
                </Button>
              )}
              <div className={css({ flex: '1' })}>
                <Header className={css({ padding: rem(0, 8) })} color="text" variant="H4">{title}</Header>
              </div>
              {!!onRemove && (
                <Button appearance="square" onClick={() => onRemove()} size="TINY" theme="secondary">
                  <Icon icon="DELETE" size="SMALL" />
                </Button>
              )}
            </HeaderContainer>
            {containerEntities?.map(
              (entity, index) =>
                entity && (
                  <DraggableEntity
                    key={entity.id}
                    entitiesDirection={entitiesDirection}
                    editEntityId={editEntityId}
                    order={index}
                    onEditContentDone={onEditContentDone}
                    setEditingEntityId={setEditingEntityId}
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
