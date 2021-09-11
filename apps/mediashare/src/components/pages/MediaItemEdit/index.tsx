import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ActionSheet, Button, CardItem, Container, Icon, Text, View } from 'native-base';

import styles from '../../../styles';
import { useAppSelector } from '../../../state';
import {
  UpdateMediaItemDto,
  UpdateMediaItemDtoCategoryEnum
} from '../../../rxjs-api';
import { MediaCard } from '../../layout/MediaCard';
import { createThumbnail, getMediaItemById, updateMediaItem } from '../../../state/modules/media-items';
import { Image, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { ActionButtons } from '../../layout/ActionButtons';
import { useRouteWithParams } from '../../../hooks/NavigationHooks';
import { ROUTES } from '../../../routes';

export interface MediaItemEditProps {
  navigation: any;
  list: any;
}

export const MediaItemEdit = ({ navigation }: { navigation: any }) => {
  const options = [];
  for (const value in UpdateMediaItemDtoCategoryEnum) {
    options.push(value);
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    <MediaCard categoryOptions={options}>
      <View padder />
    </MediaCard>
  );
};

export interface MediaItemEditContainerProps {
  navigation: any;
  fetchList: Function;
  data: Object;
}

export interface MediaItemEditContainerState {}

const MediaItemEditContainer = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { mediaId, uri } = route?.params || {};
  const { mediaItem, loading, loaded } = useAppSelector((state) => state.mediaItem);
  const [isLoaded, setIsLoaded] = useState(loaded);
  const mediaItemSrc = useAppSelector((state) => state.mediaItem.mediaSrc);
  const { _id } = mediaItem || {};

  useEffect(() => {
    if (!isLoaded || _id !== mediaId) {
      dispatch(getMediaItemById({ uri, mediaId }));

      setIsLoaded(true);
    }
  }, [dispatch, isLoaded, uri, mediaId, _id]);

  const [title, setTitle] = useState(mediaItem?.title);
  const [description, setDescription] = useState(mediaItem?.description);
  const [category, setCategory] = useState();

  const [documentUri, setDocumentUri] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const goToItem = useRouteWithParams(ROUTES.mediaItemDetail);

  const options = [];
  for (const value in UpdateMediaItemDtoCategoryEnum) {
    options.push(value);
  }

  const saveMediaUpdates = async function () {
    /* const filtered = mediaItem.mediaIds.filter((id) => !selectedItems.includes(id));

    const result = await withIds(filtered);
    console.log(result);
    setLoaded(false);
    await loadData(); */
  };

  /* const onViewMediaItemClicked = useViewMediaItem();
  if (!mediaId || !loaded) {
    return <Text>Item not found</Text>;
  } */

  async function getDocument() {
    const document = (await DocumentPicker.getDocumentAsync({ type: 'video/mp4' })) as any;
    if (!document) {
      return;
    }
    setDocumentUri(document?.uri || '');
    dispatch(createThumbnail({ key: document.name, fileUri: document.uri }));
  }

  const author = '';

  const resetData = () => {};
  const cancelCb = () => {
    navigation.goBack();
    resetData();
  };
  const saveItem = async function () {
    const dto: UpdateMediaItemDto = {
      title,
      // category: CreatePlaylistDtoCategoryEnum[category],
      description,
      summary: '',
      isPlayable: true,
      uri: documentUri,
      thumbnail: thumbnail,
      // key: title,
      // eTag: '',
    };
    const res = await dispatch(updateMediaItem(dto));
    const item = res as any;

    // setCategory();
    setDescription('Description');
    setThumbnail('');
    goToItem({ mediaId: item.payload._id, uri: item.payload.uri });
  };
  const actionLabel = 'Save';
  const cancelLabel = 'Cancel';
  const showCardMenu = function (count: number) {
    ActionSheet.show(
      {
        options: ['Cancel', 'Remove'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
      },
      (buttonIdx) => {
        switch (buttonIdx) {
          case 0:
            console.log(1);
            break;
          case 1:
            saveMediaUpdates();
            break;
        }
      }
    );
  };
  if (!mediaItem) {
    return <Text>Loading</Text>;
  }
  return (
    <Container style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View padder>
            <MediaCard
              title={title}
              author={author}
              description={description}
              mediaSrc={mediaItemSrc}
              category={category}
              categoryOptions={options}
              onCategoryChange={(e: any) => {
                setCategory(e);
              }}
              onTitleChange={setTitle}
              onDescriptionChange={setDescription}
              isEdit={true}
            >
              <CardItem button onPress={getDocument} cardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {documentUri ? (
                  <Image source={{ uri: mediaItemSrc }} style={{ height: 200, width: '100%' }} />
                ) : (
                  <Button bordered style={{ width: '100%' }} hasText={true} onPress={getDocument} full={true}>
                    <Icon name="cloud-upload-outline" />
                    <Text style={{ textAlign: 'center' }}>Upload</Text>
                  </Button>
                )}
              </CardItem>
            </MediaCard>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <ActionButtons actionCb={() => saveItem()} cancelCb={cancelCb} actionLabel={actionLabel} cancelLabel={cancelLabel} />
    </Container>
  );
};

export default MediaItemEditContainer;
