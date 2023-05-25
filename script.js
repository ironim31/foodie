$(function(){
    // console.log('helo');
    $('#btn').on('click',function(){
    // ここから非同期通信
    $.ajax({
        url: 'https://www.themealdb.com/api/json/v1/1/random.php', //アクセスするURL
        type: 'get',    //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType:'json',     //data type script・xmlDocument・jsonなど  
      })
      .done(function(response) { 
         //通信成功時の処理
         console.log(response);
        //  mealsImg strMealThumbをとってくる
        console.log(response.meals[0]);
        let meals = response.meals[0];
        console.log(meals.strMealThumb);
        let mealsImg = meals.strMealThumb;
        // imgタグDOM取得
        let imgRes = $(`<img class="meals_img" src=${mealsImg}>`);
        // imgRes を兄弟に合わせる
        imgRes.insertBefore("#btn");
        // imgRes に　URLを追加する

        
        //  name
        //  video
         //成功したとき実行したいスクリプトを記載
      })
      .fail(function(xhr) {  
         //通信失敗時の処理
         //失敗したときに実行したいスクリプトを記載
      })
      .always(function(xhr, msg) { 
        //通信完了時の処理
        //結果に関わらず実行したいスクリプトを記載
   });   
})
})