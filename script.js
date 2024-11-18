gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const bottles = document.querySelectorAll('.bottle');
gsap.utils.toArray('.box').forEach(box => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.box', // comment this when use one by one rotation
      // trigger: box,  // uncomment this for one by one rotation
      start: '70% 50%',
      end: 'bottom+=70% 50%',
      scrub: 2,
      markers: true,
    },
  }).to(box.querySelector('.bottle'), {
    onUpdate: function () {
      const progress = this.progress();
      const newPosition = -0 + progress * -1000;
      const bottle = box.querySelector('.bottle');
      bottle.style.background = `
        var(--img_src) no-repeat ${newPosition}px 28px,
        url(Can.png) no-repeat
      `;
      bottle.style.backgroundSize = 'auto 63%, 100% auto';
    },
  });
});




