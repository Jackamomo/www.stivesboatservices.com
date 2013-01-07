var mygallery=new fadeSlideShow({
	wrapperid: "img-box",
	dimensions: [435, 280], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/boat-01.jpg", "", "", ""],
				  ["images/boat-02.jpg", "", "", ""],
				  ["images/boat-04.jpg", "", "", ""],
				  ["images/boat-06.jpg", "", "", ""],
				  ["images/boat-07.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false, randomize:true},
	fadeduration: 4000, //transition duration (milliseconds)
})