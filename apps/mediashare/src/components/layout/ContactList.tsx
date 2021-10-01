import React from 'react';
import { List } from 'native-base';
import { UserDto } from '../../rxjs-api';
import { ListItemGroup } from './ListItemGroup';
import { MediaListItem } from './MediaListItem';
import { getUserFullName } from '../../utils';

export interface ContactListProps {
  navigation?: any;
  contacts?: UserDto[];
  showGroups?: boolean;
  showActions?: boolean;
  selectable?: boolean;
  onChecked?: (b, u) => void;
  listItemProps?: any;
}

export const ContactList: React.FC<ContactListProps> = ({
  contacts = [],
  showGroups = false,
  showActions = false,
  selectable = false,
  onChecked = () => {},
  listItemProps = {},
}) => {
  return (
    <List>
      {showGroups && <ListItemGroup key={'all'} text={'All Contacts'} />}
      {contacts.map((contact) => {
        const { _id, username = '', email = '', imageSrc = '' } = contact;
        const fullName = getUserFullName(contact);

        return (
          <MediaListItem
            key={`user_${_id}`}
            title={fullName}
            description={`${username} <${email}>`}
            showThumbnail={true}
            image={imageSrc}
            showActions={showActions}
            selectable={selectable}
            onChecked={(b) => onChecked(b, contact)}
            {...listItemProps}
          />
        );
      })}
    </List>
  );
};
