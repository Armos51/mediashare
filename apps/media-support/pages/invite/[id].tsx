import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Amplify, Auth } from 'aws-amplify';
import awsMobile from '../aws.export';
import '@aws-amplify/ui-react/styles.css';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, TextField, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

Amplify.configure({
  ...awsMobile,
  Analytics: {
    disabled: true,
  },
});

interface IFromInput {
  username: string;
  password: string;
  email: string;
  code: string;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  //   data:{
  // author: "testUser"
  // authorId: "62dd71ea71312cea47f85130"
  // authorImage: "https://res.cloudinary.com/baansaowanee/image/upload/v1632212064/default_avatar_lt0il8.jpg"
  // authorName: null
  // email: "mimrachapol@gmail.com"
  // imageSrc: "https://res.cloudinary.com/baansaowanee/image/upload/v1632212064/default_avatar_lt0il8.jpg"
  // role: "subscriber"
  // username: "testUser"
  // _id: "62dd71ea71312cea47f85130"}

  async function createConnection(data: IFromInput) {
    try {
      const { username, email } = data;
      const {
        data: { _id },
      } = await axios.post(
        'http://localhost:5000/api/user/invite',
        { username, email },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );

      await axios.post(
        'http://localhost:5000/api/user-connection',
        { userId: _id, connectionId: id },
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
        }
      );

      router.push('/success');
    } catch (error) {
      throw error;
    }
  }

  async function signUp(data: IFromInput) {
    try {
      const { username, password, email } = data;
      await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      createConnection(data);
    } catch (error) {
      throw error;
    }
  }

  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState<String>('');
  const [showCode, setShowCode] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFromInput>();

  async function confirmSignUp(data: IFromInput) {
    try {
      const { username, code } = data;
      await Auth.confirmSignUp(username, code);
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  const onSubmit: SubmitHandler<IFromInput> = async (data: any) => {
    try {
      if (showCode) {
        confirmSignUp(data);
        console.log('go to home');
      } else {
        await signUp(data);
        setShowCode(true);
      }
    } catch (error) {
      setOpen(true);
      setErrorMessage(`${error}`);
      console.log('error confirming sign up', error);
    }
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: '100%',
            flex: 1,
            maxWidth: '500px',
            margin: '0 auto',
            padding: '0em 1em',
          }}
        >
          <h1 style={{ textAlign: 'center' }}>Sing Up</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <TextField
              sx={{ input: { color: '#000', backgroundColor: '#fff', borderRadius: '5px' } }}
              id="username"
              type="text"
              label="Username"
              variant="filled"
              error={errors.username ? true : false}
              helperText={errors.username ? errors.username.message : null}
              {...register('username', { required: { value: true, message: 'Please enter username' } })}
            />

            <TextField
              sx={{ input: { color: '#000', backgroundColor: '#fff', borderRadius: '5px' } }}
              id="password"
              type="password"
              label="Password"
              variant="filled"
              error={errors.password ? true : false}
              helperText={errors.password ? errors.password.message : null}
              {...register('password', {
                required: { value: true, message: 'Please enter your password' },
                minLength: {
                  value: 8,
                  message: 'Please enter a strong password',
                },
              })}
            />

            <TextField
              sx={{ input: { color: '#000', backgroundColor: '#fff', borderRadius: '5px' } }}
              id="email"
              type="email"
              label="Email"
              variant="filled"
              error={errors.email ? true : false}
              helperText={errors.email ? errors.email.message : null}
              {...register('email', { required: { value: true, message: 'Please enter your email' } })}
            />

            {showCode && (
              <TextField
                sx={{ input: { color: '#000', backgroundColor: '#fff', borderRadius: '5px' } }}
                id="code"
                type="text"
                label="Verification code"
                variant="filled"
                error={errors.code ? true : false}
                helperText={errors.code ? errors.code.message : null}
                {...register('code', {
                  required: { value: true, message: 'Please enter code' },
                  minLength: {
                    value: 6,
                    message: 'Your verification is 6 character long.',
                  },
                })}
              />
            )}

            <Button variant="contained" type="submit">
              {showCode ? 'Confirm code' : 'Sing up'}
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {errorMessage}
              </Alert>
            </Snackbar>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
