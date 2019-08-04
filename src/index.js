// const express = require('express');

import express from 'express';
import graphqlHTTP from 'express-graphql';

const app = express();

app.get('/', (req, res) => {
   res.json({
     hola: 'chao'
   });
});

app.use('/graphql', graphqlHTTP({

}));

app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
