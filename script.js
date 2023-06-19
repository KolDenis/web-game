

let fields = [[[0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
               [1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
               [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
               [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0]],

              [[1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
               [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
               [1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1],
               [0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0],
               [1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
               [0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0]],

              [[1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
               [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
               [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
               [1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
               [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1]]];

let offset_for10 = [[[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 0], [0, 0], [-1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 1], [0, 0], [0, 0], [0, 0], [0, 1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 0], [1, 0], [0, 0], [-1, 0], [-1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
                    [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1, 0], [1, 0], [0, 0], [-1, 0], [-1, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]];

let mas_kofs = [[[], [],
                 [1.18, 1.75, 2.85, 5, 10, 25,100],
                 [1.38, 2.5, 5, 11.5, 35, 175],
                 [1.65, 3.7, 10, 35, 210]],

                [[], [], [],
                 [1.06, 1.49, 2.15, 3.2, 5.1, 8.4, 15, 30, 71, 210, 1050],
                 [1.17, 1.82, 2.95, 5.05, 9.3, 18.5, 42, 110, 390, 2300],
                 [1.30, 2.27, 4.20, 8.45, 18.5, 46, 140, 555, 3900]],

                [[], [], [], [],
                 [1.02, 1.35, 1.85, 2.55, 3.6, 5.3, 7.9, 12, 20, 34, 63, 125, 280, 750, 2650, 16000],
                 [1.09, 1.55, 2.3, 3.4, 5.3, 8.5, 14, 25, 45, 9.1, 200, 500, 1500, 6000, 42000],
                 [1.17, 1.80, 2.85, 4.65, 7.9, 14, 26, 52, 115, 275, 750, 2500, 11500, 90000]]];

let chanse_symbols = [[[49, 51, 0], [0, 100, 0], [0, 80, 20]],
                      [[0, 100, 0], [0, 80, 20], [0, 60, 40]],
                      [[0, 80, 20], [0, 60, 40], [0, 40, 60]]];

let number_of_pirates = [[3, 4, 5], [4, 5, 6], [5, 6, 7]];
let mas_symbol_count = 3;
let mas_sumbols = [2, 3, 4, 5, 6];
let used_symbols = [];
let colect_sumbols = new Array();
let counter_sumbols = 0;
let size_field = 15;
let mas;
let mas_pc;
let level;
let number_pirates = 4;
let number_sumbols;
let redrawed = false;
let sum_win = 0.00;
let stavka = 5;
let game_count = 0;
let number_sumbol = 4;
let time_of_animation = 9000;

let account = 1000;
let itm;
let counter_level = 1;

let checked_btn_field;
let checked_btn_pirates;
let div_game;

let stopa;

window.onload = function() {
  checked_btn_field = document.querySelector(".btn_field_checked");
  /*checked_btn_field.className = "btn_field_checked";*/
  checked_btn_pirates = document.querySelector(".btn_pirates_checked");
  /*checked_btn_pirates.className = "btn_pirates_checked";*/
  redraw_field(checked_btn_field, size_field);
  account_edit(0);
  game_count = 0;
  document.querySelector(".game_count").textContent = 'games : ' + game_count.toString();
  div_game = document.querySelector(".b");
  d();
};

function redraw_field(target, field) {
    checked_btn_field.className = "btn_field";
    checked_btn_field = target;
    checked_btn_field.className = "btn_field_checked";
    while (document.querySelector('.game').firstChild) {
      document.querySelector('.game').removeChild(document.querySelector('.game').lastChild);
    }

    if(field == 10){
      itm = 0;
    }else if(field == 15){
      itm = 1;
    }else{
      itm = 2;
    }
    mas = new Array(field);
    if(size_field != field)
    {
      change_btns_pirates();
    }
    size_field = field;
    let counter = 1;
    level = rand(6);
    for(let i = 0; i < 25; i++)
    {
      let d = document.createElement('div');
      if(fields[itm][level][i] == 1)
      {
        d.className = 'btn_for_game';
        d.id = "d"+counter.toString();
        mas[counter-1] = d;
        counter++;
      }
      else {
        d.className = 'btn_for_game default';
      }
      if(size_field == 10)
      {
        d.style.gridColumn = (i%5*2+1 + offset_for10[level][i][0]).toString()+"/"+(i%5*2+3 + offset_for10[level][i][0]).toString();
        d.style.gridRow = (Math.floor(i/5)*2+1 + offset_for10[level][i][1]).toString()+"/"+(Math.floor(i/5)*2+3 + offset_for10[level][i][1]).toString();
      }
      else {
        d.style.gridColumn = (i%5*2+1).toString()+"/"+(i%5*2+3).toString();
        d.style.gridRow = (Math.floor(i/5)*2+1).toString()+"/"+(Math.floor(i/5)*2+3).toString();
      }
      document.querySelector('.game').appendChild(d);
      /*if((i+1)%5 == 0)
      {
        document.querySelector('.game').appendChild(document.createElement('br'));
      }*/
    }
    show_kof();
    document.querySelector(".label_sum_stavka").textContent = "0 грн";
    counter_level = 1;
    redrawed = true;
}

function show_kof(target) {
  while (document.querySelector('.sec_panel_kofs').firstChild) {
    document.querySelector('.sec_panel_kofs').removeChild(document.querySelector('.sec_panel_kofs').lastChild);
  }


  for(let i = 0; i < size_field-number_pirates; i++)
  {
    let k = document.createElement('div');
    k.className = "div_kof";
    k.id = "kof"+(i+1).toString();
    let l = document.createElement('label');
    l.className = "labelk";
    l.textContent = mas_kofs[itm][number_pirates-1][i];
    k.appendChild(l);
    l = document.createElement('label');
    l.className = "labelh";
    l.textContent = (i+1).toString() + " хід";
    k.appendChild(l);
    document.querySelector('.sec_panel_kofs').appendChild(k);
  }
}

function can_play() {
    document.querySelector(".btn_play").style.visibility = "hidden";
    document.querySelector(".question_to_change_stavka").style.visibility = "inherit";
}

function submit(value) {
  if(value == true)
  {
    stavka = document.querySelector(".input_stavka").value;
  }
  else {
    document.querySelector(".input_stavka").value = stavka;
  }
  document.querySelector(".btn_play").style.visibility = "inherit";
  document.querySelector(".question_to_change_stavka").style.visibility = "hidden";
}

function play_game(event) {
  document.querySelector(".s").src = "Elements/s/1.png";
  if(counter_sumbols > 0 && stavka != document.querySelector(".input_stavka").value)
  {
    can_play();
  }
  else{
    game_count++;
    document.querySelector(".game_count").textContent = 'games : ' + game_count.toString();
    document.querySelector("#kof1").className += " div_kof_next";
    document.querySelector(".for_mes").textContent = "";
    document.querySelector(".for_mes_mod").textContent = "";
    stavka = document.querySelector(".input_stavka").value;
    document.querySelector(".priz").textContent = (stavka * 3).toString() + " грн";
    if(account >= stavka)
    {
      document.querySelector("#info").style.color = "inherit";
      disable_btns(true);
      sum_win = 0.00;
      document.querySelector(".input_stavka").disables = true;
      document.querySelector(".sec_panel_kofs").scrollTop = 0;
      account_edit(-1 * parseInt(document.querySelector(".input_stavka").value));
      event.target.disabled = true;
      document.querySelector(".btn_play_mod").disabled = true;
      if(!redrawed)
      {
          redraw_field(checked_btn_field, size_field);
      }
      replace();
      for(let i = 0; i < mas.length; i++)
      {
        mas[i].onclick = function(event) {open_card(event.target);};
      }
      document.querySelector(".btn_auto").disabled = false;
    }
    else {
      document.querySelector("#info").style.color = "red";
    }
    //document.querySelector(".btn_win").disabled = false;
  }
}

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function change_number_pirates(event)
{
  number_pirates = parseInt(event.target.textContent);
  checked_btn_pirates.className = "btn_pirates";
  checked_btn_pirates = event.target;
  checked_btn_pirates.className = "btn_pirates_checked";
  show_kof();
}

function change_btns_pirates() {
  for(let i = 1; i < 4; i++)
  {
    document.querySelector("#btn_pirates"+i.toString()).textContent = number_of_pirates[itm][i-1];
  }
  checked_btn_pirates.className = "btn_pirates";
  checked_btn_pirates = document.querySelector("#btn_pirates1");
  checked_btn_pirates.className = "btn_pirates_checked";
  number_pirates = number_of_pirates[itm][0];
}

function replace() {
  let v;
  let itm2;
  if(number_pirates == number_of_pirates[itm][0]){
    itm2 = 0;
  }
  else if (number_pirates == number_of_pirates[itm][1]) {
    itm2 = 1;
  }
  else if (number_pirates == number_of_pirates[itm][2]) {
    itm2 = 2;
  }
  let random_value = rand(100);
  if(random_value < chanse_symbols[itm][itm2][0])
  {
    number_sumbols = 0;
  }
  else if(random_value >= chanse_symbols[itm][itm2][0] && random_value < chanse_symbols[itm][itm2][0]+chanse_symbols[itm][itm2][1])
  {
    number_sumbols = 1;
  }
  else{
    number_sumbols = 2;
  }

  mas_pc = new Array(size_field);
  mas_pc.fill(0);
  used_symbols = [];
  for(let i = 0; i < number_sumbols; i++)
  {
    while(true)
    {
      v = rand(size_field);
      if(mas_pc[v] == 0)
      {
        mas_pc[v] = number_sumbol;
        break;
      }
    }
  }
  for(let i = 0; i < number_pirates; i++)
  {
    while(true)
    {
      v = rand(size_field);
      if(mas_pc[v] == 0)
      {
        mas_pc[v] = 1;
        break;
      }
    }
  }
  console.log(mas_pc);
}

function open_card(target) {
  if(document.querySelector("#kof"+(counter_level-1).toString()) != null)
  {
    document.querySelector("#kof"+(counter_level-1).toString()).className = "div_kof div_kof_after";
  }
  let img = document.createElement('img');
  img.className = "img_in_game";
  img.width = target.clientWidth/5*3;
  let div = document.createElement("div");
  div.className = "sec_btn_for_game";

  if(mas_pc[parseInt(target.id.slice(1))-1] == 1){
    img.src = "Elements/Pirates.png";
    mas_pc[parseInt(target.id.slice(1))-1] = -1;
    game_over(false);
    document.querySelector(".label_sum_stavka").textContent = "0 грн";
    sum_win = 0.00;
    document.querySelector(".s").src = "Elements/s/1.png";
  }
  else {
    if(counter_level < 5)
    {
      document.querySelector(".s").src = "Elements/s/"+(counter_level+1).toString()+".png";
    }
    if(mas_pc[parseInt(target.id.slice(1))-1] == 0){
      img.src = "Elements/coin.png";
    }
    else{
      if(mas_pc[parseInt(target.id.slice(1))-1] == 2){
        img.src = "Elements/1.png";
      }
      else if(mas_pc[parseInt(target.id.slice(1))-1] == 3){
        img.src = "Elements/2.png";
      }
      else if(mas_pc[parseInt(target.id.slice(1))-1] == 4){
        img.width = target.clientWidth/5*2;
        img.src = "Elements/key.png";
      }
      else if(mas_pc[parseInt(target.id.slice(1))-1] == 5){
        img.src = "Elements/5.png";
      }
      else if(mas_pc[parseInt(target.id.slice(1))-1] == 6){
        img.src = "Elements/ancor.png";
      }
      counter_sumbols++;
      console.log(counter_sumbols);

      document.querySelector("#sumbol"+counter_sumbols.toString()).style.opacity = 1;
      document.querySelector("#chest"+counter_sumbols.toString()).style.opacity = 0;
    }
    document.querySelector(".btn_win").disabled = false;
    sum_win = (mas_kofs[itm][number_pirates-1][counter_level-1] * stavka);
    document.querySelector(".label_sum_stavka").textContent = sum_win.toFixed(2).toString()+" грн";
    if(counter_level > 3)
    {
      document.querySelector(".sec_panel_kofs").scrollTop += 72 ;
    }
    document.querySelector("#kof"+(counter_level).toString()).className = "div_kof div_kof_checked";
    document.querySelector("#kof"+(counter_level+1).toString()).className = "div_kof div_kof_next";
  }
  div.appendChild(img);
  target.appendChild(div);

  if(counter_sumbols == 5)
  {
    account_edit(3*stavka);
    anim_priz();
    for(let i = 1; i < 6; i++)
    {
      document.querySelector("#sumbol"+i.toString()).className += "img_anim";
    }
    showWinAnimation("Elements/chest_sumbols.svg");
    setTimeout(restart_sumbols, time_of_animation);
    animation_start();
    setTimeout(animation_stop, 2000);
  }
  else {
    if(mas_pc[parseInt(target.id.slice(1))-1] > 1)
    {
      showWinAnimation("Elements/key.png");
    }
  }

  mas_pc[parseInt(target.id.slice(1))-1] = -1;
  target.onclick = null;
  counter_level++;
}

function game_over(win) {
  for(let i = 0; i < mas.length; i++)
  {
    mas[i].onclick = null;
  }
  document.querySelector(".btn_auto").disabled = true;
  document.querySelector(".btn_win").disabled = true;
  redrawed = false;
  document.querySelector(".btn_play").disabled = false;
  document.querySelector(".for_mes").innerHTML = '';
  document.querySelector(".for_mes_mod").innerHTML = '';

  showWinAnim(win);

  if(win)
  {
    account_edit(sum_win);
    document.querySelector(".for_mes").style.color = "#050027";
    document.querySelector(".for_mes_mod").style.color = "#050027";
    let l = document.createElement("label");
    l.textContent = "Вітаємо, ваш виграш склав "+ sum_win.toFixed(2)+" грн.";
    l.style.margin = "auto";
    document.querySelector(".for_mes").appendChild(l);
    if(document.body.clientWidth <= 767)
    {
      document.querySelector(".for_mes_mod").appendChild(l);
    }
    l = document.createElement("label");
    l.textContent = "Виграш нараховано на ваш баланс";
    l.style.margin = "auto";
    document.querySelector(".for_mes").appendChild(l);
    if(document.body.clientWidth <= 767)
    {
      document.querySelector(".for_mes_mod").appendChild(l);
    }
  }
  else {
    document.querySelector(".for_mes").style.color = "red";
    document.querySelector(".for_mes_mod").style.color = "red";
    let l = document.createElement("label");
    l.textContent = "Пірат викрав все ваше золото... Зіграй ще,";
    l.style.margin = "auto";
    document.querySelector(".for_mes").appendChild(l);
    if(document.body.clientWidth <= 767)
    {
      document.querySelector(".for_mes_mod").appendChild(l);
    }
    l = document.createElement("label");
    l.textContent = "щоб відвоювати своє золото";
    l.style.margin = "auto";
    document.querySelector(".for_mes").appendChild(l);
    if(document.body.clientWidth <= 767)
    {
      document.querySelector(".for_mes_mod").appendChild(l);
    }
  }
  if(document.body.clientWidth <= 767)
  {
    document.querySelector(".for_mes_mod").style.visibility = "inherit";
  }
  setTimeout(() => {
  document.querySelector(".btn_play_mod").disabled = false;
  document.querySelector(".for_mes_mod").style.visibility = "hidden";}, 1000);
  for(let i = 0; i < mas_pc.length; i++)
  {
    if(mas_pc[i] != -1)
    {
      let img = document.createElement('img');
      img.className = "img_in_game";
      img.style.opacity = 0.5;
      img.width = document.querySelector("#d"+(i+1).toString()).clientWidth/5*3;
      if(mas_pc[i] == 0)
      {
        img.src = "Elements/coin.png";
      }
      else if(mas_pc[i] == 1)
      {
        img.src = "Elements/Pirates.png";
      }
      else if(mas_pc[i] == 2)
      {
        img.src = "Elements/1.png";
      }
      else if(mas_pc[i] == 3)
      {
        img.src = "Elements/2.png";
      }
      else if(mas_pc[i] == 4)
      {
        img.width = document.querySelector("#d"+(i+1).toString()).clientWidth/5*2;
        img.src = "Elements/key.png";
      }
      else if(mas_pc[i] == 5)
      {
        img.src = "Elements/5.png";
      }
      else if(mas_pc[i] == 6)
      {
        img.src = "Elements/ancor.png";
      }
      if(mas_pc[i] >= 2)
      {
        img.className += " img_anim";
      }
      document.querySelector("#d"+(i+1).toString()).appendChild(img);
    }
  }
  disable_btns(false);
}

function showWinAnim(win) {
  if(win) {
    showWinAnimation("Elements/sunduk.svg");
  }else {
    showWinAnimation("Elements/ppp.svg");
  }
}

function showWinAnimation(img_name) {
  let img = document.createElement('img');
  img.className = "img_result img_result_anim";
  let img2 = document.createElement('img');
  img2.className = "img_result";
  img.id = "fon";
  img2.id = "sumb";

  if(img_name == "Elements/ppp.svg"){
    img.src = "Elements/fon_lose.svg";
  }
  else {
    img.src = "Elements/fon_win.svg";
  }
  img2.src = img_name;

  document.querySelector('.game').appendChild(img);
  document.querySelector('.game').appendChild(img2);

  let text = document.createElement('label');
  text.className = "text_with_animation text_with_animation1";
  document.querySelector('.game').appendChild(text);

  let text2 = document.createElement('label');
  text2.className = "text_with_animation text_with_animation2";
  document.querySelector('.game').appendChild(text2);

  if(img_name == "Elements/chest_sumbols.svg"){
    text.textContent = "ЙО-ХО-ХО! ВИ ЗНАЙШЛИ";
    text2.textContent = "ДОДАТКОВІ СКАРБИ";
  }else if(img_name == "Elements/sunduk.svg"){
    text.textContent = "ЙО-ХО-ХО! ВИ ЗНАЙШЛИ";
    text2.textContent = "СКАРБ ПІРАТІВ";
  }else if(img_name == "Elements/ppp.svg"){
    text.textContent = "УПС, ВАС ПОГРАБУВАЛИ...";
    text2.textContent = "ВІДВОЮЙ ЗОЛОТО ЗНОВУ";
    text.style.color = "#DE1313";
    text2.style.color = "#DE1313";
  }

  setTimeout(() => {
    try{
      document.querySelector('.game').removeChild(text);
      document.querySelector('.game').removeChild(text2);
      if(img_name != "Elements/key.png")
      {
        document.querySelector('.game').removeChild(img);
        document.querySelector('.game').removeChild(img2);
      }
      else {
        let options2 = document.querySelector("#sumbol"+counter_sumbols.toString()).getBoundingClientRect();
        let options = document.querySelector("#sumb").getBoundingClientRect();
        document.querySelector("#sumb").style.position = "absolute";
        let scroll = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var animation = document.querySelector("#sumb").animate([
          /*{left: Math.floor(options2.x).toString()+"px", top: Math.floor(options2.y+scroll).toString()+"px"},*/
          {left: Math.floor(options.x).toString()+"px", top: Math.floor(options.y+scroll).toString()+"px", width: Math.floor(options.width).toString()+"px", height: Math.floor(options.height).toString()+"px"},
          {left: Math.floor(options2.x).toString()+"px", top: Math.floor(options2.y+scroll).toString()+"px", width: Math.floor(options2.width).toString()+"px", height: Math.floor(options2.height).toString()+"px"}
          /*{left: Math.floor(options3.x+options3.width/2-elem.width/2).toString()+"px", top: Math.floor(options3.y+scroll+options3.height/2-elem.height/2).toString()+"px", width: Math.floor(options3.width/3).toString()+"px"}*/
          /*{left: Math.floor(options.x).toString()+"px", top: Math.floor(options.y+scroll).toString()+"px", width: Math.floor(options.width/3).toString()+"px", height: Math.floor(options.height/3).toString()+"px"}*/
        ], 500);
        animation.addEventListener('finish', function() {
          try{
            document.querySelector('.game').removeChild(document.querySelector("#sumb"));
          document.querySelector('.game').removeChild(document.querySelector("#fon"));
          }
          catch{}
        });
    }
    }
    catch{}
  }, 4000);
}

function open_auto() {
  let v;
  while (true) {
    v = rand(mas_pc.length);
    if(mas_pc[v] != -1)
    {
      open_card(document.getElementById("d"+(v+1).toString()));
      break;
    }
  }
}

function st(v) {
  if(parseInt(document.querySelector(".input_stavka").value)+v > 0 && parseInt(document.querySelector(".input_stavka").value)+v <= 1000)
  document.querySelector(".input_stavka").value = parseInt(document.querySelector(".input_stavka").value)+v;
}

function change_stavka(value) {
  document.querySelector(".input_stavka").value = value;
}

function account_edit(value) {
  account += value;
  document.querySelector(".account").textContent = account.toFixed(2).toString()+ " грн";
}

function inc_game_count() {
  game_count += 1;
  document.querySelector(".game_count").textContent = 'games : ' + game_count.toString();
}

function restart_sumbols()
{
  counter_sumbols = 0;
  colect_sumbols = new Array();
  for(let i = 1; i < 6; i++)
  {
    document.querySelector("#sumbol"+i.toString()).className = "sumbol";
    document.querySelector("#sumbol"+i.toString()).style.opacity = 0.5;
    document.querySelector("#chest"+i.toString()).style.opacity = 1;
  }
}

function disable_btns(value) {
  for(let i = 1; i < 4; i++)
  {
    if(i != 1)
    {
      document.querySelector("#btn_field"+i.toString()).disabled = value;
    }
    document.querySelector("#btn_pirates"+i.toString()).disabled = value;
  }
  for(let i = 1; i < 4; i++)
  {
    document.getElementById("b"+i.toString()).disabled = value;
  }
}

function anim_priz() {
  let coords = document.querySelector(".div1").getBoundingClientRect();
  document.querySelector(".animation_priz").style.top = Math.floor(coords.y).toString() + "px";
  document.querySelector(".animation_priz").style.left = Math.floor(coords.x).toString() + "px";
  document.querySelector(".animation_priz").textContent = (stavka * 3).toString();
  document.querySelector(".animation_priz").style.animationName = "prizz";
  //doItNow(Math.floor(coords.x+coords.width), Math.floor(coords.y+coords.height), true);
}



class ConfettiParticle {

  constructor( context, width, height ) {
    this.context = context;
    this.width = width;
    this.height = height;
    this.color = '';
    this.lightness = 50;
    this.diameter = 0;
    this.tilt = 0;
    this.tiltAngleIncrement = 0;
    this.tiltAngle = 0;
    this.particleSpeed = 1;
    this.waveAngle = 0;
    this.x = 0;
    this.y = 0;
    this.reset();
  }

  reset() {
    this.lightness = 50;
    this.color = Math.floor( Math.random() * 360 );
    this.x = Math.random() * this.width;
    this.y = Math.random() * this.height - this.height;
    this.diameter = Math.random() * 6 + 4;
    this.tilt = 0;
    this.tiltAngleIncrement = Math.random() * 0.1 + 0.04;
    this.tiltAngle = 0;
  }

  darken() {
    if ( this.y < 100 || this.lightness <= 0 ) return;
    this.lightness += 0.1;
  }

  update() {
    this.waveAngle += this.tiltAngleIncrement;
    this.tiltAngle += this.tiltAngleIncrement;
    this.tilt = Math.sin( this.tiltAngle ) * 12;
    this.x += Math.sin( this.waveAngle );
    this.y += ( Math.cos( this.waveAngle ) + this.diameter + this.particleSpeed ) * 0.4;
    if (!stop) {
      if ( this.complete() ) this.reset();
    }
      this.darken();
  }

  complete() {
    return ( this.y > this.height + 20 );
  }

  draw() {
    let x = this.x + this.tilt;
    this.context.beginPath();
    this.context.lineWidth = this.diameter;
    this.context.strokeStyle = "hsl("+ this.color +", 50%, "+this.lightness+"%)";
    this.context.moveTo( x + this.diameter / 2, this.y );
    this.context.lineTo( x, this.y + this.tilt + this.diameter / 2 );
    this.context.stroke();
  }
}

/**
 * Audio helper for AmpedOut stream
 */

let width, height, canvas, contex;
let particle = [];
let stop = false;
function d() {
  width = window.innerWidth;
  height = window.innerHeight;

  // particle canvas
  canvas = document.createElement( 'canvas' );
  context = canvas.getContext( '2d' );
  canvas.id = 'particle-canvas';
  div_game.appendChild( canvas );
}

const createParticles = () => {
  particles = [];
  let total = 100;

  if ( width > 1080 ) { total = 400; } else
  if ( width > 760 )  { total = 300; } else
  if ( width > 520 )  { total = 200; }

  for ( let i = 0; i < 1000; ++i ) {
    particles.push( new ConfettiParticle( context, width, height ) );
  }
};

// update canvas size
const updateSize = () => {
  width = window.innerWidth;
  if(width > 992)
  {
    height = 624;
    width -= 16;
  }
  else if(width > 768)
  {
    height = 655;
    width -= 17;
  }
  else{
    height = 894;
    width -= 33;
  }

  canvas.width = width;
  canvas.height = height;
};

// animation loop function
const animationFunc = () => {
  if(!stopa)
  {
      requestAnimationFrame( animationFunc );
  }
  context.clearRect( 0, 0, width, height );

  for ( let p of particles ) {
    p.width = width;
    p.height = height;
    p.update();
    p.draw();
  }
};

function animation_start() {
  canvas.style.visibility = "inherit";
  updateSize();
  createParticles();
  animationFunc();
  stop = false;
  stopa = false;
}

function animation_stop() {
  stop = true;
  setTimeout(function(){
    particles = [];
    stopa = true;
    canvas.style.visibility = "hidden";
  }, time_of_animation-2000);
}
