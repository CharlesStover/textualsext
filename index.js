var chooseYourOwnAdventure = function(a) {
		var adventure = cyoa[a];
		for (var x = 0; x < 3; x++) {
			var element = [description, image, options][x];
			while (element.firstChild)
				element.removeChild(element.firstChild);
		}
		if ("d" in adventure) {
			var p = document.createElement("p");
			p.innerHTML = adventure.d;
			description.appendChild(p);
		}
		if (!("o" in adventure))
			adventure.o = {"7O4A0": "Start Over?"};
		for (x in adventure.o) {
			var a  = document.createElement("a"),
				li = document.createElement("li");
			a.addEventListener("click", optionClick);
			a.innerHTML = adventure.o[x];
			a.setAttribute("href", "#");
			a.setAttribute("title", "Choose option: " + x);
			li.appendChild(a);
			options.appendChild(li);
		}
		if ("i" in adventure) {
			for (x = 0; x < adventure.i.length; x++) {
				var img = document.createElement("img");
				img.addEventListener("click", imageClick);
				img.setAttribute("alt", "Picture #" + (x + 1));
				img.setAttribute("src", "http://i.imgur.com/" + adventure.i[x] + ".jpg");
				if (x != 0)
					img.style.setProperty("display", "none");
				image.appendChild(img);
			}
			description.style.setProperty("display", "none");
			options.style.setProperty("display", "none");
		}
	},
	cyoa = {
		0: {
			d: "Textual Sext is a choose-your-own pornographic adventure game, designed by and featuring reddit user <a href=\"https://www.reddit.com/user/textualsext\" rel=\"nofollow\" target=\"_blank\" title=\"overview for textualsext\">/u/textualsext</a>. Click the images to scroll through the gallery, then choose an option for how to continue the storyline.",
			o: {
				"7O4A0": "Start"
			}
		},
		"274IZ": {
			d: "I spread my juices on my nipple inviting you to taste... The rest is up to you. :)",
			i: ["Cv6IXh", "fp2beh", "NMyMIh", "sJMt5h"]
		},
		"7O4A0": {
			d: "It's a balmy Sunday afternoon. The sun shines through the bedroom window. You enter to find me about to get changed and decide you aren't going to let me get dressed again for a little while. Where do you start?",
			i: ["wi83Fh", "purCSh", "agMRBh", "uqr8gh"],
			o: {
				going_up: "Shirt first",
				going_down: "Pants first"
			}
		},
		bed_rear_exposure: {
			d: "As I slide my wet fingers along my soaking slit you hear me moan into the mattress. I slowly slide one finger in and spread my juices around. You love watching my ass sway as I push two fingers in, my muscles clenching. Once I've added a third finger and you can hear the wet noises as I pump them in and out of my hot tunnel you can't stand it any longer. You unbuckle and unzip your pants as you crawl across the bed behind me. One hand on my hip and the other sliding up my back into my hair you pull my head back and as I arch you grab your cock to slide it in my tight, slick pussy. As you slowly thrust in and out you lean over my back and whisper in my ear &quot;Soon I'll be in your pretty pink ass.&quot;",
			i: ["1GMITh", "5LoIch", "QNJ62h", "OzSheh", "KO2Wzh", "0okOQh", "lQHIAh"]
		},
		D3NJE: {
			d: "You watch intently as I work my pussy. Content to sit back and listen as I pant and moan. You can hear my hair slipping across the sheets, and feel the heat rising from my skin. As a pink blush rises along my chest and thighs you are pulled forward, driven to taste what is right in front of you. As your tongue circles my clit my muscles tighten and when you place your lips around me, adding the perfect amoung of suction I scream at the intensity of the spasms wracking my body. As my breath returns, I slowly open my eyes. As our eyes lock I can't stop the devilish smirk that lifts my lips as I think about just how I will repay you...",
			i: ["JUVJdh", "qaGkyh", "QKnBQh", "8K3OCh", "gMt3ch"]
		},
		going_down: {
			d: "After watching me strip down to just my panties and t-shirt, you tell me:",
			i: ["kEvwNh", "XhAveh", "g1p6nh", "PkR7Xh"],
			o: {
				going_down_on_my_knees: "You want me to kneel on the bed, on my hands and knees, so I can pull down my panties to show you my ass and pussy.",
				going_down_standing: "I'm not done. You want me totally naked and standing in the sun."
			}
		},
		going_down_on_my_knees: {
			d: "You thought you could hold out. Boss me around a bit, use your masterful control to work me up and make me beg. When you see me kneeling in front of you however, exposed and posed just how you like, you find you can't wait. Reaching into the nightstand drawer you pull out a bottle of liquid silk and casually toss it on the bed. As I hear your clothing fall to the floor I look over my shoulder. You grin and crawl across the bed. When you place a few drops of the cold lubricant directly over my ass I shudder at the sensation and the anticipation.",
			i: ["uNjMkh", "9A1Grh", "apchNh", "b9Aj7h", "lrOozh"]
		},
		going_down_standing: {
			d: "Just as I unclasp and start to remove my bra the doorbell rings. I suddenly remember that I was supposed to go for a run with my best friend! I send you down to let her in while I quickly throw on some shorts and a t-shirt... Perhaps you'd like to start over. :P",
			i: ["FxxCah", "LeywGh", "woV7qh", "KLu5Sh", "Tq4PEh"]
		},
		going_up: {
			d: "After watching me strip down to my panties you tell me you want me to:",
			i: ["f9amhh", "IOe5ah", "mTqgch", "kTpJvh", "590Hkh", "sQToCh", "UQ1EOh", "szYn1h", "15kprh"],
			o: {
				going_up_on_my_knees: "Crawl on the bed and tug my panties down.",
				P2VBF: "Strip off my panties and sit on the edge of the bed, playing with my breasts and pussy."
			}
		},
		going_up_on_my_knees: {
			d: "You can tell I am getting wet; I'm breathing faster, and my cheeks and chest are flushed.",
			i: ["7FCQlh", "k7dKrh", "Z9ucwh"],
			o: {
				bed_rear_exposure: "You tell me to turn around, remove the panties and kneel before you - you want to watch me finger myself.",
				T193X: "You gently lay me down among the soft pillows, running your hands down my hips and legs you slide my panties off. I can't help but touch myself as you watch."
			}
		},
		M8989: {
			d: "My dildo slides into my slick pussy with ease. As I sink down onto it, my fingers find my clit. I stroke my finger forward and back occasionally swirling or pressing right over my throbbing bud. My muscles clench and I begin to rock forward and back, then a little more up and down. Riding my dildo and fingering my clit, you tell me to use the vibrator. I pick it up, set it to medium with a pulse. As I press the wide head to my clit I hear your zipper. I look up to see you pull your cock from your jeans. I start pushing and sliding the vibrator against me as my hips pick up speed. I watch your hands as they work your cock... who do you think came first?",
			i: ["MDND3h", "YVWe1h", "PXDlIh", "e6aISh", "UpyXwh", "JvUsmh", "BSKYdh", "MnFXzh", "s5SCDh"]
		},
		P2VBF: {
			d: "The sun seems to gild my skin. As I play with myself you decide you want to see more.",
			i: ["Sqijeh", "xOXW3h", "KdhqLh"],
			o: {
				M8989: "You tell me to grab a pillow and kneel over it on the bed. Handing me my vibrator and dildo all you say is &quot;I want to see you work.&quot;",
				QS66W: "You reach down to take my hand. Pulling me to my feet you back me against the wall. Silently sitting on the bed you wait and watch."
			}
		},
		"QS66W": {
			d: "A little unsure of myself I look at you through my hair. You lean back on your elbows and raise your eyebrows. I smile shyly as I reach down to run my finger through my slit. I am so wet I can feel it on my thighs and coating my hair. My finger circles my clit, then I drive it into me. I need to lift my leg to get just the right angle. You still watch as my hands work my pussy, eventually my eyes are closed tight, my head is thrown back and I am standing on my tiptoes. As a flush rushes over my face and chest I cry out. My legs shake as I drop to my knees. Once I've caught my breath I look up to see your gorgeous cock dripping pre-cum right in front of me...",
			i: ["0YvqDh", "LYUv2h", "pywxCh", "tyZvqh", "zjdROh"]
		},
		"T193X": {
			i: ["hFG1Uh", "IsfUQh", "1lT1ah"],
			o: {
				D3NJE: "You walk to my nightstand and pull out a vibrator. You move onto the bed to get a close up view of it being put to use.",
				"274IZ": "You watch transfixed as I get louder, and thrash about, my eyes squeezed tight. As I shake and tremble with my orgasm you ask to taste me. Sitting up and moving towards you I stick my finger in my mouth and smile, I'm not sure if I want to share. ;)"
			}
		}
	},
	description = document.getElementById("description"),
	image = document.getElementById("image"),
	imageClick = function() {
		this.style.setProperty("display", "none");
		if (this.nextSibling)
			this.nextSibling.style.setProperty("display", "inline-block");
		else {
			description.style.setProperty("display", "block");
			options.style.setProperty("display", "block");
		}
	},
	optionClick = function(e) {
		chooseYourOwnAdventure(this.getAttribute("title").match(/\: ([\d\w]+)$/)[1]);
		e.preventDefault();
	},
	options = document.getElementsByTagName("ul").item(0);

chooseYourOwnAdventure(0);
