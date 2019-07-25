const cards = document.querySelectorAll('.card');

/* View Controller
                                                  -----------------------------------------*/
const btns = document.querySelectorAll('.js-btn');          //控制初始的 登录和注册
btns.forEach(btn => {
  btn.addEventListener('click', on_btn_click, true);
  btn.addEventListener('touch', on_btn_click, true);
});

function on_btn_click(e) {                                            //控制点击
  const nextID = e.currentTarget.getAttribute('data-target');
  const next = document.getElementById(nextID);
  if (!next) return;
  bg_change(nextID);
  view_change(next);
  return false;
}

/* Add class to the body */
function bg_change(next) {                                          //控制点击切换背景颜色
  document.body.className = '';
  document.body.classList.add('is-' + next);
}

/* Add class to a card */                                                   //控制卡片样式
function view_change(next) {              
  cards.forEach(card => {card.classList.remove('is-show');});
  next.classList.add('is-show');
}