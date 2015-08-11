critics = {"Lisa Rose":{"Lady in the Water":2.5,"Snakes on a Plane":3.5,"Just My Luck":3.0,"Superman Returns":3.5,"You Me and Dupree":2.5, "The Night Listener":3.0},
         
         "Gene Seymour":{"Lady in the Water":3.0,"Snakes on a Plane":3.5,"Just My Luck":1.5,"Superman Returns":5.0,"You Me and Dupree":3.5, "The Night Listener":3.0},
         
         "Michael Philips":{"Lady in the Water":2.5,"Snakes on a Plane":3.0,"Superman Returns":3.5,"The Night Listener":4.0},
         
         "Claudia Puig":{"Snakes on a Plane":3.5,"Just My Luck":3.0,"Superman Returns":4.0,"You Me and Dupree":2.5, "The Night Listener":4.5},
         
         "Mick LaSalle":{"Lady in the Water":3.0,"Snakes on a Plane":4.0,"Just My Luck":2.0,"Superman Returns":3.0,"You Me and Dupree":2.0, "The Night Listener":3.0},
         
         "Jack Mathews":{"Lady in the Water":3.0,"Snakes on a Plane":4.0,"Superman Returns":5.0,"You Me and Dupree":3.5, "The Night Listener":3.0},
         
         "Toby":{"Snakes on a Plane":4.5,"Superman Returns":4.0,"You Me and Dupree":1.0}
         };

//console.log(criticsRating["Lisa Rose"]);
//Print the dictionary values
console.log(critics)
console.log(critics['Lisa Rose']);
console.log(critics['Lisa Rose']['Lady in the Water'])
console.log(critics['Toby'])


function sim_distance(prefs,person1,person2){

	si = {};
	var numberOfSimilarItems = 0;
	var moviePreferencesRating = JSON.parse(prefs);
	for (var item in moviePreferencesRating[person1]){
		//console.log(item);
		if (moviePreferencesRating[person2].hasOwnProperty(item)){
			si[item] = 1;
			numberOfSimilarItems++;
		}
	}
	//console.log(si);
	if(numberOfSimilarItems == 0) return 0;

	//console.log("Intersection of movies");
	var sumOfSquares = 0;
	for (var movie in si){
		//console.log("Movie name"+movie);
		//console.log(moviePreferencesRating[person1][movie]);
		//console.log(moviePreferencesRating[person2][movie]);
		//console.log("Difference of rating:"+(moviePreferencesRating[person1][movie] - moviePreferencesRating[person2][movie]));
		

		sumOfSquares += Math.pow(moviePreferencesRating[person1][movie] - moviePreferencesRating[person2][movie],2);
	}
	//console.log("sumOfSquares="+sumOfSquares);
	return 1/(1+sumOfSquares);

  	
}

function sim_pearson(prefs,person1,person2){

	si = {};
	var numberOfSimilarItems = 0;
	var moviePreferencesRating = JSON.parse(prefs);
	for (var item in moviePreferencesRating[person1]){
		//console.log(item);
		if (moviePreferencesRating[person2].hasOwnProperty(item)){
			si[item] = 1;
			numberOfSimilarItems++;
		}
	}
	//console.log(si);
	if(numberOfSimilarItems == 0) return 0;

	var sum1 = 0;
	var sum2 = 0;
	var sum1Squared = 0;
	var sum2Squared = 0;
	var productSum = 0;

	for (var movie in si){
		sum1 += moviePreferencesRating[person1][movie];
		sum2 += moviePreferencesRating[person2][movie];

		sum1Squared += Math.pow(moviePreferencesRating[person1][movie],2);
		sum2Squared += Math.pow(moviePreferencesRating[person2][movie],2);
		// Add null check
		productSum += moviePreferencesRating[person1][movie] * moviePreferencesRating[person2][movie];

	}

	//console.log("Sum1:"+sum1);
	//console.log("Sum2:"+sum2);
	//console.log("sum1Squared:"+sum1Squared);
	//console.log("sum2Squared"+sum2Squared);
	//console.log("productSum"+productSum);

	var num = productSum - (sum1*sum2)/numberOfSimilarItems;
    var den = Math.sqrt((sum1Squared-Math.pow(sum1, 2)/numberOfSimilarItems) * (sum2Squared - Math.pow(sum2, 2)/numberOfSimilarItems));
    if (den == 0) return 0;
    
    var r = num/den
    //console.log("Score between"+person1+"and "+person2+" is:"+(r));
    
    return r;


}

