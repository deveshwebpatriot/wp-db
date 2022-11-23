 module.exports ={
    "*/1 * * * *":{
        task:async ()=>{
          try {
            
            

            const blogToBePublished=await strapi.entityService.findMany('api::blog.blog', {
                filters: { 
                    publishedAt: { $null: true },
                    publish_date: { $lt: new Date() }, 
                },
            
            });
 
            await Promise.all(blogToBePublished.map(blog => {
                return strapi.entityService.update('api::blog.blog', blog.id , {
                    data: {
                        publishedAt: new Date(),
                        status:"Publish"
                    },
                });
            }));
          } catch (error) {
            console.log(error)
          }
        },
        options:{
            tz:'IST'
        }
    }
 }