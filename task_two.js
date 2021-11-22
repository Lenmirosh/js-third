document.write(`Задача 2`);
        
    for (let j = 0; j < array.length; j++) 
        {
         if (j % 3 != 0) {
            continue
                         };
document.write(`<div class = "gold">${array[j]}</div>`);
        }
  