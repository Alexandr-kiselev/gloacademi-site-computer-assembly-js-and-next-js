import getData from "./getData";
import renderGoods from "./renderGoods";

import { rangeFilter } from "./filters";


const range = () => {
    const rangeWrap = document.querySelectorAll('.filter-price_range')
    let ArrValue = [];
    ArrValue[0] = 0;
    ArrValue[1] = 9999999999

    rangeWrap.forEach(item => {

        item.addEventListener('input', (event) => {
            const value = event.target.value
            const id = event.target.id
            if (id === 'min') {
                ArrValue[0] = value
            } else {
                ArrValue[1] = value
            }
            getData().then((data) => {
                renderGoods(rangeFilter(data, ArrValue));
            })

        })


    })



}

export default range 