//get value from form 
$("#submit").submit(function(event){
	event.preventDefault();
	
//refresh the page for new results
$('.results, .reset').empty();

	
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
  	var ownerStart = RepoName.charAt(0);
  	var ownerEnd = RepoName.lastIndexOf('/')
  	var RepoOwner =RepoName.substring(ownerStart,ownerEnd)
  	var RepoUrl = subArray[i].html_url;
  	var RepoDescript = subArray[i].description;
  	
  	console.log(data.owner)
  	//Append DOM
  	$('.results').append('<h5>' + RepoName + '</h5>' + ' by ' + RepoOwner + '<br>' + RepoDescript + '<br>' + '<a href="' + RepoUrl + '">' + RepoUrl + '</a>' + '<br>' + '<hr />')
  	
  	
  }; 

	}




});

 $('.reset').append('Don\'t like what you see? Click <a href="">here</a> to search again.')
});



