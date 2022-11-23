module.exports={
    async afterCreate(event){
        const {result} =event;
        console.log(result)

        try{
            await strapi.plugins['email'].services.email.send({
                to:`${result.email}`,
            
                from:'devesh.webpatriot@gmail.com',
                subject:"feedback",
                html:`<p>${result.request_message}</p>
            
                <img src='https://avatars.githubusercontent.com/u/71995793?v=4' alt="Trulli" width="500" height="333" />
                `,
              
            })
            
        }
        catch(error){
           console.log(error.message)
        }
    }
}