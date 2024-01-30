function setup() {

//size of each square
const squareSize = 40;
//number of cells of the grid
const cellNumber = 10;
//canvas size in pixels
const canvasSize = squareSize * cellNumber;
//maximum offset
const maxOffsetPosition = 3;
const maxOffsetSize = 50;

    createCanvas(400, 400);
    background(220);

    for(let row = 0; row < cellNumber; row++) {
        for(let column = 0; column < cellNumber; column++) {
            const red = random (255);
            const green = random(255);
            const blue = random(255);

            const myColor = color(red, green, blue);
            const texture = random(textures);
            

            //fill(myColor)

            //tint the square
            tint(myColor)

            //calculate random offset
            const randomOffsetHorizontal = random (-maxOffsetPosition, maxOffsetPosition);
            const randomOffsetVertical = random(-maxOffsetPosition, maxOffsetPosition);

            //calculate horizontal positon in pixels
            const x = row * squareSize + randomOffsetHorizontal; 

            //calculate vertical position in pixels
            const y = column * squareSize + randomOffsetVertical;

            //calculate random offset for size
            const randomOffsetWidth = random(-maxOffsetSize, maxOffsetSize);
            const randomOffsetHeight = random(-maxOffsetSize, maxOffsetSize);


            //set width and height
            const width = squareSize + randomOffsetWidth;
          const height = squareSize + randomOffsetHeight;


            

            //square (x, y, r)
            //x = position of the left of the square
            //y - postiion of the top of the square
            //s = size of the side of the square
            // square(x, y, squareSize);


            //image(background, x position, y postion, width, height)
            //will draw an image given the background at the given position and width / height
            image(texture, x, y, width, height)

        }
    }
}
  
const textures = [];

function preload(){

    for(let textureNumber = 1; textureNumber <= 4; textureNumber++){
        const pathToTexture = 'Textures/texture-trans' + textureNumber + '.png';
        //load the image using the loadImage p5.js function and add it to the textures list 
        textures.push(loadImage(pathToTexture));
    }
}

