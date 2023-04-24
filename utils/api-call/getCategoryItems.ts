type CategoryItems = {
  id: number
  img: string
  label: string
  price: number
}[]

export default async function getCategoryItems(category: string): Promise<CategoryItems> {
  const response = await fetch(`https://api-burgerking-menu.vercel.app/menu/${category}`)
  const { data } = await response.json()
  return data
}
