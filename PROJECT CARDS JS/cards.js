let names = ['raz','rama','roaa','reem'];
let ages = ['18 years old','19 years old','20 years old','21 years old'];

let container = document.createElement('div');
document.body.appendChild(container);
container.style.textAlign = 'center';
function element(name,ages)
{
     //elements ( card, name , age , img )

     let card = document.createElement('div');
     let title = document.createElement("h2");
     let age = document.createElement("p");
     let img = document.createElement('img');

     //content ( what i want to add as a content by JS )

     let head = document.createTextNode(name);
     let agecontent = document.createTextNode(ages);
     

     // to add the content inside the parents :

     img.src = 'raz.jpg';
     title.appendChild(head);
     age.appendChild(agecontent);
    


     // style :
     card.style.width = '200px';
     card.style.background = '#444';
     card.style.color = '#fff';
     card.style.padding = '10px';
     card.style.margin = '2px';
    card.style.display = 'inline-block';




     img.style.width = '100%';



     // الترتيب مهم في هاي الحالة وممكن اغيره 
     card.appendChild(title);
     card.appendChild(age);
     card.appendChild(img);

     container.appendChild(card);

}
for(let i = 0; i<4; i++)
{
  element(names[i], ages[i]);

}
