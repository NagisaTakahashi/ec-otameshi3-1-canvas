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

ctx1.fillStyle = "rgba(0, 0, 0, 0)"; //最初は透明の背景
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

// for( let A = 0 ; A < color_list.length ; A ++ ){

//   $(`#color_${color_list[A].colornum}`).on("click",function(){
//     ctx1.globalCompositeOperation = "source-atop";
//     ctx1.fillStyle = `rgba(${color_list[A].RGB}, 0.5)`; //色味と透過 
//     ctx1.fillRect( 0 , 0 , 346 , 570); //サイズと場所  
//   });

// }

// ボタンクリックした際に指定色を重ねる
const colorButton = $("#btn");

colorButton.addEventListener("click", function () {
    const color = document.$("#addColor");
    const rgbRed = parseInt(color.value.substring(1, 3), 16); //コード変換
    const rgbGreen = parseInt(color.value.substring(3, 5), 16);
    const rgbBlue = parseInt(color.value.substring(5, 7), 16);
    console.log(`RGB: ${rgbRed},${rgbGreen},${rgbBlue}`);

    // clearRectしないと描画内容が新規更新されない。色がなぜか上塗りされる。１回クリアする
    ctx1.clearRect(0, 0, 346, 570);

    //新たに選択したカラーで塗り
    ctx1.fillStyle = `rgba(${rgbRed},${rgbGreen},${rgbBlue}, 0.7)`;
    ctx1.fillRect(0, 0, 346, 570);

    var base_item = new Image();
    base_item.onload = function () {
        ctx1.drawImage(base_item,0,0,346,570); //おまえだったのかい！
    };
    base_item.src = imageDataPath;
  }
);












// var img = new Image();
// img.src = "img/body/avoter_sample.png";
// img.onload = function() {
//     ctx.drawImage(img, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
//     ctx.globalAlpha = 1.0;
// }


// var img2 = new Image();
// img2.src = "img/clothed_3d/全身_RC-N014-C01.png";
// img2.onload = function() {
//     ctx.drawImage(img2, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
//     // ctx.globalAlpha = 1.0;
// }


// 土台の白地部分
// ctx.fillStyle = 'rgba(242, 242, 242, 0.5)'; //色味と透過
// ctx.fillRect( 0 , 0 , 100 , 100);//サイズと場所



// // //この部分を画像にする
// var img2 = new Image();
// img2.src = "img/clothed_3d/RC-N012.png";
// img2.onload = function() {
//     ctx.drawImage(img2, 0,0,346,570); //いったんcanvas内の画像はこのサイズに統一
//     // ctx.globalAlpha = 1.0;

//   //上に重ねるレイヤーの焼き込み方法指定
//   ctx.globalCompositeOperation = "multiply";//乗算！！
//   ctx.fillStyle = 'rgb(32, 47, 85)';//色味と透過 乗算指定しているから透過させない
//   ctx.globalCompositeOperation = "source-atop";//重なったところだけ！！マスキング！
//   // 上に重ねるレイヤーの色味と透過指定
//   ctx.fillStyle = 'rgba(32,47, 85, 0.5)'; //色味と透過 
//   ctx.fillRect( 0 , 0 , 346 , 570); //サイズと場所
// }






