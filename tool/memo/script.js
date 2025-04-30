const container = document.querySelector(".container");

let memo = [];

let data = "";




const data_show = () =>{
    container.innerHTML="";
    memo.forEach((item)=>{
        data += `
        <div class="box">
            <div class="box-x" id="${item.id}">×</div>
            <hr />
            <span>
               ${item.text}
            </span>
        </div>
        `;        
    });

    container.innerHTML = data;
    
    // 刪除
    document.querySelectorAll('.box-x').forEach(btn => {
        btn.addEventListener('click', e => {
            const targetId = Number(e.currentTarget.id);
            memo = memo.filter(item => item.id !== targetId);
        
            data_show();
        });
    });
    
    data="";
}

data_show();



// 新增

const banner = document.querySelector(".banner");

const addbtn = `
<div class="addbtn">＋</div>
`;

const newmemo = `
<div class="new-memo">
    <div class="new-memo-top">
        <button class="btn" id="add">添加</button>
        <button class="btn" id="close">取消</button>
    </div>
    <div class="new-memo-down">
        <textarea class="big-textarea" id="text-data"></textarea>
    </div>
</div>
`;

banner.innerHTML = addbtn;


// 開關輸入框
const cls_addbtn = () => {
    document.querySelector(".addbtn").addEventListener("click",()=>{
        banner.innerHTML = newmemo;
        add_btn();

        document.getElementById("close").addEventListener("click", ()=>{
            banner.innerHTML = "";
            banner.innerHTML = addbtn;
            cls_addbtn();
        });
    });
};

cls_addbtn();



// 新增便條


let count = 0;
const add_btn = () => {
    document.getElementById("add").addEventListener("click", ()=>{
        const text_data = document.getElementById("text-data");
        count += 1;

        memo.push({ id: count, text: text_data.value });


        banner.innerHTML = "";
        banner.innerHTML = addbtn;
        cls_addbtn();
        data_show();
    });
};






