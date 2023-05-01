export const displayMessage = (name) => { 
  console.log('Entering the function');

  const h2 = document.createElement('h2')
  h2.innerText= `My name is ${name}`;

  document.body.append(h2);
 }