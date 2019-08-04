import mongoose from "mongoose";

const connect = async () =>{
  try {
    await mongoose.connect(
      'mongodb://localhost/basic_api_graphql',
      {useNewUrlParser: true}
    );
    console.log( '>> DataBase connected' );
  } catch(e) {
    console.error( 'Something goes wrong!' );
    console.log( e );
  }
}

export default connect;
