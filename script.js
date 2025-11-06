$(document).ready(function() {
    let imageIndex = 0;
    let images = [];
    let bwImages = [];
    let colorImages = [];
    let page;
    let folder;

    const homeFolder = 'images/homeImages/';
    const homeImages = ['ali.jpg', 'alvarez.jpg', 'foreman.jpg', 'frazier.jpg', 'holyfield.jpg', 
        'marciano.jpg', 'mayweather.jpg', 'pacquiao.jpg', 'robinson.jpg', 'tyson.jpg', 'default.svg'
    ];

    const aliFolder = 'images/ali/';
    const aliImages = ['ali1.jpg', 'ali2.jpg', 'ali3.jpg', 'ali4.jpg', 'ali5.jpg'];
    const aliBWImages = ['ali1BW.jpg', 'ali2BW.jpg', 'ali3BW.jpg', 'ali4BW.jpg', 'ali5BW.jpg'];

    const tysonFolder = 'images/tyson/';
    const tysonImages = ['tyson1.jpg', 'tyson2.jpg', 'tyson3.jpg', 'tyson4.jpg', 'tyson5.jpg'];
    const tysonBWImages = ['tyson1BW.jpg', 'tyson2BW.jpg', 'tyson3BW.jpg', 'tyson4BW.jpg', 'tyson5BW.jpg'];

    const mayweatherFolder = 'images/mayweather/';
    const mayweatherImages = ['mayweather1.jpg', 'mayweather2.jpg', 'mayweather3.jpg', 'mayweather4.jpg', 'mayweather5.jpg'];
    const mayweatherBWImages = ['mayweather1BW.jpg', 'mayweather2BW.jpg', 'mayweather3BW.jpg', 'mayweather4BW.jpg', 'mayweather5BW.jpg'];

    // Ali setup
    if (window.location.pathname.includes('ali.html')) {
       $('#winInput').val('56');
       $('#lossInput').val('5');
       $('#drawInput').val('0');
       colorImages = aliImages;
       bwImages = aliBWImages;
       images = colorImages;
       page = 'ali';
       folder = aliFolder;
       loadImages(aliImages);
       loadImages(aliBWImages);
    }

    // Tyson setup
    if (window.location.pathname.includes('tyson.html')) {
       $('#winInput').val('50');
       $('#lossInput').val('7');
       $('#drawInput').val('0');
       colorImages = tysonImages;
       bwImages = tysonBWImages;
       images = colorImages;
       page = 'tyson';
       folder = tysonFolder;
       loadImages(tysonImages);
       loadImages(tysonBWImages);
    }

    // Mayweather setup
    if (window.location.pathname.includes('mayweather.html')) {
       $('#winInput').val('50');
       $('#lossInput').val('0');
       $('#drawInput').val('0');
       colorImages = mayweatherImages;
       bwImages = mayweatherBWImages;
       images = colorImages;
       page = 'mayweather';
       folder = mayweatherFolder;
       loadImages(mayweatherImages);
       loadImages(mayweatherBWImages);
    }

    if (window.location.pathname.includes('home.html')) {
        folder = homeFolder;
        loadImages(homeImages);
        // Function to set home image and record to the selected boxer
        $('#boxerSelect').change(function() {
            const boxer = $(this).val();
            if (boxer === "") {
                $('#homeImg').attr("src", 'images/homeImages/default.svg');
                return;
            }
            const dividedNames = boxer.toLowerCase().split(' ');
            const boxerURL = dividedNames[dividedNames.length - 1];
            $('#homeImg').attr("src", folder + boxerURL + '.jpg');
            if (boxerURL == 'ali') {
                $('#winInput').val('56');
                $('#lossInput').val('5');
                $('#drawInput').val('0');
            }
            if (boxerURL == 'alvarez') {
                $('#winInput').val('63');
                $('#lossInput').val('3');
                $('#drawInput').val('2');
            }
            if (boxerURL == 'foreman') {
                $('#winInput').val('76');
                $('#lossInput').val('5');
                $('#drawInput').val('0');
            }
            if (boxerURL == 'frazier') {
                $('#winInput').val('32');
                $('#lossInput').val('4');
                $('#drawInput').val('1');
            }
            if (boxerURL == 'holyfield') {
                $('#winInput').val('44');
                $('#lossInput').val('10');
                $('#drawInput').val('2');
            }
            if (boxerURL == 'marciano') {
                $('#winInput').val('49');
                $('#lossInput').val('0');
                $('#drawInput').val('0');
            }
            if (boxerURL == 'mayweather') {
                $('#winInput').val('50');
                $('#lossInput').val('0');
                $('#drawInput').val('0');
            }
            if (boxerURL == 'pacquiao') {
                $('#winInput').val('62');
                $('#lossInput').val('8');
                $('#drawInput').val('3');
            }
            if (boxerURL == 'robinson') {
                $('#winInput').val('174');
                $('#lossInput').val('19');
                $('#drawInput').val('6');
            }
            if (boxerURL == 'tyson') {
                $('#winInput').val('50');
                $('#lossInput').val('7');
                $('#drawInput').val('0');
            }
        });
    }

    // Function to show fighter's nicknames
    $('#showNicknameBtn').click(function() {
        if (page == 'ali') {
            alert('The Greatest');
        }
        if (page == 'tyson') {
            alert('Iron');
        }
        if (page == 'mayweather') {
            alert('Money');
        }
    });

    // Function to switch between color and black and white images
    $('#switchColorBtn').click(function() {
        if (images == colorImages) {
            images = bwImages;
            $('#switchColorBtn').text('BW');
            $("#img").attr("src", folder + images[imageIndex]);
        } else if (images == bwImages) {
            images = colorImages;
            $('#switchColorBtn').text('Color');
            $("#img").attr("src", folder + images[imageIndex]);
        }
    });

    // Function to switch the image
    function switchImage() {
        imageIndex = (imageIndex + 1) % images.length;
        $("#img").attr("src", folder + images[imageIndex]);
    };

    // Function to load the images so there's no delay
    function loadImages(images) {
        const loadedImages = [];
        images.forEach(element => {
            const image = new Image();
            image.src = folder + element;
            loadedImages.push(image);
        });
        return loadedImages;
    };

    setInterval(switchImage, 5000);
}); 