$fh.ready(function () {
  
  /*
  $fh.act({
    act: "getPhoto",
    req: {}    
    },
  function(res){
    console.log("success"+res);
      $("#myimg").attr('src', res.photo);
    },
  function(msg, err){
    console.log("error"+msg);
     $("#myimg").attr('src',"hoge");
    }
  );
  */
  
    $fh.act({
    act: "getPhoto",
    req: {}    
    },
  function(res){
    console.log("success"+res);
      prepare_picture(res.access_token);
    },
  function(msg, err){
    console.log("error"+msg);
    }
  );
  
  function prepare_picture(access_token){
    $.ajax({
  url: "https://graph.facebook.com/me/home?access_token="+access_token,
  cache: false,
  success: function(json){
    console.log("success"+json);
  }  
  });
  }

});



