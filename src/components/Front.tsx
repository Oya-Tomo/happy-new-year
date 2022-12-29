import React, { useEffect, useState } from "react";
import style from "./Front.module.scss";
import usagiImage from "../assets/usagi.png";
import initialImage from "../assets/name.png";
import mountainImage from "../assets/mountain.png";

const getScrollPer = (): number => {
    var maxScroll =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    return window.scrollY / maxScroll;
};

const Front = () => {
    const [sunRise, setSunRise] = useState(false);
    const [contentsVisible, setContentVisible] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            var scrollPer = getScrollPer();
            if (scrollPer >= 0.4) {
                setSunRise(true);
            } else {
                setSunRise(false);
            }
            if (scrollPer >= 0.9) {
                setContentVisible(true);
            } else {
                setContentVisible(false);
            }
        });
    });
    return (
        <div className={style["base"]}>
            <div className={style["message"]}>
                <section className={style["first"]}>
                    <h1>謹賀新年</h1>
                </section>
                <section className={style["middle"]}>
                    <div className={style["contents"]}>
                        <h1>新年明けましておめでとうございます。</h1>
                        <p>
                            旧年中はお世話になり有難うございました。また本年もよろしくお願い申し上げます。
                        </p>
                        <p>
                            新型コロナの影響で色々と大変な世の中ですが、体調に気をつけて今年も一年頑張りましょう。
                        </p>
                        <div className={style["desc"]}>
                            <h1>このページについて</h1>
                            <p>
                                このサイトはスマホで見ていただけると嬉しいです。
                                ちなみに画像はすべて手作りです！
                                ※PCでも見れるように作成してありますがデザインが崩れることがあります。
                            </p>
                        </div>
                        <div className={style["sun_area"]}>
                            <div
                                className={
                                    style[
                                        sunRise ? "sun_visible" : "sun_hidden"
                                    ]
                                }
                            ></div>
                        </div>
                        <img
                            className={style["mountain"]}
                            src={mountainImage}
                            alt="mountain"
                        />
                    </div>
                </section>
            </div>
            <div className={style["ending"]}>
                <div className={style["contents"]}>
                    <img
                        className={
                            style[contentsVisible ? "rabbit_visible" : "rabbit"]
                        }
                        src={usagiImage}
                        alt="usagi"
                    />
                    <div className={style["initial_area"]}>
                        <img
                            className={
                                style[
                                    contentsVisible
                                        ? "initial_visible"
                                        : "initial"
                                ]
                            }
                            src={initialImage}
                            alt="智"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Front;
