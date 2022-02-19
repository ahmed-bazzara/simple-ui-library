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
    entities: Array.from(Array(10)).map((_, index) => `Option ${index + 1}`),
    containers: Array.from(Array(2)).map(
      (_, index) => `Container ${index + 1}`
    ),

    containersDirection: "horizontal",
    entitiesDirection: "vertical",
    hasBorder: false,
  },

  argTypes: {
    containers: {
      control: {
        type: "array",
      },
    },
    entities: {
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

  const [containers, setDraggableContainers] = useState<ContainerType[]>([]);

  useEffect(() => {
    const userInsertedEntitiesObjects = userInsertedEntities.map(entity => {
      return { id: generateUniqueId(), content: entity };
    });
    const entitiesPortingPerContainer = Math.round(
      userInsertedEntities.length / userInsertedContainers.length
    );

    const containerEntities: DraggableEntityType[][] = [];
    while (userInsertedEntitiesObjects.length > 0)
      containerEntities.push(
        userInsertedEntitiesObjects.splice(0, entitiesPortingPerContainer)
      );

    const containers = userInsertedContainers.map((containerTitle, index) => {
      return {
        id: generateUniqueId(),
        entities: containerEntities[index],
        title: containerTitle,
      };
    });

    setDraggableContainers(containers);
  }, [userInsertedContainers, userInsertedEntities]);
  return (
    <DragAndDrop
      containers={containers}
      containersDirection={containersDirection}
      entitiesDirection={entitiesDirection}
      hasBorder={hasBorder}
      setContainers={containers => setDraggableContainers(containers)}
    />
  );
};

export const Interactive = Template.bind({});
