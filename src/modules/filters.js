export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}


export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}

export const rangeFilter = (goods, ArrValue) => {
    return goods.filter((goodsItem) => {
        return goodsItem.price <= ArrValue[1] && goodsItem.price >= ArrValue[0]
    })
}

