$(document).ready(function() {
    Layout.init();


    $("#contato").submit(function(e) {

    var url = "email.php"; // the script where you handle the form input.

    $.ajax({
           type: "POST",
           url: url,
           data: $("#contato").serialize(), // serializes the form's elements.
           success: function(data)
           { 
                // if(data.indexOf('Erro') !== - 1){
                //   $('#feedback').css('color','#515769')
                // }else{
                //   $('#feedback').css('color','#FFFFFF')
                // }

              $('#feedback').hide().html(data).slideDown('slow'); // show response from the php script.
           }
         });

    e.preventDefault(); // avoid to execute the actual submit of the form.


  });

});