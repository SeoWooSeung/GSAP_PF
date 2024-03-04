document.addEventListener("DOMContentLoaded", () => {
  mainIntroTimeline();
  mainProfileTimeline();

  function mainIntroTimeline() {
    const speed = 1;
    const scrllo = document.querySelector(".mainIntro").offsetWidth * speed;
    document.querySelector(
      ".mainIntro"
    ).style.height = `calc(${scrllo})`;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainIntro",
        pin: true,
        scrub: 1,
        end: () => `+=${scrllo} + 00px`,
        markers: true,
      },
      
    });

    tl.from(".mainIntro .itm .tit:nth-of-type(1) h2", {
      x: 300,
      autoAlpha: 0,
      duration: 2,
    })
      .from(".mainIntro .itm .tit:nth-of-type(1) p", {
        x: 300,
        duration: 2,
        autoAlpha: 0,
      })
      .from(".mainIntro .st01", {
        y:-300,
        autoAlpha: 0,
        duration: 3, 
        rotation: 360,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) p", {
        x: 300,
        autoAlpha: 0,
        duration: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2", {
        x: 300,
        autoAlpha: 0,
        duration: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2 span", {
        y: 300,
        rotation: 360,
        duration: 2,
        scrub: 2,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) p", {
        x: 3000,
        autoAlpha: 0,
      })
  }


  function mainProfileTimeline() {
    const speed = 1;
    const scrllo = document.querySelector(".mainProfile").offsetWidth * speed;
    document.querySelector(
      ".mainProfile"
    ).style.height = `calc(${scrllo}px +100vh)`;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainProfile",
        pin: true,
        scrub: 1,
        // start:'0% 50%',
        end: () => `+=${scrllo} + 100px`,
        markers: true,
      },
    })

    tl.fromTo(".circle",
     {'width':'0', 'height':'0', 'duration':'10', 'ease':'elastic', 'top': '3%'},
    {'width':'2500px', 'height':'2500px', 'duration':'10', 'top' : '30%'} ,0)

    .from('.txtBox',{
      y:500,
      duration: 5,
      autoAlpha: 0,

    })
    //  {'top':'50%', 'duration':'5','ease':'elastic', 'opacity':'0'},
    //  {'duration':'5', 'ease':'elastic', 'opacity':'1', 'top':'40%'},0)

     
  }
  


});

