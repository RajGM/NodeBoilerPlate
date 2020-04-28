module.exports = {
    
    home:function(request,response){
        return response.status(200).render('home',{
            title:"Home check"
        });
    },

    contactUs:function(request,response){
        return response.status(200).render('contactus',{
            title:"Contact Us"
        });
    }
}