var app = angular.module('game', ['ui.bootstrap']);

  var dictionary = ["size","bear","tramp","rod","believe","fang","fruit","need","voyage","shelf","jump","kick","things","toy","mouth","horse","sail","oil","instrument","time","glove","rail","letter","parcel","treatment","coach","motion","church","month","hydrant","support","acoustics","protest","slip","adjustment","respect","crown","doctor","pest","cub","bee","eggnog","work","force","steel","baseball","donkey","squirrel","receipt","creature","seat","measure","grade","root","quiver","flesh","animal","secretary","dog","amount","bushes","yak","plants","mother","mask","sense","swing","snakes","language","meeting","slope","liquid","bike","pig","cushion","sneeze","attraction","tendency","roll","seed","account","ducks","plantation","crime","rifle","insurance","arch","apparatus","start","downtown","wish","bells","earthquake","pipe","cheese","hose","cobweb","power","value","store","cabbage","thunder","hate","day","head","request","wing","popcorn","ants","place","discovery","note","lunch","wrist","run","nation","carpenter","idea","umbrella","territory","judge","planes","rock","cent","quartz","shape","behavior","front","letters","shoe","volcano","crowd","snails","wealth","bucket","rabbit","tree","suit","finger","design","building","grass","bone","tent","vein","loaf","fall","education","property","train","range","guide","sleet","cook","brother","industry","plastic","night","temper","pen","vegetable","transport","writing","twig","clam","cattle","bed","stick","song","sugar","degree","railway","shake","thought","thing","part","throne","meal","beginner","sleep","group","grip","snail","mist","scent","point","cup","stream","iron","thread","hammer","tank","star","whip","amusement","pocket","haircut","sticks","spiders","recess","quilt","turkey","sun","stone","fowl","boy","machine","dirt","lamp","deer","play","hole","flag","kittens","pear","cracker","dolls","duck","bottle","wash","committee","jam","mitten","house","stop","actor","arm","needle","voice","page","songs","title","scarecrow","price","furniture","rake","spark","sink","meat","experience","market","growth","summer","volleyball","dust","knowledge","crate","cats","ghost","monkey","cellar","fact","attack","talk","babies","blood","hall","plane","fork","screw","smoke","men","brick","punishment","loss","drink","test","pollution","neck","weight","level","flight","street","office","battle","discussion","ink","development","copper","flock","hospital","box","side","stretch","dress","oven","bath","memory","anger","tiger","coast","middle","basketball","sort","tin","canvas","nest","grain","coat","toothpaste","pin","zoo","bag","field","vacation","home","eye","noise","burst","government","cakes","direction","reading","wire","table","digestion","pancake","throat","death","dogs","basket","statement","wool","river","eggs","unit","waste","expert","aftermath","square","brake","shop","wren","jeans","van","gun","channel","crib","vessel","edge","jellyfish","purpose","exchange","breath","sign","watch","women","rest","library","name","town","station","muscle","bite","tail","rabbits","rat","lip","crook","reward","snow","heat","sound","slave","calculator","eyes","word","end","act","substance","drain","creator","addition","trucks","mind","jelly","sheet","silk","zebra","fairies","pets","road","roof","soda","debt","ocean","observation","angle","space","finger","reaction","profit","increase","action","toes","chess","houses","potato","door","daughter","cart","room","oranges","governor","girl","dock","honey","science","soup","position","spring","authority","sea","trousers","division","hook","straw","earth","clover","land","pigs","horn","woman","structure","plot","foot","relation","button","texture","taste","hot","badge","birth","swim","collar","quicksand","ray","card","stomach","shade","yard","use","lake","question","leather","insect","pies","bait","nut","hour","teaching","moon","crayon","lunchroom","vest","island","sheep","robin","thumb","snake","boot","border","trains","tomatoes","flame","blow","wound","holiday","sisters","thrill","change","friends","quill","hobbies","steam","invention","afternoon","skin","stamp","flavor","milk","teeth","turn","powder","step","stem","book","cars","cactus","harmony","worm","bomb","ear","branch","drawer","pencil","camp","sweater","queen","cough","yam","cast","frog","chin","partner","yoke","laugh","driving","pan","line","move","advice","farm","sidewalk","shock","geese","twist","spot","pull","view","distribution","knee","frame","pie","afterthought","rainstorm","nose","pickle","army","skate","toys","key","horses","minister","surprise","match","winter","regret","feeling","detail","bedroom","harbor","pail","desire","chickens","society","week","party","camera","kettle","face","aunt","string","error","truck","waves","zinc","trade","love","lace","approval","airplane","weather","minute","bridge","mice","uncle","mine","argument","fog","linen","credit","offer","apparel","care","brass","ball","smash","wax","kiss","art","distance","cow","lock","trick","stocking","cover","engine","calendar","sister","dinner","magic","wine","crow","condition","scene","coil","chicken","fish","decision","connection","yarn","business","dime","grandfather","scale","agreement","cherry","hands","walk","cloth","health","berry","wrench","paper","year","sofa","man","color","hair","cause","bikes","theory","stage","ticket","shirt","friend","pet","window","existence","person","mint","event","lettuce","belief","blade","fold","wood","flowers","books","number","cherries","touch","airport","desk","story","order","current","fuel","rub","plough","salt","money","ladybug","skirt","air","quarter","plate","vase","impulse","mountain","back","ground","birds","plant","jewel","representative","form","board","toe","wind","reason","grape","guitar","pleasure","beds","top","cream","quince","wall","curtain","cap","notebook","glass","carriage","laborer","zephyr","competition","hope","arithmetic","trail","push","fireman","trouble","writer","beef","north","scissors","company","pizzas","dad","prose","coal","baby","hill","orange","egg","sky","scarf","veil","knife","rain","base","knot","celery","gate","country","rice","religion","servant","rate","frogs","tooth","giraffe","gold","rule","advertisement","stove","crack","grandmother","low","leg","spy","icicle","underwear","toad","income","marble","shame","boundary","cannon","seashore","sock","war","floor","join","son","ring","mass","interest","effect","cave","expansion","stew","picture","trip","mark","hat","spoon","sponge","shoes","circle","club","passenger","jar","peace","sand","ship","rose","history","basin","butter","rhythm","trees","toothbrush","bead","can","zipper","caption","friction","team","kitty","birthday","comparison","smell","hand","visitor","children","fly","destruction","self","route","suggestion","system","lumber","whistle","tub","boat","jail","quiet","tray","activity","nerve","smile","bulb","fire","produce","dinosaurs","bit","control","cemetery","bird","chalk","sack","tongue","curve","ice","juice","flower","drop","doll","oatmeal","cake","stranger","elbow","fear","class","wilderness","cat","balance","cable","corn","giants","riddle","record","chance","metal","poison","alarm","mom","achiever","cows","way","locket","car","porter","spade","stitch","example","selection","pot","look","maid","playground","bat","payment","wave","wheel","tax","mailbox","humor","rings","soap","show","verse","appliance","pump","bell","water","silver","morning","bubble","food","school","girls","limit","legs"];

