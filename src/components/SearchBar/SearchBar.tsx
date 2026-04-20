import styles from './SearchBar.module.scss';
import Button from '../Button/Button';
import { useRef, useEffect } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useSearchParams } from 'react-router';

interface ISearch {
  name?: string;
  id?: string;
  hasError?: boolean;
  onSubmit: (text: string) => void;
}

interface FormFields {
  username: HTMLInputElement;
}

const SearchBar = ({
  hasError,
  onSubmit,
  name = 'search-form',
  id = 'search-form',
}: ISearch) => {

  const [searchParams, setSearchParams] = useSearchParams();

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();
    const value = e.currentTarget.username.value;
    if (value) {
      setSearchParams({ user: value });
      onSubmit(value);
    }
  };

  // load search params
  useEffect(() => {
    const value = searchParams.get('user');
    if (value) {
      onSubmit(value);
      if (inputRef.current) {
        inputRef.current.value = value;
      }
    }
  }, []);

  // focus
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      autoComplete="off"
      className={styles.form}
      onSubmit={handleSubmit}
      name={name}
      id={id}
    >
      <label className={styles.label} htmlFor="search">
        {<IoSearchOutline />}
      </label>
      <input
        className={styles.textField}
        ref={inputRef}
        type="search"
        id="search"
        name="username"
        placeholder="Enter GitHub user"
      />
      {hasError && <span className={styles.error}>Not found!</span>}
      <Button style={{ marginRight: 6 }} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
