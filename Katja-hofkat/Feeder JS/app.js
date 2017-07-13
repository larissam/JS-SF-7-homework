/*
  Please add all Javascript code to this file.
  Katja Hofmann
  GA-SF-7
*/

$.ajax({
    url: "https://newsapi.org/v1/articles?source=techcrunch&apiKey=735d98ddaba641e68f8ad6a01723c299",
    data: {
        format: "json", 
    },
      
      
      
      success: function(response) {
        
        response.articles.forEach(function(newArticle){
            

            var placeholder = document.querySelector('#main');

            var newArticle = document.createElement('section');
            newArticle.innerHTML = $('.article').append('<section>').attr('src', response.articles[1].url);
            placeholder.parentNode.replaceChild(newArticle, placeholder);


          /*
            $('#main').append($('<section>').addClass('container'));
            $('.container').append('<article>').addClass('article');
            $('.article').append('<section>').attr('src', response.articles[1].url);

            
          
            console.log(response.articles[1].url);
            console.log(response.articles[1].title);
            console.log(response.articles[1].urlToImage);
            console.log(response.articles[1].description);
            */
         
    	});
        // console.log(response.articles[0].url);
     }
 })


$.ajax({
    url: "https://content.guardianapis.com/search?api-key=b77c769b-fdac-4d7f-9387-6ddf0afa27c3",
    data: {
        format: "json"
    },
    
    success: function (response) {
        console.log(response);
    }
  })



