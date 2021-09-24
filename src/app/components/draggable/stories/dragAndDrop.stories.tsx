import React, { useCallback, useEffect, useState } from 'react';
import {
  DragAndDrop,
  DragAndDropContainer,
  DragAndDropData,
  Header,
} from 'app/components';
import { loremIpsum } from 'lorem-ipsum';
import { DragAndDropProps } from '../DragAndDrop';

export default {
  title: 'Drag and Drop',
  component: DragAndDrop,
  args: {
    data: Array.from(Array(6)).map((_, index) => `Option ${index + 1}`),
    containers: Array.from(Array(1)).map(
      (_, index) => `Container ${index + 1}`,
    ),
    containersDirection: 'horizontal',
    entitiesDirection: 'vertical',
    hasBorder: false,
  },
  argTypes: {
    data: {
      control: {
        type: 'array',
      },
    },
    containers: {
      control: {
        type: 'array',
      },
    },
    onDragEnd: {
      table: {
        disable: true,
      },
    },
    containersDirection: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
    entitiesDirection: {
      control: {
        type: 'select',
        options: ['vertical', 'horizontal'],
      },
    },
    hasBorder: {
      control: 'boolean',
    },
  },
};

type Args = Omit<DragAndDropProps, 'data' | 'containers'> & {
  data: string[];
  containers: string[];
};

const Template: {
  (args: Args): JSX.Element;
  args?: Args;
} = (args: Args): JSX.Element => {
  const {
    data: userInsertedData,
    containers: userInsertedContainers,
    containersDirection,
    entitiesDirection,
    hasBorder,
  } = args;
  const [data, setData] = useState<DragAndDropData>({});
  const [containers, setDraggableContainers] = useState<DragAndDropContainer>(
    {},
  );

  const mockTitle = useCallback(
    () =>
      loremIpsum({
        units: 'sentences',
        count: 1,
        sentenceUpperBound: 8,
      }),
    [],
  );

  useEffect(() => {
    const data = userInsertedData?.reduce((acc, content, index) => {
      acc[content] = {
        id: content,
        content: (
          <Header color="secondary" variant="H5">
            {mockTitle()}
          </Header>
        ),
      };

      return acc;
    }, {} as DragAndDropData);
    setData(data);
  }, [mockTitle, userInsertedData]);

  useEffect(() => {
    const entityIds = Object.keys(data);
    const enititiesPortinPerContainer = Math.round(
      entityIds.length / userInsertedContainers.length,
    );

    const entitiesArr: string[][] = [];
    while (entityIds.length > 0)
      entitiesArr.push(entityIds.splice(0, enititiesPortinPerContainer));

    const containers = userInsertedContainers.reduce((acc, id, index) => {
      acc[id] = {
        id,
        entityIds: entitiesArr[index],
        title: id,
      };

      return acc;
    }, {} as DragAndDropContainer);
    setDraggableContainers(containers);
  }, [data, userInsertedContainers]);

  const handleMove = useCallback((containers: DragAndDropContainer) => {
    setDraggableContainers(containers);
  }, []);

  return (
    <DragAndDrop
      containers={containers}
      containersDirection={containersDirection}
      data={data}
      entitiesDirection={entitiesDirection}
      hasBorder={hasBorder}
      onDragEnd={handleMove}
    />
  );
};

export const Interactive = Template.bind({});
