function ucfirst(word){
	if (word.length > 0) {
    return word[0].toUpperCase() + word.substring(1);
  } else {
    return word;
  }
}

function capitalize(word){
	split = word.split(" ");

	for ( var i = 0; i < split.length; i++ )
    {
        var j = split[i].charAt(0).toUpperCase();
        split[i] = j + split[i].substr(1);
    }
    return split.join(" ");
}

function camelCase(word){
	mots = capitalize(word);
	split = mots.split(" ");
	return split.join("");
}

function snake_case(word){
	split = word.split(" ");
	return split.join("_");
}

function prop_access(word){
	split = word.split('.');
	for ( var i = 1;i<split.length;i++)
	{
		split[i] = "[\""+split[i] +"\"]"
	}
	return split.join("");
}
console.log(prop_access("animal.type.name"));