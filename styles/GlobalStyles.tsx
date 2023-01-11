import {Global} from '@emotion/react';
import tw, {css, GlobalStyles as BaseStyles} from 'twin.macro';

const customStyles = css({
  html: {
    ...tw`w-full`,
    ...tw`[font-size: 16px]`,
    ...tw`[line-height: 1.75]`,
    ...tw`[text-size-adjust: none]`,
    ...tw`antialiased`,
  },
  body: {
    ...tw`bg-white`,
    ...tw`w-full`,
    ...tw`antialiased`,
    ...tw`[word-break: keep-all]`,
    ...tw`[color: #111]`,
  },
  'html, body, #__next': {
    ...tw`min-h-full`,
    ...tw`[font-family:"Noto Sans KR","Arial Bold","Helvetica Neue",Helvetica,Arial,Dotum,Gulim,sans-serif]`,
  },
  '#__next': {
    ...tw`relative`,
  },
  '*': {
    ...tw`box-border`,
  },
  a: {
    ...tw`[color: inherit]`,
    ...tw`[text-decoration: non]`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

export default GlobalStyles;
