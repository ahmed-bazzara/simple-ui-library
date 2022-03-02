import React from "react";
import styled from "@emotion/styled";
import { Draggable } from "react-beautiful-dnd";
import { COLOR, ELEVATION } from "app/constants";
import { pointerHandlers, rem } from "utilities";
import { Button, Header, Icon } from "app/components";
import { css } from "@emotion/css";
import { Field, Form, Formik } from "formik";

export interface DraggableEntityType {
  id: string;
  content: string;
}

interface DraggableEntityProps extends DraggableEntityType {
  order: number;
  entitiesDirection: "vertical" | "horizontal";
  editEntityId?: string;
  onEditContentDone?: (entityId: string, content: string) => void;
  setEditingEntityId: (entityId?: string) => void;
}

const EntityContainer = styled.div<
  Pick<DraggableEntityProps, "entitiesDirection"> & { isDragging: boolean }
>(({ entitiesDirection, isDragging }) => ({
  label: "EntityContainer",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: rem(16, 24),
  border: isDragging
    ? `${rem(1)} solid ${COLOR.primary}`
    : `${rem(1)} solid ${COLOR.neutralGrey10}`,
  borderRadius: rem(8),
  backgroundColor: COLOR.neutralWhite,

  ...(entitiesDirection === "horizontal" && {
    marginRight: rem(8),
    ":last-of-type": {
      marginRight: 0,
    },
  }),
  ...(entitiesDirection === "vertical" && {
    marginBottom: rem(8),
    ":last-of-type": {
      marginBottom: 0,
    },
  }),
  ...(!!isDragging && {
    boxShadow: ELEVATION[6],
  }),

  ":hover": {
    ".edit-icon": {
      display: "flex",
    },
  },
}));

export const DraggableEntity: React.FC<DraggableEntityProps> = ({
  id,
  content,
  order,
  entitiesDirection,
  editEntityId,
  onEditContentDone,
  setEditingEntityId,
}) => {
  const isEditing = id === editEntityId;

  return (
    <Draggable draggableId={id} index={order}>
      {(provided, snapshot) => {
        return (
          <EntityContainer
            ref={provided.innerRef}
            entitiesDirection={entitiesDirection}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {isEditing ? (
              <Formik
                initialValues={{ content }}
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    onEditContentDone?.(id, values.content);
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({ isSubmitting }) => (
                  <Form
                    className={css`
                      width: 100%;
                      display: flex;
                      justify-content: center;
                    `}
                  >
                    <Field
                      className={css({
                        width: "100%",
                        fontFamily: "Open Sans",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                        fontWeight: 600,
                        color: COLOR.secondary,
                        border: `thin solid ${COLOR.neutralGrey28}`,
                        borderRadius: rem(4),
                      })}
                      name='content'
                    />
                    <Button
                      appearance='link'
                      className={css`
                        overflow: visible;
                      `}
                      isDisabled={isSubmitting}
                      size='SMALL'
                      theme='secondary'
                      type='submit'
                    >
                      <Icon icon='CHECKMARK' size='SMALL' />
                    </Button>
                  </Form>
                )}
              </Formik>
            ) : (
              <Header variant='H6'>{content}</Header>
            )}
            {!isEditing && (
              <StyledIconContainer
                className='edit-icon'
                {...pointerHandlers(() => setEditingEntityId?.(id))}
              >
                <Icon icon='EDIT' size='SMALL' />
              </StyledIconContainer>
            )}
          </EntityContainer>
        );
      }}
    </Draggable>
  );
};

const StyledIconContainer = styled.div<{ isEditing?: boolean }>(
  ({ isEditing }) => ({
    display: "none",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    padding: rem(8, 12),
    color: COLOR.neutralGrey28,
    cursor: "pointer",
    alignItems: "center",

    ":active": {
      color: isEditing ? COLOR.primary : COLOR.black,
    },
  })
);
