const holiDays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]


for (let i = 0; i <=15; i ++) {
    console.log(holiDays[i]);
}

let i = 0
while (i <=15) {
    console.log(holiDays[i]);
    i ++;
}

/*以下自分用メモ
・条件式内にインデックス[]を記述すると何も出力されない
・コンマでなくセミコロンを使用しなくてはエラー「SyntaxError: Identifier 'i' has already been declared」が出る　→　すでに変数が定義されていますよというエラー
for (let i =1, i <= 16, i ++) {
    console.log(i);
}
*/