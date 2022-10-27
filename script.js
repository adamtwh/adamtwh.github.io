$(function () { 
    count = 0; 
    wordsArray = ["painters", "plumbers", "electricians", "movers", "contractors", "technicians"]; 
    setInterval(function () { 
      count++; 
      $("#tagline").fadeOut(1000, function () { 
        $(this).text(wordsArray[count % wordsArray.length]).fadeIn(1000); 
      }); 
    }, 3000); 
  });