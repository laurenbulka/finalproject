import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section4TL = gsap.timeline();

section4TL.from("#section-4 h1", {duration: 0.85, alpha:0, y: 300});

export function section4Animation(){
    ScrollTrigger.create({
        animation:section4TL,
        toggleActions: "play none none none",
        trigger: "#section-4",
        start:"top, 25%",
        end: "bottom 50%"
    });
}