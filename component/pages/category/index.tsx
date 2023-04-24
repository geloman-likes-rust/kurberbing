import Sidebar from "@/component/ui/sidebar"
import style from "./style.module.css"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ['latin'],
  weight: "900",
})

type Props = {
  category: {
    id: number
    img: string
    label: string
    price: number
  }[],
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[]
}

export default function Category({category, menu}: Props) {
  return (
    <div className={`${style.page} ${roboto.className}`}>
      <div className={style.menu}>
        <div className={style.sidebar}>
          <Sidebar menu={menu} />
        </div>
        <ul className={style.grid}>
          {category.map((item) => {
            return (
              <li key={`${item.id}___${item.label}`} className={style.card}>
                <div className={style.image}>
                  <img draggable={false} src={item.img} alt={item.label} />
                </div>
                <div className={style.details}>
                  <span>
                    <p className={style.label}>{item.label}</p>
                  </span>
                  <span>
                    <p className={style.price}>₱ {item.price}.00</p>
                    <span className={style.order_now}>order now</span>
                  </span>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
