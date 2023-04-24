import Link from "next/link"
import style from "./style.module.css"
type Props = {
  menu: {
    id: number
    image: string
    category: string
    param: string
  }[]
}
export default function Sidebar({menu}: Props) {
  return (
    <ul className={style.sidebar}>
      {menu.map((item) => {
        return (
          <li className={style.item} key={`${item.id}__${item.category}`}>
            <Link href={item.param}>
              <div>
                <p className={style.category}>{item.category}</p>
                <div className={style.image}>
                  <img src={item.image} alt={item.category} />
                </div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
