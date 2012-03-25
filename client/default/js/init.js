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
    act: "getAccessToken",
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
    
  }

});



