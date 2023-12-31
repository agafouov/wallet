import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import AButton from "../../components/AButton";
import gsap from "gsap";

export default function Main() {
  const navigate = useNavigate();
  const [showAssets, setShowAssets] = useState(
    JSON.parse(sessionStorage.getItem("showAssets")) || false
  );

  useEffect(() => {
    window.onbeforeunload = () => sessionStorage.removeItem("showAssets");
    sessionStorage.setItem("showAssets", JSON.stringify(showAssets));
    return () => {
      window.onbeforeunload = null;
    };
  }, [showAssets]);

  const handleClick = () => {
    setShowAssets(!showAssets);
  };

  return (
    <>
      <div className="a7LD">
        <div
          variant="body"
          weight="regular"
          className="cpHh IqPa PmUA NH9b rpx1"
        >
          Total balance
        </div>
        <div>
          <div
            style={{
              maxWidth: "100%",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                transformOrigin: "center center 0px",
                flexGrow: "initial",
                transform: "scale(1)",
              }}
            >
              <div className="YWSF">
                <div className="JLFu htWJ">
                  <span className="Neh8">$</span>
                  <span>0</span>
                  <span className="tWFE">.</span>
                  <span className="xAWJ">00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="VFOP EFAG eF4q YE3Y">
        <section className="_LuN ElzW">
          <AButton onclick={() => navigate("/send-options")}>
            <div className="P13Q">
              <div className="dEpV qSw9">
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3Zm4.53 9.47-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72V19a.75.75 0 0 0 1.5 0v-8.19l2.72 2.72a.75.75 0 1 0 1.06-1.06Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="subtitle2"
                  weight="medium"
                  className="cpHh YLSR CF5m m_Vw JelQ"
                >
                  Send
                </div>
              </div>
            </div>
          </AButton>
          <button
            onClick={() => navigate("/choose_asset/receive")}
            className="r2DG V7r1 EGpD Kp43 aPJp x4dM dDTU"
          >
            <div className="P13Q">
              <div className="dEpV qSw9">
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11Zm-3.434-10.566a.8.8 0 0 0-1.132 1.132l4 4a.8.8 0 0 0 1.132 0l4-4a.8.8 0 0 0-1.132-1.132L14.8 17.07V9.5a.8.8 0 0 0-1.6 0v7.569l-2.634-2.635Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="subtitle2"
                  weight="medium"
                  className="cpHh YLSR CF5m m_Vw JelQ"
                >
                  Receive
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
          <button
            onClick={() => navigate("/choose_asset/purchase")}
            className="r2DG V7r1 EGpD Kp43 aPJp x4dM dDTU"
          >
            <div className="P13Q">
              <div className="dEpV qSw9">
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14Zm11-5.75a.75.75 0 0 1 .75.75v4.25H19a.75.75 0 0 1 0 1.5h-4.25V19a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1 0-1.5h4.25V9a.75.75 0 0 1 .75-.75Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="subtitle2"
                  weight="medium"
                  className="cpHh YLSR CF5m m_Vw JelQ"
                >
                  Buy
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
          <button
            onClick={() => navigate("/exchange")}
            className="r2DG V7r1 EGpD Kp43 aPJp x4dM dDTU"
          >
            <div className="P13Q">
              <div className="dEpV qSw9">
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 14.5c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm9.303-5.97c.26.26.26.68 0 .94l-1.364 1.365h7.394a.665.665 0 1 1 0 1.33H10.94l1.364 1.365a.665.665 0 1 1-.94.94l-2.5-2.5a.665.665 0 0 1 0-.94l2.5-2.5c.26-.26.68-.26.94 0Zm3.557 6.94a.665.665 0 1 1 .94-.94l2.5 2.5a.665.665 0 0 1 0 .94l-2.5 2.5a.665.665 0 1 1-.94-.94l1.365-1.365H9.83a.665.665 0 1 1 0-1.33h7.395L15.86 15.47Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="subtitle2"
                  weight="medium"
                  className="cpHh YLSR CF5m m_Vw JelQ"
                >
                  Exchange
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
        </section>
      </div>
      <section className="LySH rAGF">
        <div>
          <div className="ydmx tf4r">
            <div className="mjig ODmG LQUd">
              <div
                onClick={() => navigate("/scw")}
                className="r2DG tizz wMEh GQO6"
              >
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div class="RkvK">
                      <div
                        class="Oube"
                        style={{ width: "46px", height: "46px" }}
                      >
                        <img
                          src="https://t.me/i/userpic/320/1Jd12DMPQM7fk4lY5vG4yViFLkHUZisk9sPhTe0L4hEY4GelamngLnk2rfR5W9Ij.svg"
                          class="qQ7G vKsn smtz"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        class="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        TON Space <span class="Iysm">Beta</span>
                      </div>
                      <div
                        variant="subtitle1"
                        color="subtitleText"
                        className="cpHh UBSx Fx5C Bgj6 Udan"
                      >
                        UQD1...TZh9
                      </div>
                    </div>
                    <div className="eslG CFak">
                      <div className="jOCs TYgZ HfZf NXXw">
                        <div
                          variant="body"
                          weight="regular"
                          color="text"
                          className="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                        >
                          $0.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>

              <div 
              onClick={() => navigate("/assets/TON")}
              class="r2DG tizz wMEh GQO6">
                <div class="P13Q dAgC">
                  <div class="t1CP Bcb3">
                    <div class="RkvK">
                      <svg
                        width="46"
                        height="46"
                        fill="none"
                        viewBox="0 0 40 40"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="40"
                          height="40"
                          rx="20"
                          fill="#0098EA"
                        ></rect>
                        <path
                          d="M26.831 11H13.173c-2.512 0-4.103 2.709-2.84 4.899l8.43 14.61a1.43 1.43 0 0 0 2.478 0l8.431-14.61c1.262-2.187-.33-4.899-2.84-4.899h-.001zm-8.075 15.128-1.836-3.553-4.43-7.922a.774.774 0 0 1 .68-1.157h5.584V26.13l.002-.002zm8.754-11.477-4.428 7.926-1.836 3.551V13.494h5.583c.612 0 .973.65.68 1.157z"
                          fill="#fff"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div class="f5GT Wv9y">
                    <div class="jOCs TYgZ NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        class="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Toncoin
                      </div>
                      <div
                        variant="subtitle1"
                        color="subtitleText"
                        class="cpHh UBSx Fx5C Bgj6 Udan"
                      >
                        0&nbsp;TON
                      </div>
                    </div>
                    <div class="eslG CFak">
                      <div class="jOCs TYgZ HfZf NXXw">
                        <div
                          variant="body"
                          weight="regular"
                          color="text"
                          class="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                        >
                          $0.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="gtBI"></div>
              </div>

              <div
                onClick={handleClick}
                className={`ZJni${showAssets ? " JkR1" : ""}`}
              >
                <div className="dAgC wMEh GQO6 XFUc">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "46px", height: "46px" }}>
                          <svg
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="14"
                              y="14"
                              width="24"
                              height="24"
                              rx="12"
                              fill="#F7931A"
                            ></rect>
                            <path
                              d="M31.29 24.293c.239-1.597-.977-2.455-2.64-3.028l.54-2.163-1.317-.328-.525 2.106a55.322 55.322 0 0 0-1.055-.248l.529-2.12-1.316-.328-.54 2.162c-.286-.065-.568-.13-.84-.198l.001-.006-1.816-.454-.35 1.407s.977.224.956.237c.533.133.63.486.614.766l-.614 2.465c.036.009.084.022.136.044l-.139-.035-.86 3.452c-.066.162-.231.405-.604.313.013.02-.957-.239-.957-.239l-.654 1.508 1.713.427c.32.08.632.163.94.242l-.546 2.188 1.316.328.54-2.165c.359.098.707.188 1.049.273l-.538 2.154 1.317.328.545-2.183c2.245.424 3.933.253 4.644-1.778.573-1.635-.028-2.578-1.21-3.193.86-.199 1.509-.765 1.681-1.934Zm-3.008 4.22c-.407 1.634-3.16.75-4.053.529l.723-2.9c.892.224 3.755.665 3.33 2.37Zm.407-4.243c-.372 1.487-2.663.731-3.406.546l.655-2.629c.744.185 3.137.531 2.75 2.083Z"
                              fill="#fff"
                            ></path>
                            <rect
                              x="2"
                              y="2"
                              width="24"
                              height="24"
                              rx="12"
                              fill="#28C281"
                            ></rect>
                            <path
                              d="M14.008 21.23c-.443 0-.73-.279-.73-.746v-.829c-1.739-.205-2.945-1.099-3.298-2.239a1.317 1.317 0 0 1-.082-.451c0-.517.353-.861.92-.861.475 0 .746.278.918.664.328.837 1.1 1.296 2.346 1.296 1.32 0 2.166-.525 2.166-1.501 0-.829-.755-1.255-2.01-1.55l-1.116-.263c-1.87-.427-3.109-1.493-3.109-3.043 0-1.854 1.428-2.97 3.265-3.2v-.836c0-.468.287-.747.73-.747s.73.28.73.747v.836c1.608.197 2.773 1.067 3.134 2.273.04.155.074.303.074.459 0 .476-.361.763-.886.763-.476 0-.73-.23-.935-.623-.37-.862-1.01-1.28-2.109-1.28-1.255 0-2.01.558-2.01 1.435 0 .755.739 1.223 1.83 1.469l1.066.246c2.109.484 3.306 1.51 3.306 3.117 0 2.018-1.608 3.1-3.47 3.306v.812c0 .467-.287.746-.73.746Z"
                              fill="#fff"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        <div className="bfLo">
                          More assets
                          <svg
                            width="14"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#a)">
                              <path
                                d="M8 11.708a.652.652 0 0 1-.465-.198l-5.29-5.414a.644.644 0 0 1-.138-.199.64.64 0 0 1-.047-.246.636.636 0 0 1 .3-.547.636.636 0 0 1 .322-.082c.173 0 .32.06.444.178l5.236 5.353h-.731L12.867 5.2a.633.633 0 0 1 .444-.178.6.6 0 0 1 .315.082c.096.055.17.13.226.226a.637.637 0 0 1-.103.759l-5.291 5.42a.642.642 0 0 1-.212.151.64.64 0 0 1-.246.048Z"
                                fill="currentColor"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="a">
                                <path fill="#fff" d="M0 0h16v16H0z"></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="eslG CFak">
                      <div className="jOCs TYgZ HfZf NXXw">
                        <div
                          variant="body"
                          weight="regular"
                          color="text"
                          className="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                        >
                          $0.00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mjig ODmG LQUd AVm8">
                  <div
                    onClick={() => navigate("/assets/USDT")}
                    className="r2DG tizz wMEh GQO6 O7bE EA89"
                  >
                    <div className="P13Q dAgC">
                      <div className="t1CP Bcb3">
                        <div className="RkvK">
                          <svg
                            width="46"
                            height="46"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="40"
                              height="40"
                              rx="20"
                              fill="#28C281"
                            ></rect>
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
                          <div className="jOCs TYgZ NXXw">
                            <div
                              variant="body"
                              weight="regular"
                              color="text"
                              className="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                            >
                              $0.00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gtBI"></div>
                  </div>
                  <div
                    onClick={() => navigate("/assets/BTC")}
                    className="r2DG tizz wMEh GQO6 O7bE EA89"
                  >
                    <div className="P13Q dAgC">
                      <div className="t1CP Bcb3">
                        <div className="RkvK">
                          <svg
                            width="46"
                            height="46"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <div className="jOCs TYgZ NXXw">
                            <div
                              variant="body"
                              weight="regular"
                              color="text"
                              className="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                            >
                              $0.00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="gtBI"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="HUpe DN_1" />
      </section>
      <section className="LySH rAGF">
        <div>
          <div
            variant="button1"
            color="sectionHeaderText"
            className="cpHh KbDJ eqZC Rfm7 hCZ1"
          >
            Ways to add funds
          </div>
          <div className="ydmx tf4r">
            <div className="mjig ODmG LQUd">
              <div
                onClick={() => navigate("/choose_asset/purchase")}
                className="r2DG tizz"
              >
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv PuF7"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "28px", height: "28px" }}>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14Zm11-5.75a.75.75 0 0 1 .75.75v4.25H19a.75.75 0 0 1 0 1.5h-4.25V19a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1 0-1.5h4.25V9a.75.75 0 0 1 .75-.75Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Top up using a bank card
                      </div>
                    </div>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p_ZQ v61B"
                    >
                      <path
                        d="m1 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
              <div onClick={() => navigate("/exchange")} className="r2DG tizz">
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv PuF7"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "28px", height: "28px" }}>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M25.859 9.67 23.83 4.94c-.3-.702-.45-1.053-.693-1.31a2 2 0 0 0-.771-.509C22.035 3 21.653 3 20.89 3H7.11c-.763 0-1.144 0-1.476.121a2 2 0 0 0-.772.509c-.242.257-.392.608-.693 1.31L2.142 9.67h23.717ZM4 15.52c.546.2 1.135.31 1.75.31a5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808 5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808 5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808c.615 0 1.205-.11 1.75-.31v6.28c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C22.48 25 21.92 25 20.8 25H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 23.48 4 22.92 4 21.8v-6.28Zm2 4.08c0-.56 0-.84.11-1.054a1 1 0 0 1 .436-.437C6.76 18 7.04 18 7.6 18h3.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.11.214.11.494.11 1.054v1.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.437.437C12.24 23 11.96 23 11.4 23H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 22.24 6 21.96 6 21.4v-1.8Zm-.25-5.1A3.75 3.75 0 0 1 2.008 11h23.984a3.75 3.75 0 0 1-6.492 2.3 3.74 3.74 0 0 1-2.75 1.2A3.74 3.74 0 0 1 14 13.3a3.74 3.74 0 0 1-2.75 1.2 3.74 3.74 0 0 1-2.75-1.2 3.74 3.74 0 0 1-2.75 1.2Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          {/* <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 14.5c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11Zm9.303-5.97c.26.26.26.68 0 .94l-1.364 1.365h7.394a.665.665 0 1 1 0 1.33H10.94l1.364 1.365a.665.665 0 1 1-.94.94l-2.5-2.5a.665.665 0 0 1 0-.94l2.5-2.5c.26-.26.68-.26.94 0Zm3.557 6.94a.665.665 0 1 1 .94-.94l2.5 2.5a.665.665 0 0 1 0 .94l-2.5 2.5a.665.665 0 1 1-.94-.94l1.365-1.365H9.83a.665.665 0 1 1 0-1.33h7.395L15.86 15.47Z"
                              fill="currentColor"
                            ></path>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Trade on the P2P Market
                      </div>
                    </div>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p_ZQ v61B"
                    >
                      <path
                        d="m1 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
              <div
                onClick={() => navigate("/choose_asset/receive")}
                className="r2DG tizz"
              >
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="XeMW">
                      <div
                        className="vilv PuF7"
                        style={{
                          color: "rgb(255, 255, 255)",
                          width: "46px",
                          height: "46px",
                        }}
                      >
                        <div style={{ width: "28px", height: "28px" }}>
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M14 25c6.075 0 11-4.925 11-11S20.075 3 14 3 3 7.925 3 14s4.925 11 11 11Zm-3.434-10.566a.8.8 0 0 0-1.132 1.132l4 4a.8.8 0 0 0 1.132 0l4-4a.8.8 0 0 0-1.132-1.132L14.8 17.07V9.5a.8.8 0 0 0-1.6 0v7.569l-2.634-2.635Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="f5GT Wv9y">
                    <div className="jOCs TYgZ HfZf NXXw">
                      <div
                        variant="body"
                        weight="medium"
                        color="text"
                        className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                      >
                        Deposit crypto from another wallet
                      </div>
                    </div>
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p_ZQ v61B"
                    >
                      <path
                        d="m1 1 5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="ydmx tf4r">
          <div className="PsHq">
            <div className="">
              <div>
                <div className="mjig ODmG LQUd"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="HUpe DN_1" />
      </section>
    </>
  );
}
