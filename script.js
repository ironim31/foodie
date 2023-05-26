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
        // imgRes に　URLを追加する
        let imgRes = $(`<img class="meals_img" src=${mealsImg}>`);
        // imgRes を兄弟に合わせる
        
        

        
        //  name strMealを取得
        console.log(meals.strMeal);
        let mealsName = meals.strMeal;
        console.log(mealsName);
        let NameRes = $(`<h2> ${mealsName}</h2>`);
        NameRes.insertBefore("#btn");

        //  video strYoutubeを取得
        console.log(meals.strYoutube);
        let mealsVideo = meals.strYoutube;
        console.log(mealsVideo);
        let VideoRes =  $(`<a href="${mealsVideo}">作り方はこちら</a>`);
        VideoRes.insertBefore("#btn");
        $('.res').append($(imgRes),$(NameRes),$(VideoRes));
        


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