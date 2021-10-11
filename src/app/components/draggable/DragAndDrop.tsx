import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { DragabbleEntityType, DropableContainer } from 'app/components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export interface DraggableContainer {
  id: string;
  entityIds: string[];
  title?: string;
}

export type DragAndDropData = Record<string, DragabbleEntityType>;
export type DragAndDropContainer = Record<string, DraggableContainer>;

export interface DragAndDropProps {
  data: DragAndDropData;
  canAddEntities?: boolean;
  containers: DragAndDropContainer;
  containersDirection?: 'vertical' | 'horizontal';
  entitiesDirection?: 'vertical' | 'horizontal';
  hasBorder?: boolean;
  setContainers: (containers: DragAndDropContainer) => void;
  setData: (data: DragAndDropData) => void;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({
  containers,
  data,
  setContainers,
  containersDirection = 'vertical',
  entitiesDirection = 'horizontal',
  hasBorder,
  canAddEntities,
  setData,
}) => {
  const handleDragInOneContainer = useCallback(
    (result: DropResult, container: DraggableContainer) => {
      const { destination, source, draggableId } = result;
      if (!destination) return;

      const newEntityIds = Array.from(container?.entityIds);
      newEntityIds.splice(source.index, 1);
      newEntityIds.splice(destination.index, 0, draggableId);

      const newContainers = {
        ...containers,
        [container.id]: {
          ...container,
          entityIds: newEntityIds,
        },
      };

      setContainers(newContainers);
    },
    [containers, setContainers],
  );

  const handleDragInMutipleContainers = useCallback(
    (
      result: DropResult,
      startContainer: DraggableContainer,
      finishContainer: DraggableContainer,
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

      const newContainers = {
        ...containers,
        [newStartContainer.id]: newStartContainer,
        [newFinishContainer.id]: newFinishContainer,
      };

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

      const startContainer = containers[source.droppableId];
      const finishContainer = containers[destination.droppableId];

      if (startContainer === finishContainer) {
        handleDragInOneContainer(result, startContainer);
      } else {
        handleDragInMutipleContainers(result, startContainer, finishContainer);
      }
    },
    [containers, handleDragInMutipleContainers, handleDragInOneContainer],
  );

  const handleAddButtonClick = (containerId: string) => {
    const newEntityId = new Date().getTime().toString();
    const newContainers = {
      ...containers,
      [containerId]: {
        ...containers[containerId],
        entityIds: [newEntityId, ...containers[containerId].entityIds],
      },
    };

    const newData = {
      ...data,
      [newEntityId]: {
        id: newEntityId,
        content: '',
      },
    };
    setContainers(newContainers);
    setData(newData);
  };

  const handleEditContent = (entityId: string, content: string) => {
    const newEntities = {
      ...data,
      [entityId]: {
        id: entityId,
        content,
      },
    };

    setData(newEntities);
  };

  console.log(containers);
  
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledDragAndDrop containersDirection={containersDirection}>
        {Object.values(containers)?.map((container) => {
          const { id, entityIds, title } = container;
          const enititiesData = entityIds?.map((id) => data[id]);

          return (
            <DropableContainer
              key={id}
              canAddEntities={canAddEntities}
              containersDirection={containersDirection}
              entities={enititiesData}
              entitiesDirection={entitiesDirection}
              title={title}
              id={id}
              hasBorder={hasBorder}
              onAddButtonClick={handleAddButtonClick}
              onEditContent={handleEditContent}
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
