import React, { useState, useEffect } from "react";
import { Router, Route, useNavigate, useLocation } from "react-router-dom";

export default function ChooseAsset() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathElements = location.pathname.split('/');
  const element = pathElements[2]; // получаем элемент
  const handleOnClick = (assetCurrency) => {
    localStorage.setItem("preferredAsset", JSON.stringify(assetCurrency));
    if (element === "send") {
        navigate(`/assets/${assetCurrency}/receiver-search`);
    } else if (element === "receive") {
        navigate(`/receive?assetCurrency=${assetCurrency}`);
    } else if (element === "purchase") {
        navigate(`/assets/${assetCurrency}/purchase`);
    } else {
        console.log("Error")
    }
  };
  return (
    <>
      <div className="VFOP ThzI">
        <div variant="headline5" className="cpHh zuaa A_lL">
          {element === "send" && (`Choose asset to send`) || element === "receive" && (`Choose asset to receive`) || element === "purchase" && (`Choose asset to buy`)}
        </div>
      </div>
      <div className="VFOP">
        <div className="mjig ODmG LQUd Hk4R Ntau">
          <div onClick={() => handleOnClick("TON")} className="r2DG tizz">
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="RkvK">
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "46px", height: "46px" }}
                  >
                    <rect width="40" height="40" rx="20" fill="#0098EA"></rect>
                    <path
                      d="M26.831 11H13.173c-2.512 0-4.103 2.709-2.84 4.899l8.43 14.61a1.43 1.43 0 0 0 2.478 0l8.431-14.61c1.262-2.187-.33-4.899-2.84-4.899h-.001zm-8.075 15.128-1.836-3.553-4.43-7.922a.774.774 0 0 1 .68-1.157h5.584V26.13l.002-.002zm8.754-11.477-4.428 7.926-1.836 3.551V13.494h5.583c.612 0 .973.65.68 1.157z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="f5GT Wv9y">
                <div className="jOCs TYgZ NXXw">
                  <div
                    variant="body"
                    weight="medium"
                    color="text"
                    className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                  >
                    Toncoin
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    0&nbsp;TON
                  </div>
                </div>
                <div className="eslG CFak">
                  <div className="vZ3f">
                    {(JSON.parse(localStorage.getItem("preferredAsset")) ===
                      "TON" && (
                      <div className="MKKc TKvX vc2p sJpg" alt="radio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 20 20"
                          width="20"
                          height="20"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            <clipPath id="__lottie_element_431">
                              <rect width="20" height="20" x="0" y="0"></rect>
                            </clipPath>
                          </defs>
                          <g clipPath="url(#__lottie_element_431)">
                            <g
                              style={{ display: "block" }}
                              transform="matrix(0.9999223947525024,0,0,0.9999223947525024,10,10)"
                              opacity="1"
                            >
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(90,166,233)"
                                  fillOpacity="0.9998105858036297"
                                  d=" M0,-8 C-4.415200233459473,-8 -8,-4.415200233459473 -8,0 C-8,4.415200233459473 -4.415200233459473,8 0,8 C4.415200233459473,8 8,4.415200233459473 8,0 C8,-4.415200233459473 4.415200233459473,-8 0,-8z M0,-10 C5.519000053405762,-10 10,-5.519000053405762 10,0 C10,5.519000053405762 5.519000053405762,10 0,10 C-5.519000053405762,10 -10,5.519000053405762 -10,0 C-10,-5.519000053405762 -5.519000053405762,-10 0,-10z M0,-0.0030306270346045494 C-0.0016726030735298991,-0.0030306270346045494 -0.0030306270346045494,-0.0016726030735298991 -0.0030306270346045494,0 C-0.0030306270346045494,0.0016726030735298991 -0.0016726030735298991,0.0030306270346045494 0,0.0030306270346045494 C0.0016726030735298991,0.0030306270346045494 0.0030306270346045494,0.0016726030735298991 0.0030306270346045494,0 C0.0030306270346045494,-0.0016726030735298991 0.0016726030735298991,-0.0030306270346045494 0,-0.0030306270346045494z M0,-5.001893997192383 C2.760545253753662,-5.001893997192383 5.001893997192383,-2.760545253753662 5.001893997192383,0 C5.001893997192383,2.760545253753662 2.760545253753662,5.001893997192383 0,5.001893997192383 C-2.760545253753662,5.001893997192383 -5.001893997192383,2.760545253753662 -5.001893997192383,0 C-5.001893997192383,-2.760545253753662 -2.760545253753662,-5.001893997192383 0,-5.001893997192383z"
                                ></path>
                                <g
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                ></g>
                                <g
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                ></g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    )) ||
                      (JSON.parse(localStorage.getItem("preferredAsset")) !==
                        "USDT" &&
                        JSON.parse(localStorage.getItem("preferredAsset")) !==
                          "BTC" && (
                          <div className="MKKc TKvX vc2p sJpg" alt="radio">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              viewBox="0 0 20 20"
                              width="20"
                              height="20"
                              style={{
                                width: "100%",
                                height: "100%",
                                transform: "translate3d(0px, 0px, 0px)",
                              }}
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <defs>
                                <clipPath id="__lottie_element_431">
                                  <rect
                                    width="20"
                                    height="20"
                                    x="0"
                                    y="0"
                                  ></rect>
                                </clipPath>
                              </defs>
                              <g clipPath="url(#__lottie_element_431)">
                                <g
                                  style={{ display: "block" }}
                                  transform="matrix(0.9999223947525024,0,0,0.9999223947525024,10,10)"
                                  opacity="1"
                                >
                                  <g
                                    opacity="1"
                                    transform="matrix(1,0,0,1,0,0)"
                                  >
                                    <path
                                      fill="rgb(90,166,233)"
                                      fillOpacity="0.9998105858036297"
                                      d=" M0,-8 C-4.415200233459473,-8 -8,-4.415200233459473 -8,0 C-8,4.415200233459473 -4.415200233459473,8 0,8 C4.415200233459473,8 8,4.415200233459473 8,0 C8,-4.415200233459473 4.415200233459473,-8 0,-8z M0,-10 C5.519000053405762,-10 10,-5.519000053405762 10,0 C10,5.519000053405762 5.519000053405762,10 0,10 C-5.519000053405762,10 -10,5.519000053405762 -10,0 C-10,-5.519000053405762 -5.519000053405762,-10 0,-10z M0,-0.0030306270346045494 C-0.0016726030735298991,-0.0030306270346045494 -0.0030306270346045494,-0.0016726030735298991 -0.0030306270346045494,0 C-0.0030306270346045494,0.0016726030735298991 -0.0016726030735298991,0.0030306270346045494 0,0.0030306270346045494 C0.0016726030735298991,0.0030306270346045494 0.0030306270346045494,0.0016726030735298991 0.0030306270346045494,0 C0.0030306270346045494,-0.0016726030735298991 0.0016726030735298991,-0.0030306270346045494 0,-0.0030306270346045494z M0,-5.001893997192383 C2.760545253753662,-5.001893997192383 5.001893997192383,-2.760545253753662 5.001893997192383,0 C5.001893997192383,2.760545253753662 2.760545253753662,5.001893997192383 0,5.001893997192383 C-2.760545253753662,5.001893997192383 -5.001893997192383,2.760545253753662 -5.001893997192383,0 C-5.001893997192383,-2.760545253753662 -2.760545253753662,-5.001893997192383 0,-5.001893997192383z"
                                    ></path>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    ></g>
                                    <g
                                      opacity="1"
                                      transform="matrix(1,0,0,1,0,0)"
                                    ></g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                        )) || (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="MKKc TKvX vc2p"
                        >
                          <g opacity="0.5">
                            <rect
                              x="1"
                              y="1"
                              width="18"
                              height="18"
                              rx="9"
                              stroke="currentColor"
                              strokeWidth="2"
                            ></rect>
                          </g>
                        </svg>
                      )}
                  </div>
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </div>
          <div onClick={() => handleOnClick("USDT")} className="r2DG tizz">
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="RkvK">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "46px", height: "46px" }}
                  >
                    <rect width="40" height="40" rx="20" fill="#28C281"></rect>
                    <path
                      d="M20.014 32.05c-.739 0-1.217-.464-1.217-1.243v-1.381c-2.899-.342-4.908-1.832-5.496-3.733a2.194 2.194 0 0 1-.137-.752c0-.86.588-1.435 1.531-1.435.793 0 1.245.465 1.532 1.107.546 1.395 1.832 2.16 3.91 2.16 2.2 0 3.61-.875 3.61-2.502 0-1.38-1.259-2.091-3.35-2.584l-1.86-.437c-3.117-.71-5.181-2.488-5.181-5.072 0-3.09 2.378-4.95 5.44-5.332V9.45c0-.78.48-1.244 1.218-1.244s1.216.465 1.216 1.244v1.395c2.68.328 4.622 1.777 5.223 3.787.069.26.123.506.123.765 0 .793-.601 1.272-1.476 1.272-.793 0-1.217-.383-1.559-1.04-.615-1.435-1.682-2.132-3.514-2.132-2.091 0-3.35.93-3.35 2.393 0 1.257 1.231 2.037 3.05 2.447l1.777.41c3.514.807 5.51 2.516 5.51 5.195 0 3.364-2.68 5.168-5.784 5.51v1.354c0 .779-.478 1.244-1.216 1.244Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="f5GT Wv9y">
                <div className="jOCs TYgZ NXXw">
                  <div
                    variant="body"
                    weight="medium"
                    color="text"
                    className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                  >
                    Dollars
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    0&nbsp;USDT
                  </div>
                </div>
                <div className="eslG CFak">
                  <div className="vZ3f">
                    {(JSON.parse(localStorage.getItem("preferredAsset")) ===
                      "USDT" && (
                      <div className="MKKc TKvX vc2p sJpg" alt="radio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 20 20"
                          width="20"
                          height="20"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            <clipPath id="__lottie_element_431">
                              <rect width="20" height="20" x="0" y="0"></rect>
                            </clipPath>
                          </defs>
                          <g clipPath="url(#__lottie_element_431)">
                            <g
                              style={{ display: "block" }}
                              transform="matrix(0.9999223947525024,0,0,0.9999223947525024,10,10)"
                              opacity="1"
                            >
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(90,166,233)"
                                  fillOpacity="0.9998105858036297"
                                  d=" M0,-8 C-4.415200233459473,-8 -8,-4.415200233459473 -8,0 C-8,4.415200233459473 -4.415200233459473,8 0,8 C4.415200233459473,8 8,4.415200233459473 8,0 C8,-4.415200233459473 4.415200233459473,-8 0,-8z M0,-10 C5.519000053405762,-10 10,-5.519000053405762 10,0 C10,5.519000053405762 5.519000053405762,10 0,10 C-5.519000053405762,10 -10,5.519000053405762 -10,0 C-10,-5.519000053405762 -5.519000053405762,-10 0,-10z M0,-0.0030306270346045494 C-0.0016726030735298991,-0.0030306270346045494 -0.0030306270346045494,-0.0016726030735298991 -0.0030306270346045494,0 C-0.0030306270346045494,0.0016726030735298991 -0.0016726030735298991,0.0030306270346045494 0,0.0030306270346045494 C0.0016726030735298991,0.0030306270346045494 0.0030306270346045494,0.0016726030735298991 0.0030306270346045494,0 C0.0030306270346045494,-0.0016726030735298991 0.0016726030735298991,-0.0030306270346045494 0,-0.0030306270346045494z M0,-5.001893997192383 C2.760545253753662,-5.001893997192383 5.001893997192383,-2.760545253753662 5.001893997192383,0 C5.001893997192383,2.760545253753662 2.760545253753662,5.001893997192383 0,5.001893997192383 C-2.760545253753662,5.001893997192383 -5.001893997192383,2.760545253753662 -5.001893997192383,0 C-5.001893997192383,-2.760545253753662 -2.760545253753662,-5.001893997192383 0,-5.001893997192383z"
                                ></path>
                                <g
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                ></g>
                                <g
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                ></g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    )) || (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="MKKc TKvX vc2p"
                      >
                        <g opacity="0.5">
                          <rect
                            x="1"
                            y="1"
                            width="18"
                            height="18"
                            rx="9"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></rect>
                        </g>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </div>
          <div onClick={() => handleOnClick("BTC")} className="r2DG tizz">
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="RkvK">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "46px", height: "46px" }}
                  >
                    <path
                      d="M39.397 24.838c-2.671 10.715-13.523 17.235-24.239 14.563C4.448 36.731-2.073 25.877.6 15.164 3.269 4.448 14.121-2.073 24.833.598c10.715 2.672 17.235 13.525 14.564 24.24Z"
                      fill="#F7931A"
                    ></path>
                    <path
                      d="M28.817 17.155c.398-2.661-1.628-4.092-4.4-5.046l.9-3.606-2.195-.546-.875 3.51c-.577-.144-1.17-.28-1.759-.414l.882-3.533-2.194-.547-.899 3.604a72.497 72.497 0 0 1-1.401-.33l.002-.01-3.026-.757-.584 2.344s1.628.374 1.594.397c.889.221 1.05.81 1.023 1.276l-1.024 4.107c.061.016.14.038.228.074l-.232-.058-1.435 5.754c-.109.27-.385.675-1.006.521.022.032-1.595-.398-1.595-.398l-1.09 2.512 2.857.712c.53.134 1.051.273 1.564.404l-.908 3.647 2.192.547.9-3.608c.598.162 1.18.312 1.748.454l-.896 3.59 2.195.547.908-3.64c3.742.709 6.556.423 7.74-2.962.955-2.725-.047-4.297-2.016-5.322 1.434-.33 2.515-1.274 2.803-3.222h-.001Zm-5.015 7.032c-.678 2.725-5.266 1.252-6.754.882l1.205-4.83c1.488.37 6.258 1.106 5.55 3.948Zm.68-7.071c-.62 2.479-4.439 1.22-5.677.91l1.092-4.381c1.239.309 5.229.885 4.584 3.47Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="f5GT Wv9y">
                <div className="jOCs TYgZ NXXw">
                  <div
                    variant="body"
                    weight="medium"
                    color="text"
                    className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                  >
                    Bitcoin
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    0&nbsp;BTC
                  </div>
                </div>
                <div className="eslG CFak">
                  <div className="vZ3f">
                    {(JSON.parse(localStorage.getItem("preferredAsset")) ===
                      "BTC" && (
                      <div className="MKKc TKvX vc2p sJpg" alt="radio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 20 20"
                          width="20"
                          height="20"
                          style={{
                            width: "100%",
                            height: "100%",
                            transform: "translate3d(0px, 0px, 0px)",
                          }}
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            <clipPath id="__lottie_element_431">
                              <rect width="20" height="20" x="0" y="0"></rect>
                            </clipPath>
                          </defs>
                          <g clipPath="url(#__lottie_element_431)">
                            <g
                              style={{ display: "block" }}
                              transform="matrix(0.9999223947525024,0,0,0.9999223947525024,10,10)"
                              opacity="1"
                            >
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(90,166,233)"
                                  fillOpacity="0.9998105858036297"
                                  d=" M0,-8 C-4.415200233459473,-8 -8,-4.415200233459473 -8,0 C-8,4.415200233459473 -4.415200233459473,8 0,8 C4.415200233459473,8 8,4.415200233459473 8,0 C8,-4.415200233459473 4.415200233459473,-8 0,-8z M0,-10 C5.519000053405762,-10 10,-5.519000053405762 10,0 C10,5.519000053405762 5.519000053405762,10 0,10 C-5.519000053405762,10 -10,5.519000053405762 -10,0 C-10,-5.519000053405762 -5.519000053405762,-10 0,-10z M0,-0.0030306270346045494 C-0.0016726030735298991,-0.0030306270346045494 -0.0030306270346045494,-0.0016726030735298991 -0.0030306270346045494,0 C-0.0030306270346045494,0.0016726030735298991 -0.0016726030735298991,0.0030306270346045494 0,0.0030306270346045494 C0.0016726030735298991,0.0030306270346045494 0.0030306270346045494,0.0016726030735298991 0.0030306270346045494,0 C0.0030306270346045494,-0.0016726030735298991 0.0016726030735298991,-0.0030306270346045494 0,-0.0030306270346045494z M0,-5.001893997192383 C2.760545253753662,-5.001893997192383 5.001893997192383,-2.760545253753662 5.001893997192383,0 C5.001893997192383,2.760545253753662 2.760545253753662,5.001893997192383 0,5.001893997192383 C-2.760545253753662,5.001893997192383 -5.001893997192383,2.760545253753662 -5.001893997192383,0 C-5.001893997192383,-2.760545253753662 -2.760545253753662,-5.001893997192383 0,-5.001893997192383z"
                                ></path>
                                <g
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                ></g>
                                <g
                                  opacity="1"
                                  transform="matrix(1,0,0,1,0,0)"
                                ></g>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                    )) || (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="MKKc TKvX vc2p"
                      >
                        <g opacity="0.5">
                          <rect
                            x="1"
                            y="1"
                            width="18"
                            height="18"
                            rx="9"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></rect>
                        </g>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </div>
        </div>
      </div>
    </>
  );
}
