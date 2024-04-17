let outputP;
let genButton;

function setup() { 
  noCanvas();
  background(255);
  textAlign(CENTER, CENTER); // Center alignment for both horizontal and vertical
  textSize(36); // Increased font size
  
  // Creating title text
  staticText = createP("In identity, love and belonging, poetry is a mirror reflecting the intricacies of the human experience, weaving together the threads of our emotions, memories, and aspirations");

  
  genButton = createButton("Click to generate");
  genButton.mousePressed(generate);
  genButton.style('background-color', 'lightpink'); // Light pink background color
  genButton.style('font-size', '24px'); // Larger font size for the button
  outputP = createP("");
  outputP.style('font-size', '24px'); // Larger font size for the output paragraph
} 

function draw() { 
}

function generate() {
  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  var output = grammar.flatten("#origin#");
  outputP.html(output);
}

// cut and paste your grammar below (as the value for variable "grammarSource")
var grammarSource = {
  "origin":["#title# #p1# #p2# #p3#"],
  "title":["I Have a Seat in the Abandoned Theater;", "In Her Absence I Created Her Image;", "To Our Land;", "on me;", "on Poetics;"],
  "p1":["I have a seat in the abandoned theaterin Beirut. I might forget, and I might recallthe final act without longing ... not because of anythingother than that the play was not writtenskillfully ...Chaos", "In her absence I created her image: out of the earthlythe hidden heavenly commences. I am here weighingthe expanse with the Jahili odes ... and absenceis the guide, it is the guide. For each rhyme a tentis pitched. And for each thing blowing in the winda rhyme. Absence teaches me its lesson: If it weren’tfor the mirage you wouldn’t have been steadfast ...", "To our land,and it is the one near the word of god,a ceiling of cloudsTo our land,and it is the one far from the adjectives of nouns,the map of absence", "I do not have a definition for poetry But i know it is alive I can see them over there Dancing, loving, breathing ", "I write about martyrs and martyred tongue "],
  "p2":[" as in the war days of those in despair, and an autobiographyof the spectators’ impulse. The actors were tearing up their scriptsand searching for the author among us, we the witnessessitting in our seatsI tell my neighbor the artist: Don’t draw your weapon,and wait, unless you’re the author!—NoThen he asks me: And you are you the author?—NoSo we sit scared. I say: Be a neutralhero to escape from an obvious fateHe says: No hero dies revered in the secondscene. I will wait for the rest. Maybe I wouldrevise one of the acts. And maybe I would mendwhat the iron has done to my brothersSo I say: It is you then?", " Then in the emptiness, I disassembled a letter from oneof the ancient alphabets, and I leaned on absence. So who am Iafter the visitation? A bird, or a passerby amid the symbolsand the memory vendors? As if I were an antique piece,as if I were a ghost sneaking in from Yabous, telling myself:Let’s go to the seven hills. Then I placedmy mask on a stone, and walked as the sleeplesswalk, led by my dream. And from one moonto another I leapt. There is enough of unconsciousnessto liberate things from their history. And thereis enough of history to liberate unconsciousnessfrom its ascension. Take me to our earlyyears—my first girlfriend says", " To our land,and it is the one tiny as a sesame seed,a heavenly horizon ... and a hidden chasm To our land,and it is the one poor as a grouse’s wings,holy books ... and an identity wound To our land,and it is the one surrounded with torn hills,the ambush of a new past", " I do not mean to mythologize it i Apologize if it comes across that way i Mean to only image, to dream, to resurrect: I draw big black lines and draw out a narrativeExist in poetry/ lay in poetry/ rest in poetry there is breath here and also life", " About the letter and also the word and how i Exist somewhere in the breath - the spaces - between A,     B I write about my grandmother and erased land About water and its flow, about the moon In the shape of a martyr/ in the shape of a U.S funded bomb, Even this moon is besieged I write about martyrs and coptic tongue And about tongues in general, i Write about father throats and Mother tongues "],
  "p3":[" He responds: You and I are two masked authors and two maskedwitnessesI say: How is this my concern? I’m a spectatorHe says: No spectators at chasm’s door ... and noone is neutral here. And you must chooseyour part in the endSo I say: I’m missing the beginning, what’s the beginning?", " Leavethe windows open for the house sparrow to enteryour dream—I say ... then I awaken, and no city is inthe city. No “here” except “there.” And no therebut here. If it weren’t for the mirageI wouldn’t have walked to the seven hills ...if it weren’t for the mirage!", " To our land, and it is a prize of war,the freedom to die from longing and burningand our land, in its bloodied night,is a jewel that glimmers for the far upon the farand illuminates what’s outside it ...As for us, inside,we suffocate more!", " Where else may we rest? ", " The ultimate truth: It is so difficult to kill indignityPalestinians remain on land/on tongue Martyrs remain in memory/in poetry Remain Remain Remain "]
};
