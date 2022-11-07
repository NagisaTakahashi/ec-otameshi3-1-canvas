//★このJSファイルでは、カラー描画関連を記述★

// alert(1111);


//以下、カラーを表示分けするための配列定義

var color_list= [
  {"colornum":"01","colorname":"NVY","color_code":"3A3A49","RGB":"58,58,73",},
  {"colornum":"02","colorname":"KKI","color_code":"5D6402","RGB":"93,100,2",},
  {"colornum":"03","colorname":"LIME","color_code":"CFE375","RGB":"207,207,117",},
  {"colornum":"04","colorname":"PPL","color_code":"C20F7C","RGB":"194,15,124",},
  {"colornum":"05","colorname":"RED","color_code":"F32359","RGB":"243,35,89",},
  {"colornum":"06","colorname":"MNT","color_code":"CBF1EF","RGB":"203,241,239",},
];


//上記のカラー定義から、カラーのサムネイルと、カラー名表記に代入して画面上で表示
for( let A = 0 ; A < color_list.length ; A ++ ){
  $(`#color_${color_list[A].colornum}`).css("background-color",`#${color_list[A].color_code}`);
  $(`#colorname_${color_list[A].colornum}`).text(color_list[A].colorname);
}

