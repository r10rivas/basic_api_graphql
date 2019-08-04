import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();



// Settings
app.set('port', process.env.PORT || 3000);



// Routes
app.get('/', (req, res) => {
   res.json({
     hola: 'chao'
   });
});



// Middlewares
// const schema = {};

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema,
}));



// Function main app
const main = async () => {
  await app.listen(app.get('port'));
  console.log(`Server started on ${app.get('port')}`);
}

main();
