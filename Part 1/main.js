//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
var arr=[]
function fact(name,age,education,nationality){
	var student={};
student.name=name;
	student.age=age;
	student.education=education;
	student.nationality=nationality
	return student
}

function represent(name,age,education,nationality){
 var x=fact(name,age,education,nationality)
 arr.push(x);
return x 
}

function showFriend(n){
	arr.forEach(function(element){
	console.log("Name "+element.name+", " +"Age "+element.age +", "+"education "+element.education+", "+"Nationality "+element.nationality+"\n")
	})
}
 function avergeStudents(){
 	var count=arr.length;
 	var sumAge=arr.reduce(function(acc,element){
 		 return acc+=element.age
 	},0)
 	return sumAge/count
 }


/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,12,16,100];
*/
// write your code here ...
function square(n){
	return n*n
}
function rangeSquared(a,b){
	var arr=[]
 if(b===undefined){
 	if(a%2===0){
			arr.push(square(a))
		}else return null;
 }
	for(var i=a;i<=b;i++){
		if(i%2===0){
			arr.push(square(i))
		}
	}
	return arr
}


/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....

function leader(arr){
	var result=[]
	arr.forEash(function(element,i){
		for(var j=0;arr.length-i;j++){
			if () 

		}
	})
}