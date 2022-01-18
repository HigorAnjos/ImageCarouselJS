let index = 0;

const show_image = (i) => {
  index += i;

  const images = document.getElementsByClassName("image");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (index > images.length - 1) {
    index = 0;
  }

  if (index < 0 ) {
    index = images.length - 1;
  }

  images[index].style.display = "block";
  dots[index].className += " active"
} 

show_image(index);