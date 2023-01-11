import Snkrs from '@/assets/icons/snkrs.svg';
import Grid from '@/assets/icons/grid.svg';
import Link from 'next/link';
import tw from 'twin.macro';
import {Routes} from '@/constants/routes';
import NavLink from '@/components/atomics/NavLink';

export function FeedHeader() {
  return (
    <div css={tw`[box-shadow: inset 0 -1px 0 0 #e5e5e5]`}>
      <div css={tw`w-full [max-width: 1920px] mx-auto [height: 57px] align-middle`}>
        <div css={tw`h-full flex justify-between items-center`}>
          <div css={tw`px-7`}>
            <Link href={Routes.HOME}>
              <Snkrs />
            </Link>
          </div>
          <nav>
            <ul>
              <NavLink to={Routes.HOME} name={'Feed'} />
              <NavLink to={Routes.INSTOCK} name={'In Stock'} />
              <NavLink to={Routes.UPCOMING} name={'Upcoming'} />
            </ul>
          </nav>
          <div css={tw`px-7`}>
            <Grid />
          </div>
        </div>
      </div>
    </div>
  );
}
