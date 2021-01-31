import { AppState } from '@redux/reducer'
import Head from 'next/head'
import { useSelector } from 'react-redux'

export const PageHead = (): JSX.Element => {
  const page_title = useSelector<AppState, string>((state) => state.page_title)

  return (
    <Head>
      <title>{page_title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <meta name="description" content="Truong Vinh Business Management" />
      <meta name="keywords" content="ReactJS, NextJS, Typescript, Tailwindcss" />
      <meta name="author" content="Trường Nguyễn" />
    </Head>
  )
}
