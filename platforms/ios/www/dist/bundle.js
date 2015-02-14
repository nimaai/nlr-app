(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

var update = require('./update').update;

global.window.addEventListener('load', function() {
  update();
  setInterval(update, 1000);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./update":2}],2:[function(require,module,exports){
(function (global){
'use strict';

var nlr = require('nlr');
var index = null;

var updateCurrentTime = function(currentHour, currentMinute) {
  global.document.getElementById('current-time').innerHTML =
    nlr.time.formatTime(currentHour, currentMinute);
};

var updateLilaInformation = function(index) {
  global.document.getElementById('sanskrit-name').innerHTML =
    nlr.getSanskritName(index) + ' Lila';
  global.document.getElementById('english-name').innerHTML =
    nlr.getEnglishName(index);
  global.document.getElementById('time-interval').innerHTML =
    nlr.time.formatTimeInterval(nlr.getTimeInterval(index));

  global.document.getElementById('short-description').innerHTML =
    nlr.getShortDescription(index);
  global.document.getElementById('rupa-description').innerHTML =
    nlr.getRupaDescription(index);
  global.document.getElementById('vishvanath-description').innerHTML =
    nlr.getVishvanathDescription(index);
  global.document.getElementById('long-description').innerHTML =
    nlr.getLongDescription(index).join('<br><br>');
};

exports.update = function() {
  var currentDate = new Date()
    , currentHour = currentDate.getHours()
    , currentMinute = currentDate.getMinutes()
    , i = nlr.getLilaIndex(currentDate);

  updateCurrentTime(currentHour, currentMinute);

  if (i != index) {
    index = i;
    updateLilaInformation(i);
  }
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"nlr":19}],3:[function(require,module,exports){
module.exports=[
  "Night Pastimes",
  "Pastimes at the End of the Night till Sunrise",
  "Morning Pastimes",
  "Forenoon Pastimes",
  "Midday Pastimes",
  "Afternoon Pastimes",
  "Dusk Pastimes",
  "Evening Pastimes"
]

},{}],4:[function(require,module,exports){
module.exports=[
  "In the afternoon Lord Gauranga meets with His beloved friends and dresses in garments that enchant all the worlds . Wandering throughout the town of Nadiya to each and every house He displays wondrous glory that has no end",
  "The Lord Tours the Town Navadvip",
  "Then Gadadhara smiles and sweetly addresses the Lord: 'The afternoon time is approaching! Shachi Mata is very anxious for you! She has labored to make many fine edibles! Arranging them nicely on a golden plate, she waits and watches on the path for your return.' Hearing these words of Gadadhara, Prabhu says Let us go! and proceeds on his tour of the town. As Gauranga-Chanda approaches the outskirts both sides of Him are ornamented by Nityananda and Gadadhara. Following behind is the assembly of devotees, whose minds are all filled with bliss as they walk pleasantly. As Gauranga returns on the footpath to Navadvipa all the townspeople turn their heads to behold His enchanting beauty. His muscular, golden body is very tall and its sheer grace is like a lotus of pure desire in spotless waters. His knee-length arms sway back and forth as he walks. They appear as lotus-stems, or elephant trunks - they cannot be described",
  "His curling tresses are so lovely they mesmerize the entire universe and they are tied with the shyness of all the young girls. His wavy locks swing like a swarm of bumblebees and the chandan tilak upon His forehead diffuses rays just like a nectar-moon",
  "Fixing the flower-arrows of His restless eyes upon the bow of His eyebrows, He instantly pierces the hearts of the womenfolk by His mere glance. The smile on his moonlike face showers the rains of sweet ambrosia which makes the chnfcon-birds of the womens' hearts greedily fly after it. Jewelled makari-shaped earrings swing from his ears making the saphori-fish of the womens' hearts pursue and swallow them. The splendor of His neck and waist conquers that of the lion. These features of His vanquish the legend of the chaste girls' dharma. On His broad chest sway jewelled pearl necklaces and matchless Jasmine garlands. His limbs are nicely smeared with thick patches of Malayan sandahvood paste. His clothing and ornaments enrapture the entire universe. Description of the Town of Navadvipa",
  "Lord Gauranga now enters on the main road into Navadvipa and as the people hear of it, women, men, young and old all run to see Him. The sand on the road to Nadiya is white as a lotus flower and on both sides rise lofty palaces of pure white finish. Banners with golden lotus symbols are touching the sky as white, yellow and other colorful flags blow in the wind. The rooftop apartments are constructed with bewildering optical illusions and the gates to the houses are festooned with fluttering jasmine garlands. All the women who live along the road that Gauranga is traversing ascend their rooftops with great desire to behold Him. Does it appear that a garland of nectar-moons is rising in the sky with the clouds of their loosened hair flowing by their cheeks? Their jewelled necklaces appear like the rising stars and the waves of their smiles the striking of lightning",
  "Their soft chit-chatting is like the clouds' sweet gentle rumbling and their eyes the lotuses in the pond of affection. The handsome body of Gauranga is like a golden mountain peak upon which these girls shower the rains of loving attachment. From behind windows and portals some fix their eyes peering steadily down the path that Gauranga is travelling",
  "The town of Navadvipa extends for an area of four yojanas (32 square miles] . Here and there are flower gardens and heavenly lakes. All the palaces accomodate so many temples of numerous devatas above which are splendrous rows and rows of beautiful spires. There are four classes of people - the brahmanas, Kshatriyas, vaishyas and shudras and their lovely homes shine in many orderly rows. Uncountable yogis, sannyasis, and brahmacharis live there. In some places there is recitation of the Bhagavad-Gita and the Puranas. In some places is the excitement of dancing, singing and playing on musical instruments. In some places small children loudly bicker and squabble. In some places uncountable children are playing. In some places numberless vipras study the scriptures In some places groups and groups of bhattacharyas congregate. Everyone walks along the roads of Nadiya. Three kinds of people travel on these roads - young, middle-aged and old and they all gaze incessantly upon the face of Gauranga and chant His Holy Name. Here and there are kadamba and bakula trees. All around their bases are supremely splendrous platforms. The town has marketplaces, vestibules and courtyards packed with dense crowds of celestial people. In the center of town are many, many mango trees among which are perpetually blossoming flower gardens. Surrounding the town are the flowing currents of the Sura-dhuni upon whose banks Gauranga sports enchanting pastimes",
  "The Glories of Navadvip",
  "(From the Chaitanya-Bhagavat)",
  "There is no town like Navadvipa within the entire three worlds for it is where Guaranga Gosai has taken birth Understanding that Prabhu was going to appear there the Creator had made that place complete (sampurna).",
  "Oh friends ! Please listen to the meaning of the word 'sampurna' Everyone has not understood it, even after contemplating it. Great truth has been concentrated into very few letters. If one ponders it, then priceless jewels will be gained. Within the ocean are vast quantities of gemstones although the eyes can see nothing but water. Sinful blind persons have no eyes to see anything but water. Even if they hear of something else they do not believe it. Just as things within the ocean are not visible similarly the words of Vrindavan Dasa have a deeper purpose. No one can grasp the direct meaning of these statements - but only one whose heart is attached to Gauranga can understand. Some say that the word 'sampurna' indicates the fourteen worlds. Who can comprehend the sweetness of this direct meaning? It denotes the extent of all the pleasures in the universe Including beauty, majestic potency, and virtuous conduct, plus the intoxicating essence of the topmost limit of all knowledge, devotion, intelligence, wealth, mercy, glorious family dynasties and so on as well as perfectly complete proficiency in the abilities of relishment and mastery of all forms of craftsmanship - the word 'sampurna' is full of all these meanings. Now there is yet another nectarean thing to speak of. Hearing about it pleases one's ears and mind. The following words have issued forth from the mouth of the son of Narayani (Vrindavan Dasa Thakura):",
  "navadvipa je hena mathura raja-dhani",
  "This Navadvipa is just like the opulent capital city of Mathura",
  "Vrindavan Dasa is the object of Nityananda Prabhu's mercy, Who illumines him with the constant presence of His divine grace. One who thinks he can understand Vrindavan Dasa's statements is merely puffed-up with the illusory concept of scholarship and simply dies while engrossed in the false ego!",
  "(A song by Narahari Ghanashyama:)(refrain",
  "'Glories, glories to Shri Navadvipa, the abode of happiness! Peoples of the four ashrams dwell in wonderful homes, Where unparalleled festivals are observed according to custom.'",
  "It is the place where the eight mystic perfections and the nine opulences are the humble servant in every home Where those who are attached to dharma, artha, kama and moksha are merely ridiculed. Where the extremely severe threefold miseries are vanquished and the ninefold processes of bhakti shine continuously. Where the area is so full to overflowing with spotlessly pure prema that all the non-moving as well as the moving living beings remain everlastingly intoxicated in divine madness. Where the town is beautified by thousands of diverse residences and is encircled by the pure white waters of the Sura-dhuni where young kunda-jasmine blossoms and strands of fine pearls appear as if a host of full moons have simultaneously arisen Where the overall splendor is new and ever fresh just like Vrindavan and is served by six seasons that are succulent out to the horizon.",
  "Where the charming and grand glories are so expansive that Shesha Naga ever sings of them and never reaches their limit. The best of the demigods, four-faced Lord Brahma, in the company of the other devas, meditates on the exalted, limitless rasa manifest in this place. Ghanashyama narrates - may I eventually live in that place in the company of my Lord Gaurangaa and His associates.",
  "Gauranga Mahaprabhu Sits on the Bank of the Ganga",
  "Thus Lord Gauranga wanders about the town for a while then He proceeds on the path to the Sura-dhuni. Coming to the bank of the Ganga along with His associates. Gauranga Mahaprabhu, the moon over Nadiya sits down near a bathing landing. The bank of the Sura-dhuni shines with very beautiful meadows where so many shala, piyala and kadamba trees grow. There are peacocks, cuckoos and many bees flying amongst flower-fields in thick swarms. The bathing ghata is paved step by step in stone slabs with countless Shiva shrines on the upper level. Here and there are uncommon residential quarters in front of which flow the supremely pure waters. Sitting on this Ganga-ghata is Gauranga-Sundara. His form of Madana-Mohana is captivating to all. His charming face is continuously marked with smiles as He jokes and converses with His own associates. All the women who had come to get water from the river give up their shyness and gaze continuously upon the face of Gauranga. Some who were already carrying jugs full of water on top of their heads - as soon as they behold Gauranga, their hands slip from steadying their pots which fall and crash upon the ground. Here and there are thousands and thousands of vipras sitting in groups along with townswomen. Also uncountable bhattacharyas and their students are congregating and discussing the scriptures amongst themselves. What grand splendor is manifest on both sides of this Ganga ! Especially brilliant is the appearance of Gauranga-Chanda",
  "(From the Chaitanya-Bhagavat)",
  "'Sitting on the bank is Shri Shachi-Nandana surrounded on four sides by His disciples It is just like Shri Nanda - Kumara Krishna on the bank of the Yamuna having fun amongst His cowherd boyfriends. Krishna-Chandra has now taken His cowherd boyfriends and sports numerous pranks in the form of a brahmana on the bank of the Ganga. Those people who happen to look upon Lord Gauranga's face there at the river obtain an absolutely indescribable type of happiness. Affected by Prabhu's extremely potent and masterful influence all the people on the bank of the Ganga warmly embrace each other. Glancing toward the teachers of the schools, Prabhu sits there and expounds His own commentaries Fortunate people watch as they surround Him on all sides, for by Lord Gauranga's power all of Navadvipa is free from miseries. Thus in the company of the devotees, Shri Shachi-Nandana offers obeisances to the Ganga and proceeds home. Prabhu travels on the main road into Nadiya during the time of the cows' return home. Herds and herds of cows are entering the town tended by hundreds and hundreds of cowherd boys. Many calves playfully follow behind with their tails raised aloft. Seeing this scene brings great delight to Prabhu's heart and with a choked voice He calls out the names of Krishna's cows, 0 white Dhavali !' and so on. Thousands upon thousands of vipras are coming on the path from the Ganga to perform their sandhya rituals at dusk. Numberless young brahmana boys also proceed toward their homes making a tumultuous commotion as they recite and hear scriptural verses. Lord Gauranga returns to His own home and sits down as His devotees all go and return to their own homes also. Then the bliss of Shachi Devi's heart swells up. As she sees the face of her dear son, her ocean of happiness overflows. Slowly and quietly she comes and sits before Gauranga. Overpowered with affection she wipes His limbs with her own cloth. It is just like mother Yashoda lovingly pampering Shri Krishna. Other than this comparison there is none within the three worlds.",
  "Thus Ends the Aparahna-Lila"
]

},{}],5:[function(require,module,exports){
module.exports=[
  "In the midday period He goes to an extremely enchanting flower garden and becomes absorbed in riding the sportive waves of limitless pastime after pastime along with His intimate associates.",
  "Description of the Flower Garden",
  "In this way Gauranga-Chandra comes to the flower garden and beholds the splendor of the forest with His red-tinged eyes. This flower garden is a grandly expansive place. In all four directions are groups of very tall kadamba trees. At the base of these kadamba trees are dense screwpine bushes which are encircled by thorns. Seeing this thorny forest from afar, the common people never come her. Madhavi and malati jasmine-vines climb up and embrace the kadamba trees. The pleasant south wind blows, carrying flower-pollen with its breezes. In four directions are four paths formed with jewels. In two directions are beautiful rows of bakula trees. The forest blooms with small white kunda-jasmine buds, splender, red amaranth, tagara flower-trees, groups of jewelled gardens, nageshvara flowers, and many other varieties of fragrant jasmines like jati, yuthi and mallika. Bakula trees, clove-pink vines, pink trumpet-flowers, and guelder-roses are beautifully manifest in row after row.",
  "White lilies, yellow magnolias, and many red flame-trees are blooming. Here and there are seen very enchanting jewelled altars above which the trees and creepers are formed like canopies The dark tamal trees are splendrous with their bunches of fresh sprouts and golden creepers that climb and encircle them. Temples bloom with trees of pinkish color accented here and there by flowering mango-saplings. At the base of the trees are seen beautiful groups of rose-apple bushes, jackfruits and so many juicy limes. The inner part of the forest is surrounded by groves of banana trees. Some are bearing ripe fruits while others bear unripe green ones. Rows and rows of coconut trees hold many, many fruits. Among the rows of betel trees are date-palms and wood-apple trees. There are sweet jujube berries, oranges, plums, plus cardamon and clove vines. All the fruit and flower-trees are so full with offerings that their branches bend down and touch the ground",
  "Pomegranates are bursting and soaking the ground with their juice. Hedges of jujube berries appear very beautiful. There are so many varieties of trees that they defy description. In the center of the garden is a colorful temple. Just in front of it is a lake full of cool waters. The landing-steps are formed of crystal slabs. On four sides are four bathing places inlaid with jewels. Surrounding the lake are lilies-of-the-valley formed of gold, white sephalika flowers, golden champaka creepers, and moonlike mallika jasmines. All these beautiful flowerbeds line the bank of the lake and their reflections can be seen in its pure waters. From the weight of all the flowers, their stems bend down and caress the surface of the water.",
  "Sweet little ripples move along with the gentle breeze. Lotuses of white, blue, red and more are in full bloom. These lotuses sway so much that the bumblebees cannot land on them. Greedy for honey, millions of bees fly all around. Royal swans, storks, herons, partridges and many other birds playfully sport in all directions. The fish living within the water move about by the hundreds.",
  "In a golden temple, upon a golden altar sits Lord Gauranga of golden complexion. Surrounding Him are His associates also of golden complexion, Their limbs tremble out of pure prema and their eyes are wet with tears. There are twelve gates supported by reddish-golden pillars. On the outside are golden posts holding up a nice canopy. These gates are interwoven with garlands of mallika-jasmines. The top edges have clusters of hanging sapphires that sway to and fro. The East courtyard has groves of divine Tulasi plants. The West courtyard has groves of colorful flame-trees. The North and South have grasses of dark Syamala color which bring to mind soft pillows to sit on. Pet deer roam all about in search of grass to eat and they spread their eyes wide upon beholding the beauty of Gauranga. A peacock alights from a magnolia tree upon seeing Gauranga there and begins to dance in great happiness.",
  "The trees and creepers all bloom with golden flowers. The forest is perpetually served by the Six Seasons. The sparrows chirp loudly and the cuckoos are all-pervading. Male and female waterfowl wander around on the ground. Parrots see ripe bimba berries and peck them with their beaks. Bluebirds and doves sport within the trees. Meditations on the Vrindavan Pastimes Female and male parrots call out, Jai Shri Shachi-Nandana! Glory to the life and soul of Narahari and Gadadhara ! Glory, glory to the Lord of Lakshmi Vishnu-Priya's life! Glory, glory to Radha and Krishna who have united in one form!",
  "'Glory, glory to He who has manifested all these desire-fulfilling trees ! Each and every one of our Vrindavan-vasis has increased their prema unlimitedly by sporting here in Navadvipa !' Vishvambhara hears these statements of the parrots and remembers the lila of Radha and Krishna at Radha-kunda within His mind.",
  "One moment He says, 'Who has stolen my flute?' The next moment He says, 'Just see! I have defeated you at dice!' The next moment He says, 'Let there be water-sports in this kunda!' The next moment He says. 'Come on! Let us go to the place of Surya-puja !'The next moment He begins walking, holding Gadadhara's hand. Thus He plays with His devotees in the flower garden. They adorn Him with flower armlets, necklaces, and hair-ties. They scatter flowers all around until the earth is completely covered. The fragrance attracts thick swarms of bumblebees hovering about.",
  "From moment-to-moment Lord Gauranga goes to the base of each and every tree and sports there, being cooled by the shade. They make relishable music as they play on mrdangas and vinas. Some dance and some make nice rhythms by clapping their hands. The sweetness of this forest is equal to that of Vrindavan and the Lord eternally sports here with His associates. Many groups of male servants clean up the groves. It is impossible to describe these limitless forest-pastimes. The servant of the servant of Shri Gauranga and Nityananda Krishna Dasa narrates the Lord's pastimes.",
  "Thus Ends the Madhyahna-Lila"
]

},{}],6:[function(require,module,exports){
module.exports=[
  "At night Lord Gauranga happily performs sankirtana along with His closest associates. Later He goes to the home of His beloved wife. Thus narrates Krishna Dasa.",
  "Lord Gauranga Begins the Sankirtan",
  "Then Gauranga Mahaprabhu's divine moonlike face beams in a wide smile and He gives the order to begin the kirtan. ( From the Chaitanya-Bhagavat)",
  "Hearing this from the Lord , all the Vaishnavas were overjoyed and thus Gauranga Mahaprabhu began the grand sport of kirtan. This kirtan was held every night at Shrivasa's home and occasionally at Chandra-Shekhara's. Mukunda commenced with the auspicious invocation of the kirtan and then chanted 'Rama Krishna Narahari Gopala Govinda !' Everyone was there - Nityananda, Gadadhara, Advaita, Shrivasa, Vidya-Nidhi, Murari, Hiranya, Haridasa, Gangadasa Vanamali, Vijaya-Nandana, Jagadananda, Buddhimanta Khan, Narayana, Kashishvara, Vasudeva, Rama, Garuda, Govinda, Govindananda, Gopinatha, Jagadisha, Shriman, Shridhara, Sadashiva, Vakreshvara, Bhugarbha,Shuklambara, Brahmananda, Purushottama, Sanjaya, and so on -uncountable servants of Shri Gauranga were there - I know them all by name. All of them were present together during Lord Gauranga's dancing and other than His own personal associates, no one else was there.",
  "Hearing the loud shouting of Prabhu, mixed with the cries of 'Hari! Hari!' in the night - it was as if the universe was being split open. All the sinful souls were perishing in this tumult as Shachi-Nandana Gauranga ecstatically performed His kirtan. Seeing everyone forcefully tumbling and falling 'upon the ground, Govinda Dasa came forward and shut his eyes. Sometimes Gauranga manifested Himself in the mood of God and sometimes He would weep and exclaim, 'I am but a lowly servant!' Thus in the sacred courtyard of Shrivasa the auspicious uproar of ktrtan arose with the names 'Gopala ! Govinda !'",
  "The Ecstatic Chanting and Dancing Escalates",
  "Shrivasa took charge of one group as Mukunda took another and ran this way and that. Govinda Datta took charge of yet another and everyone did kirtan as Gauranga-Chandra danced. Sometimes the greatly muscular Nityananda would grab hold of Lord Gauranga, as Advaita secretly took the dust of His feet. Gadadhara and his group had tearful eyes and were completely overcome with bliss by Lord Gauranga's kirtan. When Prabhu Vishvambhara danced and stomped vigorously on the ground the earth trembled and everyone scattered in fear. Sometimes as Lord Gauranga Vishvambhara danced at a moderate pace, He appeared to be Lord Krishna Nanda-Nandana, the best of dancers. The next moment meditating inwardly, He would hold His bands as if He were playing a flute and thus looked exactly like Vrindavan-Chandra Himself. When He manifested this mood it was totally astonishing as the son of Jagannatha Mishra was suspended in the bliss of His own Holy Names.",
  "From moment-to-moment great perspiration would flow from His pores,appearing like the Ganga had personally come from His body. Seeing Lord Gauranga's ecstatic bliss, the Bhagavata devotees held each others' necks and wept. The divine limbs of everyone were smeared with divine chandan and they were adorrned with flower garlands. Ecstatically chanting Krishna's name they forgot all else in the world. The sounds of the mridangas, small finger-cymbals, and- conchshells mixed with the sankirtan in a thunderous blend of excitement. This tumult arose in the universe and filled the sky vanquishing inauspiciousness in all directions. What a wonder that upon the dancing of Whose servants all troubles were destroyed and the universe was made pure! Thus Lord Gauranga Mahaprabhu personally danced to the chanting of His own holy names. What is the result of all this? These pastimes of Shri Gauranga were foretold in the ancient Puranas.",
  "In four directions resounded the most auspicious Shri Harinama Sankirtan and in the middle danced the son of Jagannatha Mishra. Absorbed in the bliss of Whose holy name, Lord Shiva does not know that he is naked, By Whose name Lord Brahma dances while He Himself also dances, By Whose name Valmiki became a great ascetic, By Whose name Ajamila was liberated, Whose name is taken by Shuka and Narada as they wander, Whose glories are sung by Shesha of a thousand mouths, in the bliss of His own names dances Prabhu Gauranga Vishvambhara. The rhythm of His feet striking the earth is most enchanting. Lord Gauranga looks at all the Vaishnavas one by one. Overcome with ecstatic moods, the devotees loudly repeat the names of the Lord's previous incarnations. Even Lord Haladhara, Shiva, Shuka, Narada, Prahlada, Lakshmi, Aja, nd Uddhava all chanted along with this kirtan of Lord Gauranga. As before, great care is taken that no outsiders enter the courtyard and behold this scene. Just as so many yugas elapsed during the performance of the maha-rasa dance - all the gopis in this present incarnation now consider such a length of time to pass like half a mustard-seed. In this way Krishna's inconceivable manifestation blossomed and only the fortunate servants of Shri Gauranga could come here.",
  "(There is a poem in this regard) 'Jaya re! Jaya re! Gauranga Shri Shachi-Nandana of lovely form dances auspiciously! His qualities are sung in ecstatic kirtan by Shrivasa, Ramananda, Mukunda and Vasu. The drums resound 'dram drimiki drimiki drimi' as the relishabIe finger-cymbals chime along sweetly. The hearts of his associates are pierced by flower-arrows, overwhelming them in ecstatic moods.'",
  "The Glories of Gadadhara Pandita",
  "(A song by Lochana Dasa Thakura)",
  "Glories, glories to Gadadhara and Gauranga-Sundara! They are one soul manifest in two separate bodies! Radha and Krishna, the fresh young couple of Vrindavan have now appeared here as Gadadhara and Gauranga-Chandra. Radha Vrindavaneshvari is the personification of maha-bhava - She has now incarnated as Gadadhara Pandita.",
  "And Vrajendra-Nandana is the personification of the King of rasa - He has fully manifested as this Gauranga-Chandra. One who endeavors to worship on the raganuga-marga the path of spontaneous devotion follows the disciples of Pandita Gosai (Gadadhara Pandita). Without following them, Vraja cannot be attained. Therefore the Goswamis of Vraja are branches of this disciplic succession. He whom LakshmiDevi meditates upon, even executing austerities for the purpose of attaining Him, but still not attaining her desire - this Vrajendra-Nandana is truly loved by Radha.",
  "Indeed, She is overwhelmed with prema for Him at every moment nd now this Radha has become Gadadhara Panitta Gosai who is madly engrossed in the nectar-mellows of Gauranga-prema. Therefore one who is devoid of attachment to Gadadhara cannot attain prema-bhakti, but instead becomes totally destitute. If someone does not believe in this principle he cannot be delivered for a million births, and is completely ruined.",
  "My prayer at the feet of Gadadhara-Gauranga is that I have never had association with Your true followers. I have been pleased to associate with sinful atheists and I am pierced by the spears of Gadadhara Pandita's blasphemers. My mind is full of attachment to drinking liquor and I have frightfully kept the company of other drunkards. Still, perpetually hoping for the lotus feet of Gadadhara-Gauranga Lochana Dasa begs for shelter under these feet.",
  "(Another song by Lochana Dasa)",
  "Dear mind, just worship, just worship the son of Madhava known as Gadadhara! Whoever takes shelter of his lotus feet goes to Vraja-dhama. Previously he appeared in Vrishabhanu's house at Vraja-pura bearing the name Radhika. In the company of Her girlfriends, fond of playful pranks, She serves Shyama Krishna and makes Him happy. That form is now this form, the same Queen of relishable mellows. Just worship Her incessantly with single-minded attention. Now in the company of Gauranga , Radha has incarnated and sports playfully in the dress of a renounced male ascetic Gadadhara. Coming to Nilachala and living in the company of many devotees Gadadhara has delivered many countries. The entire universe is swimming in the flood of prema that he has brought , which vanquished all the miseries of everyone. But this sinful soul has never seen that cean of prema, says Lochana Dasa.",
  "(Another song by Lochana Dasa)",
  "In hope for Gadadhara, Gadadhara, Gadadhara - if you attain Gadadhara you get residence in Vraja-pura. Taking the name of Gadadhara I will become an ascetic. I will eat from my waterpot and wear a simple loincloth. These are the hopes of my mind for many days now. With my ears I will hear about Gadadhara-Gauranga-prema.Dear Lords! Only those who know You can be a guru or a disciple in Your lineage. Only persons bereft of eyes reject You and uselessly attempt to perform devotional service. One who is devoid of attachment to Gadadhara's lotus feet remains fallen in the ocean of birth and death.",
  "In hope of attaining the lotus feet of Gadadhara, Lochana Dasa begs for remembrance of those feet.",
  "(Another poem)",
  "Re! Some say that Gauranga is Janaki-vallabha (Lord Rama), the beloved of Radha, or Pancha Vana (Cupid with 5 flower arrows). But in the mind of the poet Nayanananda I know nothing other than this - that Gauranga is the life and soul of my Gadadhara . Re !' The Kirtan is Concluded. Thus Gauranga-Sundara frolics in the happiness of kirtana.",
  "As the late night enters the second prahara. After some time Lord Gauranga stops the chanting and sits in the courtyard with His devotees. His dear companions wave fans to alleviate the fatigue of the kirtana. Shachi Devi takes Lakshmi Vishnu-Priya along and quickly leaves for home. The other family members of the bhaktas also happily leave for their own residences. Arriving at home, Shachi Devi bids her daughter-in-law goodnight and goes inside feeling boundless bliss. Then Shachi begins to prepare edibles - and fixes her eyes on the path where Gauranga will appear. Gauranga bids farewell to all the devotees and proceeds toward His own home. On some nights after kirtan during the Summertime He bathes in the Ganga with the devotees in the moonlight. Arriving at home, servants wipe His body with fine damp cloths to relieve His fatigue from sporting so much chanting and dancing during the kirtan. Changing Him into fresh clothes they wash His sacred feet and He sits upon an asana to take prasad. Shachi Devi brings numerous offerings on golden trays and places them within the sight of her son. She comes over and sits before Him to behold His face and overflowing with pure loving affection, she eagerly urges Him to feast again and again.",
  "Lord Gauranga Mahaprabhu eats while smiling gently as Lakshmi Vishnu-Priya looks on , filling her eyes. Finishing His meal Lord Gauranga Mahaprabhu washes His mouth and sitting in a solitary place He chews betel nuts. Then He goes to His sleeping-chamber and lies down to rest upon the opulent bed. Whatever food remnants are leftover from Lord Gauranga Mahaprabhu's plate are honored by Lakshmi Vishnu-Priya. All the servants headed by Ishana clean the house and go to take rest in their own quarters. Then Lakshmi Vishnu-Priya quickly goes to the Lord Gauranga's chamber and secretly serves his lotus feet.",
  "(From the Chaitanya-Bhagavata)",
  "After eating, Prabhu chews betel and goes to lie down, while Lakshmi takes His lotus feet.",
  "On some days the devotees headed by Haridasa and Gadadhara also rest in Lord Gauranga's house. Nityananda Prabhu comes here and takes his meal resting afterwards in great delight. Advaita , Shri Gadadhara , Vakreshvara, Shrivasa, Shri Narahari and all the other associates go to take rest in their own homes. Having their meals they then go to sleep.",
  "(From the Chaitanya-Bhagavat)",
"These pastimes we being performed by Gauranga Raya even up to the present moment. Occasionally some fortunate souls catch a glimpse of it. In the dead of night all becomes still as Gauranga-Sundara happily falls sleep. The servant of the servant of Shri Gauranga and Nityananda, Krishna Dasa narrates the Lord's pastimes.",
  "Thus Ends the Nisha-Lila."
]

},{}],7:[function(require,module,exports){
module.exports=[
  "At the end of the night Lord Gauranga lies upon a nice bed under the spell of sleep. There is no person alive who could behold such splendor and retain his life-breath.",
  "At the end of the night Gauranga-chanda is in His sleeping chamber. His limbs twinkle as cupid churns His mind. The golden bedstead is inlaid with solid coral and is decorated with pillows covered with pure white cloth. The nicely-colored silk is secured by cords in four corners and the jeweled tassels emit pinkish rays in all directions. Tall,strong golden posts grace the four corners supporting the expansive canopy hanging overhead.",
  "Swinging from all edges are long strands of very tiny pearls which appear like the celestial river flowing down from the heavens. The bedstead appears just like the nicely-formed pear of Mt.Kailasa While he splendrous bolsters appear like balls of fresh cream.",
  "Covering the mattress is pure white silk in the middle of which slumbers Gauranga Dvija-mani the jewel of the twice-born brahmanas. His long limbs put to shame the luster of molten gold while overwhelmed with the moods of lazy lounging He rolled over until He was lying on His stomach. The upward lines pf His beautilul tilak shine with the splendor of sandalwood paste.",
  "Around His face the dots of kunkum and musk are enchanting. Jewelled earrings rest against His glistening cheeks while the arch of His eyebrows conquers the arrows of Cupid. Attempting to find a suitable comparison for the splendor of Gauranga's closed eyes even the Creator with all his skills of supremely refined craftsmanship is baffled to the utmost extent of his imagination.",
  "I can understand that Kamadeva has vanished in fear of the crooked arch of Gauranga's eyebrows; becoming bodiless, Cupid is therefore called Ananga.",
  "Who has created this form of Lord Gauranga's? It is like Cupid's net for ensnaring the innocent deer that are the hearts of chaste girls. His two lotuslike eyes are closed in repose. His thick black eyelashes are motionless. His splendidly-colored lips defeat the hue of bimba-fruits while His slightly smiling mouth enraptures the universe.",
  "His broad chest is beautified by numerous necklaces and His arms extending to His knees are very muscular. His arms are adorned with bracelets of nine jewels and His divine form is beautified with thick patches of sandalwood paste. His hips are wrapped with very fine white cloth while His upper body is partially covered with a splendrous cloth the border of which is woven in ornate golden flowers. His thin brahmana thread is visible there, supremely pure and white. The palms of His hands are reddish like blooming water-lotuses and the sparkling auras of His finger-rings destroy darkness all around.",
  "The nicely-constructed golden temple is pervaded with happiness. On the four sides are four bejeweled terraces with gazebos. On top of the temple are flags and golden jugs and strands of pearls so large that they look like full moons. Both sides of the temple are beautified by eight crystal pillars supporting rows of swan formed of silver.",
  "Shrivasa Angana",
  "In four directions are four gates that are studded with jewels and inlaid here and there with emerald. The golden doors shine with their solid coral bolts and crystal cornices glitter like rows of candles. Ranks of huge mirrors are fixed on the walls and they are painted with scenes of the mellow-sports of Radha and Krishna. These spotless mirrors are also embellished here and there with artificial flower-trees and lotus flowers with hundreds of petals. These ornamentations on the mirrors radiate a luster so much like real lotuses that swarms of bumblebees wander here. mistaking them for actual lotus-groves.",
  "The four directions shine with eight round windows on the doors which are expert in mocking the orb of the sun. These round windows are lined with brilliant sunstones that are bordered on the inside and outside edges with rubies. The temple's altar, vestibule, courtyard and staircases are beautifully formed of solid crystal slaps.",
  "Within the temple, by the sleeping-chamber, is a flower -garden. Sitting upon branches here and there are cuckoos and other birds. The cool breeze flows with the pleasant fragrances of various flowers while the branches of the trees sway along ever so gently . Hanging upon the door of this inner chamber is the lovely sight of shoes ,umbrella and pure white chamara whisk. On both sides of the bed are golden tables supporting jeweled boxes containing betel-nut packets and golden pitchers full of scented water. On the floor in front of these tables is a beautiful place for rinsing the mouth.",
  "Lord Gauranga is Awakened",
  "Overcome with the fatigue of sporting vigorous kirtana the moonlike Gauranga-Shashi sleeps upon the bed. In the corner of the room sits a parrot in a golden cage. Seeing that the night has ended, the parrot becomes restless. With a blissful mind he thinks to himself, 'I will wake Gauranga' as his wings blossom with thrill-bumps and his eyes flow with tears.",
  "He calls out with a very sweet voice, 'Arise , Gauranga-Raya! The dew is settling upon the morning. Seeing the approaching pink of the rising sun, the bumblebees have abandoned their resting-place in the lotus flowers.'",
  "Seeing the directions illumined with glorious light the she-herons have arisen and playfully come to mingle with the he-herons. The swans and cranes and other water-dwelling birds have all gone to the bank of the celestial Sura-dhuni river (Ganga). All the birds headed by the doves have begun their cooing and chirping and the people stir about the town , seeing to their own work. The he-deer and she-deer have left their formation and wander in smaller groups for grazing on fresh grasses.",
  "His sleep broken upon hearing the words of the parrot. His two lotus eyes open ever so slightly. In His mind He is fully aware of the kunja-lila of Vrindavan and thus meditating on the dawn pastimes performed by Radha and Krishna in Their bowerhouse. He remains motionless and pretends to continue sleeping. In another room sleeps Shrimati Vishnu-Priya Devi who quickly gets out of her bed upon seeing the arrival of morning. She walks slowly in drowsiness and goes to Shachi's courtyard while her eyes roll to and fro.",
  "Hearing the sweet relishable sound of Vishnu-Priya's anklets and ornaments, Shachi opens the door and steps outside to greet her. Seeing her daughter-in-law, she speaks in pleasant words 'I am busy with household chores now. You may go and bathe in the Sura-dhuni.' Then, in order to pamper her son, Shachi proceeds very quickly with anxious mind.",
  "Entering His sleeping-chamber, she silently comes before His bed. Stroking His divine form very. very tenderly with her hand he considerately speaks in a soft and gentle voice, 'Arise, dear son Gauranga-Chanda, it is morning. The townspeople have arisen and are sitting in anticipation. Shrivasa and all the other devotees are very anxiously waiting to see you. Please get up and quickly start on the path Give up your sleep, arise and go wash your face.'",
  "The Lord Begins His Day Hearing His mother's words, Gauranga-Raya stretches His body and sits up in the bed. At this moment , Sita Thakurani (the wife of Shri Advaita) arrives along with Malini (the wife of Shrivasa Pandita) and other chaste wives of the devotees. Having all come and met together at Shachi's home they enter Gauranga's sleeping chamber. All the ladies of the town also proceed there with anxious minds just to have darshan of Gauranga. Mother Shachi lights a ghee-lamp scented with camphor on a golden tray, then jubilantly places it in the hands of Malini (wife of Shrivasa Thakura), who offers it as arati to the gorgeous Gauranga-Sundara.",
  "The male servants attentively bring in a golden footstool, full water pitchers, a tongue scraper, tooth powder, and so forth. Leaving the room, Gauranga comes out into the courtyard. Going to another room in the house, He conducts His morning activities. Then He comes out and sits down with His foot upon a footstool. After brushing His teeth and other duties, He goes and sits on a very elevated sitting place. Then His devotees, who have also just finished their morning practices, begin to arrive - Prabhu Nityananda, Shri Advaita, Gadadhara, Mukunda, Murari, Haridasa, Vakreshvara, Shuklambara Brahmachari, Shridhara and others.",
  "Coming together at the Lord's house, all the devotees successively offer their respects at His feet in the appropriate manner. Then Prabhu Nityananda comes and sits to the Lord's right with Gadadhara on the left and devotees on all four sides. Before Them sits Advaita , the Lord of Shanti-pura. What splendor manifests here! It cannot even be described with words! Description of Shrimati Vishnu-Priya's Beauty Then Vishnu-Priya Devi very playfully goes in the company of her girlfriends to bathe in the Sura-dhuni river. The complexion of her body conquers that of a golden lotus and her most lovely face radiates the splendor of how many moons? Her braid graces her hips like a great snake and it is bound with golden threads interwoven with strands of bakula flowers. Her wavy locks appear to be swarms of bumblebees and her two cheeks sparkle like mirrors.Her ears are adorned with jewel-studded earrings swinging from which are tiny ornaments inlaid with pearls.",
  "To support the weight of this extraordinary ear-ornament a golden chain, is fastened to a post in her earlobe and loops over her ear. The part in her hair is bordered by tiny pearls tied on golden threads and interspersed with rubies. On her forehead is a dot of sindura tinted reddish like the rising sun both sides of which are embellished with designs drawn in dark musk. Further designs in musk beautify her cheeks and her pleasingly-colored lips form an enchantingly gentle smile. Her fickle eyes dart about like the movements of a wagtail bird as Cupid himself trembles in fear to see the movements of her eyebrows.",
  "Her nose conquers the beauty of the sesame flower and an elephant-pearl swings from it. Around her neck is an ornamental necklace interwoven with jasmine garlands From her neck descends a splendrous array of golden necklaces, arranged in successive loops from small to large. The beauty of her breasts puts to shame that of golden waterpitchers and they are encircled with champaka flowerbuds. Her breasts are adorned with vines drawn in sandalwood paste and bordered with strands of precious elephant-pearls. Her two arms appear as golden lotus-stems and they are decorated with conchshell-bangles and other ornaments. Her upper arms are encircled by armlets that are bordered with silk dangling from which, are golden charms. From her reddish palms extend fingers adorned with rings and her index finger shines with a golden ornament that is studded with mirrors. Her entire form is made lustrous y her divine raincloud-colored silken cloth its border studded with sparkling jewels and precious jari weavings.",
  "Her hips are broad and her waist is slim. Orchid-jewels playfully dance upon her ornamental belt. Her feet are decorated with reddish lac-dye and her anklebells are trimmed with Jewels Her sweet gait mocks that of a royal swan as her anklets resound like the chirping of sparrows. Her entire body ridicules the softness of fresh cream. Amidst jokes and laughter she bathes in the Sura-dhuni.",
  "Thus Ends the Nishanta-Lila."
]

},{}],8:[function(require,module,exports){
module.exports=[
  "In the evening Lord Gauranga goes to Shrivasa's house while His heart blossoms in great delight . There He performs amazing pastimes according to the wishes of His dear friends.",
  "The Evening Arati of Shri Gauranga",
  "Then Nityananda Prabhu arrives and meets with everyone. He sits to Mahaprabhu's right with his face blossoming. Then comes Advalta-Chandra, the ocean of prema and Gadadhara, Narahari, Mukunda, Shridhara, Vakreshvara, Haridasa and all the assembly of devotees. Everyone arrives quickly at Shrivasa's house. Nityananda Raya holds an umbrella over the Lord's head. On the left is Gadadhara waving a chamara whisk. Someone dances, someone sings, and someone does kirtan. Someone lights a jewelled lamp and stands holding it. Inside the house the womenfolk are chanting 'Jaya ! Jaya !' as the pleasant sounds of mridangas, karatalas and bells reverberate. Advaita Gosai lights a ghee-lamp with five large wicks and performs arati while his inner bliss knows no bounds.",
  "(Thus a song by Narahari to be sung in raga Gauri) (Refrain)",
  "Glories, glories to the arati of Gauranga-Kishora! Sporting upon a simhasana, He appears to be a golden mountain. Stealing the overflowing hearts of all the young women in the universe.",
  "Shri Advaita, brimming full of ecstatic prema performs the arati overwhelmed with delight while gazing upon his own Lord. To the right is Nityananda-Chandra, radiant with uncommon mannerisms deeply absorbed in transcendental mellows. To the left is Gadadhara striking elegant poses holding up a new and brilliant umbrella. Shrivasa throws showers and showers of fIowers while Narahari continuously waves a chamara whisk. Shuklambara daubs the Lord with chandan while Gupta Murari shouts 'Jaya!' Madhava, Vasu Ghosha, Purushottama. Vijaya, Mukunda and other great souls of royal caliber are singing sweet ragas endowed with matchless embellishments like shruti, murachana , grama, sapta-svara and so forth. They play expertly on mridangas. tom-toms, small dampha drums, flutes, tiny high-pitched flutes and more. Bells and cymbals resound with loud ringing , while deafening dish-shaped gongs clang out dense reverberations. Vakreshvara dances in supreme exhilaration with luscious movements cavorting and spinning round and round. Someone sings the rhythms 'thai thai thai' in various ways according to strictly precise musical rules. The rasikas Gadadhara, Shridhara, Gauridasa and Haridasa dance while overwhelmed and saturated with rasa. Gauranga's face beams a sweet nectarean smile as He marvels.",
  "'How wonderfully these devotees perform in extreme madness!' The demigods in the sky are engrossed in this vision and their king Indra is able to leave only after great effort. The husband of Parvati and the four-faced one experience shivers of delight as copious tears continuously cascade from their eyes. The three worlds are excitedly jubilant as Shesha chants descriptions of this scene narrating the names of the participating munis and devotees. Narahari's Lord is the ornament of Vraja, saturated with rasa, the distributor of supremely matchless bliss in Nadiya-pura",
  "All the Devotees Gather at Shrivasa's House",
  "After completing the arati ceremony, Advaita Thakura shouts very loudly and begins dancing wildly. All the other devotees that live in the area arrive one by one and meet with those already at Shrivasa's house. Shachi Devi takes her daughter-in-law to the front of the house along with Sita Devi and gathers with all the devotees' wives. They stay in the house and gaze at the beauty of Gauranga outside. As Lord Gauranga gestures, the devotees open the gate and allow His various associates entrance into the courtyard.",
  "(From the Chaitanya-Bhagavat)",
  "'The door on the gate was opened only on the order of Lord Gauranga so that no one other than His own associates could enter' The son of Shachi sits smiling upon a simhasana attracting the minds of all by His own divine beauty and qualities Nityananda, Gadadhara , Advaita , Shrivasa and everyone else continuously swims in the ocean of ecstatic love. Upon the arrival of nightfall all become very jubilant and their moods are clearly revealed in their behavior someone offers prayers, someone renders various services, someone offers palmfuls of flowers at the Lord's sacred feet. Someone brings and presents diverse offerings, Someone offers betel into His mouth while feeling limitless bliss. Lord Gauranga sits for a while enjoying the pleasure of Krishna-katha. This fathomless Pradosha-Lila defies description. The servant of the servant of Shri Gauranga and Nityananda, Krishna Dasa narrates the Lord Gauranga's pastimes",
  "Thus Ends the Pradosha-Lila"
]

},{}],9:[function(require,module,exports){
module.exports=[
  "Waking up in the morning Lord Gauranga sits in the courtyard surrounded by His intimate associates. Effortlessly enchanting the minds of all beings in the universe He penetrates into their hearts and remains there always. After brushing His teeth and so forth He bathes in the celestial river Ganga overcome with ecstatic bliss . Then back at His home, He takes breakfast with His associates sporting novel prankish fun and afterwards rests.",
  "The Cooking Begins",
  "Returning home, Vishnu-Priya changes her clothes and begins arranging the paraphernalia for Vishnu-puja. Shachi Thakurani quickly completes her own bath and seeing that it is late, goes home as fast as possible. Then Sita Devi, Malini and the wives of all the dear devotees also finish their baths and proceed at once to Shachi's home. Going inside, they carefully receive the finest items to offer the Lord that are brought from their homes by maidservants. Shachi Mata takes the items along and washing her feet enters the kitchen.",
  "Approaching Vishnu-Priya Devi, Shachi says 'It is so late! Alas! Please begin cooking!' Very happy in her mind to receive this order, Vishnu-Priya immediately goes and sits down to cook. All the cooking duties performed by Malini are directed by the gestures of Sita Thakurani. First they cook sweet rice. Upon its completion it is transferred to a new container. Numerous types of spinach are prepared then arum-root, eggplant and many other items. Assorted vegetables are minced and spiced with black pepper. Pea soup is made with dried mango pieces. Many varieties of curries soaked in ghee are kept separately. Ground kidney-bean patties and ground pea patties are nicely fried in ghee.",
  "Coconut-cereal is fried along with cakes made from flowers. There are different kinds of eggplant mixed with sesame seeds. Much effort and attention is given in all this cooking. The sweet and the sour preparations are kept separately. Ground kidney-bean patties are soaked in sour yogurt then mixed with cumin and black pepper and are fried. They make varieties of sweet pies with farina sprinkling them with ghee which they carefully store.",
  "Milk-film is stuffed with creamy curd, sugar and spices, and is fried. They make so many items that it is impossible to describe them all. A great quantity of the finest rice is nicely cleaned and cooked in limitless different styles. In another house someone chums milk, while elsewhere others prepare sweetmeats and cooked vegetables. Farina is kneaded with sugar and carefully rolled into laddus. Wheat is formed into coils, fried in ghee and soaked in sweet juice. Cheese and condensed milk is kneaded with sugar and formed into laddus shaped like pomegranates. They make sweets from pumpkin and also disc-shaped crispy cakes. Large quantities of cucumber and chick-peas are fried in ghee. Milk is cooked down until it forms very thick kshira, then it is poured into new clay pots; cardamon , camphor, black pepper and so forth are added and it is immediately put away to cool. Some squash are cooked in milk , others in yogurt. Ghee without salt is used to fry celestial spinach. Delicious ginger-curd sweets are prepared from sesame powder. They are sprinkled with ghee and placed to soak in clay pans of yogurt. Magnolia and banana sweets are made with thickly condensed milk. Numerous varieties of out-of-season fruits are somehow produced. Sherbets are made from pomegranate, lotus flowers and sugarcane. On top of these are placed coconut pieces carved in different shapes. Oranges, almonds, mashed date-balls, lemons, grapes and custard-apples are mixed with profuse quantities of cream. Cereals are meticulously prepared from pigeon-peas and chick-peas. the night before they had been ground and soaked in water. Salt is crushed and kept separately. Numerous kinds of pickles are brought to the house from elsewhere.",
  "Ripe mango pieces are marinated in sugar-sauce. Shachi has been keeping them soaking for many days. There are mustard-powder soup, plum pickles and many more things that are brought and placed outside. Then Shachi Devi comes into the kitchen and is overjoyed to view the assortment of cooked preparations. She addresses her daughter-in-law. 'What is the delay with the cooking?' Vishnu-Priya is embarrassed and does not say a word in reply. So Malini speaks up. 'Oh Shachi Devi ! The cooking is finished. There is no more delay.' Shachi says, 'Good! I have personally cleaned Lord Vishnu's eating-room with my own hands. Now I am quickly going to arrange the offering there.' Saying this, she goes outside and says to Ishana. 'Please ask Vishvambhara to immediately take His bath in the Ganga. It is upsetting my mind that we are so late today - the rice and cooked vegetables are getting cold!'",
  "Gauranga Mahaprabhu Goes to Bathe in the Ganga",
  "Ishana goes and addresses the Lord. 'Mata has asked me to tell you to go bathe in the Ganga now.' Hearing this, Gauranga Mahaprabhu feels very blissful in His mind and leaves with His devotees for bathing The devotees gather flower garlands, ground sandalwood pulp, scented oil for massaging His body and clean clothes as they depart for the river. Along the way , He has many conversations with the devotees. Then, in their company Shri Gauranga Raya enters the waters of the Ganga and offers His obeisances unto her.",
  "(From the Chaitanya Bhagavat)",
  "'Who could possibly describe the opulence of Nadiya? At one bathing place, thousands and thousands of people bathe Some are peaceful saints, some austere ascetics, some sannyasis I don't know how many children come there and mix in the crowds! The Jahnavi (Ganga) encircles the Lord on all sides and He secretly offers her own water unto her ripples On the plea of making waves, the Jahnavi dances even though her feet are served by residents of limitless universes. Navadvipa Raya played water-sports in the Ganga river while the residents of Nadiya looked on in the greatest fortune. As Prabhu Vishvambhara played in the waters of the Ganga He looked just like the full moon itself playing in the ocean All the fortunate souls who had come to the landing to bathe incessantly beheld the face of Vishvambhar. ' One male servant (dasa) comes forward to massage the Lord attentively rubbing and cleansing His body. Then Prabhu bathes in the company of His devotees and they ascend the riverbank with much playful sporting. Another dasa comes forward to wipe His body dry carefully disentangling and dressing His hair. Helping Him change into dry clothes he adorns Him with divine flower garlands, sandalwood paste and ornaments for each and every limb.",
  "The Offering",
  "On returning home, Prabhu Gauranga Shri Hari washes His feet and enters the temple room of Lord Vishnu ( From the Chaitanya-Bhagavat:) Gauranga Bhagavan properly performs Vishnu-puja. Offering water with Tulasi , He then offers obeisances. Then Prabhu comes and sits upon a golden platform and offers the sweetmeats to Lord Vishnu. Shachi Devi carefully brings the items on golden plates and places them before her son. Offering scented water from a golden vessel, He sits alone and feeds the Lord some nice edibles. All the devotees headed by Nityananda Prabhu , Advaita Gosai, Narahari, Gadadhara, Shrivasa, Ramai, Vakreshvara, Haridasa and others had returned to their own homes after bathing in the Ganga. Each performing their own morning duties they again come together to meet at Prabhu's house. Then Vishnu-Priya Devi finishes her cooking.",
  "On Shachi's order she goes to the offering-room and places various types of rice on many golden plates; lining them up in mound after mound, she sprinkles them with ghee. All the vegetable preparations that were cooked are plied alongside the rice in successive order. All the cooked grains as well as all the pickled items are arranged in row after row according to the progression of their taste. Water is poured into a golden vessel and is scented with camphor. The finest betel nuts are made pleasant by adding cloves and cardamon and are put into a bejewelled box. Placing Tulasi-manjaris upon the grains she offers the food to the Shaligram while giving Him achamana.",
  "The Morning meal",
  "Then Shachi Devi very jubilantly calls her son and His friends to eat. Nityananda accompanies the Lord and His devotees as they quickly come, Gauranga-Chandra washes His feet and sits upon a majestic seat Nityananda and Gadadhara sit on either side of Him, while Advaita and Shrivasa sit facing them. All the devotees sit in the courtyard while Shachi blissfully serves them. Again and again she brings and serves all the cooked offerings. Overwhelmed with affection she makes them eat while all their chaste wives stand and watch from afar. Lord Gauranga laughs and jokes while He eats as the male servants bring and serve water. Washing His mouth, He goes and sits on an asana as all the devotees sit surrounding Him on all sides. Prabhu eats betel nuts and laughs, while some attendants serve Him by waving chamara whisks. Then Sita Devi takes Malini and the devotees' wives. Shachi comes forward and seats them all, feeding them to the great delight of her heart. After eating the wives return to their own homes and Shachi finally eats along with Vishnu-Priya. They wash their mouths and go to sit in a solitary place, as the servants headed by Ishana come for their own meal. The servants then clean the house. After washing all the pots and plates they put them away. Nityananda and the other devotees go to take a little rest. Seeing His devotees off , Prabhu Vishvambhara enters the sleeping chamber. Lying on His bed He goes to sleep while some dear one massages His feet. A few devotees headed by Gadadhara and Narahari also rest along with the Lord In His house. The servant of the servant of Shri Gauranga and Nityananda, Krishna Dasa narrates the Lord's pastimes.",
  "Thus Ends the Pratah-Lila."
]

},{}],10:[function(require,module,exports){
module.exports=[
  "In the forenoon period He visits the homes of devotees like Shuklambara and others and become totally overwhelmed immersed in ecstatic love as He sports various pastimes.",
  "Waking Up From the Nap",
  "After a short while Prabhu Vishvambhara awakens and sits up in bed. The other devotees headed by Gadadhara also wake up and are served water brought in golden pitchers by the male servants. Then Lord Gauranga washes His face and sits down with a supremely blissful mind. After resting briefly all the devotees carefully attend their own duties. They are very eager to meet with the Lord, but knowing it is not time yet , they do not go to Him. Some of them deliberate on the Bhagavat-shastra. Some of them mingle in Advaita's room. Some of them gather in groups of five or seven and perform kirtan while clapping their hands. Thus the devotees associate together each in their own way. Later all the bhaktas headed by Shrivasa arrive at Lord Gauranga's house. Offering obeisances at the Lord's feet they stay on the ground ut the Lord embraces them all and makes them sit nicely.",
  "Visiting The Devotees' homes",
  "Then in the company of Gadadhara and the others Lord Gauranga proceeds to Shuklambara's house in a mood of great sportive fun.",
  "(From the Chaitanya-Bhagavat)",
  "'He incessantly remained in the company of Gadadhara; indeed, Prabhu could not be separated from Gadadhara for even a moment.' Shuklambara Brahmachari sees his own Lord and respectfully gets up abandoning whatever he is doing. Bowing at His feet, he washes them and seats Gauranga Mahaprabhu on an elevated asana. Nityananda and Gadadhara sit by His side while Advaita and all the other devotees sit facing them. Shuklambara's house is close by the Jahnavi river. There sports Gauranga of beautiful body. The bank of the Sura-dhuni is lined with rows of kadamba trees. There are thousands and thousands of peacocks, cuckoos and bees buzzing. The Lord's mind is overwhelmed with the remembrance of the Yamuna river and He has a vision of Krishna herding cows in the pastures. Thus He calls out with great feeling, O Shridama ! Sudama ! Stoka Krishna! He Arjuna! 0 Brother Balarama!' Seeing Mahaprabhu's condition, the hearts of Gadadhara and the others are overcome with ecstasy as their eyes brim with tears. In this mood they sport numerous pastimes.",
  "Then Gauranga Shri Hari gets up and quickly proceeds to Shridhara's house. Seeing Gauranga arrive along with His associates, Shridhara gets up. Offering water at their feet, he bows down respectfully. Gauranga Mahaprabhu sits with blossoming face as His devotees surround Him on all sides. He laughs and converses with Shridhara. Seeing He of such enchanting beauty with Shridhara, I can find no words and become a little stunned. Staying at Shridhara's house for a short while Prabhu gets up and leaves walking in the manner of a maddened baby elephant.",
  "(From the Chaitanya-Bhagavat)",
  "'Lord Gauranga perpetually goes to everyone's house and reveals to them the visions of Chatur-bhuja (four-armed form), Sad-bhuja (six-armed form) and so forth. At one moment He goes to Gangadasa Murari's home and at the next moment He goes to Acharya-Ratna's home. Then, Prabhu takes His devotees and sits in a heavenly flower garden. The servant of the servant of Shri Gauranga and Nityananda, Krishna Dasa narrates the Lord's pastimes."
]

},{}],11:[function(require,module,exports){
module.exports=[
  "At dusk , He returns to His own home in the most astonishing manner and endeavors carefully to worship the deity which pleases His mother very much",
  "Gauranga is Bathed and Then Worships the Deity",
  "Then all the male-servants act very quickly filling golden pitchers with water and bringing them in. One washes the Lord's feet. One combs out His hair and ties it in a topknot. His body is cleansed with scented water. Finally rinsing Him again, they cover Him with fine white cloth and offer Him fresh clothing and ornaments. Gaurahari then enters the temple of Lord Vishnu. On Shachi's order, Devi Vishnu-Priya lights a lamp and goes into the temple. On the altar is a murti of Raghunatha in the form of a rock (shila). Prabhu performs the arati and bows down to offer obeisances . He brings and offers many gifts to the deity. Giving the image achaman He then puts Him to rest. Gauranga comes out of the temple and sits upon a divine lion-throne as Shachi's bliss knows no bounds. All the offerings that were presented to the deity in the Vishnu temple are saved separately for the evening. Some items are brought out and placed before Shachi's son and Lord Gauranga smilingly eats in the greatest happiness. After washing His mouth. Gauranga Raya sits down again as Vishnu-Priya Devi remains nearby to offer Him betel.",
  "(From the Chaitanya-Bhagavat)",
  "Knowing the intense bliss of His mother's heart Lord Gauranga stays there and sits with Lakshmi.",
  "Lord Guaranga Proceeds to Shrivasa's House",
  "Then suddenly Lord Gauranga becomes obsessed in his mind and He departs for Shrivasa's house. What splendor is seen during this dusk time ! In the four directions is a great tumult of singing and music. Brilliant lamps are lit by the streets in row after row making all the town spotlessly pure by their effulgence. Travelling on the path like a maddened lion. Lord Gauranga eventually arrives at Shrivasa's residence. Seeing Prabhu come in, Shrivasa becomes very Jubilant and a great ecstasy blossoms among he and his family members. Bowing at His feet they wash them, then take and seat Him upon a divine lion-throne",
  "The servant of the servant of Shri Gauranga and Nityananda Krishna Dasa narrates the Lord's pastimes. Thus Ends the Sayan-Lila"
]

},{}],12:[function(require,module,exports){
module.exports=[
  "My most worshipable golden Lord Gauranga is joyfully surrounded by His most loving devotees in Shrivasa Pandita's courtyard at night. There He immerses Himself in the transcendental ocean of congregationally chanting His own holy names (internally absorbed in the divine rasa-dance of Shri Shri Radha and Krishna). He also dances wildly in a state of tearful shivering and over-whelming jubilation. After singing and dancing to His heart's content, He goes to a quiet flower-garden and enjoys a feast of forest fruits, served to Him as He reclines upon a jeweled bedstead. Thus, the Son of Shachi Devi is most deserving of my whole-hearted selfless worship.",
  "My dear mind! Just worship Lord Gauranga Mahaprabhu who, at the end of the night, suddenly awakens upon hearing the sweet warbling of the birds within the delightfully flowering forest grove of Shrivasa Pandit! At this time, His whole body is intensely thrilled due to His being aware of Lord Krishna being situated very close to Shrimati Radhrarani on Their flower-bed in a bower-house in Vrindavan. Because of this Lord Gauranga's ecstatic love is expressed instantly by wonderfully transcendental symptoms such a fountains of tears gushing from His eyes, which bathe His entire body. Just worship this Lord Gauranga, Whose bodily complexion can only be compared to shimmering pure molten gold.",
  "After sunrise, Lord Gauranga Mahaprabhu washes His moon-like face and comes out into the courtyard, where He sits and speaks lovingly from the heart with extreme eagerness and at great length to His most beloved devotees about Lord Kesava's morning pastimes at Nanda-gram. While speaking He tastes with great relish the ecstatic mood of Radharani, which causes His entire body to fully blossom in transcendental jubilation. Dear mind, just perform your worship with boundless, unending pure love for this golden Lord Gauranga.",
  "I worship the moon-like Shrila Gaurangachandra Who, among His closest devotees, remembers Krishnas forenoon pastimes of leaving for the forest to tend His cows. During this period, all the residents of Vraja come out and become greatly anxious due to Krishnas departure from their midst. Lord Gauranga is so absorbed in this intense remembrance that He virtually becomes fused with the Vraja pastimes. Thus He imitates their statements and actions, also bestowing their mood amongst His Navadvipa devotees, who are in reality alternate manifestations of those self-same residents of Vraja.",
  "Oh my dear mind! Continuously worship the Son of Mother Shachi Lord Gauranga! His whole body erupts in ecstatic bumps of sheer delight when He remembers the extensively variegated midday pastimes of Krishna sporting with Radha and the multitude of gopis. His voice stutters and chokes in excitement as He describes these lilas among His devotees, and thus He manifests the performance of plays and dramas which simultaneously correspond to the occurrence of the Divine Couple's pastimes.",
  "Lord Gauranga remembers the son of the King of Vraja, who returns from the pasture grounds in the noon, an event which produces an unlimited ocean of bliss for all the residents of Vraja. Remembering within the core of His heart, Lord Gauranga dances throughout the town of Navadvipa, spinning around while exhaling deeply ecstatic sighs. Thus becoming completely enchanted, He enchantes the townspeople so much that they all become helplessly stunned in divine love. Oh my dear mind, just worship this Shri Gauranga!",
  "Then Krishna takes His evening bath, has His dinner and performs many other fascinating pastimes around sunset time, then Lord Gauranga absorbs Himself in thinking of these pastimes again and again with great relish. In the circle of His own dearmost devotees, He constantly follows along those same wonderful pastimes. Dear mind! Just worship this moon-like Lord Gauranga-candra!",
  "In the evening, Shrimati Radharani travels to the pre-assigned pleasure-grove in the company of Her gopi-friends and waits impatiently for Krishna to arrive for Their secret rendezvous. When She receives news from a messenger about the activities and whereabouts of Her Beloved Lord Krishna, Her heart is completely overwhelmed with the most instense anxiety. Oh my! In exactly that same mood, Lord Gauranga travels to the courtyard of Shrivasa Pandita in the evening, walking hand on hip as Radha does. Afterwards, when He realizes that Shri Krishna has indeed arrived before Shri Radha, Lord Gauranga jubilantly dances and stumbles repeatedly, His body erupting in intense euphoria with torrents of tears and shivering limbs. Just worship the fair-complexioned Lord Gauranga!"
]

},{}],13:[function(require,module,exports){
module.exports=[
  "Nisha",
  "Nishanta",
  "Prataha",
  "Purvahna",
  "Madhyahna",
  "Aparahna",
  "Shayana",
  "Pradosha"
]

},{}],14:[function(require,module,exports){
module.exports=[
  "At night, Lord Gauranga returns home to take rest. May this Lord Gauranga protect us all.",
  "At the end of the night (before sunrise), Lord Gauranga gets up from His bed, washes His face and converses with His wife.",
  "In the morning , Lord Gauranga is massaged with oil and bathes in the celestial Ganga river, then worships Lord Vishnu.",
  "In the forenoon period, Lord Gauranga enjoys discussing topics about Lord Krishna with His devotees during visits to their homes.",
  "At midday, Lord Gauranga enjoys pastimes in the gardens on the bank of the Ganga.",
  "In the afternoon, Lord Gauranga wanders about the town of Navadvipa, sporting with all the residents.",
  "At dusk, Lord Gauranga returns home to worship Lord Vishnu and be with His family.",
  "In the evening , Lord Gauranga goes with His associates to the courtyard of Shrivasa Pandita to chant the holy names and dance in ecstasy."
]

},{}],15:[function(require,module,exports){
module.exports=[
  [[22, 48], [3, 36]],
  [[3, 36], [6, 0]],
  [[6, 0], [8, 24]],
  [[8, 24], [10, 48]],
  [[10, 48], [15, 36]],
  [[15, 36], [18, 0]],
  [[18, 0], [20, 24]],
  [[20, 24], [22, 48]]
]

},{}],16:[function(require,module,exports){
module.exports=[
  "Continuing well into the night, Lord Gauranga dances and dances with Prabhu Nityananda in the courtyard of Shrivasa, surrounded by His most intimate devotees. His ecstatic singing is accompanied by the devotees who are expert in playing very loud rhytms on the mridanga drums. He wanders and dances with Shri Gadadhara Prabhu in the most astonishing way troughout the night, until just before dawn. Then He returns to His own home, where He retires to His bedchamber and falls asleep. I thus meditate on the daily pastimes of Shri Gauranga-nataraja.",
  "At the end of the night, upon hearing the pleasant sounds made by many birds such as cuckoos, roosters, and others, Lord Shri Gauranga arises from His bed. With His wife, Shri Vishnu-priya, He discusses many topics concerning the transcendental mellows of Their mutual loving affairs and thus They become very pleased. Then He gets up and goes to another room, wherein He sits upon a raised sitting place and is assisted by His devotees in washing His lotus face with nicely scented water. Thereafter, He very happily visits His mother, Shri Shachi Devi, as well as other friends and relatives in the home. I meditate thus on the daily pastimes of Shri Gauranga-sundara.",
  "In the morning, after sunrise, Lord Gauranga goes with His associates to bathe in the holy river. While bathing, they also worship Mother Ganga by offering flowers, incense and other presentations. They then come onto the bank of the river, where He is dressed with exquisite cloth and decorated with fresh flower garlands, sandalwood paste and other ornaments. Returning to His home in order to perform opulent worship of Lord Vishnu, as well as other rituals, they later partake of the foodstuffs that were offered to Lord Vishnu. After washing His hand and mouth, Lord Gauranga goes into another room and rests very happily for awhile. I meditate thus on the daily pastimes of Shri Gauranga-hari.",
  "Upon the arrival of the forenoon period, Lord Gauranga gets up from His nap and streches His body. Then He washes His lotus face with sweetly scented water. Meeting with His devotees, Who are all very fond of chanting Shri Gaurahari-nama-kirtana, He personally tastes and relishes the chanting of the holy names. Thus He sports, sometimes in the way, He increases the ecstatic pleasure of all the townspeople so much that it attains limitless heights. I meditate thus on the daily pastimes of Shri Gauranga-chandra.",
  "During the midday period, Lord Gauranga continues to enjoy the performance of intensely enthusiastic chanting and dancing, surrounded by His own dear devotees such as the moon-like Advaita Acharya, Gadadhara Pandita, and the divine madman Shrila Nityananda Prabhu. Afterwards,they all wander throughout the gardens and groves on the bank of the Ganga, where they enjoy the sweet cooling breezes blowing over the river. Hearing the pleasant sounds of the bumblebees and the birds in those gardens, the Lord remembers His ecstatic pastimes as Radha and Krishna, which are occurring simultaneously in His own forest of Vrindavana. I meditate thus on the daily pastimes of Lord Gauranga.",
  "During the splendidly beautiful afternoon period, Lord Gauranga and His devotees all become equally maddened in ecstatic love, and thus they expand ever-increasing waves of auspicious benefit that ripple all through-out the three worlds. In this mood, they leave the gardens and travel back toward His home. Along the way, He satisfies the eyes of all the townspeople, just as the moon satisfies the chakora bird with its moonbeams. Reaching home, Lord Gauranga is met at the door by His mother and lavished with loving attentions. I meditate on the daily pastimes of Shri Gauranga.",
  "At dusk, the Lord bathes with His dear friends in the Ganga, the river who flows in the three parts. They devoutly worship the Ganga by offering ghee lamps, flowers, and other articles. Afterwards, the Lord puts on fresh silken clothes and is adorned with flower garlands. Then, He worships Lord Vishnu at home by performing the evening arati ceremony, offering ghee lamps and other items. Later, He and His friends partake of the foodstuffs and betel nuts that were offered to Lord Vishnu. I thus meditate on the daily pastimes of Shri Gauranga.",
  "In the evening time, Lord Gauranga goes to the home of Shrivasa Pandita, accompanied by Shrila Advaitachandra and other dear associates. Meeting with the multitude of His devotees, He tastes and relishes the nectar of topics about Lord Hari, and His mind becomes most agitated with the ecstasies of pure love of Godhead. Then, becoming very lustful to relish the congregational chanting of the holy names of the Lord, Lord Gauranga orchestrates the performance of intensely jubilant sankirtana, which attains the summit of passionate glorification ,of these holy names. I thus meditate on the daily pastimes of Lord Gauranga-sundara."
]

},{}],17:[function(require,module,exports){
'use strict';

var timeIntervals = require('../data/time-intervals');

var getDayTimeInMinutes = function(hs, ms) {
  return hs * 60 + ms;
};

exports.getLilaIndex = function(d) {
  var index, i;
  var timeNowInMinutes =
    getDayTimeInMinutes(d.getHours(),
                        d.getMinutes());

  index = 0;
  for (i = index; i < 8; i = i + 1) {
    var bh = timeIntervals[i][0][0]
      , bm = timeIntervals[i][0][1]
      , eh = timeIntervals[i][1][0]
      , em = timeIntervals[i][1][1];

    if (timeNowInMinutes < getDayTimeInMinutes(eh, em)) {
      index = i;
      break;
    }
  }

  return index;
};

},{"../data/time-intervals":15}],18:[function(require,module,exports){
'use strict';

var formatTime = function (h, m) {
  m = m < 10 ? '0' + m : m;
  return [h, ':', m].join('');
};

exports.formatTimeInterval = function (interval) {
  var bh = interval[0][0]
    , bm = interval[0][1]
    , eh = interval[1][0]
    , em = interval[1][1];

  return [
    formatTime(bh, bm),
    ' - ',
    formatTime(eh, em)
  ].join('');
};

exports.formatTime = formatTime;

},{}],19:[function(require,module,exports){
'use strict';

var timeIntervals = require('./data/time-intervals');
var sanskritNames = require('./data/sanskrit-names');
var englishNames = require('./data/english-names');
var shortDescriptions = require('./data/short-descriptions');
var rupaDescriptions = require('./data/rupa-descriptions');
var vishvanathDescriptions = require('./data/vishvanath-descriptions');

var longDescriptions = [];
longDescriptions[0] = require('./data/long/nisha');
longDescriptions[1] = require('./data/long/nishanta');
longDescriptions[2] = require('./data/long/prataha');
longDescriptions[3] = require('./data/long/purvahna');
longDescriptions[4] = require('./data/long/madhyahna');
longDescriptions[5] = require('./data/long/aparahna');
longDescriptions[6] = require('./data/long/shayana');
longDescriptions[7] = require('./data/long/pradosha');

// ***************************************************

module.exports = {

  getLilaIndex: require('./lib/index').getLilaIndex,

  getTimeInterval: function(i) {
    return timeIntervals[i];
  },

  getSanskritName: function(i) {
    return sanskritNames[i];
  },

  getEnglishName: function(i) {
    return englishNames[i];
  },

  getShortDescription: function(i) {
    return shortDescriptions[i];
  },

  getRupaDescription: function(i) {
    return rupaDescriptions[i];
  },

  getVishvanathDescription: function(i) {
    return vishvanathDescriptions[i];
  },

  getLongDescription: function(i) {
    return longDescriptions[i];
  },

  time: require('./lib/time.js')

}

},{"./data/english-names":3,"./data/long/aparahna":4,"./data/long/madhyahna":5,"./data/long/nisha":6,"./data/long/nishanta":7,"./data/long/pradosha":8,"./data/long/prataha":9,"./data/long/purvahna":10,"./data/long/shayana":11,"./data/rupa-descriptions":12,"./data/sanskrit-names":13,"./data/short-descriptions":14,"./data/time-intervals":15,"./data/vishvanath-descriptions":16,"./lib/index":17,"./lib/time.js":18}]},{},[1]);
