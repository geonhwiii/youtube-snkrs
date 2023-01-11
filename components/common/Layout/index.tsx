import Navbar from '@/components/molecules/Navbar';
import {PropsWithChildren} from 'react';

type Props = PropsWithChildren;

export default function Layout({children}: Props) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
