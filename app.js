$(document).ready(function (){
    var subBtn = $('#submit-btn');

    subBtn.on('click', function(event){
     event.preventDefault();
     var newRow = $('<tr>');
     var name = $('<td>');
     var role = $('<td>');
     var startDate = $('<td>');
     var monthsWorked = $('<td>');
     var rate = $('<td>');
     var total = $('<td>');
     name.text($("#name").val());

     newRow.append(name);
     $('#tableBody').append(newRow);
      



    });





})