function topMatches(prefs, person, n, similarity){

	var scores = [];
	var moviePreferencesRating = JSON.parse(prefs);
	for (var user in moviePreferencesRating){
		console.log("Calculating similarity between "+user+" and "+person);

		if (user != person){
			var similarityScore = {};
			similarityScore['name'] = user;
			similarityScore['score'] = similarity(prefs,user,person);
			//console.log(similarityScore);
			scores.push(similarityScore);

		}
	}
	//console.log("Calculated scores of similarity");
	//console.log(score);
	scores.sort(function(a,b){return a.score-b.score});
	scores.reverse();



	return scores.slice(0,n);

}

function transformPreferences(prefs){
	var result = {};
	var moviePreferencesRating = JSON.parse(prefs);
	for (var user in moviePreferencesRating){
		for (var item in moviePreferencesRating[user]){
			if (result[item]==undefined) result[item] = {};
			result[item][user] = moviePreferencesRating[user][item];
		}
	}
	return result;
}

function calculateSimilarItems(prefs, n){
	var result = {};
	var itemPrefs = transformPreferences(prefs);
	console.log("Preferences after transformation");
	console.log(itemPrefs);

	for (var item in itemPrefs){
		console.log("Calculating scores for "+item);
		var scores = topMatches(JSON.stringify(itemPrefs),item,n,sim_distance);
		//if(result[item]==undefined) result[item] = {};
		console.log("Scores for "+item+" is: ");
		console.log(scores);
		result[item] = scores;
	}
	//console.log("Stringified item preferences...");
	//console.log(JSON.stringify(itemPrefs));
	//console.log("Final similarity result...");
	return result;

}

function getRecommendedItems(prefs,itemMatch,user){
		var moviePreferencesRating = JSON.parse(prefs);
		var userRating = moviePreferencesRating[user];

		
		

		var scores = [];
		var totalScores = [];
	
	

	//console.log("Users rating is..");
	//console.log(userRating);

	for (var item in userRating){
		var rating = userRating[item];
		
		for (var i in itemMatch[item]){
			var ratingObject = itemMatch[item][i];
			var item2 = ratingObject.name;
			var similarity = ratingObject.score;

			if (userRating.hasOwnProperty(item2)) continue;

			
			if (scores[item2] == undefined){
				var similarityScore = {};
				similarityScore['name'] = item2;
				similarityScore['score'] = similarity*rating;
				scores[item2] = similarityScore;
			}else{
				scores[item2].score += similarity*rating;
			}
			//console.log("Printing similarity score");
			//console.log(similarityScore);
			//scores.push(similarityScore);

			
			if (totalScores[item2] == undefined){
				var totalSimilarityScore = {};
				totalSimilarityScore['name'] = item2;
				totalSimilarityScore['score'] = similarity;
				totalScores[item2] = totalSimilarityScore;
			}else{
				totalScores[item2].score +=similarity;
			}
			
		}
	}
	//console.log(scores);
	//console.log("Total Scores are:");
	//console.log(totalScores); 

	for (var movie in scores){
		if (totalScores.hasOwnProperty(movie)){
			scores[movie].score /= totalScores[movie].score;
		}
	}
	scores.sort(function(a,b){return a.score-b.score});
	scores.reverse();



	return Object.keys(scores);

}


