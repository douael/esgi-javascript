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

function leet(word){
	var lettres = ['a','e','y','u','i','o','z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
	var leetTo = ['4','3','7','(_)','1','0','z','r','t','p','q','s','d','f','g','h','j','k','l','m','w','x','c','v','b','n'];
	toto ="";
	test = [];
	for(var i = 0; i < lettres.length; i++){
	 test[lettres[i]] = leetTo[i];
	}

	 for(var i = 0; i < word.length; i++){
	    toto += test[word[i].toLowerCase()]
  	}
  	return toto;
}

function verlan(word){
	 var split = word.split("");
   var toto = split.reverse();

   var mots = toto.join("");

   return mots.split(" ").reverse().join(" ");
}

function yoda(word){
	 return word.split(" ").reverse().join(" ");
}
console.log(yoda("Hello World"));