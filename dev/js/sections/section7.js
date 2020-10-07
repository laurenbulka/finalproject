import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section7TL = gsap.timeline();

section7TL.from("#section-7 h1", {duration: 0.5, alpha:0, y:-300})
    .from("#section-7-text", {duration: 0.5, alpha:0})

export function section7Animation(){
    ScrollTrigger.create({
        animation:section7TL,
        toggleActions: "play none none none",
        trigger: "#section-7",
        start:"top, 30%",
        end: "bottom 25%"
    });
}