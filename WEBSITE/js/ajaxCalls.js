/*
 * Big Gym: HYP Project 2014-15
 * ajaxCalls.js
 * Set of functions to retrieve data from database fetched via php
 * Author: Zerbinati Francesco
 */

// retrieve list of categories from the db
function getCategorie(callback){
    console.log("I'm ready!");
    var id=1;

    $.ajax({
        method: "POST",
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
                    el+='<ul class="buttons_class"><li class="btn5"><a href="#">Descrizione</a></li><li class="btn6"><a class="interactive_link" href="#classes_cat&'+categorie[i].id+'">Corsi</a></li></ul><div class="clear"></div><div class="clear"></div></div></div>';


                } else {

                    el+='<div class="col-md-6"><div class="class_right1"><h3>'+categorie[i].nome+'</h3><p>'+categorie[i].descrizione+'</p>';
                    el+='<ul class="buttons_class"><li class="btn7"><a href="#">Descrizione</a></li><li class="btn8"><a class="interactive_link" href="#classes_cat&'+categorie[i].id+'">Corsi</a></li></ul><div class="clear"></div><div class="clear"></div></div></div>';

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

// retrieve courses given a category (category param)
function getCorsiCat(category,callback) {

    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getCorsi.php", //Relative or absolute path to file.php file
        data: {cat:category},
        success: function(response) {

            var corsi=JSON.parse(response);

            var el='<div class="cardio_list">';
            for(var i=0;i<corsi.length-1;i++){

                var toPrint = corsi[i];
                el += drawEntryCorso(false,toPrint);

            }
            // last one (different css)
            var toPrint = corsi[corsi.length-1];
            el +=drawEntryCorso(true,toPrint);

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

// get all the courses
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

                var toPrint = corsi[i];
                el += drawEntryCorso(false,toPrint);

            }
            // last one (different css)

            // last one (different css)
            var toPrint = corsi[corsi.length-1];
            el +=drawEntryCorso(true,toPrint);

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

// get courses organized by levels (param "lvl" set to 1)
function getCorsiPerLivello(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getCorsi.php", //Relative or absolute path to file.php file
        data: {lvl:'1'},
        success: function(response) {

            var json=JSON.parse(response);
            var base = json.base;
            var medio = json.medio;
            var avanzato = json.avanzato;

            // ***** BASE *********//
            var elBase='<div class="cardio_list">';
            for(var i=0;i<base.length-1;i++){
                var toPrint = base[i];
                elBase += drawEntryCorso(false,toPrint);
            }
            // last one (different css)
            var toPrint = base[base.length-1];
            elBase +=drawEntryCorso(true,toPrint);
            elBase+='</div><div class="clear"></div>';

            // ***** MEDIO *********//
            var elMedio='<div class="cardio_list">';
            for(var i=0;i<medio.length-1;i++){
                var toPrint = medio[i];
                elMedio += drawEntryCorso(false,toPrint);
            }
            // last one (different css)
            var toPrint = medio[medio.length-1];
            elMedio +=drawEntryCorso(true,toPrint);
            elMedio+='</div><div class="clear"></div>';

            // ***** AVANZATO *********//
            var elAvanzato='<div class="cardio_list">';
            for(var i=0;i<avanzato.length-1;i++){
                var toPrint = avanzato[i];
                elAvanzato += drawEntryCorso(false,toPrint);
            }
            // last one (different css)
            var toPrint = avanzato[avanzato.length-1];
            elAvanzato +=drawEntryCorso(true,toPrint);
            elAvanzato+='</div><div class="clear"></div>';


            // FINITO, CARICO TUTTO NELLE VARIE DIV
            $("#base").html(elBase);
            $("#medio").html(elMedio);
            $("#avanzato").html(elAvanzato);

            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}

// get a specific course based on the id
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

            var istruttore = json.trainer;

            immagine = corso[0].immagine;
            nome = corso[0].nome;
            desc = corso[0].descrizione;
            sala = corso[0].sala;

            var more  = '<h3 class="m_13">Istruttore e sala</h3><a href="#single_trainer&'+istruttore[0].id+'" class="interactive_link"><img src="images/'+istruttore[0].img_small+'" class="img-responsive" alt=""/><h4>'+istruttore[0].nome+'</a><br><span class="m_text">Sala '+sala+'</span></h4>';

            var image = '<img src="images/'+immagine+'" alt=""/>';

            $("#name").html(nome);
            $("#description").html(desc);
            $("#more").html(more);
            $("#course_img").html(image)

            var el='';
            for(var i=0;i<orari.length;i++){
                el+='<li><span class="week_class"><i class="fa fa-calendar"></i>&nbsp;&nbsp;&nbsp;'+orari[i].giorno+'</span><div class="hours_class">'+orari[i].orario+'</div><div class="clear"></div></li>';
            }

            $("#times").html(el);


            var el='';
            for(var i=0;i<speciali.length;i++){
                el+='<li><i class="fa fa-arrow-circle-right"></i>&nbsp;&nbsp;&nbsp;'+speciali[i].testo+'</li>';
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

// get all the trainers
function getIstruttori(callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getIstruttori.php", //Relative or absolute path to file.php file
        success: function(response) {

            var istruttori=JSON.parse(response);
            console.log(istruttori);
            var el='';
            for(var i=0;i<istruttori.length;i++){

                    el+='<div class="col-md-4"><div class="box2"><div class="box1_left">';
                    el+='<a href="#single_trainer&'+istruttori[i].id+'" class="interactive_link"><img src="images/'+istruttori[i].img_small+'" class="img-responsive img-center" alt=""/></a>';
                    el+='<div class="desc2"><h3>'+istruttori[i].nome+'<br><span class="m_text">'+istruttori[i].specialita+'</span></h3>';
                    el+='<div class="clear"></div></div></div>';
                    el+='<div class="box1_right">'+istruttori[i].intro+'</div><div class="clear"></div></div></div>';
            }
            el+='<div class="clear"></div>';

            $("#trainers_wrapper").html(el);
            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}

// get one specific trainer by id
function getIstruttore(id,callback){
    console.log("I'm ready!");

    $.ajax({
        method: "POST",
        //dataType: "json", //type of data
        crossDomain: true, //localhost purposes
        url: "http://zerbinatifrancesco.it/hypermedia/php/getIstruttore.php", //Relative or absolute path to file.php file
        data: {id:id},
        success: function(response) {


            var json=JSON.parse(response);
            var istruttore = json.info;
            var corsi = json.courses;
            var num_istruttori = parseInt(json.num_istruttori[0].totali);

            nome = istruttore[0].nome;
            specialita = istruttore[0].specialita;
            desc = istruttore[0].descrizione;
            awards = istruttore[0].awards_html;
            qualifiche = istruttore[0].qualifiche_html;
            immagine = istruttore[0].img;

            var top ='<h1 class="m_11">ISTRUTTORI<span class="class_1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; '+nome+'</span></h1>';
            var info = '<h4>'+nome+'<br><span class="m_text">'+specialita+'</span></h4><p>'+desc+'</p>';

            var image = '<img src="images/'+immagine+'" alt=""/>';


            var el='<ul class="blog-list"><h4>Corsi</h4>';
            for(var i=0;i<corsi.length;i++){
                el+='<li><a class="interactive_link" href="#single_class&'+corsi[i].id+'"><i class="fa fa-chevron-right"></i>&nbsp;'+corsi[i].nome+'</a></li>';
            }
            el+='</ul>';

            idInt = parseInt(id);
            next = idInt+1;
            prev = idInt-1;

            // manage the gt links: limits
            if(next == num_istruttori+1) next = 1;
            if(prev == 0) prev = num_istruttori;

            var gt = '<ul class="gt-list">';
            gt+= '<a href="#single_trainer&'+prev+'" class="interactive_link"><li class="gt_but">Precedente</li></a>';
            gt+=  '<a href="#single_trainer&'+next+'" class="interactive_link"> <li class="gt_but">Successivo</li></a>';
            gt+='</ul>';

            $('.about_banner_wrap').html(top);
            $('#info').html(info);
            $("#awards").html(awards);
            $("#qual").html(qualifiche);
            $('#courses').html(el);
            $('#trainer_img').html(image);
            $('#pulsanti').html(gt);

            callback();
        },
        error: function(request,error)
        {
            console.log("Error");
        }
    });

}


/***** DRAWING FUNCTIONS *******/

// draw the entry for one course, if last it has a different design
function drawEntryCorso(last,object) {
    var el ='';

    // non è ultimo
    if(last == false) {
        el+='<div class="cardio_sublist"><ul class="cardio"><li><span><i class="fa fa-clock-o"></i>&nbsp;&nbsp;&nbsp;'+object.nome+'</span></li></ul>';
        el+='<div class="social-media"><ul><li><span class="badge" style="background-color:#00bff0; color:#fff">'+object.livello+'</span></li><li><a class="interactive_link" href="#single_class&'+object.id+'"><span class="badge" style="background-color:#fff; color:#00bff0">Vedi</span></a></li></ul>';
        el+='</div><div class="clear"></div></div>';

    } else {

        el+='<div class="cardio_sublist_last"><ul class="cardio"><li><i class="clock"> </i><span>'+object.nome+'</span></li></ul>';
        el+='<div class="social-media"><ul><li><span class="badge" style="background-color:#00bff0; color:#fff">'+object.livello+'</span></li><li><a class="interactive_link" href="#single_class&'+object.id+'"><span class="badge" style="background-color:#fff; color:#00bff0">Vedi</span></a></li></ul>';
        el+='</div><div class="clear"></div></div>';

    }

    return el;

}
