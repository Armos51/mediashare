import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../routes';

import { useAppSelector } from '../../state';
import { findUserPlaylists } from '../../state/modules/playlists';
import { PlaylistResponseDto } from '../../api';

import { useRouteWithParams } from '../../hooks/NavigationHooks';
import { useSpinner } from '../../hooks/useSpinner';

import { withLoadingSpinner } from '../hoc/withLoadingSpinner';

import { ScrollView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { List } from 'react-native-paper';

import { PageContainer, PageProps } from '../layout/PageContainer';
import { MediaListItem } from '../layout/MediaListItem';
import { PlaylistCard } from '../layout/PlaylistCard';

/* export function mapPlaylists(playlist: PlaylistResponseDto[]) {
  const list = playlist.map((item) => {
    const keyed = {
      id: item._id,
      title: item.title,
      description: `${item?.mediaItems?.length || 0} Videos`,
      key: item._id,
      ...item,
    };
    return keyed;
  });
  return list;
} */

export interface ExploreProps {
  list: PlaylistResponseDto[];
  onViewDetailClicked: Function;
}

export const ExploreArticlesComponent = ({ onViewDetailClicked, list = [] }: ExploreProps) => {
  let sortedList = list.map((item) => item);
  sortedList.sort((dtoA, dtoB) => (dtoA.title > dtoB.title ? 1 : -1));
  sortedList = sortedList.filter((item) => item.mediaIds.length > 0);

  return (
    <View>
      <List.Section>
        <List.Subheader>Latest Articles</List.Subheader>
        {sortedList.slice(0, 1).map((item) => {
          const { title, description } = item;
          return (
            <View style={{ padding: 15, paddingTop: 0 }}>
              <PlaylistCard title={title} author={'Admin'} description={description} category={''} showSocial={true} showActions={false} showThumbnail={true} />
            </View>
          );
        })}
      </List.Section>
    </View>
  );
};

export const ExplorePlaylistsComponent = ({ onViewDetailClicked, list = [] }: ExploreProps) => {
  let sortedList = list.map((item) => item);
  sortedList.sort((dtoA, dtoB) => (dtoA.title > dtoB.title ? 1 : -1));
  sortedList = sortedList.filter((item) => item.mediaIds.length > 0);

  return (
    <View>
      <List.Section>
        <List.Subheader>Playlists by Adam Fehr</List.Subheader>
        {sortedList.slice(0, 1).map((item) => {
          const { title, mediaIds } = item;
          return (
            <MediaListItem
              key={`user_${item._id}`}
              title={title}
              selectable={false}
              showThumbnail={true}
              description={`${mediaIds.length || 0} videos`}
              onViewDetail={() => {
                onViewDetailClicked(item);
              }}
            />
          );
        })}
      </List.Section>

      <List.Section>
        <List.Subheader>Popular</List.Subheader>
        {sortedList.slice(2, 5).map((item) => {
          const { title, mediaIds } = item;
          return (
            <MediaListItem
              key={`popular_${item._id}`}
              title={title}
              selectable={false}
              showThumbnail={true}
              description={`${mediaIds.length || 0} videos`}
              onViewDetail={() => {
                onViewDetailClicked(item);
              }}
            />
          );
        })}
      </List.Section>
    </View>
  );
};

export const Explore = ({ navigation }: PageProps) => {
  // Set up the loader
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const [loaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ AppSpinner, isLoading, endLoad, startLoad }] = useSpinner({ loadingState: true });
  const loadData = async function () {
    await dispatch(findUserPlaylists({}));
  };
  // Do other stuff

  const viewPlaylistAction = useRouteWithParams(ROUTES.sharedPlaylistDetail);

  const playlists = useAppSelector((state) => state.playlists);

  // Load our data right before rendering
  useEffect(() => {
    if (!loaded) {
      loadData().then(() => setIsLoaded(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  return (
    <PageContainer>
      <Searchbar style={{ marginBottom: 15 }} placeholder="" value={''} />
      <ScrollView>
        <ExploreArticlesComponent list={playlists.userPlaylists} onViewDetailClicked={(item) => viewPlaylistAction({ playlistId: item._id })} />
      </ScrollView>
      <ScrollView>
        <ExplorePlaylistsComponent list={playlists.userPlaylists} onViewDetailClicked={(item) => viewPlaylistAction({ playlistId: item._id })} />
      </ScrollView>
    </PageContainer>
  );
};

export default withLoadingSpinner(Explore);
