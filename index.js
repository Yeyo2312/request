const express = require('express')

const app = express()

app.get('/:user/:password',(req,res)=>{

    const {user,password} = req.params

    if(user=== 'Diego' && password ==='123'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }


    res.status(404).json({msg: 'Error en el usuario o contraseña'})
})







app.post('/',(request,response)=>{
    response.json({msg:'Hola Post'})
})
app.put('/',(request,response)=>{
    response.jsom({msg:'Hola Put'})
})
app.patch('/',(request,response)=>{
    response.json({msg:'Hola Patch'})
})
app.delete('/',(request,response)=>{
    response.json({msg:'Hola delete'})
})

/*
*
*
*     FUNCIONALIDAD   http://localhost:3000/Rogelio/123
*
*/


app.listen(3000,()=>{
    console.log('listening on port 3000')
})