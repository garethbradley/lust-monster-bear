var namelists =
[
    ["Vacuous","Irradiated","Unfeasible","Rotating","Demented","Apologetic","Arthritic","Gargantuan","Maloderous","Apoplectic","Ingenious","Retarded","Philosophical","Energetic","Lethargic","Spontaneous","Imbecillic","Over-sized","Murderous","Unspecified","Unnatainable","Suspended","Supersticious","Pretentious","Flaccid","Turgid","Irridescant","Flourescing","Unconvincing","Unfeasible","Impossible","Irradiated","Fornicating","Totalitarian","Incipid","Predetermined","Lawless","Ungodly","Intrepid","Cautious","Blistering","Insatiable","Saturated","Cardinal","Absolute","Unspeakable","Abominable","Atrocious","Atrophied","Arbitrary","Unequivocal","Ambiguous","Unmitigated","Expanding","Foolhardy","Disheartening","Dystopian","Specious","Arthritic","Unreasonable","Unfathomable","Paradoxical","Intrinsic","Questionable","Meteoric","Speculative","Curious","Theoretical","Indignant","Stagnant","Nonchalant","Impeneterable","Indistinguishable","Stupifying","Mysterious","Deliberate","Variegated","Treacherous","Cantankerous","Rudimentary","Electroluminescent","Guffawing","Traditional","Devoted","Rambunctious","Phlegmatic","Pustulent","Pernicious"]
    ,
    ["Donkey","Swan","Antelope","Cougar","Ocelot","Spatula","Wolf","Fox","Crab","Flamingo","Fox","Ferret","Ant","Antelope","Arachnid","Armadillo","Badger","Bear","Bobcat","Buffalo","Caribou","Chinchilla","Chipmunk","Condor","Cougar","Dingoe","Donkey","Elk","Egret","Gazelle","Gibbon","Goat","Goldfish","Hippo","Iguana","Impala","Isopod","Jaguar","Koala","Krill","Lemur","Lizard","Lungfish","Manatee","Marmot","Mink","Mollusk","Monkey","Moose","Nematode","Otter","Pelican","Possum","Porcupine","Puffin","Rodent","Skunk","Sloth","Squid","Swan","Turmite","Trout","Tree Frog","Bat","Wombat","Weasel","Wolf","Zebra","Penis","Minge","Anus","Spaniard","Monkfish","Tarantula","Leopard","Turnip","Potatoe","Hamster","Swordfish","Llama","Fruit-bat","Heron","Lawyer","Farmer","Arborist","Programmer","Lesbian","Technician","Woodcutter","Sous Chef",""]
    ,
    ["Rotation","Discussion","Fellatio","Inverter","Oscillation","Subversion","Retirement","Indoctrination","Assimilation","Tromboning","Ejaculation","Constipation","Encapsulation","Insertion","Retraction","Undunlation","Impregnation","Diversification","Confusion","Cottaging","Felching","Coagulation","Fossilising","Circumcision","Mastication","Mecturation","Configuration","Obliteration","Emancipation","Assasination","Confirmation","Rejection","Unitisation","Stratification","Redundancy","Enlargement","Reduction","Consideration","Expansion","Dilation","Liberation","Dramatisation","Punishment","Indignation","Masturbation","Advertisement","Comtemplation","Rumination","Deliberation","Exploration","Reflection","Saturation","Permeation","Calculation","Operation","Extrapolation","Interpolation","Approximation","Deliberation","Preperation","Castigation","Chastisement","Punishment","Initiation","Inauguration","Interlaying","Misunderstanding","Awakening","Broadcasting","Vexing","Wetting","Weeping","Withholding","Alighting","Awakening","Bending","Bursting","Feeding","Fighting","Forecasting","Inputting","Rehabilitation","Arbitration","Elimination","Simplification","Categorisation","Penetration","Delegation","Innovation","Reconstruction","Validation","Verbalisation","Transformation","Protection","Orchestration","Experimentation","Dissemination","Demonstration","Invigoration","Rehabilitation","Negotiation",""]
    ,
    ["Unit","Driver","Debacle","Situation","Predicament","Scenario","Outcome","Perculiarness","Strangeness","Pirouette","Apocalypse","Automation","Procedure","System","Indicision","Unusualness","Debacle","Predicament","Facility","Unit","Idiom","Device","Contraption","Area","Requirement","Necessity","Problem","Facility","Entaglement","Annoyance","Solution","Denouement","Resolution","Facilitation","Encouragment","Elimination","Examination","Propogation","Extension","Reduction","Assistance","Provocation","Doscouragement","Instigation","Arena","Distinction","Confusion","Uncertainty","Eradication","Finalisation","Conclusion","Issue","Difficulty","Deterrent","Hindrance","Impediment","Quandry","Situation","Hesitancy","Certainty","Appliance","Converter","Apparatus","Deflector","Theory","Sillyness","Argument","Variation","Fluctuation","Specification","Conflagration","Module","Announcement","Ceremony","Celebration","Jubilation","Diversion","Jamboree","Success","Failure","Flagellation",""]
];

function getRandomWord(idx) {
    return namelists[idx][Math.round((Math.random() * (namelists[idx].length - 1)))]; 
}