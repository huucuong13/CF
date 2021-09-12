// bt A1 :
// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
let array = [2, 3, -5, -2, 4];

function tich(inputArray) {
    let max = 0;
    inputArray.forEach((element,index, array) => {
        if (index < inputArray.length) {
            if (array[index] * array[index + 1] > max) {
                max = array[index] * array[index +1];
            }
        }
    });
    return max
}

console.log(`ket qua bai 1: ` + tich(array));

// bt A2:
// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.

let team = [12, 23, 33, 3, 34, 43, 43, 34,91, 03, 81];

function alternatingSums(input) {
    let team1 = [];
    let team2 = [];
    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            team1.push(input[i]);
        } else {
            team2.push(input[i]);
        }
    }
    
    let sumTeam1 = sumArray(team1);
    let sumTeam2 = sumArray(team2);
    console.log([sumTeam1, sumTeam2]);
    return [sumTeam1, sumTeam2];
}

function sumArray(ArrayInput) {
    let sum = 0;
    ArrayInput.forEach(function(val) {
        sum += val;
    })

    return sum;
}

alternatingSums(team)

// btB: Code Challenge

let optionShowLink = 0;
function clickChangeOption(element) {  
    optionShowLink = element.value;
}

function loadDoc() {

    let xhttp = new XMLHttpRequest();
    const URL_ShortLink = 'https://api.shrtco.de/v2/shorten?url=';
    xhttp.onload = function() {
        dataResult = JSON.parse(this.responseText);
            if (optionShowLink == 2) {
                document.getElementById("linkGenerated").innerHTML = `<a target="_blank" href="${dataResult.result.full_short_link2}">${dataResult.result.short_link2}</a>`;
            } else {
                document.getElementById("linkGenerated").innerHTML = `<a target="_blank" href="${dataResult.result.full_short_link}">${dataResult.result.short_link}</a>`;
            }
            
    }

    let linkInput = document.getElementById("link").value;
    let url = URL_ShortLink + linkInput;
    xhttp.open("GET", url, true)
    xhttp.send();

}







