import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section5TL = gsap.timeline();

//section5TL.from("#bg", {duration: 0.5, alpha:0, rotation: 180});
section5TL.from("#text-5", {duration: 1, alpha:0});

export function section5Animation(){
    ScrollTrigger.create({
        animation:section5TL,
        toggleActions: "play none none none",
        trigger: "#section-5",
        start:"top, 10%",
        end: "bottom 90%"
    });
}