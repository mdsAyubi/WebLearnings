exports.version = '0.1.0';

function Greeter(lang){
	this.language = lang;
	this.greet = function(){
		if (this.language === 'en'){
			return "Hellow World";
		}else if (this.language  === 'fr'){
			return "Bonjour tout le monde";
		}else if (this.language  === 'it'){
			return "Buongiorno a tutti!";
		}

		return "We dont speak that language";
	};

}

exports.create_greeter = function(lang){
	return new Greeter(lang);
};

//OR
module.exports = Greeter;

exports.hello_world = function(lang){
	if (lang === 'en'){
		return "Hellow World";
	}else if (lang === 'fr'){
		return "Bonjour tout le monde";
	}else if (lang === 'it'){
		return "Buongiorno a tutti!";
	}

	return "We dont speak that language";
};

exports.goodbye = function(lang){

	if (lang === 'en'){
		return "Bye";
	}else if (lang === 'fr'){
		return "Au revior";
	}else if (lang === 'it'){
		return "Ciao";
	}

	return "We dont speak that language...";

};