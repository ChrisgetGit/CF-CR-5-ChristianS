var mydata = JSON.parse(data);
console.log(mydata);




for (i = 0; i < mydata.length; i++) {
    var number= i;
    var pic = `<div class = "container movie-container col-11 col-sm-9 col-md-5 col-lg-3">
          <div class = "row">
            <div class = "col-6 picture">
              <img class="card-img-top movie-img" src= `+mydata[i].img +` alt="Card image cap">
              
              </div>
              <div class = "col-6 text">
                <p class = "movie-name">`+mydata[i].name +`</p>
                <p>`+mydata[i].description +`</p>
                              
                  <div class= "row justify-content-end m-1 like-row">
                    <button me ="`+number+`" type="button" class= "like-button ">
                      <span class="glyphicon glyphicon-thumbs-up"></span><span id= "like"> like</span>
                    </button>
                    <div class="circle ml-1">
                      <div>`+mydata[i].quantity +`</div> 
                    </div>
                  </div>
                </div>
            </div>
          </div>`
  $(".startrow").append(pic);  
 }


 $(document).ready(function(){
  $(".like-button").on("click", function(){
    var index = $(this).attr("me");
    mydata[index].quantity += 1;
    $(this).parent().find(".circle").html(mydata[index].quantity);
  })
 });


 $(document).ready(function(){
    $(".sort-it-ascending").on("click", function(){
    mydata.sort(function(a, b){
      return a.quantity-b.quantity
    });

    console.log(mydata);  


    $(".movie-container").css({"display": "none"});
    
    for (i = 0; i < mydata.length; i++) {
    var number= i;
    var pic = `<div class = "container movie-container col-12 col-sm-11 col-md-5 col-lg-3 sorted offset-1">
          <div class = "row">
            <div class = "col-6 picture">
              <img class="card-img-top movie-img" src= `+mydata[i].img +` alt="Card image cap">
              
              </div>
              <div class = "col-6 text">
                <p class = "movie-name">`+mydata[i].name +`</p>
                <p>`+mydata[i].description +`</p>
                              
                  <div class= "row justify-content-end m-1 pt-5">
                    <button me ="`+number+`" type="button" class= "like-button ">
                      <span class="glyphicon glyphicon-thumbs-up"></span><span id= "like"> like</span>
                    </button>
                    <div class="circle ml-1">
                      <div>`+mydata[i].quantity +`</div> 
                    </div>
                  </div>
                </div>
            </div>
          </div>`
  $(".startrow").append(pic);  
 }

 $(document).ready(function(){
  $(".like-button").on("click", function(){
    var index = $(this).attr("me");
    mydata[index].quantity += 1;
    $(this).parent().find(".circle").html(mydata[index].quantity);
  })
 });

})
});




 $(document).ready(function(){
  $(".sort-it-descending").on("click", function(){
    mydata.sort(function(a, b){
      return b.quantity-a.quantity
    });
    console.log(mydata);
        $(".movie-container").css({"display": "none"});
    
    for (i = 0; i < mydata.length; i++) {
    var number= i;
    var pic = `<div class = "container movie-container col-11 col-sm-9 col-md-5 col-lg-3 sorted">
          <div class = "row">
            <div class = "col-6 picture">
              <img class="card-img-top movie-img" src= `+mydata[i].img +` alt="Card image cap">
              
              </div>
              <div class = "col-6 text">
                <p class = "movie-name">`+mydata[i].name +`</p>
                <p>`+mydata[i].description +`</p>
                             
                  <div class= "row justify-content-end m-1 pt-5">
                    <button me ="`+number+`" type="button" class= "like-button ">
                      <span class="glyphicon glyphicon-thumbs-up"></span><span id= "like"> like</span>
                    </button>
                    <div class="circle ml-1">
                      <div>`+mydata[i].quantity +`</div> 
                    </div>
                  </div>
                </div>
            </div>
          </div>`
  $(".startrow").append(pic);  
 }

 $(document).ready(function(){
  $(".like-button").on("click", function(){
    var index = $(this).attr("me");
    mydata[index].quantity += 1;
    $(this).parent().find(".circle").html(mydata[index].quantity);
  })
 });
})
}); 