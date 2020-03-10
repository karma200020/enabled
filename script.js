$(function(){
$(document).keydown(function (e) {
var $activeLi = $(".active");
var $activeSec = $("section.active");
var $newactiveSec;
var $newActiveLi;
if (e.which == 70) {
  	// Up
    if($activeLi.length){
		$newActiveLi = $activeLi.prev();
    if(!$newActiveLi.length) {
    	$newActiveLi = $("li").last();
    }
  }
    else
    {
      $newactiveSec =  $activeSec.prev();
      if(!$newactiveSec.length)
      {
        $newactiveSec = $('section').last();
      }
    }
  } else if (e.which == 74) {
// Down
if($activeLi.length){
$newActiveLi = $activeLi.next();
if(!$newActiveLi.length) {
  $newActiveLi = $("li").first();
   }
}
else{
  $newActiveSec = $activeSec.next();
  if(!$newActiveSec.length) {
    $newActiveSec = $("section").first();
     }
 }
}
else if(e.which == 32)
{
  //var go_to_url = $activeSection.find('A').attr('href');
  document.location.href = "index.html";

}

else if(e.which == 13){
  var url_go_to = $('li.active').find('A').attr('href');
  document.location.href = url_go_to ;
}

$activeLi.removeClass("active");
$newActiveLi.addClass("active");
$activeSec.removeClass("active");
$newActiveSec.addClass("active");
scrollToObject($newActiveLi);
scrollToObject($newActiveSec);
e.preventDefault();
});
function scrollToObject(object) {
	$(window).scrollTop(object.offset().top)};
});
