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

// export const rangeFilter = (goods, ArrValue) => {
//     return goods.filter((goodsItem) => {
//         return goodsItem.price <= ArrValue[1] && goodsItem.price >= ArrValue[0]
//     })
// }

export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min !== '' && max === '') {
            return goodsItem.price > +min
        } else if (min === '' && max !== '') {
            return goodsItem.price < +max
        }
    })
}


export const hoSaleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if (value) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
    })
}
