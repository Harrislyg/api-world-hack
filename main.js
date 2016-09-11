// INIT SHITZZZZZZZZZ //

var havenondemand = require('havenondemand')
var client = new havenondemand.HODClient('ec92af81-2c3a-459e-a68e-8ad873b03cc8')
var bc
var text
var bcarray = ['qrcode.36644233.png', 'ean-13_1234567890128.jpg']
var scannedprod = []
var prod_info = []


// Test code DO NOT DELETE
// function something(file) {
// 	client.post('recognizebarcodes', {'file': file}, function(err, resp, body) {
// 		bc = body["barcode"][0]
// 		text = bc['text']
// 		return text
// 	})
// }


// var result = something('ean-13_1234567890128.jpg')
// console.log(result)


//-------------------------------------


function getbcstr(file, callback) {
	client.post('recognizebarcodes', {'file': file}, function(err, resp, body) {
		bc = body["barcode"][0]
		text = bc['text']
		callback(text)
	})
}

function bcstr(string){
	getbcstr(string, function(result) {
	// getbcstr('ean-13_1234567890128.jpg', function(result) {
	console.log(result)
	})
}

function getPrices(string) {
	// array = []
	array = string.split("\n")

	array2 = []
	for (var j = 0; j < array.length; j++) {
		if (array[j].search(/\d{1,10}\.?\d{2}/g) != -1) {
			array2.push(array[j])
		}
	}
	return array2
}

function getCompanyName(string) {
	array = string.split("\n")
	return array[0]
}

function OCRTextCall(file, callback) {
	client.post('ocrdocument', {'file':file}, function(err, resp, body) {
		textblock = body['text_block'][0]
		textOCR = textblock['text']
		callback(textOCR)
	})	
}

// returns an array which contains the shop's name and items+prices
function getOCRText(image) {
	OCRTextCall(image, function(result) {
	var prices = getPrices(result)
	var name = getCompanyName(result)
	var returnArray = [name, prices]
	console.log(prices)
	//return returnArray
	})
}

// r = test()
// console.log(r)
// function sleep(milliseconds) {
//   var start = new Date().getTime();
//   for (var i = 0; i < 1e7; i++) {
//     if ((new Date().getTime() - start) > milliseconds){
//       break;
//     }
//   }
// }
// // function scanProduct{
// // 	/****
// // 	API call: ()
// // 	*****/
// // }

// // function scanUser{
// // 	// *****
// // 	// API call: ()
// // 	// ******
// // }


// //TO-DO
// //Send a msg/email to the users

// /****
// UNIVERSAL USEFUL FUNCTION
// *****/

function getprodinfo(product_code) {
	//HARDCODING FTW
	if(product_code == 1234567890128){
		prod_info.push("Walgreens");
		prod_info.push("Meji");
		prod_info.push("Milk");
		prod_info.push(3.28);
	}

	else if(product_code == 1234567890104){
		prod_info.push("Walgreens");
		prod_info.push("Frosty");
		prod_info.push("Food");
		prod_info.push(2.28);
	}

	else if(product_code == 1234567832432){
		prod_info.push("Walgreens");
		prod_info.push("Baby Banana Teething Toothbrush for Infants, Yellow");
		prod_info.push("Chips");
		prod_info.push(7.80);
	}

	else if(product_code == 0123456734562){
		prod_info.push("Walgreens");
		prod_info.push("Kraft Velveeta Cheese");
		prod_info.push("Cheese");
		prod_info.push(7.24);
	}

	else if(product_code == 0123456732346){
		prod_info.push("Walgreens");
		prod_info.push("Kraft Macaroni & Cheese");
		prod_info.push("Food");
		prod_info.push(4.70);
	}

	else{
		console.log("Product Code not found");
	}
	scannedprod.push(prod_info)
	prod_info = []
}


//scanneditems contains all the price of the items scanned
function gettotalamount(scanneditems){
	var total = 0;
	for(i=0; i<scanneditems.length; i++){
		var total = total + scanneditems[i][3];
	}
	//console.log(total)
	return total;
}

function getuserinfo(usr_info){
	var arrayofinfo = usr_info.split('#');
	//test
	console.log(arrayofinfo);
	return arrayofinfo;
}

function enclosedquotes(str){
	return '"'+str+'"'
}

var str
function getallprodJSON(scannedprod){
	str = "\"item0\"" + ":" + "{" + "\"company\""+ ":" + enclosedquotes(scannedprod[0][0]) + ", " +  "\"brand\""+ ":" + enclosedquotes(scannedprod[0][1]) + "," + "\"type\"" + ":" + enclosedquotes(scannedprod[0][2]) + "," + "\"price\"" + ":" + enclosedquotes(scannedprod[0][3])+ "}" + ",";
	
	for(i=1; i< scannedprod.length; i++){
		str = str + "\"item" + i + '"' + ":" + "{" + "\"company\""+ ":" + enclosedquotes(scannedprod[i][0]) + ", " +  "\"brand\""+ ":" + enclosedquotes(scannedprod[i][1]) + "," + "\"type\"" + ":" + enclosedquotes(scannedprod[i][2]) + "," + "\"price\"" + ":" + enclosedquotes(scannedprod[i][3])+ "}" + "," ;
		// json = JSON.stringify(str)
		// var j = {"name" : scannedprod[i][j] + scannedprod[i][j+1]}
		// console.log(JSON.stringify(eval("(" + j + ")")))
	}
	str = str + "\"total amount\""  + ":" + "{" + "\"totalamount\""+ ":" +enclosedquotes(gettotalamount(scannedprod)) + "}"
//	str = str + "\"company\""+ ":" + enclosedquotes(scannedprod[0][0]) + ", " + "\"figures\"" + ":" + "{" + "\"brand\""+ ":" + enclosedquotes(scannedprod[0][1]) + "," + "\"type\"" + ":" + enclosedquotes(scannedprod[0][2]) + "," + "\"price\"" + ":" + enclosedquotes(scannedprod[0][3])+ "}" ;
//	console.log(		str)
	console.log(JSON.stringify(eval("({" + str + "})")));
	// var json = JSON.stringify("{" + str + "}");
	// console.log(json)
}

function getuserinfoJSON(usr_info){
	str = "\"item0\"" + ":" + "{" + "\"name\""+ ":" + enclosedquotes(usr_info[0]) + ", " +  "\"phone\""+ ":" + enclosedquotes(usr_info[1]) + "," + "\"email\"" + ":" + enclosedquotes(usr_info[2]) + "}";
	console.log(JSON.stringify(eval("({" + str + "})")))
}

function getallOCRJSON(info){
	var name = info[0];
	var prices = []
	for(i=1; i<info.length; i++){
		prices = "\"receipt\"" + ":" + "{" + "\"items\""+ ":" + enclosed(info[i])  + ","
	}
}

// getprodinfo(1234567890128)
// getprodinfo(001)
// getprodinfo(002)
// //gettotalamount(scannedprod)
// // console.log(scannedprod[0][0])
// //getallprodJSON(scannedprod)
// getOCRText("foodsco.jpeg")









