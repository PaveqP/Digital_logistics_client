
// export const GetRideData = () => {
//     let data = require('../data/logistic_data.json')

//     console.log(data, 'transport data');
//     return data
// }


export const GetRideData = async () => {
    let data = await fetch('https://careers.cgeng.pro/logistic_data.json', {
        method: "GET", 
        mode: "no-cors", 
        credentials: 'same-origin',
        headers: {'Access-Control-Allow-Origin': '*'}
        }).then(response => response.json())
    console.log(data, 'transport data');
    return data
}