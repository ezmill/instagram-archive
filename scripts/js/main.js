var path = "./assets/";
var images = [
	path + "maxwellarkin-750045666466356808_20780790.png",
	path + "maxwellarkin-769695428383628551_20780790.png",
	path + "maxwellarkin-776223521445273157_20780790.png",
	path + "maxwellarkin-800081320738578020_20780790.png",
	path + "maxwellarkin-808817828194704547_20780790.png",
	path + "maxwellarkin-809114448878656871_20780790.png",
	path + "maxwellarkin-811660626262514836_20780790.png",
	path + "maxwellarkin-811663822104059088_20780790.png",
	path + "maxwellarkin-811669758763883859_20780790.png",
	path + "maxwellarkin-811923548314295717_20780790.png",
	path + "maxwellarkin-811924711277354430_20780790.png",
	path + "maxwellarkin-813123703029914908_20780790.png",
	path + "maxwellarkin-813388685692919739_20780790.png",
	path + "maxwellarkin-820580928270916844_20780790.png",
	path + "maxwellarkin-821363158677216383_20780790.png",
	path + "maxwellarkin-824331890781347562_20780790.png",
	path + "maxwellarkin-853320067441253804_20780790.png",
	path + "maxwellarkin-853322002911223325_20780790.png",
	path + "maxwellarkin-854646756255490018_20780790.png",
	path + "maxwellarkin-856116622451826580_20780790.png",
	path + "maxwellarkin-899737935611190272_20780790.png",
	path + "maxwellarkin-907040242749169640_20780790.png",
	path + "maxwellarkin-921132792132951555_20780790.png",
	path + "maxwellarkin-921370817299505084_20780790.png",
	path + "maxwellarkin-925748414078803597_20780790.png",
	path + "maxwellarkin-936368974202690605_20780790.png",
	path + "maxwellarkin-940058949989457783_20780790.png",
	path + "maxwellarkin-942198999317503320_20780790.png",
	path + "maxwellarkin-946083042756943493_20780790.png",
	path + "maxwellarkin-948572204005351235_20780790.png",
	path + "maxwellarkin-955492452361068452_20780790.png",
	path + "maxwellarkin-962714094929730590_20780790.png",
	path + "maxwellarkin-964100510741978595_20780790.png",
	path + "maxwellarkin-964172571619385234_20780790.png",
	path + "maxwellarkin-964863432711757362_20780790.png",
	path + "maxwellarkin-964865157535391340_20780790.png",
	path + "maxwellarkin-964866056903220880_20780790.png",
	path + "maxwellarkin-964869001078136542_20780790.png",
	path + "maxwellarkin-964927687695818450_20780790.png",
	path + "maxwellarkin-967693053828292584_20780790.png",
	path + "maxwellarkin-968399617832804108_20780790.png",
	path + "maxwellarkin-968503181548740589_20780790.png",
	path + "maxwellarkin-968941562997005597_20780790.png",
	path + "maxwellarkin-970085982869937678_20780790.png",
	path + "maxwellarkin-971780356133642224_20780790.png",
	path + "maxwellarkin-973987654046342220_20780790.png",
	path + "maxwellarkin-974690277670018969_20780790.png",
	path + "maxwellarkin-974752590791990760_20780790.png",
	path + "maxwellarkin-974752683981037036_20780790.png",
	path + "maxwellarkin-974754480997031457_20780790.png",
	path + "maxwellarkin-975367728632979146_20780790.png",
	path + "maxwellarkin-977618151431495314_20780790.png",
	path + "maxwellarkin-978307444458151933_20780790.png",
	path + "maxwellarkin-979003030635306054_20780790.png",
	path + "maxwellarkin-980837472446209934_20780790.png",
	path + "maxwellarkin-986526686261305265_20780790.png",
	path + "maxwellarkin-988812918819413187_20780790.png",
	path + "maxwellarkin-997471216825294726_20780790.png",
	path + "maxwellarkin-997560030784675408_20780790.png",
	path + "maxwellarkin-1003363102026915578_20780790.png",
	path + "maxwellarkin-1003828317835255718_20780790.png",
	path + "maxwellarkin-1019936997840281463_20780790.png",
	path + "maxwellarkin-1023573306416848464_20780790.png",
	path + "maxwellarkin-1030506237995539944_20780790.png",
	path + "maxwellarkin-1033606878343225211_20780790.png",
	path + "maxwellarkin-1034360429239623501_20780790.png",
	path + "maxwellarkin-1034479781808987903_20780790.png",
	path + "maxwellarkin-1037180905372540571_20780790.png",
	path + "maxwellarkin-1037917968837401999_20780790.png",
	path + "maxwellarkin-1038391374275960654_20780790.png",
	path + "maxwellarkin-1038775232112647290_20780790.png",
	path + "maxwellarkin-1044184789391531202_20780790.png",
	path + "maxwellarkin-1045749673459735807_20780790.png",
	path + "maxwellarkin-1067485588334862249_20780790.png",
	path + "maxwellarkin-1067715834854268003_20780790.png",
	path + "maxwellarkin-1077924063722888900_20780790.png",
	path + "maxwellarkin-1078586822466756159_20780790.png",
	path + "maxwellarkin-1081915409034927391_20780790.png",
	path + "maxwellarkin-1084407948132506829_20780790.png",
	path + "maxwellarkin-1092544929391729861_20780790.png",
	path + "maxwellarkin-1101813492069719379_20780790.png",
	path + "maxwellarkin-1103341944027504436_20780790.png",
	path + "maxwellarkin-1104664386343820723_20780790.png",
	path + "maxwellarkin-1106770000838679754_20780790.png",
	path + "maxwellarkin-1113135279122439552_20780790.png",
	path + "maxwellarkin-1117623808883973477_20780790.png",
	path + "maxwellarkin-1124176840673222288_20780790.png",
	path + "maxwellarkin-1128718117850865005_20780790.png",
	path + "maxwellarkin-1130189712888978599_20780790.png",
	path + "maxwellarkin-1135612317389315122_20780790.png",
	path + "maxwellarkin-1143165102733417728_20780790.png",
	path + "maxwellarkin-1143169495134395766_20780790.png"
]
// for(var i = 0; i < images.length; i++){

// }
shuffle(images);
var containerImages = document.getElementsByClassName("container-image");
var imageIndex = 0;
containerImages[0].src = images[imageIndex];
containerImages[1].src = images[imageIndex+1];

function cycleImage(){
	if(imageIndex < images.length - 2){
		imageIndex+=2;
	} else {
		imageIndex = 0;		
	}
	containerImages[0].src = images[imageIndex];
	containerImages[1].src = images[imageIndex+1];
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// window.addEventListener("scroll", cycleImage);
container.addEventListener("click", cycleImage);
// containerImages[1].addEventListener("click", cycleImage);
