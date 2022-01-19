/*
Duy Lương 
Minh Quang 

*/

// _ Ôn tập về function

// -- regular function
// function sum(a,b) { 
//     return a + b
// }
// -- arrow function  ES6
// const sum = (a,b) => {
//     return a + b
// }

// console.log(sum(5,6))

// _ Khái niệm về DOM và cách sử dụng 
// _ Kết hợp html và js 
let overview = document.getElementById('overview')
let overviews = document.getElementsByClassName('overviews')

// console.log(overview)
console.log(overviews)
// console.log(overview)
// console.dir(overview)
// overview.innerText = "Nội dung đã bị thay đổi"
// overview.style.color = 'red'


let data = ['text1','text2','text3']

// for(let i = 0; i < data.length;i++)
// {
    // `${tên biến}`
//     overview.innerHTML += `<p>${data[i]}</p>` 
// }

// _ Tìm hiểu về hàm addEventListener
for(let i = 0; i < overviews.length;i++) {
    overviews[i].addEventListener('click', () => { // callback
        console.log(overviews[i])
    })
} 
