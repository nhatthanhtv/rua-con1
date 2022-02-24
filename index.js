
const btnSeach = document.querySelector('#search-btn')
const input = document.querySelector('#search')

const content = document.querySelector('.text__content')
const data = document.querySelector('.data')
const warning = document.querySelector('.warning')
const keywordNumber = document.querySelector('.keyword__number')

input.oninput = (e) => {
    keywordNumber.innerText = ''
    warning.innerText = ''

}

btnSeach.onclick = () =>{
    let value = input.value.trim()

    const lengthValue = value.length
    const keyStart = content.innerText.toLowerCase().indexOf(value)
    if(keyStart === - 1){
        warning.innerText = 'Không tìm thấy nội dung'
    }else{
        const content1 = content.innerText.slice(0,keyStart)
        const content2 = content.innerText.slice(keyStart + lengthValue)


        keywordNumber.innerText = `Số lượng từ khóa: ${lengthValue}`
        const newContent = `<p> ${content1} <span>${content.innerText.slice(keyStart, keyStart + value.length)}</span>${content2} </p>`
        data.innerHTML = newContent
    }

}