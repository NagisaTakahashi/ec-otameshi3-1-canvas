//★このJSファイルでは、canvas関連を記述★

// alert(1111);

// キャンバスのサイズ管理
const canvasInfo = {
  size: { //キャンバスの大きさ
      width: 346, 
      height: 570,
  },
};
const sizeUnit = "px";
const image = {
  position: { //画像が開始する場所
      height: 0,
      width: 0,
  },
  size: { //画像の大きさ
    width: 346,
    height: 570,
  },
};
const fillStartPosition = { //塗りが開始する場所
  x: 0,
  y: 0,
};



// canvasタグ関連

const can1 = $("#main_canvas1")[0];
const ctx1 = can1.getContext("2d");

const can2 = $("#main_canvas2")[0];
const ctx2 = can2.getContext("2d");



//1.洋服に対して色を乗算してカラーリング

ctx1.fillStyle = "rgba(207, 207, 117,  1)"; //最初は透明の背景 →最初に好きな色プリセット
ctx1.fillRect(0, 0, 346, 570);

const imageDataPath = "img/clothed_3d/RC-N012.png";

var base_item = new Image();
base_item.onload = function () {
  ctx1.drawImage(base_item, 0,0,346,570);
};
base_item.src = imageDataPath;
ctx1.globalCompositeOperation = "multiply";


// 2.洋服以外に対しての余白部分に対しての色の上書きによる視覚上の削除
ctx2.fillStyle = "white"; //外側を白色に埋めてる
ctx2.fillRect(0, 0, 346, 570);

var mask = new Image();
mask.onload = function () {
    ctx2.drawImage(mask,0, 0, 346, 570);
};
mask.src = imageDataPath;
ctx2.globalCompositeOperation = "xor";//重なった部分を白く


// 3.ボタンクリックした際に指定色を重ねる

// 3-1.カラーの定義

var color_list= [
  {"colornum":"01","colorname":"NVY","color_code":"3A3A49","RGB":"58,58,73",},
  {"colornum":"02","colorname":"KKI","color_code":"5D6402","RGB":"93,100,2",},
  {"colornum":"03","colorname":"LIME","color_code":"CFE375","RGB":"207,207,117",},
  {"colornum":"04","colorname":"PPL","color_code":"C20F7C","RGB":"194,15,124",},
  {"colornum":"05","colorname":"RED","color_code":"F32359","RGB":"243,35,89",},
  {"colornum":"06","colorname":"MNT","color_code":"CBF1EF","RGB":"203,241,239",},
];

// 3-2.カラーをオブジェクトから代入


for( let A = 0 ; A < color_list.length ; A ++ ){
  $(`#color_${color_list[A].colornum}`).on("click",function(){

    // clearRectしないと描画内容が新規更新されない。色が上塗りされる。１回クリアする。
    ctx1.clearRect(0, 0, 346, 570);

    //新たに選択したカラーで塗り
    ctx1.fillStyle = `rgba(${color_list[A].RGB}, 1)`; //色味と透過 
    ctx1.fillRect(0, 0, 346, 570); //サイズと場所  

    // ctx1.globalCompositeOperation = "source-atop"; 塗り方

    var base_item = new Image();
    base_item.onload = function () {
      ctx1.drawImage(base_item,0,0,346,570); //おまえだったのかい！
    };
    base_item.src = imageDataPath;

  });
};








