import * as React from 'react';
import { Container, Content, View, Text, Button, Icon, List, CardItem } from 'native-base';
import { MediaListItem } from '../../components/layout/MediaListItem';
import { routeConfig } from '../../routes';

import { useDispatch } from 'react-redux';
import { getMediaItemById, selectMediaItem } from '../../state/modules/media-items/index';

import { MediaItem } from '../../rxjs-api';

export interface LibraryProps {
  navigation: any;
  list: any;
}

export interface LibraryState {}
const Library = ({ navigation, list }: { navigation: any; list: MediaItem[] }) => {
  const dispatch = useDispatch();

  const viewItem = async function (item: MediaItem) {
    dispatch(getMediaItemById(item.uri));
    dispatch(selectMediaItem(item));
    navigation.navigate(routeConfig.libraryItemDetail.name);
  };

  return (
    <View>
      <List>
        {/* <ListItemGroup key={'group1'} text={'Group 1'} /> */}
        {list.map((item, idx) => {
          const { title, description, thumbnail } = item;
          return <MediaListItem key={`item-${idx}`} title={title} description={description} image={thumbnail} onViewDetail={() => viewItem(list[idx])} />;
        })}
        {/* <ListItemGroup key={'group2'} text={'Group 2'} /> */}
      </List>
    </View>
  );
};

export default Library;
