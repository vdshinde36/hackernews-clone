var app = require('../app');


var port = process.env.PORT || 3000;


app.listen(port,()=>{
  console.log(`[Server is Stared On ${port}]`);
});



