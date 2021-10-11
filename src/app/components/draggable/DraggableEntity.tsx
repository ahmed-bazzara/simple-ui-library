import React from 'react';
import styled from '@emotion/styled';
import { Draggable } from 'react-beautiful-dnd';
import { COLOR, ELEVATION } from 'app/constants';
import { pointerHandlers, rem } from 'utilities';
import { Button, Header, Icon } from 'app/components';
import { css } from '@emotion/css';
import { Field, Form, Formik } from 'formik';

export interface DragabbleEntityType {
  id: string;
  content: string;
  isEditing?: boolean;
}

interface DraggableEntityProps extends DragabbleEntityType {
  order: number;
  entitiesDirection: 'vertical' | 'horizontal';
  onEditContent?: (entityId: string, content: string) => void;
  onSetConetntEditing?: (entityId: string, isEdting?: boolean) => void;
}

const EntityContainer = styled.div<
Pick<DraggableEntityProps, 'entitiesDirection'> & { isDragging: boolean }
>(({ entitiesDirection, isDragging }) => ({
  label: 'EntityContainer',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: rem(16, 24),
  border: isDragging
    ? `${rem(1)} solid ${COLOR.primary}`
    : `${rem(1)} solid ${COLOR.neutralGrey10}`,
  borderRadius: rem(8),
  backgroundColor: COLOR.neutralWhite,

  ...(entitiesDirection === 'horizontal' && {
    marginRight: rem(8),
    ':last-of-type': {
      marginRight: 0,
    },
  }),
  ...(entitiesDirection === 'vertical' && {
    marginBottom: rem(8),
    ':last-of-type': {
      marginBottom: 0,
    },
  }),
  ...(!!isDragging && {
    boxShadow: ELEVATION[6],
  }),

  ':hover': {
    '.edit-icon' : {
      display: 'block',
    },
  },
}));

export const DraggableEntity: React.FC<DraggableEntityProps> = ({
  id,
  content,
  order,
  entitiesDirection,
  onEditContent,
  isEditing,
  onSetConetntEditing,
}) => {
  // const [isEditing, setIsEditing] = useState(false);
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
          {/* <Header onClick={() => onChangeTicketContent(id)} variant="H6"> */}
          {isEditing ? (
            <Formik
            initialValues={{ content }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                onEditContent?.(id, values.content);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={css`width: 100%; display: flex; justify-content: center;`}>
                <Field className={css`width: 100%;`} name="content" />
                <Button
                  appearance="link"
                  className={css`overflow:visible;`}
                  isDisabled={isSubmitting}
                  size="SMALL"
                  type="submit"
                >
                  <Icon icon="CHECKMARK" size="SMALL" />
                </Button>
              </Form>
            )}
          </Formik>
          ) : (
            <Header variant="H6">
              {content}
            </Header>
          )}
          {!isEditing && (
            <StyledIconContainer className="edit-icon" {...pointerHandlers(() => onSetConetntEditing?.(id))}>
              <Icon icon="EDIT" size="SMALL" />
            </StyledIconContainer>
          )}
          {/* <StyledIcon className={cx('edit-icon', css`color: ${COLOR.neutralGrey28}; display: none;`)} icon="EDIT" size="SMALL" /> */}
        </EntityContainer>
        );
      }}
    </Draggable>
  );
};

const StyledIconContainer = styled.div<{ isEditing?: boolean }>(({ isEditing }) => ({
  display: 'none',
  position: 'absolute',
  top: 0,
  right: 0,
  padding: rem(8, 12),
  color: COLOR.neutralGrey28,
  cursor: 'pointer',
  
  ':active': {
    color: isEditing ? COLOR.primary : COLOR.black,
  },
}));
