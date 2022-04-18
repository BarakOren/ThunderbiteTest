

const Application = PIXI.Application;

let w = window.innerWidth
let h = window.innerHeight

let app = new Application({
    resizeTo: window,
    transparent: false,
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
    antialias: true,
    width: w,
    height: h,
});

// app.renderer.view.style.position = "absolute";
//   app.renderer.view.style.display = "block";
//   app.renderer.autoResize = true;
//   app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);
app.sortableChildren = true

let loader = PIXI.Loader.shared;

// loader.add("./images/spritesheet.json").load(setup);
loader.load(setup);

function setup(loader ,resources){
    // background
    const background = PIXI.Sprite.from("./images/header.png")
    background.position.x = window.innerWidth / 2;
    background.position.y = window.innerHeight / 2;
    background.width = window.innerWidth;
    background.height = window.innerHeight;
    background.anchor.set(0.5);
    app.stage.addChild(background)



    const positionX = window.innerWidth / 2;
    const positionY = 170;


//_________________First Row____________________________

//__________"Showdown"
    const showdown = PIXI.Sprite.from("./images/edits/showdown-off.png")
    showdown.position.x = positionX
    showdown.position.y = positionY
    showdown.anchor.set(0.5);


    // //vegas__________________________
    const vegas = PIXI.Sprite.from("./images/edits/vegas.png");
    vegas.anchor.set(0.5);
    vegas.position.x = positionX
    vegas.position.y = positionY
    vegas.zIndex = 1;
    vegas.alpha = 0;
  

    // slots__________________________
    const slots = PIXI.Sprite.from("./images/edits/slots.png");
    slots.anchor.set(0.5);
    slots.position.x = positionX
    slots.position.y = positionY
    slots.zIndex = 1;
    slots.alpha = 0;

    
    //  bolt _______________________
    const bolt = PIXI.Sprite.from("./images/edits/bolt.png");
    bolt.anchor.set(0.5);
    bolt.position.x = positionX
    bolt.position.y = positionY
    bolt.zIndex = 1;
    bolt.alpha = 0;

    //___________S
    const s = PIXI.Sprite.from("./images/edits/s.png");
    s.anchor.set(0.5);
    s.position.x = positionX
    s.position.y = positionY
    s.alpha = 0;
    

    const h = PIXI.Sprite.from("./images/edits/h.png");
    h.anchor.set(0.5);
    h.position.x = positionX
    h.position.y = positionY
    h.alpha = 0;

    const o = PIXI.Sprite.from("./images/edits/o.png");
    o.anchor.set(0.5);
    o.position.x = positionX
    o.position.y = positionY
    o.alpha = 0;

    const w = PIXI.Sprite.from("./images/edits/w.png");
    w.anchor.set(0.5);
    w.position.x = positionX
    w.position.y = positionY
    w.alpha = 0;

    const d = PIXI.Sprite.from("./images/edits/d.png");
    d.anchor.set(0.5);
    d.position.x = positionX
    d.position.y = positionY
    d.alpha = 0;

    const o1 = PIXI.Sprite.from("./images/edits/o2.png");
    o1.anchor.set(0.5);
    o1.position.x = positionX
    o1.position.y = positionY
    o1.alpha = 0;


    const w1 = PIXI.Sprite.from("./images/edits/w2.png");
    w1.anchor.set(0.5);
    w1.position.x = positionX
    w1.position.y = positionY
    w1.alpha = 0;

    const n = PIXI.Sprite.from("./images/edits/n.png");
    n.anchor.set(0.5);
    n.position.x = positionX
    n.position.y = positionY
    n.alpha = 0;

    // muust drop __________________
    const mustDrop = PIXI.Sprite.from("./images/edits/mustdrop.png");
    mustDrop.anchor.set(0.5);
    mustDrop.position.x = positionX
    mustDrop.position.y = positionY
    mustDrop.zOrder = 5;
    mustDrop.alpha = 1;



    const allSprits = [showdown, vegas, slots, bolt, s, h, o, w, d, o1, w1, n, mustDrop]
    function scaleThemAll(sprites){
        sprites.forEach(sprite => sprite.scale.set(0.8))
    }
    scaleThemAll(allSprits)


    app.stage.addChild(s, h, o, w, d, o1, w1, n,showdown, bolt)
    setTimeout(VegasSlotsflicker, 700)
    setTimeout(renderLetters, 1000)
    setTimeout(boltFlickering, 1450)
    setTimeout(mustDropFlicker, 1600)


    function VegasSlotsflicker() {
        app.stage.addChild(vegas, slots)
        let sprites = [vegas, slots]
        let frame = 0 // frame = 0.1 sec
        let flickering = setInterval(() => {
            frame++ // counting seconds
            if(frame < 8 && frame < 5){ // keeping them lit for 5 frames 
                sprites.forEach(sprite => sprite.alpha = 1)
            } else if(frame < 8 && frame > 4 && frame % 2 !== 0){ // turning off after than 5 frames
                sprites.forEach(sprite => sprite.alpha = 0)            
            } else if(frame < 8 && frame > 4 && frame % 2 === 0){ // turning on after more than 5 frames
                sprites.forEach(sprite => sprite.alpha = 1)           
            } else {
                sprites.forEach(sprite => sprite.alpha = 1)
                clearInterval(flickering)
            }
        },100)
    }

    function renderLetters(){ 
        let letters = [s, h, o, w, d, o1, w1, n] // showdown letters
        let lettersFrame = 0 // counter 0.15 seconds
        let renderingLetters = setInterval(() => {
            if(lettersFrame < 8){
                letters[lettersFrame].alpha = 1
                lettersFrame++ // adding to count 
            } else {
                clearInterval(renderingLetters)
            }
        }, 150);
    }
 
    function boltFlickering(){
        let onOff = true; //
        let changer = true; //
        
        let counter = 0 
        if(counter === 0){//start flickering on first run
            counter++ 
            startInterval()
        }

        function startInterval(){
            let flickering = setInterval(() => {
                if(onOff && changer){
                    bolt.alpha = 0;
                    changer = false 
                } else if (onOff && !changer) {
                    bolt.alpha = 1;
                    changer = true
                } else if(!onOff) {
                    bolt.alpha = 1   
                    clearInterval(flickering)
                }
            }, Math.floor(Math.random() * 120 - 80)); 
        }//math.random helps the flickering to look more real

        setInterval(() => { //turns flickering on and off every 10 secs
            onOff = !onOff
            if(onOff){startInterval()}
        }, 10000)
        }

        function mustDropFlicker(){
            app.stage.addChild(mustDrop)
            lightsOn = true;
            frame = 0; //each frame is 0.1 sec
            let flickering = setInterval(() => { 
                frame++ //counting frames
                if(frame < 6){ //keeps lit for 6 frames
                    mustDrop.alpha = 1
                } else if (frame > 6 && frame % 2 !== 0 && frame < 10){
                    mustDrop.alpha = 0
                } else if (frame > 6 && frame % 2 === 0 && frame < 10){
                    mustDrop.alpha = 1
                } else if (frame === 10) { //turns flickering off after 10 frames
                    mustDrop.alpha = 1
                    clearInterval(flickering)
                }
            }, 100)
        }





// ________________________________ WHEEL SECTION _________________________________
    
// const wheelDiv = document.getElementById("wheelDiv");




// const wheel = PIXI.Sprite.from("./images/wheel.png")
// wheel.position.x = window.innerWidth / 2;
// wheel.position.y = 500
// wheel.scale.set(0.5)
// wheel.anchor.set(0.5);


// const button = PIXI.Sprite.from("./images/btn-spin.png")
// button.position.x = window.innerWidth / 4;
// button.position.y = 500
// button.scale.set(0.5)
// button.anchor.set(0.5);
// button.interactive = true
// button.buttonMode = true

// const marker = PIXI.Sprite.from("./images/marker.png")
// marker.scale.set(0.5)
// marker.anchor.set(0.5);

// app.stage.addChildAt(marker, 1)
// app.stage.addChild(wheel, button)

// button.buttonMode = true;
// button.on('click', start);

// let spinning = false

// function start(){
//     button.alpha = 0.5;
//     if(!spinning){
//         app.ticker.add(() => {
//             wheel.rotation += 0.1;
            
//         })
//         let i = 0;
//         while(i < 10){
//             console.log(i)
//             wheel.rotation -= 0.01
//             i++
//         }
//     }
//     spinning = true

// }

}




















