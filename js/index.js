const positionsDefault = [
    {
        money: 0,
        text_display: 'Lời chúc yêu thương',
        text: 'Lì xì may mắn nha 🤷',
        image: './image/heart.png',
        percent: 8 
    },
    {
        money: 5,
        text: 'Chúc mừng bạn đã được 5.000 VNĐ👌',
        image: './image/5k.png',
        percent: 8 
    },
    {
        money: 10,
        text: 'Chúc mừng bạn đã được 10.000 VNĐ 😁',
        image: './image/10k.png',
        percent: 8
    },
    {
        money: 20,
        text: 'Chúc mừng bạn đã được 20.000 VNĐ 😱',
        image: './image/20k.png',
        percent: 8
    },
    {
        money: 50,
        text: 'Chúc mừng bạn đã được 50.000 VNĐ 💸',
        image: './image/50k.png',
        percent: 8 
    },
    {
        money: 100,
        text: 'Tuyệt, chúc mừng bạn đã được 100.000 VNĐ 😍',
        image: './image/100k.png',
        percent: 8 
    },
    {
        money: 200,
        text: 'Ối dồi ôi, chúc mừng bạn đã được 200.000 VNĐ 🫀',
        image: './image/200k.png',
        percent: 8
    },
    {
        money: 500,
        text: 'Quá tuyệt, chúc mừng bạn đã được 500.000 VNĐ 🧧',
        image: './image/500k.png',
        percent: 8 
    }
]

function init() {
    let positionCustom = null;
    localStorage.setItem("list_default", JSON.stringify(positionsDefault));
    positionCustom = JSON.parse(localStorage.getItem("list_custom"));
    if (!positionCustom) {
        positionCustom = JSON.parse(localStorage.getItem("list_default"));
        localStorage.setItem("list_custom", JSON.stringify(positionsDefault));
    }
    showDataCms(positionCustom);
}


function showDataCms(positionCustom) {
    console.log(positionCustom);
    let html = ``;
    for (const item of positionCustom) {
        html += `
        <tr>
            <td>${item.money * 100}</td>
            <td><img src="${item.image}" style="width=200px; height: 100px"/></td>
            <td>${item.percent * 100} %</td>
        </tr>
        `
    }
    document.getElementById('list_positions').innerHTML = html;
}

init();
