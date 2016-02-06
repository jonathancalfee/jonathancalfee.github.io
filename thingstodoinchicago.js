
$(document).ready(function() {
  $(".btn").on("click", addItem);
  $("ol").on("click", ".link-delete", deleteItem);
});
function addItem() {
  var text = window.prompt("Things I want to do while in Chicago");
  var delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  var numItems = $("li").length;
  if (numItems == 1) {
    $(".total").html(numItems + " item");
  }
  else {
    $(".total").html(numItems + " items");
  }
}
function deleteItem(event) {
  console.info(event);
  $(event.target).parent().fadeOut();

}
