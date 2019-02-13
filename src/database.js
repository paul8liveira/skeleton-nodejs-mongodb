import mongoose from 'mongoose';
import config from 'config';

//implementar mysql e colocar uma env var para essa classe decidir qual bd vai utilizar

//aqui é definido o padrão do mongoose como Pormise do Node
mongoose.Promise = Promise;

//trocar DATABASE pelo nome do banco local
const mongodbUrl = config.get('DATABASE.MONGO_URL');

/*função que retorna uma conexão com o MongoDB, esse retorno é uma Promise,
ou seja, somente quando a conexão for estabelecida a Promise será resolvida. Isso é importante pois
precisamos garantir que nossa aplicação só vai estar disponível depois que o banco de dados estiver
conectado e acessível*/
const connect = () => mongoose.connect(mongodbUrl, { useNewUrlParser: true });

export default {
    connect
}