$(document).ready(function() {

    $("#contact-form").validate({
        errorClass:'error',
        rules:{

            name1:{
                required:true,
                minlength:3
               
            },
            place:{
                minlength:4
            },
            email1:{
                required:true,
                email:true
            },
            mob:{
required:true,
number:true,
minlength:10
            }
        }
    
    })
    
})