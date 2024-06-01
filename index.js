var weather=prompt("Check Your Area Weather Here:cold,rainy,sunny,snow.")
if(weather=="cold"){
    document.write(
     "<div class='card one mx-auto' style='width: 12rem;'>" +
    "<img src='./image/img1.png' class='card-img-top w-75 two w-25' alt='...'>" +
    "<div class='card-body'>" +
      "<h5 class='card-title three'>" + "Cold" + "</h5>" +
      "<p class='card-text three'>" + "Today Is Very Cold Weather." + "</p>" +
    "</div>" +
  "</div>"
  );
    }
  else if(weather=="rainy"){
    document.write(
     "<div class='card one mx-auto ' style='width: 12rem;'>" +
    "<img src='./image/img2.png' class='card-img-top w-75 two' alt='...'>" +
    "<div class='card-body'>" +
      "<h5 class='card-title three'>" + "Rainy" + "</h5>" +
      "<p class='card-text three'>" + "Today Is Rainny Weather." + "</p>" +
    "</div>" +
  "</div>"
  );
    }
    else if(weather=="sunny"){
    document.write(
     "<div class='card one mx-auto' style='width: 12rem;'>" +
    "<img src='./image/img3.png' class='card-img-top w-75 two' alt='...'>" +
    "<div class='card-body'>" +
      "<h5 class='card-title three'>" + "Sunny" + "</h5>" +
      "<p class='card-text three'>" + "Today Is Very Sunnny Weather." + "</p>" +
    "</div>" +
  "</div>"
  );
    }
    else if(weather=="snow"){
      document.write(
       "<div class='card one mx-auto' style='width: 12rem;'>" +
      "<img src='./image/img4.png' class='card-img-top w-75 two' alt='...'>" +
      "<div class='card-body'>" +
        "<h5 class='card-title three'>" + "Sunny" + "</h5>" +
        "<p class='card-text three'>" + "Today Is Very Snowy Weather." + "</p>" +
      "</div>" +
    "</div>"
    );
      }
else {
  document.write(
   "<div class='card one mx-auto' style='width: 12rem;'>" +
  "<img src='./image/img5.png' class='card-img-top w-75 two' alt='...'>" +
  "<div class='card-body'>" +
    "<h5 class='card-title three'>" + "Not a Weather" + "</h5>" +
    "<p class='card-text three'>" + "Sorry not a Weather." + "</p>" +
  "</div>" +
"</div>"
);
  }
