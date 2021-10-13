import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { DropableContainer, ContainerType } from './DropableContainer';
import { DragabbleEntityType } from './DraggableEntity';
import { generateUniqueId } from 'utilities';

export interface DragAndDropProps {
  entities: DragabbleEntityType[];
  containers: ContainerType[];
  containersDirection?: 'vertical' | 'horizontal';
  entitiesDirection?: 'vertical' | 'horizontal';
  hasBorder?: boolean;
  setContainers: (containers: ContainerType[]) => void;
  setEntities: (entities: DragabbleEntityType[]) => void;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({
  containers,
  entities,
  containersDirection = 'vertical',
  entitiesDirection = 'horizontal',
  hasBorder,
  setContainers,
  setEntities,
}) => {
  const [editEntityId, setEditingEntityId] = useState<string>();
  const handleDragInOneContainer = useCallback(
    (result: DropResult, container: ContainerType) => {
      const { destination, source, draggableId } = result;
      if (!destination) return;
      
      const newEntityIds = Array.from(container?.entityIds);
      newEntityIds.splice(source.index, 1);
      newEntityIds.splice(destination.index, 0, draggableId);

      const newContainers = containers.map(prevContainer => {
        if (prevContainer.id === container.id) {
          return {
            ...prevContainer,
            entityIds: newEntityIds,
          };
        }

        return prevContainer;
      });

      setContainers(newContainers);
    },
    [containers, setContainers],
  );

  const handleDragInMutipleContainers = useCallback(
    (
      result: DropResult,
      startContainer: ContainerType,
      finishContainer: ContainerType,
    ) => {
      const { destination, source, draggableId } = result;
      if (!destination) return;

      const startContainerEntityIds = Array.from(startContainer.entityIds);
      startContainerEntityIds.splice(source.index, 1);
      const newStartContainer = {
        ...startContainer,
        entityIds: startContainerEntityIds,
      };

      const finishContainerEntityIds = Array.from(finishContainer.entityIds);
      finishContainerEntityIds.splice(destination.index, 0, draggableId);
      const newFinishContainer = {
        ...finishContainer,
        entityIds: finishContainerEntityIds,
      };

      const newContainers = containers.map(container => {
        if (container.id === startContainer.id) {
          return newStartContainer;
        }
        if (container.id === finishContainer.id) {
          return newFinishContainer;
        }

        return container;
      });

      setContainers(newContainers);
    },
    [containers, setContainers],
  );

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      const isInSamePlace =
        destination?.droppableId === source.droppableId &&
        destination?.index === source.index;
      if (!destination) return;
      if (isInSamePlace) return;

      const startContainer = containers.find(({ id }) => id === source.droppableId);
      const finishContainer = containers.find(({ id }) => id === destination.droppableId);
      if (!startContainer) return;
      if (!finishContainer) return;

      if (startContainer === finishContainer) {
        handleDragInOneContainer(result, startContainer);
      } else {
        handleDragInMutipleContainers(result, startContainer, finishContainer);
      }
    },
    [containers, handleDragInMutipleContainers, handleDragInOneContainer],
  );

  const handleAddButtonClick = (containerId: string) => {
    const newEntityId = generateUniqueId();
    const newContainers = containers.map(container =>
      container.id === containerId
        ? ({ ...container, entityIds: [...container.entityIds, newEntityId] })
        : container);

    const newEntities = [...entities, { id: newEntityId, content: '' }];

    setEditingEntityId(newEntityId);
    setContainers(newContainers);
    setEntities(newEntities);
  };

  const handleEditContentDone = (entityId: string, content: string) => {
    const newEntities = entities.map(entitiy => entitiy.id === entityId ? { ...entitiy, content } : entitiy);

    setEditingEntityId(undefined);
    setEntities(newEntities);
  };

  const handleRemoveContainer = useCallback((containerId: string) => {
    const containerEntityIds = containers.find(({ id }) => containerId === id)?.entityIds;
    const newContainers = containers.filter(({ id }) => containerId !== id );
    const newEntities = entities.filter(({ id }) => !containerEntityIds?.includes(id));

    setContainers(newContainers);
    setEntities(newEntities);
  }, [containers, entities, setContainers, setEntities]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledDragAndDrop containersDirection={containersDirection}>
        {containers?.map((container) => {
          const { id, entityIds, title } = container;
          const enititiesData = entities.filter(({ id }) => entityIds.includes(id));

          return (
            <DropableContainer
              key={id}
              containersDirection={containersDirection}
              containerEntities={enititiesData}
              entitiesDirection={entitiesDirection}
              editEntityId={editEntityId}
              title={title}
              id={id}
              hasBorder={hasBorder}
              onAddButtonClick={handleAddButtonClick}
              onEditContentDone={handleEditContentDone}
              setEditingEntityId={id => setEditingEntityId(id)}
              onRemove={() => handleRemoveContainer(id)}
            />
          );
        })}
      </StyledDragAndDrop>
    </DragDropContext>
  );
};

const StyledDragAndDrop = styled.div<
Pick<DragAndDropProps, 'containersDirection'>
>(({ containersDirection }) => ({
  display: 'flex',
  flexDirection: containersDirection === 'vertical' ? 'column' : 'row',
}));
