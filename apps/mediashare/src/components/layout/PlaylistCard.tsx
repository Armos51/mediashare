import React from 'react';

import { MediaCard } from './MediaCard';
import { ActionSheet } from 'native-base';

export interface PlaylistCardProps {
  navigation?: any;
  showSocial?: any;
  buttons?: any;
  title?: string;
  author?: string;
  description?: string;
  showActions?: boolean;
  showThumbnail?: boolean;
  onEditClicked?: () => void;
  onDeleteClicked?: () => void;
  isEdit?: boolean;
  category: string;
}

const mediaCardButtons = ['Edit', 'Delete', 'Cancel'];
const destructive_idx = 1;
const cancel_idx = 2;

export const PlaylistCard: React.FC<PlaylistCardProps> = (props) => {
  const {
    navigation,
    title,
    author,
    description,
    buttons,
    children,
    isEdit = false,
    showActions = false,
    showSocial = false,
    showThumbnail = false,
    onEditClicked = () => {},
    onDeleteClicked = () => {},
    category = '',
  } = props;

  const showCardMenu = () => {
    ActionSheet.show(
      {
        options: mediaCardButtons,
        cancelButtonIndex: cancel_idx,
        destructiveButtonIndex: destructive_idx,
      },
      (buttonIdx) => {
        switch (buttonIdx) {
          case 0:
            onEditClicked();
            break;
          case 1:
            onDeleteClicked();
            break;
        }
      }
    );
  };

  return (
    <MediaCard
      title={title}
      author={author}
      description={description}
      buttons={buttons}
      children={children}
      showActions={showActions}
      showSocial={showSocial}
      showThumbnail={showThumbnail}
      onActionsClicked={showCardMenu}
      isEdit={isEdit}
      category={category}
    />
  );
};
