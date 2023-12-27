import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const fetchUser = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  return await response.json();
};

//데이터목록 호출 커스텀훅
export const useUserQuery = () => {
  return useQuery(['users'], fetchUser, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    cacheTime: 1000 * 20,
    staleTime: 1000 * 0,
  });
};

//기존 서버데이터 update 함수
export const updateUser = async ([userName, num]) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${num}`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        name: userName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};

//데이터 변경 커스텀훅
export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUser, {
    onSuccess: (args) => {
      queryClient.setQueryData(['users', args.id], args);
    },
  });
};
