import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Crystal from "../../assets/animation/Crystal.json";
import Lottie from "lottie-react";

function Search() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const assetCurrency = params.get("assetCurrency");
  const freeze = params.get("freeze");
  return { assetCurrency, freeze };
}

export default function Receive() {
  const result = Search();
  const [index, setIndex] = useState(0);
  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
  };
  return (
    <div className="lGlN">
      <div className="LUhj">
        <Swiper
          slidesPerView={1}
          initialSlide={
            (result.assetCurrency === "TON" && 0) ||
            (result.assetCurrency === "USDT" && 1) ||
            (result.assetCurrency === "BTC" && 2)
          }
          onSlideChange={handleSlideChange}
        >
          <div className="nY8p Vr6w NHDE">
            <div className="ULY2">
              {(!result.freeze && (
                <SwiperSlide>
                  <div className="x1Ds">
                    <div className="UQdA Mfze">
                      <h1 className="FLHU" data-testid="receive-title">
                        <div>
                          <div>
                            <div className="hgpf">
                              Receive Toncoin
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <div className="CVyl AMsP YEnQ rRnL">
                        <div className="PsHq">
                          <div className="">
                            <section
                              className="i4hs UqjP"
                              style={{ width: "180px", height: "180px" }}
                              data-testid="receive-qr"
                            >
                              <div
                                className="nWdk"
                                style={{ width: "42px", height: "42px" }}
                              >
                                <div>
                                  <div alt="crystal">
                                    <Lottie animationData={Crystal} />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="nw2j"
                                style={{
                                  backgroundImage:
                                    'url("data:image/png;base64,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")',
                                }}
                              ></div>
                            </section>
                          </div>
                        </div>
                        <div className="IfNG">
                          <div className="PsHq">
                            <div>
                              <div className="ssBa sPqV">
                                <span className="ECYg kB0J uDr2 sGES">
                                  UQAWgqEL61jLa5coCqLoHW9M
                                  <br />
                                  1D4xEwbpOo_Be-uTm74zrJfA
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            variant="subtitle2"
                            weight="regular"
                            color="subtitleText"
                            data-testid="receive-address"
                            className="cpHh YLSR PmUA Fx5C"
                          >
                            Your TON address
                          </div>
                        </div>
                      </div>
                      <p className="qV5z d5BK" data-testid="receive-subtitle">
                        Send only <b>Toncoin (TON)</b> to this address. Sending
                        other assets may result in permanent loss.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )) ||
                (result.freeze && result.assetCurrency === "TON" && (
                  <SwiperSlide>
                    <div className="x1Ds">
                      <div className="UQdA Mfze">
                        <h1 className="FLHU" data-testid="receive-title">
                          <div>
                            <div>
                              <div className="hgpf">
                                Receive Toncoin
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </h1>
                        <div className="CVyl AMsP YEnQ rRnL">
                          <div className="PsHq">
                            <div className="">
                              <section
                                className="i4hs UqjP"
                                style={{ width: "180px", height: "180px" }}
                                data-testid="receive-qr"
                              >
                                <div
                                  className="nWdk"
                                  style={{ width: "42px", height: "42px" }}
                                >
                                  <div>
                                    <div alt="crystal">
                                      <Lottie animationData={Crystal} />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="nw2j"
                                  style={{
                                    backgroundImage:
                                      'url("data:image/png;base64,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")',
                                  }}
                                ></div>
                              </section>
                            </div>
                          </div>
                          <div className="IfNG">
                            <div className="PsHq">
                              <div>
                                <div className="ssBa sPqV">
                                  <span className="ECYg kB0J uDr2 sGES">
                                    UQAWgqEL61jLa5coCqLoHW9M
                                    <br />
                                    1D4xEwbpOo_Be-uTm74zrJfA
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              variant="subtitle2"
                              weight="regular"
                              color="subtitleText"
                              data-testid="receive-address"
                              className="cpHh YLSR PmUA Fx5C"
                            >
                              Your TON address
                            </div>
                          </div>
                        </div>
                        <p className="qV5z d5BK" data-testid="receive-subtitle">
                        Send only <b>Toncoin (TON)</b> to this address. Sending
                        other assets may result in permanent loss.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              {(!result.freeze && (
                <SwiperSlide>
                  <div className="x1Ds">
                    <div className="UQdA Mfze">
                      <h1 className="FLHU" data-testid="receive-title">
                        <div>
                          <div>
                            <div className="hgpf">
                              Receive Dollars
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <div className="CVyl AMsP YEnQ rRnL">
                        <div className="PsHq">
                          <div className="">
                            <section
                              className="i4hs UqjP"
                              style={{ width: "180px", height: "180px" }}
                              data-testid="receive-qr"
                            >
                              <div
                                className="nWdk"
                                style={{ width: "42px", height: "42px" }}
                              >
                                <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ padding: "4px" }}
                                >
                                  <rect
                                    width="40"
                                    height="40"
                                    rx="20"
                                    fill="#2AAF86"
                                  ></rect>
                                  <path
                                    d="M22.03 21.741v-.002c-.114.008-.702.042-2.011.042-1.047 0-1.781-.03-2.041-.042v.002c-4.026-.177-7.03-.877-7.03-1.717 0-.838 3.006-1.54 7.03-1.718v2.738c.262.019 1.017.064 2.06.064 1.25 0 1.876-.053 1.992-.064V18.31c4.018.18 7.013.88 7.013 1.717 0 .838-2.997 1.538-7.013 1.718m0-3.719v-2.448h5.606v-3.735H12.375v3.734h5.605v2.45c-4.556.209-7.98 1.11-7.98 2.191 0 1.082 3.427 1.983 7.98 2.195v7.85h4.053v-7.85C26.58 22.202 30 21.302 30 20.22c0-1.079-3.419-1.982-7.967-2.192"
                                    fill="#fff"
                                  ></path>
                                </svg>
                              </div>
                              <div
                                className="nw2j"
                                style={{
                                  backgroundImage:
                                    "url('data:image/png;base64,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')",
                                }}
                              ></div>
                            </section>
                          </div>
                        </div>
                        <div className="IfNG">
                          <div className="PsHq">
                            <div>
                              <div className="ssBa sPqV">
                                <span className="ECYg kB0J uDr2 sGES">
                                  TDFmtpR8b7FLBw8vB
                                  <br />
                                  hdtQrMa7nHxr3GTF5
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            variant="subtitle2"
                            weight="regular"
                            color="subtitleText"
                            data-testid="receive-address"
                            className="cpHh YLSR PmUA Fx5C"
                          >
                            Your USDT address
                          </div>
                        </div>
                      </div>
                      <p className="qV5z d5BK" data-testid="receive-subtitle">
                        Send only <b>USDT TRC20</b> to this address. Sending
                        other assets may result in permanent loss.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )) ||
                (result.freeze && result.assetCurrency === "USDT" && (
                  <SwiperSlide>
                    <div className="x1Ds">
                      <div className="UQdA Mfze">
                        <h1 className="FLHU" data-testid="receive-title">
                          <div>
                            <div>
                              <div className="hgpf">
                                Receive Dollars
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </h1>
                        <div className="CVyl AMsP YEnQ rRnL">
                          <div className="PsHq">
                            <div className="">
                              <section
                                className="i4hs UqjP"
                                style={{ width: "180px", height: "180px" }}
                                data-testid="receive-qr"
                              >
                                <div
                                  className="nWdk"
                                  style={{ width: "42px", height: "42px" }}
                                >
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ padding: "4px" }}
                                  >
                                    <rect
                                      width="40"
                                      height="40"
                                      rx="20"
                                      fill="#2AAF86"
                                    ></rect>
                                    <path
                                      d="M22.03 21.741v-.002c-.114.008-.702.042-2.011.042-1.047 0-1.781-.03-2.041-.042v.002c-4.026-.177-7.03-.877-7.03-1.717 0-.838 3.006-1.54 7.03-1.718v2.738c.262.019 1.017.064 2.06.064 1.25 0 1.876-.053 1.992-.064V18.31c4.018.18 7.013.88 7.013 1.717 0 .838-2.997 1.538-7.013 1.718m0-3.719v-2.448h5.606v-3.735H12.375v3.734h5.605v2.45c-4.556.209-7.98 1.11-7.98 2.191 0 1.082 3.427 1.983 7.98 2.195v7.85h4.053v-7.85C26.58 22.202 30 21.302 30 20.22c0-1.079-3.419-1.982-7.967-2.192"
                                      fill="#fff"
                                    ></path>
                                  </svg>
                                </div>
                                <div
                                  className="nw2j"
                                  style={{
                                    backgroundImage:
                                      "url('data:image/png;base64,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')",
                                  }}
                                ></div>
                              </section>
                            </div>
                          </div>
                          <div className="IfNG">
                            <div className="PsHq">
                              <div>
                                <div className="ssBa sPqV">
                                  <span className="ECYg kB0J uDr2 sGES">
                                    TDFmtpR8b7FLBw8vB
                                    <br />
                                    hdtQrMa7nHxr3GTF5
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              variant="subtitle2"
                              weight="regular"
                              color="subtitleText"
                              data-testid="receive-address"
                              className="cpHh YLSR PmUA Fx5C"
                            >
                              Your USDT address
                            </div>
                          </div>
                        </div>
                        <p className="qV5z d5BK" data-testid="receive-subtitle">
                          Send only <b>USDT TRC20</b> to this address. Sending
                          other assets may result in permanent loss.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              {(!result.freeze && (
                <SwiperSlide>
                  <div class="x1Ds">
                    <div class="UQdA Mfze">
                      <h1 class="FLHU" data-testid="receive-title">
                        <div>
                          <div>
                            <div class="hgpf">
                              Receive Bitcoin
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </h1>
                      <div class="CVyl AMsP YEnQ rRnL">
                        <div class="PsHq">
                          <div class="">
                            <section
                              class="i4hs UqjP"
                              style={{ width: "180px", height: "180px" }}
                              data-testid="receive-qr"
                            >
                              <div
                                class="nWdk"
                                style={{ width: "42px", height: "42px" }}
                              >
                                <svg
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{ padding: "4px" }}
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
                              <div
                                class="nw2j"
                                style={{
                                  backgroundImage:
                                    'url("data:image/png;base64,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")',
                                }}
                              ></div>
                            </section>
                          </div>
                        </div>
                        <div class="IfNG">
                          <div class="PsHq">
                            <div>
                              <div className="ssBa sPqV">
                                <span className="ECYg kB0J uDr2 sGES">
                                  17X1XFsJ1HB7tJve5
                                  <br />
                                  i9K3nCQxrM8N7rZfK
                                </span>
                              </div>
                            </div>
                          </div>
                          <div
                            variant="subtitle2"
                            weight="regular"
                            color="subtitleText"
                            data-testid="receive-address"
                            class="cpHh YLSR PmUA Fx5C"
                          >
                            Your BTC address
                          </div>
                        </div>
                      </div>
                      <p class="qV5z d5BK" data-testid="receive-subtitle">
                        Send only <b>Bitcoin (BTC)</b> to this address. Sending
                        other assets may result in permanent loss.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )) ||
                (result.freeze && result.assetCurrency === "BTC" && (
                  <SwiperSlide>
                    <div class="x1Ds">
                      <div class="UQdA Mfze">
                        <h1 class="FLHU" data-testid="receive-title">
                          <div>
                            <div>
                              <div class="hgpf">
                                Receive Bitcoin
                                <svg
                                  width="18"
                                  height="18"
                                  viewBox="0 0 18 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9 17.474a8.151 8.151 0 0 1-3.27-.664 8.668 8.668 0 0 1-2.698-1.835 8.668 8.668 0 0 1-1.835-2.698 8.15 8.15 0 0 1-.664-3.27c0-1.157.222-2.244.664-3.262a8.712 8.712 0 0 1 1.826-2.706 8.669 8.669 0 0 1 2.698-1.835A8.151 8.151 0 0 1 8.991.54c1.157 0 2.247.221 3.271.664a8.641 8.641 0 0 1 2.706 1.835 8.642 8.642 0 0 1 1.835 2.706 8.092 8.092 0 0 1 .664 3.262 8.15 8.15 0 0 1-.664 3.27 8.67 8.67 0 0 1-1.835 2.698 8.64 8.64 0 0 1-2.706 1.835A8.092 8.092 0 0 1 9 17.474Zm0-1.412a6.9 6.9 0 0 0 2.748-.547 7.183 7.183 0 0 0 2.25-1.511 7 7 0 0 0 1.51-2.25 6.901 6.901 0 0 0 .548-2.747c0-.98-.183-1.896-.548-2.748a7.113 7.113 0 0 0-1.52-2.25A6.882 6.882 0 0 0 11.74 2.5a6.901 6.901 0 0 0-2.747-.548 6.9 6.9 0 0 0-2.748.548c-.852.36-1.6.863-2.241 1.51a7.182 7.182 0 0 0-1.51 2.25 6.992 6.992 0 0 0-.54 2.748c0 .98.18 1.895.54 2.747a7.183 7.183 0 0 0 1.51 2.25 7.182 7.182 0 0 0 2.25 1.51A6.9 6.9 0 0 0 9 16.064Zm-.166-5.337c-.443 0-.664-.218-.664-.656V9.961c0-.41.097-.738.29-.987.2-.25.449-.476.748-.681.365-.255.636-.47.813-.647a.96.96 0 0 0 .266-.698.955.955 0 0 0-.34-.763c-.228-.2-.532-.3-.914-.3-.182 0-.354.031-.514.092-.155.06-.297.15-.424.266-.127.11-.24.246-.34.406l-.15.2a.886.886 0 0 1-.257.24.629.629 0 0 1-.348.092.627.627 0 0 1-.39-.141c-.122-.1-.183-.244-.183-.432a1.26 1.26 0 0 1 .066-.407c.116-.382.399-.716.847-1.004.454-.294 1.037-.44 1.751-.44.47 0 .905.083 1.304.249.398.16.719.398.962.714.25.315.374.703.374 1.162 0 .498-.13.89-.39 1.179a5.24 5.24 0 0 1-.988.83c-.293.193-.51.376-.647.547a.903.903 0 0 0-.208.598v.1c0 .16-.06.299-.183.415-.116.116-.276.174-.481.174ZM8.809 13.2a.881.881 0 0 1-.622-.25.826.826 0 0 1-.266-.614c0-.238.086-.44.257-.606a.876.876 0 0 1 .631-.257c.244 0 .454.083.63.25.178.165.267.37.267.613a.809.809 0 0 1-.266.615.891.891 0 0 1-.63.249Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </h1>
                        <div class="CVyl AMsP YEnQ rRnL">
                          <div class="PsHq">
                            <div class="">
                              <section
                                class="i4hs UqjP"
                                style={{ width: "180px", height: "180px" }}
                                data-testid="receive-qr"
                              >
                                <div
                                  class="nWdk"
                                  style={{ width: "42px", height: "42px" }}
                                >
                                  <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ padding: "4px" }}
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
                                <div
                                  class="nw2j"
                                  style={{
                                    backgroundImage:
                                      'url("data:image/png;base64,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")',
                                  }}
                                ></div>
                              </section>
                            </div>
                          </div>
                          <div class="IfNG">
                            <div class="PsHq">
                              <div>
                                <div className="ssBa sPqV">
                                  <span className="ECYg kB0J uDr2 sGES">
                                    17X1XFsJ1HB7tJve5
                                    <br />
                                    i9K3nCQxrM8N7rZfK
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div
                              variant="subtitle2"
                              weight="regular"
                              color="subtitleText"
                              data-testid="receive-address"
                              class="cpHh YLSR PmUA Fx5C"
                            >
                              Your BTC address
                            </div>
                          </div>
                        </div>
                        <p class="qV5z d5BK" data-testid="receive-subtitle">
                          Send only <b>Bitcoin (BTC)</b> to this address.
                          Sending other assets may result in permanent loss.
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </div>
          </div>
        </Swiper>
        {!result.freeze && (
          <div className="eDj5">
            <div className="Q6hA">
              <div className="f4ED">
                <div className="QCqV"></div>
                <div className={`NKbd${index === 0 ? " vVVX" : ""}`}></div>
              </div>
              <div className="f4ED">
                <div className="QCqV"></div>
                <div className={`NKbd${index === 1 ? " vVVX" : ""}`}></div>
              </div>
              <div className="f4ED">
                <div className="QCqV"></div>
                <div className={`NKbd${index === 2 ? " vVVX" : ""}`}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <section class="HqKJ ls1H">
        <button
          data-testid="receive-copy-address-btn"
          class="r2DG V7r1 EGpD vM7P ROPJ x4dM jKY2"
        >
          <div class="P13Q">
            <div class="dEpV qSw9">
              <span class="S5cS GnzX">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="9"
                    y="6"
                    width="14"
                    height="14"
                    rx="3"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="4.2"
                    y="9.2"
                    width="15.6"
                    height="15.6"
                    rx="3.8"
                    fill="currentColor"
                    stroke="var(--tg-theme-button-color)"
                    strokeWidth="1.6"
                  ></rect>
                </svg>
              </span>
              <div variant="button1" class="cpHh KbDJ m_Vw JelQ">
                Copy address
              </div>
            </div>
          </div>
          <div class="gtBI"></div>
        </button>
      </section>
    </div>
  );
}
