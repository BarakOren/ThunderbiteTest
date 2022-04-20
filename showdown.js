const Application = PIXI.Application;

let w = window.innerWidth
let h = window.innerHeight

let app = new Application({
    resizeTo: window,
    transparent: true,
    background: 0x150d3d,
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
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

loader.add("./images/spritesheet.json").load(setup);
loader.load(setup);

function setup(loader ,resources){
    // background
    // const background = PIXI.Sprite.from("header.png")
    // background.position.x = window.innerWidth / 2;
    // background.position.y = window.innerHeight / 2;
    // background.width = window.innerWidth;
    // background.height = window.innerHeight;
    // background.anchor.set(0.5);
    // app.stage.addChild(background)

    const positionX = window.innerWidth / 2;
    const positionY = 170;
    let showdownScaleSize, LightScaleSize, FirstRowheight, BoltHight, sH,
    hH, oH, wH, dH, o1H, w1H, nH, mustDropH  = 0
    FirstRowHeights()
    SecondRowHeights()

//_________________First Row____________________________

//__________"Showdown"
    const showdown = PIXI.Sprite.from("showdown-off.png")
    showdown.position.x = positionX
    showdown.position.y = positionY
    showdown.anchor.set(0.5);
    showdown.scale.set(showdownScaleSize)


    // //vegas__________________________
    const vegas = PIXI.Sprite.from("vegas@2x.png");
    vegas.anchor.set(0.5);
    vegas.scale.set(LightScaleSize);
    vegas.position.x = app.screen.width / 2 - vegas.width / 2.25
    vegas.position.y = FirstRowheight
    vegas.zIndex = 1;
    vegas.alpha = 0
  

    // slots__________________________
    const slots = PIXI.Sprite.from("slots@2x.png");
    slots.anchor.set(0.5);
    slots.scale.set(LightScaleSize);
    slots.position.x = app.screen.width / 2 + slots.width / 1.65
    slots.position.y = FirstRowheight
    slots.zIndex = 1;
    slots.alpha = 0

    //  bolt _______________________
    const bolt = PIXI.Sprite.from("bolt@2x.png");
    bolt.anchor.set(0.5);
    bolt.scale.set(LightScaleSize);
    bolt.position.x = app.screen.width / 2 + bolt.width / 7.5
    bolt.position.y = BoltHight
    bolt.zIndex = 1;
    bolt.alpha = 0

    //___________S
    const s = PIXI.Sprite.from("s@2x.png");
    s.anchor.set(0.5);
    s.scale.set(LightScaleSize);
    s.position.x = app.screen.width / 2 - s.width / 0.7
    s.position.y = sH
    s.alpha = 0
    

    const h = PIXI.Sprite.from("h@2x.png");
    h.anchor.set(0.5);
    h.scale.set(LightScaleSize);
    h.position.x = app.screen.width / 2 - h.width / 1.05
    h.position.y = hH
    h.alpha = 0

    const o = PIXI.Sprite.from("o-1@2x.png");
    o.anchor.set(0.5);
    o.anchor.set(0.5);
    o.scale.set(LightScaleSize);
    o.position.x = app.screen.width / 2 - o.width / 0.605
    o.position.y = oH
    o.alpha = 0

    const w = PIXI.Sprite.from("w-1@2x.png");
    w.anchor.set(0.5);
    w.scale.set(LightScaleSize);
    w.position.x = app.screen.width / 2 - w.width / 3.9
    w.position.y = wH
    w.alpha = 0

    const d = PIXI.Sprite.from("d@2x.png");
    d.anchor.set(0.5);
    d.scale.set(LightScaleSize);
    d.position.x = app.screen.width / 2 + d.width / 3.9
    d.position.y = dH
    d.alpha = 0

    const o1 = PIXI.Sprite.from("o-2@2x.png");
    o1.anchor.set(0.5);
    o1.scale.set(LightScaleSize);
    o1.position.x = app.screen.width / 2 + o1.width / 1.55
    o1.position.y = o1H
    o1.alpha = 0


    const w1 = PIXI.Sprite.from("w-2@2x.png");
    w1.anchor.set(0.5);
    w1.scale.set(LightScaleSize);
    w1.position.x = app.screen.width / 2 + w1.width / 0.97
    w1.position.y = w1H
    w1.alpha = 0

    const n = PIXI.Sprite.from("n@2x.png");
    n.anchor.set(0.5);
    n.scale.set(LightScaleSize);
    n.position.x = app.screen.width / 2 + n.width / 0.745
    n.position.y = nH
    n.alpha = 0

    // muust drop __________________
    const mustDrop = PIXI.Sprite.from("must_drop.png");
    mustDrop.anchor.set(0.5);
    mustDrop.scale.set(LightScaleSize + 0.1);
    mustDrop.position.x = app.screen.width / 2
    mustDrop.position.y = mustDropH
    mustDrop.zOrder = 5;
    mustDrop.alpha = 0;


    app.stage.addChild(showdown, s, h, o, w, d, o1, w1, n, bolt)
    setTimeout(VegasSlotsflicker, 700)
    setTimeout(renderLetters, 1000)
    setTimeout(boltFlickering, 1450)
    setTimeout(mustDropFlicker, 1600) //1600

// document.addEventListener('keydown', function(e){
//     if(e.key === "ArrowDown"){h.y += 1 ; console.log(h.y)}
//     else if(e.key === "ArrowUp"){h.y -= 1; console.log(h.y)}
// })
        function SecondRowHeights(){
        if(window.innerWidth < 440){
            sH = 182; hH = 182; oH = 182; wH = 177; dH = 174; o1H = 176; w1H = 182; nH = 182; mustDropH = 230; 
        }
        else if (window.innerWidth > 440 && window.innerWidth < 600){
            sH = 193; hH = 193; oH = 193; wH = 184; dH = 178; o1H = 182; w1H = 193; nH = 193; mustDropH = 266;   
        } else if (window.innerWidth > 600 && window.innerWidth < 1200) {
            sH = 193; hH = 193; oH = 193; wH = 184; dH = 178; o1H = 182; w1H = 193; nH = 193; mustDropH = 266;      
        } else if(window.innerWidth > 1200) {
            sH = 193; hH = 195; oH = 195; wH = 184; dH = 178; o1H = 182; w1H = 193; nH = 193; mustDropH = 278;   
        }
    }


    function FirstRowHeights(){
        if(window.innerWidth < 440){
            showdownScaleSize = 0.4
            LightScaleSize = 0.2
            FirstRowheight = 122
            BoltHight = 120
        }
        else if (window.innerWidth > 440 && window.innerWidth < 600){
            showdownScaleSize = 0.7
            LightScaleSize = 0.35
            FirstRowheight = 90
            BoltHight = 86
        } else if (window.innerWidth > 600 && window.innerWidth < 1200) {
            showdownScaleSize = 0.65
            LightScaleSize = 0.33
            FirstRowheight = 100
            BoltHight = 93
        } else if(window.innerWidth > 1200) {
            showdownScaleSize = 0.9
            LightScaleSize = 0.45
            FirstRowheight = 65
            BoltHight = 61
        }
    }
    

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
        } //math.random helps the flickering to look more real

        setInterval(() => { //turns flickering on and off every 10 secs
            onOff = !onOff
            if(onOff){startInterval()}
        }, 10000)
        }

        function mustDropFlicker(){
            app.stage.addChild(mustDrop)
            let frame = 0
            let flickering = setInterval(() => {
                frame++ // counting seconds
                if(frame < 10 && frame < 6){ // keeping them lit for 5 frames 
                    mustDrop.alpha = 1
                } else if(frame < 10 && frame >= 6 && frame % 2 !== 0){ // turning off after than 5 frames
                    mustDrop.alpha = 0           
                } else if(frame < 10 && frame >= 6 && frame % 2 === 0){ // turning on after more than 5 frames
                    mustDrop.alpha = 1          
                } else {
                    mustDrop.alpha = 1   
                    clearInterval(flickering)
                }
            },100)
        }
        
}