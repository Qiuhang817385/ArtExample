import express from 'express';
const app = new express();
app.use(express.static('public'));

app.listen(9999, () => {
  console.log('http:localhost:9999');
})