// const Graphics = PIXI.Graphics;

// const rectangle = new Graphics();
// rectangle.beginFill(0xAA33BB)
// .lineStyle(4, 0xFFEA00)
// .drawRect(200, 200, 100, 120)
// .endFill()


// app.stage.addChild(rectangle)

// const poly = new Graphics();
// poly.beginFill(0xFF66FF)
// .lineStyle(4, 0xFFEA00)
// .drawPolygon([
//     600,50,
//     800,150,
//     900,300,
//     400,400,
// ])
// .endFill()



// const circle = new Graphics();
// circle.beginFill(0x22AACC)
// .drawCircle(440, 200, 80)
// .endFill()

// app.stage.addChild(circle)
// app.stage.addChild(poly)

// const line = new Graphics()
// line.lineStyle(5, 0xFFEA00, 1)
// .moveTo(200, 100)
// .lineTo(1500, 100)

// app.stage.addChild(line)




// const style = new PIXI.TextStyle({
//     fontFamiliy: "Montserrat",
//     fontSize: 48,
//     fill: "deepskyblue",
//     stroke: "#ffffff"
// })
// const myText = new PIXI.Text("adsf", style)
// app.stage.addChild(myText)
// // myText.text = "changed!"
// myText.style.wordWrap = true;
// myText.style.wordWrapWidth = 100;
// myText.style.align = "center";

