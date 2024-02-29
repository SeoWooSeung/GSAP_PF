document.addEventListener("DOMContentLoaded", () => {
  mainIntroTimeline();

  function mainIntroTimeline() {
    const speed = 1;
    const scrllH = document.querySelector(".mainIntro").offsetWidth * speed;
    document.querySelector(
      ".mainIntro"
    ).style.height = `calc(${scrllH}px + 100vh)`;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainIntro",
        pin: true,
        scrub: 1,
        end: () => `+=${scrllH}`,
        markers: true,
      },
    });

    tl.from(".mainIntro .itm .tit:nth-of-type(1) h2", {
      x: 300,
      autoAlpha: 0,
    })
      .from(".mainIntro .itm .tit:nth-of-type(1) p", {
        x: 300,
        autoAlpha: 0,
      })
      .from(".mainIntro .st01", {
        x: 300,
        autoAlpha: 0,
        rotation: 360,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) h2", {
        x: 300,
        autoAlpha: 0,
      })
      .from(".mainIntro .itm .tit:nth-of-type(2) p", {
        x: 300,
        autoAlpha: 0,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2", {
        x: 300,
        autoAlpha: 0,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) h2 span", {
        y: 300,
        rotation: 360,
        duration: 2,
        scrub: 1,
      })
      .from(".mainIntro .itm .tit:nth-of-type(3) p", {
        x: 300,
        autoAlpha: 0,
      });
  }
});