function randomWordJson() {

    // there are two purposes to this function.
    //     1) pick a random word in the dictionary array
    //     2) convert that word into the JSON object format that we are using for
    //        the 'Hangman word';
    word=dictionary[Math.floor((Math.random() * dictionary.length) + 1)];

    //text is a long string that we are concatenating together.
    var text='[';
    for (var i=0; i < word.length; i++) {
      text += '{"letter": "' + word[i] +'", "visible": false}';
      if (i != (word.length-1)) {
        text += ",";
      }
    }
    text += ']';

    //ok, we have got the text.  Now let's turn it into a JSON object.
    //I love this function
    var obj = JSON.parse(text);
    console.log('|' + obj[0].letter + ' ' + obj[0].visible + '|');
    return obj;
  }


  app.controller("hangman", ["$scope", function ($scope) {
    $scope.state = 0;
    $scope.word=randomWordJson();
    /*$scope.word = [
      {letter: "H", visible: false},
      {letter: "E", visible: false},
      {letter: "L", visible: false},
      {letter: "L", visible: false},
      {letter: "O", visible: false}
    ]; */

    $scope.score=0;

    $scope.states = [
      "./Resources/hangman1.gif",
      "./Resources/hangman2.gif",
      "./Resources/hangman3.gif",
      "./Resources/hangman4.gif",
      "./Resources/hangman5.gif",
      "./Resources/hangman6.gif",
      "./Resources/hangman7_dead.gif"
    ];

    $scope.alphabet = [
      {letter: "A", visible: true},
      {letter: "B", visible: true},
      {letter: "C", visible: true},
      {letter: "D", visible: true},
	    {letter: "E", visible: true},
	    {letter: "F", visible: true},
      {letter: "G", visible: true},
      {letter: "H", visible: true},
      {letter: "I", visible: true},
	    {letter: "J", visible: true},
	    {letter: "K", visible: true},
      {letter: "L", visible: true},
      {letter: "M", visible: true},
      {letter: "N", visible: true},
	    {letter: "O", visible: true},
  	  {letter: "P", visible: true},
      {letter: "Q", visible: true},
      {letter: "R", visible: true},
      {letter: "S", visible: true},
	    {letter: "T", visible: true},
      {letter: "U", visible: true},
      {letter: "V", visible: true},
      {letter: "W", visible: true},
      {letter: "X", visible: true},
	    {letter: "Y", visible: true},
	    {letter: "Z", visible: true}
    ];

    $scope.resetGame = function () {

          // Seeking a 'single page web application'.   Resetting all the game variables allows us to
          // reset the game *without* waiting a page refresh.   This is one of the really cool parts of angular
          // that is not possible with plain vanilla javascript.
          // note for future iteration:  we need to add a call to the word generator function here when
          // database funtionality is installed.

          // the Hangman image is bound to the state variable.   If we set the state variable to 0, the
          // image will automatically update to the initial picture.  No further work needed.
          $scope.state = 0;

          //reset all the alphabet tiles to visible
          for(var i = 0; i < $scope.alphabet.length; i++) {
              $scope.alphabet[i].visible = true;
          }

          //reset all the tiles in the mystery word to hidden.
          for(i = 0; i < $scope.word.length; i++) {
             $scope.word[i].visible = false;
          }

          //?? We need to add a call to a word generation method here, when db functionailty is added.
          //debugging code that can be remvoved later.
          console.log("You clicked RESET");
        };

      
    $scope.clicked = function (idx) {
      console.log("clicked",idx);
      $scope.alphabet[idx].visible = false;
      var found = false;
      for(var i = 0; i < $scope.word.length; i++) {
        if ($scope.alphabet[idx].letter.toUpperCase() === $scope.word[i].letter.toUpperCase()) {
          $scope.word[i].visible = true;
          found = true;
        }
      }
      if (!found) {
        $scope.state += 1;
      }
    };


    $scope.stateImg = function () {
      return $scope.states[$scope.state];
    };

  }]);
