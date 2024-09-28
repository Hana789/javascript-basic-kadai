// 変数の初期化
let untyped = '';
let typed = '';
let score = 0;
// 必要なHTML 要素の取得
const untypedfield = document.getElementById('untyped');
const typedfield = document.getElementById('typed');
const container = document.getElementById('container');
const start = document.getElementById('start');
const count = document.getElementById('count');
const letter = document.getElementById('letter');

// 複数のテキストを格納する配列
const textLists = [
    'Hello World','This is my App','How are you?',
   'Today is sunny','I love JavaScript!','Good morning',
   'I am Japanese','Let it be','Samurai',
   'Typing Game','Information Technology',
   'I want to be a programmer','What day is today?',
   'I want to build a web app','Nice to meet you',
   'Chrome Firefox Edge Safari','machine learning',
   'Brendan Eich','John Resig','React Vue Angular',
   'Netscape Communications','undefined null NaN',
   'Thank you very much','Google Apple Facebook Amazon',
   'ECMAScript','console.log','for while if switch',
   'var let const','Windows Mac Linux iOS Android',
   'programming'
];
// ランダムなテキストを表示
const createText = () => {
    typed = '';
    typedfield.textContent = typed;
    let random = Math.floor(Math.random()*textLists.length);
    untyped = textLists[random];
    untypedfield.textContent = untyped;
};

// キー入力の判定
const keyPress = e => {
    // 誤タイプの場合
    if(e.key !== untyped.substring(0, 1)) {
        container.classList.add('mistyped');
        setTimeout(() => {
            container.classList.remove('mistyped');
        }, 100);
        return;
    }

    score ++;
    container.classList.remove('mistyped');
    typed += untyped.substring(0, 1);
    untyped = untyped.substring(1);
    typedfield.textContent = typed;
    untypedfield.textContent = untyped;


    const letters = score;
    letter.textContent = score;



// テキストがなくなったら新しいテキストを表示
if(untyped === '') {
    createText();
}
};



// タイピングスキルのランクを判定
const rankCheck = score => {
    let text = '';
    if (score < 100) {
        text = `あなたのランクはCです。\nBランクまであと${100 - score}文字です。`;
    } else if(score < 200) {
        text = `あなたのランクはBです。\nAランクまであと${200 - score}文字です。`;
    } else if(score < 300) {
        text = `あなたのランクはAです。\nSランクまであと${300 - score}文字です。`;
    } else if(score >= 300) {
        text = `あなたのランクはSです。\nおめでとうございます!`;
    }

// 生成したメッセージと一緒に文字列を返す
return `${score}文字打てました！\n${text}\n【OK】リトライ / 【キャンセル】終了`;

};

// ゲームを終了
const gameOver = id => {
    clearInterval(id);
    const result = confirm(rankCheck(score));

    // OKボタンをクリックしたらリロードする
    if (result == true) {
        window.location.reload();
    }
};

// カウントダウンタイマー
const timer = () => {
    let time = count.textContent;
    const id = setInterval(() => {
        
        // カウントダウンする
        time--;
        count.textContent = time;
        // カウントが０になったらタイマーを停止する
        if(time <= 0) {
            gameOver(id);
        }
    }, 1000);
};

// ゲームスタート時の処理
start.addEventListener('click', () => {
    timer();
    createText();
    start.style.display = 'none';
    document.addEventListener('keypress', keyPress);
});

untypedfield.textContent = 'スタートボタンで開始';