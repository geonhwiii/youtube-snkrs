import Link from 'next/link';
import tw from 'twin.macro';
type Props = {};

export default function Navbar({}: Props) {
  return (
    <header>
      <div css={tw`m-0 p-0 align-baseline`}>
        <section css={tw`[font-size: 12px] [box-shadow: inset 0 -1px 0 0 #e5e5e5]`}>
          <div css={tw`w-full [max-width: 1920px] h-10 mx-auto flex items-center justify-between`}>
            <div css={tw`px-7 py-2`}>
              <Link href={'https://www.nike.com/kr'} css={tw`font-light text-gray-900`}>{`Visit Nike.com`}</Link>
            </div>
            <div css={tw`px-3 py-2`}>
              <Link href={'https://www.nike.com/kr'} css={tw`font-light text-gray-900 hover:text-black`}>{`멤버 가입하기 / 로그인`}</Link>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
