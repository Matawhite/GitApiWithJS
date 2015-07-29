//get value from form 
$("#submit").submit(function(event){
	event.preventDefault();
var submittal = document.getElementById('submittal').value;
//encode submital
submittal = encodeURI(submittal)

// Submit request and return results from API
$.ajax({
url: 'https://api.github.com/search/repositories?q=' + submittal,
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
  	document.write(RepoName + ' by ' + RepoOwner + '<br>')
  	document.write(RepoUrl + '<br>')
  	document.write(RepoDescript + '<br>' + '<hr />')
}; 

	}
	


});
});

