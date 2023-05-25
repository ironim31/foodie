$(function(){
    // console.log('helo');

    // ここから非同期通信
    $.ajax({
        url: 'アクセスするURL', //アクセスするURL
        type: 'postかget',    //post or get
        cache: false,        //cacheを使うか使わないかを設定
        dataType:'json',     //data type script・xmlDocument・jsonなど
        data:data,           //アクセスするときに必要なデータを記載      
      })
      .done(function(response) { 
         //通信成功時の処理
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