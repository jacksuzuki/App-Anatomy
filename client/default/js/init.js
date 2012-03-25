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
      $("#myimg").attr('src', res.photo);
    },
  function(msg, err){
    console.log("error"+msg);
    }
  );

});



