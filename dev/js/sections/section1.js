import {gsap} from "gsap";

export function section1Animation(){
    gsap.from("#section-1 h1",{duration:1, alpha:0, y:500});
    gsap.from("#section-1 h2",{duration:1, alpha:0, y:500});
    gsap.from("#section-1 h3",{duration:1, alpha:0, y:500});
}