import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Image, Keyboard, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Button, CardItem, Icon, Text } from 'native-base';
import * as DocumentPicker from 'expo-document-picker';

import { ROUTES } from '../../../routes';

import { useGoBack, useRouteWithParams } from '../../../hooks/NavigationHooks';

import { useAppSelector } from '../../../state';
import { addMediaItem, createThumbnail } from '../../../state/modules/media-items';

import { ActionButtons } from '../../layout/ActionButtons';
import { MediaCard } from '../../layout/MediaCard';

import { CreateMediaItemDto, CreateMediaItemDtoCategoryEnum, CreatePlaylistDtoCategoryEnum } from '../../../rxjs-api';
import PageContainer from '../../layout/PageContainer';
import { categoryValidator, descriptionValidator, titleValidator } from '../../layout/formConfig';
import { minLength } from '../../../lib/Validators';
import { useSpinner, SPINNER_DEFAULTS } from '../../../hooks/useSpinner';

export const AddMediaContainer = () => {
  const dispatch = useDispatch();
  const author = useAppSelector((state) => state?.user.username);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(CreateMediaItemDtoCategoryEnum.Endurance);
  const [documentUri, setDocumentUri] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const mediaSrc =
    useAppSelector((state) => state.mediaItem.getMediaItem) ||
    'https://mediashare0079445c24114369af875159b71aee1c04439-dev.s3.us-west-2.amazonaws.com/public/temp/background-comp.jpg';
  const goBack = useGoBack();
  const isValid = function () {
    const test = !titleValidator(title) && !descriptionValidator(description) && !categoryValidator(category) && !minLength(1)(documentUri);
    return test;
  };

  const clearAndGoBack = () => {
    setTitle('');
    setCategory(CreateMediaItemDtoCategoryEnum.Endurance);
    setDescription('');
    setThumbnail('');
    goBack();
  };
  const options = [];
  for (const value in CreateMediaItemDtoCategoryEnum) {
    options.push(value);
  }
  const [{ AppSpinner, isLoading, endLoad, startLoad }] = useSpinner({ ...SPINNER_DEFAULTS, loadingState: false });

  const goToItem = useRouteWithParams(ROUTES.mediaItemDetail);
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
    startLoad();

    await dispatch(createThumbnail({ key: document.name, fileUri: document.uri }));
    endLoad();
  }

  const saveItem = async function () {
    startLoad();
    const dto: CreateMediaItemDto = {
      title,
      category: CreatePlaylistDtoCategoryEnum[category],
      description,
      summary: '',
      isPlayable: true,
      uri: documentUri,
      thumbnail: thumbnail,
      key: title,
      eTag: '',
    };
    const res = await dispatch(addMediaItem(dto));
    const item = res as any;

    setCategory(CreateMediaItemDtoCategoryEnum.Endurance);
    setDescription('');
    setThumbnail('');
    endLoad();
    goToItem({ mediaId: item.payload._id, uri: item.payload.uri });
  };

  return (
    <PageContainer>
      <AppSpinner />
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
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
              <CardItem button onPress={getDocument} cardBody style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {documentUri ? (
                  <Image source={{ uri: mediaSrc }} style={{ height: 200, width: '100%' }} />
                ) : (
                  <Button bordered style={{ width: '100%' }} hasText={true} onPress={getDocument} full={true}>
                    <Icon name="cloud-upload-outline" />
                    <Text style={{ textAlign: 'center' }}>Upload</Text>
                  </Button>
                )}
              </CardItem>
            </MediaCard>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

      <ActionButtons
        actionCb={() => saveItem()}
        cancelCb={cancelCb}
        actionLabel={actionLabel}
        cancelLabel={cancelLabel}
        disableAction={!isValid()}
        rightIcon={'add'}
      />
    </PageContainer>
  );
};

export default AddMediaContainer;
