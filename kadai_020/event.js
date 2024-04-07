//ボタンのHTML要素を取得
const btn = document.getElementById('btn');

//ボタン押下後のイベント関数
btn.addEventListener('click', () => {
  const text = document.getElementById('text');
  text.innerHTML='ボタンをクリックしました'
})