
$(function(){
  //get dom
  var $width  = $('#width'),
      $height = $('#height');
  var $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');
  /*calc button click event*/
  $btnCal.click(function(){
    var w = Number($width.val()),
        h = Number($height.val());
  
    var p = 2*(w+h),
        a = w*h;
  
    $perimeter.val(p);
    $area.val(a);
  });
});
