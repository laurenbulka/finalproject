import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section6TL = gsap.timeline();

section6TL.from("#section-6-h", {duration: 0.5, alpha:0, x:-300})
    .from("#section-6-bg", {duration: 0.5, alpha:0})
    .from("#section-6-text", {duration: 0.5, alpha:0, x: 300});

export function section6Animation(){
    ScrollTrigger.create({
        animation:section6TL,
        toggleActions: "play none none none",
        trigger: "#section-6",
        start:"top, 30%",
        end: "bottom 25%"
    });
}