const db = require('./db');
const saveOrphanage = require('./saveOrphanage');

db.then(async db => {

  await saveOrphanage(db, {
    lat: "54.9653768",
    lng: "-7.7494357",
    name: "San Vincent II",
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In quis, nulla aspernatur id cum dolore odit alias odio illo voluptatem aperiam nisi unde, sunt veritatis nobis obcaecati incidunt ipsa vero.",
    whatsapp: "555-321654",
    images: [
      "https://images.unsplash.com/photo-1597553954309-30454e8502f9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "https://images.unsplash.com/photo-1576883600124-64c5aa68b4bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: 
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    opening_hours: 
    "Visiting hours from 18h to 8h",
    open_on_weekends: "1"
  });

  const selected = await db.all("SELECT * FROM orphanages");
  console.log(selected);

});