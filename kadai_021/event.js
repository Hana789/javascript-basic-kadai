

const addBtn = document.getElementById("btn");
const text = document.getElementById("text");

addBtn.addEventListener('click', () => {
    setTimeout(()=>{
        text.textContent = 'ボタンをクリックしました';
    }, 2000);
});