// // app.ticker.add(delta => loop(delta));
// // function loop(delta){
// //     const rectangle = new Graphics();
// //     rectangle.beginFill(0xFFFFFF)
// //     .drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, 3, 3)
// //     .endFill()

// //     app.stage.addChild(rectangle)
// // }


// const char1Sprite = PIXI.Sprite.from("./images/char1.png")
// app.stage.addChild(char1Sprite);

// // char1Sprite.width = 200;
// // char1Sprite.height = 500;
// char1Sprite.anchor.x = 0.5
// char1Sprite.anchor.y = 0.5
// // app.ticker.add(delta => loop(delta));
// // function loop(delta){
// //     char1Sprite.x += 1
// //     char1Sprite.rotation += 0.055
// // }

// char1Sprite.position.set(10, 400);

// char1Sprite.interactive = true
// char1Sprite.buttonMode = true
// char1Sprite.on("pointerdown", function(){
//     char1Sprite.scale.x += 0.1
//     char1Sprite.scale.y += 0.1
// })

// document.addEventListener('keydown', function(e){
//     if(e.key === "ArrowRight")
//     char1Sprite.x += 10
//     else if(e.key === "ArrowLeft")
//     char1Sprite.x -= 10
// })

// const container = new PIXI.Container()
// const char2Sprite = PIXI.Sprite.from("./images/char2.png")
// const char3Sprite = PIXI.Sprite.from("./images/char3.png")
// char2Sprite.position.set(500, 500)
// char3Sprite.position.set(700, 500)
// container.x = 200

// container.addChild(char2Sprite)
// container.addChild(char3Sprite)
// app.stage.addChild(container)

// const particleContainer = new PIXI.ParticleContainer(1000, {
//     position: true,
//     rotation: true,
//     vertices: true,
//     tiny: true,
//     uvs: true
// })

// const loader = PIXI.Loader.shared;

// loader.add(["./images/char4.png","./images/char5.png"]);
// loader.load(setup);
// function setup(loader, resources){
//     const char4Sprite = new PIXI.Sprite(
//         resources["./images/char4.png"].texture
//     )
//     char4Sprite.y = 400
//     app.stage.addChild(char4Sprite)
// }

// loader.onLoad.add(function(){
//     console.log("on load")
// })

// loader.onError.add(function(){
//     console.log("onError")
// })

// loader.onProgress.add(function(){
//     console.log("on onProgress")
// })

// const loader = PIXI.Loader.shared;

// loader.add('tileset', './images/tileset.png')
// // //.add('char5Texture', './images/char5.png')
// .load(setup)
// function setup(loader, resources) {
//     const texture1 = resources.tileset.texture;
//     const rect1 = new PIXI.Rectangle(176, 160, 76, 86);
//     texture1.frame = rect1;
//     const spr1 = new PIXI.Sprite(texture1);
//     spr1.scale.set(2, 2);
//     app.stage.addChild(spr1);

//     const texture2 = new PIXI.Texture(resources.tileset.texture);
//     const rect2 = new PIXI.Rectangle(190, 593, 77, 84);
//     texture2.frame = rect2;
//     const spr2 = new PIXI.Sprite(texture2);
//     spr2.scale.set(2, 2);
//     spr2.position.set(200, 200);
//     app.stage.addChild(spr2);
// }

// loader.add('tileset', "./images/drags.json")
//upload one dragon from json
// .load(setup)
// function setup(loader, resources){
//     const drag11Texture = PIXI.Texture.from("drag11.png")
//     const drag11Sprite = new PIXI.Sprite(drag11Texture)
//     drag11Sprite.position.set(100, 0)
//     drag11Sprite.scale.set(2, 2)
//     app.stage.addChild(drag11Sprite)

// }

// .load(setup)
// function setup(loader, resources){
//     const textures = []
//     for(let i = 1; i < 13; i++){
//         const texture = PIXI.Texture.from(`drag${i}.png`)
//         textures.push(texture)
//     }
//     const drag = new PIXI.AnimatedSprite(textures)
//         drag.position.set(100, 100);
//         drag.scale.set(2, 2);
//         app.stage.addChild(drag);
//         drag.play();
//         drag.animationSpeed = 0.2;
        
 

//         const blurFilter = new PIXI.filters.BlurFilter(0)
//         drag.filters = [blurFilter]
//         blurFilter.blur = 2

// }

// const cloudsTexture = PIXI.Texture.from("./images/clouds.png")
// const cloudSprite = new PIXI.TilingSprite(
//     cloudsTexture,
//     app.screen.width,
//     app.screen.height)
// cloudSprite.tileScale.set(0.5,0.5)

// app.ticker.add(function(){
//     cloudSprite.tilePosition.x += 1
// })

// app.stage.addChild(cloudSprite)

