//get value from form 
$("#submit").submit(function(event){
	event.preventDefault();
	
//encode submital	
var submit = document.getElementById('submittal').value;

submit = encodeURI(submit)

// Submit request and return results from API
$.ajax({
url: 'https://api.github.com/search/repositories?q=' + submit,
method: 'GET',
success: function(data){
	var subArray = data.items;

	for(i = 0; i < subArray.length; i ++){
  	var RepoName = subArray[i].full_name;
  	//refactor if RepoOwner is undefined omit entry
  	var RepoOwner = subArray[i].login
  	var RepoUrl = subArray[i].html_url;
  	var RepoDescript = subArray[i].description;
  	
  	//Append DOM
  	$('.results').append('<h5>' + RepoName + '</h5>' + ' by ' + RepoOwner + '<br>' + RepoDescript + '<br>' + '<a href="' + RepoUrl + '">' + RepoUrl + '</a>' + '<br>' + '<hr />')
  	
  }; 

	}
	


});
//reset view
	$('.reset').click(function(){
		location.reload();
	});
 $('.reset').append('Don\'t like what you see? Click <u>here</u> to search again.')
});

