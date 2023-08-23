// plugins/useAnimation.js
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function useAnimation() {
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const idleAnimation = gsap.to(
      ".product-image, .hero-main-text, .landing__description",
      {
        y: 10,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    const idleAnimationLeafs = gsap.to(".leaves-1, .leaves-2, .leaves-3", {
      y: -10,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "power1.inOut",
    });

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onEnter: () => {
        idleAnimation.pause();
      },
      onLeaveBack: () => {
        idleAnimation.play();
      },
    });

    let section = 0;
    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      scrollTrigger: {
        trigger: ".landing__main",
        start: "top top",
        end: "bottom top",
        scrub: 3,
        pin: true,
        markers: true,
      },
    });

    tl.to(
      ".landing__main",
      {
        backgroundPositionY: "+=100%",
      },
      section
    )
      .to(
        ".hero-main-text",
        {
          marginTop: "-100rem",
          duration: 0.5,
        },
        section
      )
      .to(
        ".leaves-1",
        {
          top: "-80rem",
          transform: "scale(2) rotate(360deg)",
          right: "-50%",
          opacity: 0,
          duration: 0.5,
        },
        section
      )
      .to(
        ".leaves-2",
        {
          top: "-80rem",
          transform: "scale(1.5) rotate(-360deg)",
          opacity: 0,
          left: "-20%",
          duration: 0.5,
        },
        section
      )
      .to(
        ".leaves-3",
        {
          top: "-50rem",
          transform: "scale(0.3) rotate(-160deg)",
          opacity: 0,
          left: "-30%",
          duration: 0.5,
        },
        section
      )
      .to(
        ".landing__description",
        {
          opacity: 0,
          duration: 0.05,
        },
        section
      );

    tl.to(
      ".product-image",
      {
        opacity: "+=1",
        bottom: "25%",
      },
      section
    );
    section += 1;

    tl.to(
      ".fc-1",
      {
        opacity: "1",
        height: "15rem",
        width: "15rem",
        x: -500,
        y: -200,
      },
      section
    );

    section += 0.5;
    tl.to(
      ".fc-2",
      {
        opacity: "1",
        height: "15rem",
        width: "15rem",
        x: 500,
        y: -200,
      },
      section
    );
    section += 0.5;
    tl.to(
      ".fc-3",
      {
        opacity: "1",
        height: "15rem",
        width: "15rem",
        right: 20,
        y: 200,
        x: 500,
      },
      section
    );
    section += 0.5;
    tl.to(
      ".fc-4",
      {
        opacity: "1",
        height: "15rem",
        width: "15rem",
        y: 200,
        x: -500,
      },
      section
    );
  });
}
