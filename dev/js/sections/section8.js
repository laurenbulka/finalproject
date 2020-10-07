import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section8TL = gsap.timeline();

section8TL.from("#section-8 h1", {duration: 0.5, alpha:0, y:300})
    .from("#section-8-text", {duration: 0.5, alpha:0, y:300});

export function section8Animation(){
    ScrollTrigger.create({
        animation:section8TL,
        toggleActions: "play none none none",
        trigger: "#section-8",
        start:"top, 25%",
        end: "bottom 50%"
    });
}