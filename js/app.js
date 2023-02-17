gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (true) {
  // (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    '.header',
    { opacity: 1 },
    {
      opacity: 0,
      scrollTrigger: {
        trigger: '.header',
        start: 'center',
        end: '900',
        scrub: true,
      },
    }
  );

  let itemsLeft = gsap.utils.toArray('.gallery__left .gallery__item');

  itemsLeft.forEach((item) => {
    gsap.fromTo(
      item,
      { x: -80, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-500',
          end: '0',
          scrub: true,
        },
      }
    );
  });

  let itemsRight = gsap.utils.toArray('.gallery__right .gallery__item');

  itemsRight.forEach((item) => {
    gsap.fromTo(
      item,
      { x: 80, opacity: 0 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-600',
          end: '0',
          scrub: true,
        },
      }
    );
  });
}
