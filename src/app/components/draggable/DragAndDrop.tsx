import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { DroppableContainer, ContainerType } from "./DroppableContainer";
import { DraggableEntityType } from "./DraggableEntity";
import { generateUniqueId } from "utilities";
import { isEmpty } from "utilities/validation";

export interface DragAndDropProps {
  containers: ContainerType[];
  containersDirection?: "vertical" | "horizontal";
  entitiesDirection?: "vertical" | "horizontal";
  hasBorder?: boolean;
  setContainers: (containers: ContainerType[]) => void;
  // onRemoveEntity: (entityId: string, containerId: string) => void;
}

export const DragAndDrop: React.FC<DragAndDropProps> = ({
  containers,
  containersDirection = "vertical",
  entitiesDirection = "horizontal",
  hasBorder,
  setContainers,
  // onRemoveEntity,
}) => {
  const [editEntityId, setEditingEntityId] = useState<string>();

  const handleDragInOneContainer = useCallback(
    (result: DropResult, container: ContainerType) => {
      const { destination, source } = result;
      if (!destination) return;

      const newEntities = Array.from(container?.entities);
      const [reorderedItem] = newEntities.splice(source.index, 1);
      newEntities.splice(destination.index, 0, reorderedItem);

      const newContainers = containers.map(prevContainer => {
        if (prevContainer.id === container.id) {
          return {
            ...prevContainer,
            entities: newEntities,
          };
        }
        return prevContainer;
      });

      setContainers(newContainers);
    },
    [containers, setContainers]
  );

  const handleDragInMultipleContainers = useCallback(
    (
      result: DropResult,
      startContainer: ContainerType,
      finishContainer: ContainerType
    ) => {
      const { destination, source, draggableId } = result;
      if (!destination) return;

      const [movedEntity] = startContainer.entities.splice(source.index, 1);
      const newStartContainer = {
        ...startContainer,
        entities: startContainer.entities,
      };

      finishContainer.entities.splice(destination.index, 0, movedEntity);
      const newFinishContainer = {
        ...finishContainer,
        entities: finishContainer.entities,
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
    [containers, setContainers]
  );

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      const { destination, source } = result;

      const isInSamePlace =
        destination?.droppableId === source.droppableId &&
        destination?.index === source.index;
      if (!destination) return;
      if (isInSamePlace) return;

      const startContainer = containers.find(
        ({ id }) => id === source.droppableId
      );
      const finishContainer = containers.find(
        ({ id }) => id === destination.droppableId
      );
      if (!startContainer) return;
      if (!finishContainer) return;

      if (startContainer === finishContainer) {
        handleDragInOneContainer(result, startContainer);
      } else {
        handleDragInMultipleContainers(result, startContainer, finishContainer);
      }
    },
    [containers, handleDragInMultipleContainers, handleDragInOneContainer]
  );

  const handleAddButtonClick = (containerId: string) => {
    const newEntity = { id: generateUniqueId(), content: "" };
    const newContainers = containers.map(container =>
      container.id === containerId
        ? { ...container, entities: [...container.entities, newEntity] }
        : container
    );

    setEditingEntityId(newEntity.id);
    setContainers(newContainers);
  };

  const handleEditContentDone = (
    containerId: string,
    entityId: string,
    content: string
  ) => {
    if (!isEmpty(content)) {
      const newContainers = containers.map(container => {
        if (container.id === containerId) {
          const newEntities = container.entities.map(entity =>
            entity.id === entityId ? { ...entity, content } : entity
          );
          return { ...container, entities: newEntities };
        } else {
          return container;
        }
      });
      setContainers(newContainers);
      setEditingEntityId(undefined);
    } else {
      setEditingEntityId(undefined);
    }
  };

  const handleRemoveContainer = useCallback(
    (containerId: string) => {
      const newContainers = containers.filter(({ id }) => containerId !== id);

      setContainers(newContainers);
    },
    [containers, setContainers]
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <StyledDragAndDrop containersDirection={containersDirection}>
        {containers?.map(container => {
          const { id, entities, title } = container;
          const entitiesData = entities;

          return (
            <DroppableContainer
              key={id}
              containersDirection={containersDirection}
              containerEntities={entitiesData}
              entitiesDirection={entitiesDirection}
              editEntityId={editEntityId}
              title={title}
              id={id}
              hasBorder={hasBorder}
              onAddButtonClick={handleAddButtonClick}
              onEditContentDone={(entityId, content) =>
                handleEditContentDone(id, entityId, content)
              }
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
  Pick<DragAndDropProps, "containersDirection">
>(({ containersDirection }) => ({
  display: "flex",
  flexDirection: containersDirection === "vertical" ? "column" : "row",
}));
