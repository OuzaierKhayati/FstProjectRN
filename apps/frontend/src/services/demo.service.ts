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
