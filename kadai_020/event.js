const addBtn = document.getElementById(`btn`);
const text = document.getElementById(`text`);

addBtn.addEventListener(`click`, ()=> {
    text.textContent="ボタンをクリックしました";
});