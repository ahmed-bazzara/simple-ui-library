import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { DragabbleEntityType, DropableContainer } from 'app/components';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { COLOR } from 'app/constants';

export interface DraggableContainer {
  id: string;
  entityIds: string[];
  title?: string;
}

export type DragAndDropData = Record<string, DragabbleEntityType>;
export type DragAndDropContainer = Record<string, DraggableContainer>;

export interface DragAndDropProps {
  data: DragAndDropData;
  containers: DragAndDropContainer;
  containersDirection?: 'vertical' | 'horizontal';
  entitiesDirection?: 'vertical' | 'horizontal';
  hasBorder?: boolean;
  setContainers: (containers: DragAndDropContainer) => void;
  setData: (data: DragAndDropData) => void;
  onRemove?: () => void;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({
  containers,
  data,
  containersDirection = 'vertical',
  entitiesDirection = 'horizontal',
  hasBorder,
  setContainers,
  setData,
  onRemove,
}) => {
  const [editEntityId, setEditingEntityId] = useState<string>();
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

    setEditingEntityId(newEntityId);
    setContainers(newContainers);
    setData(newData);
  };

  const handleEditContentDone = (entityId: string, content: string) => {
    const newEntities = {
      ...data,
      [entityId]: {
        id: entityId,
        content,
        isEditing: false,
      },
    };

    setEditingEntityId(undefined);
    setData(newEntities);
  };

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
              editEntityId={editEntityId}
              title={title}
              id={id}
              hasBorder={hasBorder}
              onAddButtonClick={handleAddButtonClick}
              onEditContentDone={handleEditContentDone}
              setEditingEntityId={id => setEditingEntityId(id)}
              onRemove={onRemove}
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
  backgroundColor: COLOR.neutralWhite,
}));
