const http = require('http');

http
  .createServer((req, res) => {
    //BASIC RESPONSE IN THE APPLICATION
    // res.writeHead(401, { 'Content-Type': 'application/json' });
    // const object = {
    //   id: 1,
    //   name: 'objectName',
    // };
    // res.write(JSON.stringify(object));
    //BASIC RESPONSE IN THE APPLICATION FOR DOWNLOADING A FILE
    // res.setHeader('Content-Disposition', 'attachment; fileName=file.csv');
    // res.writeHead(200, { 'Content-Type': 'application/csv' });
    // res.write('id,name,money\n');
    // res.write('1,name1,money1\n');
    // res.write('2,name2,money2\n');
    // res.write('3,name3,money3\n');
    // res.end();
  })
  .listen(3000);

console.log('asdwadwa');
