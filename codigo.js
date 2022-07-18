function countdown(count) {
    let intervalo = setInterval(function () {
      count = count - 1;

    if (count > 0) {console.log(count);}

      if (count <= 0) {
        console.log("Done");

        clearInterval(intervalo);
      }
    }, 1000);
  }
  countdown(4);