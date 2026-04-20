import { type ReactNode } from 'react';
import styles from './Page.module.scss';

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};

export default Page;
