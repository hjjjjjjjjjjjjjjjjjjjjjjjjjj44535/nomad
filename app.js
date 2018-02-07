function hello(name) {
  alert("hello" + name + "!");
}

var potato = prompt("Whats your name");

if (potato === "" || potato === null) {
  alert("Please put sth there!");
  window.location.reload();
} else if (potato.length < 2) {
  alert("Too short");
  window.location.reload();
} else {
  hello(potato);
}

var heart = $("#heart");

heart.on("click", function() {
  $(this).removeClass("far");
  $(this).addClass("fa clicked-heart");
});
