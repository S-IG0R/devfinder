import './App.css';
import getUser from './api/api';

import { useQueryClient, useMutation } from '@tanstack/react-query';

import SearchBar from './components/SearchBar/SearchBar';
import Header from './components/Header/Header';
import Page from './components/Page/Page';
import UserCard from './components/UserCard/UserCard';
import Loader from './components/Loader/Loader';
import NotFound from './components/NotFound/NotFound';

import { remapUser } from './utils/remapUser';

const App = () => {
  const queryClient = useQueryClient();

  const { mutate, data, isPending, isError, isSuccess } = useMutation({
    mutationFn: getUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  const handleSubmit = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;
    mutate(trimmed);
  };

  return (
    <Page>
      <Header />
      <SearchBar onSubmit={handleSubmit} />
      {!isPending && isError && <NotFound />}
      {isPending && <Loader />}
      {isSuccess && data && <UserCard {...remapUser(data)} />}
    </Page>
  );
};

export default App;
