import Head from "next/head"
import Category from "@/component/pages/category"
import getCategoryItems from "@/utils/api-call/getCategoryItems"
import getMenu from "@/utils/api-call/getMenu"
import { useRouter } from "next/router"

type Item = {
  id: number
  img: string
  label: string
  price: number
}

type Items = Array<Item>

type Props = {
  items: Items
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[]
}

export default function CategoryPage({items, menu}: Props) {
  const router = useRouter()
  const { category } = router.query
  return (
    <>
      <Head>
        <title>{category}</title>
      </Head>
      <Category menu={menu} category={items} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = await getMenu()
  return {
    paths: paths.map((item) => {
      return { params: { category: item.param }}
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const [menu, items] = await Promise.all([
    getMenu(),
    getCategoryItems(params.category),
  ])

  return {
    props: {
      items,
      menu
    }
  }
}
