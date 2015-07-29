$(function(){

$.ajax({
url: 'https://api.github.com/search/repositories?q=php',
method: 'GET',
success: function(data){
	var giveIt = data.items;

 

 for(i = 0; i < giveIt.length; i ++){
  var url = giveIt[i].git_url
  document.write(url + '</br>')
} 
	}
	


});
});

