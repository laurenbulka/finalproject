import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section9TL = gsap.timeline();

section9TL.from("#section-9-1", {duration: 0.75, alpha:0, x:800})
    .from("#section-9-2", {duration: 0.75, alpha:0, x:800})
    .from("#section-9-3", {duration: 0.75, alpha:0, x:800})
    .from("#section-9-4", {duration: 0.75, alpha:0, x:800})

export function section9Animation(){
    ScrollTrigger.create({
        animation:section9TL,
        toggleActions: "play none none none",
        trigger: "#section-9",
        start:"top, 25%",
        end: "bottom 50%"
    });
}