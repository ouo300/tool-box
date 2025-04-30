
let count = 1;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const list = [
{data:1, img:"img/dice/dice1_16x16_x4.png"}, 
{data:2, img:"img/dice/dice2_16x16_x4.png"}, 
{data:3, img:"img/dice/dice3_16x16_x4.png"}, 
{data:4, img:"img/dice/dice4_16x16_x4.png"}, 
{data:5, img:"img/dice/dice5_16x16_x4.png"}, 
{data:6, img:"img/dice/dice6_16x16_x4.png"}
];


// 隨機抽數字
const randomItem = () => {
    return list [Math.floor(Math.random() * list.length)];
}; 


// 骰子的畫面
const dice = document.getElementById("dice");
const main = document.getElementById("main");


dice.addEventListener("click", ()=>{
    let html = "";
    let total = 0;

    html += `
    <div class="total-container">
        <div class="value" id="total" style="color:#F0F0E0;"></div>
    </div>
    `;

    for(let i=0; i < count; i++){
        const dice_data = randomItem();
        html+=`<div class="dice" style = "background-image: url('${dice_data.img}');width: 64px; height: 64px;background-size: contain;"></div>`;
        total += dice_data.data;
    };
    main.innerHTML = `<div class="dice-box">${html}</div>`;
    document.getElementById("total").innerHTML = total;
});




// 計數器
btns.forEach(function(btn){ //針對陣列中的每個元素去做操作
    btn.addEventListener("click",function(){
        const styles = this.classList;

        if(styles.contains("decrease")){
            if (count > 1){
                count--;
            };
        }else if (styles.contains("increase")){
            count++;
        }else{
            count = 1;
        };
        //加減數字

        value.textContent = count;
        //將數字更改為count
    });

});

