// structure handlebars string 
 const myInfo = "<p>This is my info {{name}}, {{street}}, {{city}}, {{state}}.</p>";
  // Javascript function that will generate the output string
  // join the js with the html to keep everything seperated from itself
 const template = Handlebars.compile(myInfo);
//  create the data and define everything to place in the container
 const data = template({name: "user name", street: "222 main St", city: "san Francisco", state: "california"});
//  place it into the container div
document.querySelector('.container').innerHTML = data;
