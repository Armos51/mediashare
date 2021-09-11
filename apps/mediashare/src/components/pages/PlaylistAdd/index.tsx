import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Content } from 'native-base';

import { useGoBack, useRouteName, useRouteWithParams } from '../../../hooks/NavigationHooks';

import { ROUTES } from '../../../routes';

import { useAppSelector } from '../../../state';
import { findMediaItems } from '../../../state/modules/media-items';
import { addUserPlaylist, findUserPlaylists } from '../../../state/modules/playlists';

import { ActionButtons } from '../../layout/ActionButtons';
import { MediaCard } from '../../layout/MediaCard';
import { MediaList, MediaListType } from '../../layout/MediaList';

import { CreatePlaylistDto, CreatePlaylistDtoCategoryEnum } from '../../../rxjs-api';

import styles from '../../../styles';

interface PlaylistAddContainerProps {
  children: ReactNode;
}

function PlaylistAddContainer({}: PlaylistAddContainerProps) {
  const author = useAppSelector((state) => state?.user.username);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState(CreatePlaylistDtoCategoryEnum.Builder);
  const [loaded, setLoaded] = useState(false);

  const [selected, setSelected] = useState([]);
  const goBack = useGoBack();

  const clearAndGoBack = function () {
    setTitle('');
    setCategory(CreatePlaylistDtoCategoryEnum.Builder);
    setDescription('');
    setLoaded(false);
    goBack();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const goToItem = useRouteWithParams(ROUTES.mediaItemDetail);
  const goToPlaylists = useRouteName(ROUTES.playlists);

  const actionLabel = 'Save';
  const cancelLabel = 'Cancel';
  const cancelCb = clearAndGoBack;

  const dispatch = useDispatch();

  const onMediaItemClick = (e) => {
    goToItem({ mediaId: e._id });
  };

  const onTitleChange = setTitle;
  const onDescriptionChange = setDescription;
  const onCategoryChange = setCategory;

  const updateSelection = function (bool: boolean, item: MediaListType) {
    const filtered = bool ? selected.concat([item._id]) : selected.filter((key) => key !== item._id);
    setSelected(filtered);
    console.log(item, filtered);
  };
  const options = [];
  for (const value in CreatePlaylistDtoCategoryEnum) {
    options.push(value);
  }
  const list = useAppSelector((state) => state.mediaItems.mediaItems);

  useEffect(() => {
    console.log('run');
    if (!loaded) {
      dispatch(findMediaItems());
      setLoaded(true);
    }
  }, [loaded, dispatch]);

  const saveItem = async function () {
    const dto: CreatePlaylistDto = {
      title,
      category: category,
      description,
      mediaIds: selected,
      createdBy: '',
    };
    console.log(dto);
    // const res = await dispatch(addUserPlaylist(dto));
    await dispatch(addUserPlaylist(dto));
    await dispatch(findUserPlaylists({}));

    // const item = res as any;
    // goToItem({ playlistId: item.payload.playlist._id });
    goToPlaylists();
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    <Container style={styles.container}>
      <MediaCard
        title={title}
        author={author}
        description={description}
        category={category}
        categoryOptions={options}
        onCategoryChange={onCategoryChange as any}
        onTitleChange={onTitleChange}
        onDescriptionChange={onDescriptionChange}
        isEdit={true}
      />
      <Content>
        <MediaList
          isSelectable={true}
          list={list}
          showThumbnail={true}
          onViewDetail={onMediaItemClick}
          addItem={(item) => updateSelection(true, item)}
          removeItem={(item) => updateSelection(false, item)}
        />
      </Content>
      <ActionButtons rightIcon={'check-bold'} actionCb={() => saveItem()} cancelCb={cancelCb} actionLabel={actionLabel} cancelLabel={cancelLabel} />
    </Container>
  );
}

export default PlaylistAddContainer;
