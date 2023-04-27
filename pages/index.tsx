import Head from 'next/head'
import Home from '@/component/pages/home'
import getMenu from '@/utils/api-call/getMenu'

type Menu = {
  id: number
  image: string
  category: string
  param: string
}[]

type Props = {
  menu: Menu
}

export default function Homepage({menu}: Props) {
  return (
    <>
      <Head>
        <title>kurberbing</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/burger.svg" />
      </Head>
      <Home menu={menu} />
    </>
  )
}

export async function getStaticProps() {
  const menu: Menu = await getMenu()
  return {
    props: {
      menu
    }
  }
}
