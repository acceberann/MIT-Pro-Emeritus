//Set global variable that would contain the position, velocity and the html element "ball"
const ball = document.getElementById("ball");
const velocity = 100;
let positionX = 0;
let positionY = 0;
let reverse = false;

//write a function that can change the position of the html element "ball"

function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  const Xmin = 0;
  const Xmax = 300;

  // two y-axis coordinates

  const Ymin = 0;
  const Ymax = 300;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
  }
  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';

 if (positionX > Xmax || positionX === Xmin || positionY > Ymax || positionY === 0) {
    reverse = !reverse;
  }

}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
