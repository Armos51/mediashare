import * as DocumentPicker from 'expo-document-picker';

import { Button, CardItem, Col, Container, Fab, Icon, Text, View } from 'native-base';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';
import { MediaCard } from '../../components/layout/MediaCard';
import { useGoBack, useRouteWithParams } from '../../hooks/NavigationHooks';
import { ROUTES } from '../../routes';
import { CreatePlaylistDtoCategoryEnum } from '../../rxjs-api';
import styles from '../../screens/Home/styles';
import { useAppSelector } from '../../state';
import { CreateMediaItemDtoCategoryEnum, CreateMediaItemDto } from '../../rxjs-api/models/CreateMediaItemDto';
import ActionButtons from '../../components/layout/ActionButtons';
import { addMediaItem, createThumbnail } from '../../state/modules/media-items/index';

export const AddMediaContainer = () => {
  const dispatch = useDispatch();
  const author = useAppSelector((state) => state?.user.username);
  const [title, setTitle] = useState('Title');
  const [description, setDescription] = useState('Description');
  const [category, setCategory] = useState(CreateMediaItemDtoCategoryEnum.Endurance);
  const [documentUri, setDocumentUri] = useState('');
  const [thumbnail, setThumnail] = useState(null);
  const mediaSrc = useAppSelector((state) => state.mediaItem.getMediaItem);
  const goBack = useGoBack();

  const clearAndGoBack = () => {
    setTitle('Title');
    setCategory(CreateMediaItemDtoCategoryEnum.Endurance);
    setDescription('Description');
    setThumnail('');
    goBack();
  };
  const options = [];
  for (const value in CreatePlaylistDtoCategoryEnum) {
    options.push(value);
  }

  const goToItem = useRouteWithParams(ROUTES.libraryItemDetail);
  const onTitleChange = setTitle;
  const onDescriptionChange = setDescription;
  const onCategoryChange = setCategory;

  const actionLabel = 'Save';
  const cancelLabel = 'Cancel';
  const cancelCb = clearAndGoBack;

  async function getDocument() {
    const document = (await DocumentPicker.getDocumentAsync({ type: 'video/mp4' })) as any;
    if (!document) {
      return;
    }
    setDocumentUri(document?.uri || '');
    dispatch(createThumbnail({ key: document.name, fileUri: document.uri }));
  }
  const { getMediaItem } = useAppSelector((state) => state.mediaItem);
  const saveItem = async function () {
    const dto: CreateMediaItemDto = {
      title,
      category: CreatePlaylistDtoCategoryEnum[category],
      description,
      summary: '',
      isPlayable: true,
      uri: documentUri,
      thumbnail: '',
      key: title,
      eTag: '',
    };
    const res = await dispatch(addMediaItem(dto));
    const item = res as any;

    setCategory(CreateMediaItemDtoCategoryEnum.Endurance);
    setDescription('Description');
    setThumnail('');
    goToItem({ mediaId: item.payload._id, uri: item.payload.uri });
  };

  return (
    <Container style={styles.container}>
      <View padder>
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
        >
          <CardItem button onPress={getDocument} cardBody>
            {mediaSrc ? (
              <Image source={{ uri: mediaSrc }} style={{ width: '100%', height: 300 }} />
            ) : (
              <Button bordered style={{ width: '100%', height: 300 }} hasText={true} onPress={getDocument} full={true}>
                <Icon name="cloud-upload-outline" />
                <Text style={{ textAlign: 'center' }}>Upload</Text>
              </Button>
            )}
          </CardItem>
        </MediaCard>
        <ActionButtons actionCb={() => saveItem()} cancelCb={cancelCb} actionLabel={actionLabel} cancelLabel={cancelLabel} />
      </View>
    </Container>
  );
};
