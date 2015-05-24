function getCategorie(){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/big_gym/getCategorie.php", //Relative or absolute path to file.php file
        data: {course:id},
        success: function(response) {

            var categorie=JSON.parse(response);
            var el="";
            for(var i=0;i<categorie.length;i++){

                if(i%2==0)  {
                    el+='<div class="row class_box">';

                    el+='<div class="col-md-6"><div class="class_right"><h3>'+categorie[i].nome+'</h3><p>'+categorie[i].descrizione+'</p>';
                    el+='<ul class="buttons_class"><li class="btn5"><a href="#">Descrizione</a></li><li class="btn6"><a href="#">Corsi</a></li></ul><div class="clear"></div><div class="clear"></div></div></div>';


                } else {

                    el+='<div class="col-md-6"><div class="class_right1"><h3>'+categorie[i].nome+'</h3><p>'+categorie[i].descrizione+'</p>';
                    el+='<ul class="buttons_class"><li class="btn7"><a href="#">Descrizione</a></li><li class="btn8"><a href="#">Corsi</a></li></ul><div class="clear"></div><div class="clear"></div></div></div>';

                    el+='</div>';
                }

            }

            $(".classes_wrapper").html(el);
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}
