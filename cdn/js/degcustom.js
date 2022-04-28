function coursefilter()

{

  var course = $("#course").find('option:selected').text(); // stores province

  $("#option-container").children().appendTo("#branch"); // moves <option> contained in #option-container back to their <select>

  var toMove = $("#branch").children("[data-course!='"+course+"']"); // selects city elements to move out

  toMove.appendTo("#option-container"); // moves city elements in #option-container

  $("#branch").removeAttr("disabled"); // enables select

};









// new funtion











$(document).ready(function () {

  toggleFields(); // call this first so we start out with the correct visibility depending on the selected form values

  // this will call our toggleFields function every time the selection value of our other field changes

  $("#maintype").change(function () {

      toggleFields();

  });



});

// this toggles the visibility of other server

function toggleFields() {

if ($("#maintype").val() === "questionpapers")

      $("#questionpapers").show();

else

      $("#questionpapers").hide();

};











$(document).ready(function(){

  

  var url = "/";

  

    $("#maintype").change(function(){

        var value = $('#maintype').val();

    if (value === "Officalsite")  {window.location.href = "https://mu.ac.in/";}

    if (value === "playstore")  {window.location.href = "http://bit.do/mu-qp";}
    
    if (value === "bcommsyllabus")  {window.location.href = "./BCOMM-syllabus.html";}

    if (value === "engdegreesyllabus")  {window.location.href = "./Engg-syllabus.html";}
    
    if (value === "cgpipercentcalc") {window.location.href = "/tools/CGPI-Calculator-Engg.html";}
    })

    $("#branch").change(function(){var value = $('#branch').val();if (value !== "noselect"){window.location.href = url+value;}})



	

	

});