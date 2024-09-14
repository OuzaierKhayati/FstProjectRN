<<<<<<< HEAD
import { axiosInstance } from './api.service';

export const getDemo = async ({
  throwError,
}: {
  throwError?: boolean;
} = {}): Promise<{
  message: string;
}> => {
  return axiosInstance
    .get('/demo', {
      params: {
        throwError,
      },
    })
    .then((res) => res.data);
};
=======
import { axiosInstance } from './api.service';

export const getDemo = async ({
  throwError,
}: {
  throwError?: boolean;
} = {}): Promise<{
  message: string;
}> => {
  return axiosInstance
    .get('/demo', {
      params: {
        throwError,
      },
    })
    .then((res) => res.data);
};
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
