$(document).ready(function (){
    var config = {
        apiKey: "AIzaSyCd3D9XlAFhnLC8FEwBPSFZvqm51OMDWdc",
        authDomain: "employee-data-b2424.firebaseapp.com",
        databaseURL: "https://employee-data-b2424.firebaseio.com",
        projectId: "employee-data-b2424",
        storageBucket: "employee-data-b2424.appspot.com",
        messagingSenderId: "280828306528"
      };
      firebase.initializeApp(config);

     var database = firebase.database(); 
     var name = "";
     var role = "";
     var date = "";
     var rate = "";



    $("#submit-btn").on('click', function(event){
    event.preventDefault();
    
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    date = $("#startDate").val().trim();
    rate = $("#rate").val().trim();
    console.log(name);
    
    
    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
     
    
    
    
    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
        
        var namedata = $('<td>');
        var roledata = $('<td>');
        var startDate = $('<td>');
        var monthsWorked = $('<td>');
        var ratedata = $('<td>');
        var total = $('<td>');
        var newRow = $('<tr>');
                //  name.text($("#name").val());
        //  role.text($("#name").val());
        //  startDate.text($("#name").val());
        //  rate.text($("#name").val());
         monthsWorked.text("empty");
         total.text("empty");
        namedata.text(snapshot.val().name);
        roledata.text(snapshot.val().role);
        startDate.text(snapshot.val().date);
        ratedata.text(snapshot.val().rate);

        newRow.append(namedata);
        newRow.append(roledata);
        newRow.append(startDate);
        newRow.append(monthsWorked);
        newRow.append(ratedata);
        newRow.append(total);
        $('#tableBody').append(newRow);
        
    });
});

var randomdate = "08/28/1980";
var randomFormat = "MM/DD/YYY";
var convertedDate = moment(randomdate, randomFormat);



// database.ref().on("child_added", function(childsnapshot){
//     console.log(childsnapshot.val());
//     namedata.text(childsnapshot.val().name);


    // });





})