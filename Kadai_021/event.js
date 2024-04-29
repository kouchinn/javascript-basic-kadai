//ボタンのHTML要素を取得
const btn = document.getElementById('btn');

//非同期でイベント処理を実行
btn.addEventListener('click', () => {
  setTimeout(() => {
    const text = document.getElementById('text');
    text.innerHTML='ボタンをクリックしました'
  }, 2000);
})
