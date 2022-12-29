import React, { useEffect, useState } from "react";
import style from "./Back.module.scss";

const getScrollPer = (): number => {
    var maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    return window.scrollY / maxScroll;
};

const Back = () => {
    const [color, setColor] = useState("rgb(20, 30, 50)");
    useEffect(() => {});
    document.addEventListener("scroll", () => {
        var scrollPer = getScrollPer();
        if (0 <= scrollPer && scrollPer <= 0.3) {
            setColor("rgb(20, 30, 50)");
        } else if (0.3 < scrollPer && scrollPer <= 0.35) {
            setColor("rgb(20, 30, 100)");
        } else if (0.35 < scrollPer && scrollPer <= 0.4) {
            setColor("rgb(90, 70, 90)");
        } else if (0.4 < scrollPer && scrollPer <= 0.8) {
            setColor("rgb(255, 170, 80)");
        } else {
            setColor("rgb(245, 245, 245)");
        }
    });
    return (
        <div className={style["base"]} style={{ backgroundColor: color }}></div>
    );
};

export default Back;
