import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import * as R from 'remeda';

import { ActionsFactory } from '../../core/factory';
import { apis } from '../../apis';
import { setKeyPair } from './keypair-store';
import { AuthorizeDto, ProfileDto, UpdateUserDto } from '../../../rxjs-api';
import { signOut } from './auth';
import { BcRolesType } from '../../../rxjs-api';
export const USER_STATE_KEY = 'user';

// We don't define any 'get' actions as they don't update state - use redux selectors instead
const USER_ACTIONS = ['LOGIN', 'LOGOUT', 'UPDATE_ACCOUNT', 'DELETE_ACCOUNT', 'VALIDATE', 'LOAD_USER'] as const;
const initialState: Pick<
  ProfileDto,
  'username' | 'firstName' | 'lastName' | '_id' | 'phoneNumber' | 'imageSrc' | 'email' | 'role' | 'sharedCount' | 'sharesCount' | 'likesCount'
> = {
  username: '',
  firstName: '',
  lastName: '',
  _id: '',
  phoneNumber: '',
  imageSrc: '',
  email: '',
  role: BcRolesType.Guest,
  sharedCount: 0,
  likesCount: 0,
  sharesCount: 0,
};

const pickUser = (user: ProfileDto) =>
  R.pick(user, ['username', 'email', '_id', 'firstName', 'lastName', 'phoneNumber', 'imageSrc', 'role', 'sharedCount', 'likesCount', 'sharesCount']);
export const UserActions = ActionsFactory(USER_ACTIONS, initialState);

export const loginAction = createAsyncThunk(UserActions.login.type, async (authorizeDto: AuthorizeDto) => {
  const response = await apis.user.userControllerAuthorize({ authorizeDto }).toPromise();

  return response;
});

export const loadUser = createAsyncThunk(UserActions.loadUser.type, async () => {
  const req = apis.user.userControllerGetUser();
  const user = await req.toPromise();
  return user;
});

export const updateAccount = createAsyncThunk(
  UserActions.updateAccount.type,
  async ({ updateUserDto, userId }: { updateUserDto: UpdateUserDto; userId?: string }) => {
    const req = userId ? apis.users.usersControllerUpdate({ userId, updateUserDto }) : apis.user.userControllerUpdate({ updateUserDto });
    const user = await req.toPromise();
    return user;
  }
);

export const logout = createAsyncThunk(UserActions.logout.type, async () => {
  const response = await apis.user.userControllerLogout().toPromise();
  await setKeyPair('token', '');
  const signout = await signOut();
  console.log(signout);
  return response;
});

const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(loginAction.fulfilled, (state, action) => {
      return { ...state, ...pickUser(action.payload) };
    })
    .addCase(updateAccount.fulfilled, (state, action) => {
      const { firstName, lastName, phoneNumber, email, imageSrc } = action.payload;
      return { ...state, firstName, lastName, phoneNumber, email, imageSrc };
    })
    .addCase(loadUser.fulfilled, (state, action) => {
      return { ...state, ...pickUser({ ...action.payload }) };
    })
    .addCase(loginAction.pending, (state) => {
      return { ...state };
    })
    .addCase(loginAction.rejected, (state, action) => {
      console.log('error: ', action);
      return { ...state };
    })

    .addCase(logout.fulfilled, () => {
      return initialState;
    })
    .addCase(logout.pending, (state) => {
      return { ...state };
    })
    .addCase(logout.rejected, (state, action) => {
      console.log('error: ', action);
      return { ...state };
    })
);

export { userReducer };
