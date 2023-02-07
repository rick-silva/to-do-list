const express = require('express')

//nodemon é um server de desenvolvimento -> npm install nodemon --save-dev (instalado nas dependencias de desenvolvimento)

//todos os metodos do express estão armazenados e disponiveis no 'app'
const app = express()

//criação da rota 'raiz / '
app.get('/',(req,res) =>{
    //envia uma resposta
    res.send("<h1>Minhas Tarefas</h1>");
})

//o server vai ouvir a porta 3000 e executar a 'arrow function'  no seu inicio
app.listen(3000,()=>{
    console.log('Servidor Iniciado')
})