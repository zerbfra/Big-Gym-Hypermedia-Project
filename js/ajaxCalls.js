function getCategorie(callback){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getCategorie.php", //Relative or absolute path to file.php file
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
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getCorsi(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getCorsi.php", //Relative or absolute path to file.php file
        success: function(response) {

            var corsi=JSON.parse(response);

            var el='<div class="cardio_list">';
            for(var i=0;i<corsi.length-1;i++){

                el+='<div class="cardio_sublist"><ul class="cardio"><li><i class="clock"> </i><span>'+corsi[i].nome+'</span></li></ul>';
                el+='<div class="social-media"><ul><li> <span class="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li><li><span class="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li><li><span class="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li><li><span class="interactive_link simptip-position-bottom simptip-movable" data-tooltip="vedi"><a class="interactive_link" href="#single_class&'+corsi[i].id+'"> </a></span></li></ul>';

                el+='</div><div class="clear"></div></div>';

            }
            // last one (different css)

            el+='<div class="cardio_sublist_last"><ul class="cardio"><li><i class="clock"> </i><span>'+corsi[corsi.length-1].nome+'</span></li></ul>';
            el+='<div class="social-media"><ul><li> <span class="simptip-position-bottom simptip-movable" data-tooltip="timetable"><a href="#" target="_blank"> </a></span></li><li><span class="simptip-position-bottom simptip-movable" data-tooltip="Send to"><a href="#" target="_blank"> </a> </span></li><li><span class="simptip-position-bottom simptip-movable" data-tooltip="like it"><a href="#" target="_blank"> </a></span></li><li><span class="interactive_link simptip-position-bottom simptip-movable" data-tooltip="vedi"><a class="interactive_link" href="#single_class&'+corsi[corsi.length-1].id+'"> </a></span></li></ul>';

            el+='</div><div class="clear"></div></div>';

            el+='</div><div class="clear"></div>';

            $(".classes").html(el);
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


function getCorso(id,callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getCorso.php", //Relative or absolute path to file.php file
        data: {id:id},
        success: function(response) {


            var json=JSON.parse(response);
            var corso = json.info;
            var orari = json.times;
            var speciali = json.specials;


            nome = corso[0].nome;
            desc = corso[0].descrizione;
            istruttore = corso[0].istruttore;
            sala = corso[0].sala;

            var more  = '<h3 class="m_13">Istruttore e sala</h3><img src="images/s2.jpg" class="img-responsive" alt=""/><h4>'+istruttore+'<br><span class="m_text">Sala '+sala+'</span></h4>';

            $("#name").html(nome);
            $("#description").html(desc);
            $("#more").html(more);

            var el='';
            for(var i=0;i<orari.length;i++){
                el+='<li><i class="calender"></i><span class="week_class">'+orari[i].giorno+'</span><div class="hours_class">'+orari[i].orario+'</div><div class="clear"></div></li>';
            }

            $("#times").html(el);


            var el='';
            for(var i=0;i<speciali.length;i++){
                el+='<li>'+speciali[i].testo+'</li>';
            }

            $("#specials").html(el);

            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}
