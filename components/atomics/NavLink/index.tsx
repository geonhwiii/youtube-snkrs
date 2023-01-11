import Link from 'next/link';
import {useRouter} from 'next/router';
import tw from 'twin.macro';

type Props = {
  readonly to: string;
  readonly name: string;
};

export default function NavLink({to, name}: Props) {
  const {pathname} = useRouter();
  return (
    <li
      css={[
        tw`inline-block [font-size: 18px] mx-5 after:[content: ''] [line-height: 54px] after:block after:[box-shadow: inset 0 -2px 0 0 #111] after:transition-opacity after:h-1 hover:after:opacity-100 after:opacity-0`,
        pathname === to && tw`after:opacity-100`,
      ]}
    >
      <Link css={tw`inline-block h-full`} href={to}>
        {name}
      </Link>
    </li>
  );
}
