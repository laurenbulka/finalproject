import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from("#section-3-img", {duration: 0.5, alpha:0, rotation:180})
    .from("#section-3-right", {duration: .75, alpha:0, x: -300})

export function section3Animation(){
    ScrollTrigger.create({
        animation:section3TL,
        toggleActions: "play none none none",
        trigger: "#section-3",
        start:"top, 25%",
        end: "bottom 75%"
    });
}