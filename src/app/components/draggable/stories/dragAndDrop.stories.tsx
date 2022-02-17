import { useEffect, useState } from "react";
import {
  DraggableEntityType,
  DragAndDrop,
  ContainerType,
} from "app/components";
import { DragAndDropProps } from "../DragAndDrop";
import { generateUniqueId } from "utilities";

export default {
  title: "Drag and Drop",
  component: DragAndDrop,
  args: {
    entities: Array.from(Array(6)).map((_, index) => `Option ${index + 1}`),
    containers: Array.from(Array(1)).map(
      (_, index) => `Container ${index + 1}`
    ),
    containersDirection: "horizontal",
    entitiesDirection: "vertical",
    hasBorder: false,
  },
  argTypes: {
    entities: {
      control: {
        type: "array",
      },
    },

    containers: {
      control: {
        type: "array",
      },
    },
    onDragEnd: {
      table: {
        disable: true,
      },
    },
    containersDirection: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"],
      },
    },
    entitiesDirection: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"],
      },
    },
    hasBorder: {
      control: "boolean",
    },
    canAddEntities: {
      control: "boolean",
    },
  },
};

type Args = Omit<DragAndDropProps, "entities" | "containers"> & {
  entities: string[];
  containers: string[];
};

const Template: {
  (args: Args): JSX.Element;
  args?: Args;
} = (args: Args): JSX.Element => {
  const {
    entities: userInsertedEntities,
    containers: userInsertedContainers,
    containersDirection,
    entitiesDirection,
    hasBorder,
  } = args;
  const [entities, setEntities] = useState<DraggableEntityType[]>([]);
  const [containers, setDraggableContainers] = useState<ContainerType[]>([]);

  useEffect(() => {
    const entities = userInsertedEntities.map(content => ({
      id: generateUniqueId(),
      content,
    }));
    setEntities(entities);
  }, [userInsertedEntities]);

  useEffect(() => {
    const entityIds = entities.map(({ id }) => id);
    const entitiesPortingPerContainer = Math.round(
      entityIds.length / userInsertedContainers.length
    );

    const entitiesArr: string[][] = [];
    while (entityIds.length > 0)
      entitiesArr.push(entityIds.splice(0, entitiesPortingPerContainer));

    const containers = userInsertedContainers.map((containerTitle, index) => ({
      id: generateUniqueId(),
      entityIds: entitiesArr[index] || [],
      title: containerTitle,
    }));
    setDraggableContainers(containers);
  }, [entities, userInsertedContainers]);

  return (
    <DragAndDrop
      containers={containers}
      containersDirection={containersDirection}
      entities={entities}
      entitiesDirection={entitiesDirection}
      hasBorder={hasBorder}
      setContainers={containers => setDraggableContainers(containers)}
      setEntities={entities => setEntities(entities)}
    />
  );
};

export const Interactive = Template.bind({});
