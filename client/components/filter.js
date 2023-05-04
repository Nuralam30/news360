import { newses } from "../newses"

export const filterNews = (category, num) => {
    const items = newses.filter(n => n.category === category)
    const sliceItems = items.slice(0, num)
    return sliceItems;
}