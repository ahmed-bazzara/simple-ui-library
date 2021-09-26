import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { DragabbleEntity, DropableContainer } from 'app/components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

export interface DraggableContainer {
  id: string;
  entityIds: string[];
  title?: string;
}

export type DragAndDropData = Record<string, DragabbleEntity>;
export type DragAndDropContainer = Record<string, DraggableContainer>;

export interface DragAndDropProps {
  data: DragAndDropData;
  containers: DragAndDropContainer;
  containersDirection?: 'vertical' | 'horizontal';
  entitiesDirection?: 'vertical' | 'horizontal';
  hasBorder?: boolean;
  onDragEnd: (containers: DragAndDropContainer) => void;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({
  containers,
  data,
  onDragEnd,
  containersDirection = 'vertical',
  entitiesDirection = 'horizontal',
  hasBorder,
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

      onDragEnd(newContainers);
    },
    [containers, onDragEnd],
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

      onDragEnd(newContainers);
    },
    [containers, onDragEnd],
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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledDragAndDrop containersDirection={containersDirection}>
        {Object.values(containers)?.map((container) => {
          const { id, entityIds, title } = container;
          const enititiesData = entityIds?.map((id) => data[id]);

          return (
            <DropableContainer
              key={id}
              containersDirection={containersDirection}
              entities={enititiesData}
              entitiesDirection={entitiesDirection}
              title={title}
              id={id}
              hasBorder={hasBorder}
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
