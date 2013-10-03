var components = [0,1,2,3,,"","jump",77,(0/0),false,true,"holly roller"];
var results = [];

var cleanUp =  function(arrayName){
	for (i=0;i<arrayName.length;i++){
		if (arrayName[i])  {
			results.push(arrayName[i])
		};
	};
	return results;
};

console.log(cleanUp)