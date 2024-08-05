import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

type QueryResponse<T> =
  | {
      data: undefined;
      isSuccess: false;
      isLoading: true;
      isError: false;
      error: undefined;
    }
  | {
      data: undefined;
      isSuccess: false;
      isLoading: false;
      isError: true;
      error: Error;
    }
  | {
      data: T;
      isSuccess: true;
      isLoading: false;
      isError: false;
      error: undefined;
    };

const initialState: QueryResponse<undefined> = {
  data: undefined,
  isLoading: true,
  isError: false,
  isSuccess: false,
  error: undefined,
};

export const useQuery = <T>(requestFn: () => Promise<AxiosResponse<T, unknown> | undefined>): QueryResponse<T> => {
  const [apiResponse, setApiResponse] = useState<T | undefined>();
  const [query, setQuery] = useState<QueryResponse<T>>(initialState);

  useEffect(() => {
    (async () => {
      await requestFn()
        .then((res) => {
          setApiResponse(res?.data);
        })
        .catch((err) => setQuery({ isLoading: false, isSuccess: false, isError: true, data: undefined, error: err }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!apiResponse) return;

    setQuery({ isLoading: false, isSuccess: true, isError: false, data: apiResponse, error: undefined });
  }, [apiResponse]);

  return query;
};
