import { React, useState } from "react";
import { BrowserRouter as Router, Route, useNavigate } from "react-router-dom";
import { useFormat } from "../../hooks/useFormat";

export default function Menu() {
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/send-options")}
            data-testid="send-btn"
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
            <div className="gtBI"></div>
          </button>
          <button
            onClick={() => navigate("/purchase-options")}
            className="r2DG V7r1 EGpD Kp43 aPJp x4dM dDTU"
          >
            <div className="P13Q">
              <div className="dEpV qSw9">
                <span className="S5cS GnzX">
                  <svg
                    width="28"
                    height="28"
                    viewBox="-3 -3 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11 22c6.075 0 11-4.925 11-11S17.075 0 11 0 0 4.925 0 11s4.925 11 11 11zm-1-5.857a1 1 0 1 0 2 0V12h4.143a1 1 0 0 0 0-2H12V5.857a1 1 0 0 0-2 0V10H5.857a1 1 0 1 0 0 2H10v4.143z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </span>
                <div
                  variant="subtitle2"
                  weight="medium"
                  className="cpHh YLSR CF5m m_Vw JelQ"
                >
                  Deposit
                </div>
              </div>
            </div>
            <div className="gtBI"></div>
          </button>
          <button
            onClick={() => navigate("/swap")}
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
                  Swap
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
                onClick={() => navigate("/assets/TON")}
                className="r2DG tizz wMEh GQO6"
              >
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="RkvK">
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
                onClick={() => navigate("/assets/USDT")}
                className="r2DG tizz wMEh GQO6"
              >
                <div className="P13Q dAgC">
                  <div className="t1CP Bcb3">
                    <div className="RkvK">
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
                onClick={() => navigate("/choose_asset/buy")}
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
                              d="M3.002 10c.008-1.165.055-1.831.325-2.362a3 3 0 0 1 1.311-1.311C5.28 6 6.12 6 7.8 6h12.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.27.53.317 1.197.325 2.362H3.002Z"
                              fill="currentColor"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M3 12v5.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22h12.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C25 19.72 25 18.88 25 17.2V12H3Zm3 5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 16 7.034 16 7.5 16h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C9.199 19 8.966 19 8.5 19h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 18.199 6 17.966 6 17.5Z"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
                              d="M7.167 3.175h1.666c.532 0 .98 0 1.348.03.384.031.752.1 1.101.278.532.27.964.703 1.235 1.234.178.35.246.718.278 1.102.03.368.03.816.03 1.348v1.666c0 .532 0 .98-.03 1.348-.032.384-.1.752-.278 1.102-.27.531-.703.963-1.235 1.234-.35.178-.717.247-1.101.278-.368.03-.816.03-1.348.03H7.167c-.532 0-.98 0-1.348-.03-.384-.031-.752-.1-1.102-.278a2.825 2.825 0 0 1-1.234-1.234c-.178-.35-.247-.718-.278-1.102-.03-.368-.03-.816-.03-1.348V7.167c0-.532 0-.98.03-1.348.031-.384.1-.752.278-1.102.27-.531.703-.963 1.234-1.234.35-.178.718-.247 1.102-.278.367-.03.816-.03 1.348-.03ZM5.953 4.85c-.282.023-.408.063-.487.103-.22.113-.4.292-.513.514-.04.078-.08.204-.104.487-.024.292-.024.672-.024 1.246v1.6c0 .574 0 .954.024 1.246.023.283.064.41.104.487.113.222.292.401.513.514.079.04.205.08.487.103.293.024.673.025 1.247.025h1.6c.573 0 .954 0 1.246-.025.283-.023.409-.063.487-.103.221-.113.401-.293.514-.514.04-.078.08-.204.103-.487.024-.292.025-.672.025-1.246V7.2c0-.574 0-.954-.025-1.246-.023-.283-.063-.41-.103-.487a1.175 1.175 0 0 0-.514-.514c-.078-.04-.204-.08-.487-.103-.292-.024-.673-.025-1.246-.025H7.2c-.574 0-.954 0-1.247.025Zm.797 2.7c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h.9c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219c.055.107.055.247.055.527v.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055h-.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218C6.75 8.87 6.75 8.73 6.75 8.45v-.9Zm.417 7.625h1.666c.532 0 .98 0 1.348.03.384.031.752.1 1.101.278.532.27.964.703 1.235 1.235.178.35.246.717.278 1.101.03.368.03.816.03 1.348v1.666c0 .532 0 .98-.03 1.348-.032.384-.1.752-.278 1.101-.27.532-.703.964-1.235 1.235-.35.178-.717.247-1.101.278-.368.03-.816.03-1.348.03H7.167c-.532 0-.98 0-1.348-.03-.384-.031-.752-.1-1.102-.278a2.825 2.825 0 0 1-1.234-1.235c-.178-.35-.247-.717-.278-1.101-.03-.367-.03-.816-.03-1.348v-1.666c0-.532 0-.98.03-1.348.031-.384.1-.752.278-1.101.27-.532.703-.964 1.234-1.235.35-.178.718-.247 1.102-.278.367-.03.816-.03 1.348-.03Zm-1.214 1.674c-.282.024-.408.064-.487.104-.22.113-.4.293-.513.514-.04.078-.08.204-.104.487-.024.292-.024.672-.024 1.246v1.6c0 .574 0 .954.024 1.246.023.283.064.41.104.487.113.221.292.401.513.514.079.04.205.08.487.104.293.023.673.024 1.247.024h1.6c.573 0 .954 0 1.246-.024.283-.024.409-.064.487-.104.221-.113.401-.293.514-.514.04-.078.08-.204.103-.487.024-.292.025-.672.025-1.246v-1.6c0-.574 0-.954-.025-1.246-.023-.283-.063-.41-.103-.487a1.174 1.174 0 0 0-.514-.514c-.078-.04-.204-.08-.487-.104-.292-.023-.673-.024-1.246-.024H7.2c-.574 0-.954 0-1.247.024Zm.797 2.701c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h.9c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055h-.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218c-.054-.107-.054-.247-.054-.527v-.9Zm9-3c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h.9c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055h-.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218c-.054-.107-.054-.247-.054-.527v-.9Zm3 3c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h.9c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055h-.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218c-.054-.107-.054-.247-.054-.527v-.9Zm-2.946 2.473c-.054.107-.054.247-.054.527v.9c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218c.107.055.247.055.527.055h.9c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218c.055-.107.055-.247.055-.527v-.9c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218c-.107-.055-.247-.055-.527-.055h-.9c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218Zm5.946-5.473c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h.9c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055h-.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218c-.054-.107-.054-.247-.054-.527v-.9Zm.054 5.473c-.054.107-.054.247-.054.527v.9c0 .28 0 .42.054.527a.5.5 0 0 0 .219.218c.107.055.247.055.527.055h.9c.28 0 .42 0 .527-.055a.5.5 0 0 0 .218-.218c.055-.107.055-.247.055-.527v-.9c0-.28 0-.42-.055-.527a.5.5 0 0 0-.218-.218c-.107-.055-.247-.055-.527-.055h-.9c-.28 0-.42 0-.527.055a.5.5 0 0 0-.219.218ZM19.167 3.175h1.666c.532 0 .98 0 1.348.03.384.031.752.1 1.101.278.532.27.964.703 1.235 1.234.178.35.246.718.278 1.102.03.368.03.816.03 1.348v1.666c0 .532 0 .98-.03 1.348-.032.384-.1.752-.278 1.102-.27.531-.703.963-1.235 1.234-.35.178-.717.247-1.101.278-.368.03-.816.03-1.348.03h-1.666c-.532 0-.98 0-1.348-.03-.384-.031-.752-.1-1.102-.278a2.825 2.825 0 0 1-1.234-1.234c-.178-.35-.247-.718-.278-1.102-.03-.368-.03-.816-.03-1.348V7.167c0-.532 0-.98.03-1.348.031-.384.1-.752.278-1.102.27-.531.703-.963 1.234-1.234.35-.178.718-.247 1.102-.278.367-.03.816-.03 1.348-.03ZM17.953 4.85c-.282.023-.408.063-.487.103-.22.113-.4.292-.513.514-.04.078-.08.204-.104.487-.024.292-.024.672-.024 1.246v1.6c0 .574 0 .954.024 1.246.023.283.064.41.104.487.113.222.292.401.513.514.079.04.205.08.487.103.293.024.673.025 1.247.025h1.6c.573 0 .954 0 1.246-.025.283-.023.409-.063.487-.103.221-.113.401-.293.514-.514.04-.078.08-.204.103-.487.024-.292.025-.672.025-1.246V7.2c0-.574 0-.954-.025-1.246-.023-.283-.063-.41-.103-.487a1.175 1.175 0 0 0-.514-.514c-.078-.04-.204-.08-.487-.103-.292-.024-.672-.025-1.246-.025h-1.6c-.574 0-.954 0-1.247.025Zm.797 2.7c0-.28 0-.42.054-.527a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h.9c.28 0 .42 0 .527.054a.5.5 0 0 1 .218.219c.055.107.055.247.055.527v.9c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218c-.107.055-.247.055-.527.055h-.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.219-.218c-.054-.107-.054-.247-.054-.527v-.9Z"
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="gtBI"></div>
              </div>
              <div className="r2DG tizz">
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
                            width="27"
                            height="27"
                            viewBox="0.5 1 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M4.5 12.678c0-2.337 0-3.506.455-4.399a4.174 4.174 0 0 1 1.824-1.824C7.672 6 8.841 6 11.18 6h5.426c2.338 0 3.507 0 4.4.455a4.174 4.174 0 0 1 1.824 1.824c.08.158.146.324.2.504h-2.877c-1.294 0-1.941 0-2.47.155a3.826 3.826 0 0 0-2.592 2.593c-.155.528-.155 1.175-.155 2.469 0 1.294 0 1.941.154 2.47a3.826 3.826 0 0 0 2.594 2.593c.528.154 1.175.154 2.469.154h2.877c-.054.18-.12.346-.2.504a4.174 4.174 0 0 1-1.825 1.824c-.892.455-2.061.455-4.399.455h-5.427c-2.337 0-3.506 0-4.399-.455a4.174 4.174 0 0 1-1.824-1.824c-.455-.893-.455-2.062-.455-4.4v-2.643ZM16.325 14c0-1.298 0-1.947.242-2.448.239-.497.64-.898 1.137-1.137.5-.241 1.15-.241 2.447-.241h1.392c1.298 0 1.947 0 2.448.24.497.24.898.641 1.137 1.138.241.501.241 1.15.241 2.448s0 1.947-.24 2.448c-.24.497-.641.898-1.138 1.137-.5.241-1.15.241-2.448.241h-1.392c-1.297 0-1.947 0-2.447-.241a2.434 2.434 0 0 1-1.137-1.137c-.242-.501-.242-1.15-.242-2.448Zm4.522 0a1.391 1.391 0 1 1-2.783 0 1.391 1.391 0 0 1 2.783 0Z"
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
                        Get started with Space Wallet
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
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
      <section className="LySH rAGF">
        <div onClick={() => navigate("/settings")} className="r2DG tizz">
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
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-icon"
                      style={{ fill: "currentColor" }}
                      viewBox="0 0 1014 1019"
                    >
                      <path d="M912 455.1v115.6c0 4.2-1.4 8.2-4.2 11.9-2.7 3.8-6.3 6-10.4 6.8L801 604c-6.6 18.7-13.4 34.5-20.3 47.4 12.2 17.4 30.8 41.3 55.8 71.9 3.5 4.2 5.3 8.5 5.3 13.1 0 4.5-1.5 8.5-4.8 11.9-9.4 12.9-26.5 31.6-51.5 56.3-25 24.6-41.3 37.1-48.9 37.1-4.2 0-8.6-1.5-13.6-4.8l-71.9-56.3c-15.3 8-31.1 14.6-47.4 19.8-5.6 47.2-10.6 79.5-15.1 96.8-2.4 9.7-8.6 14.6-18.7 14.6H454.2c-4.9 0-9.1-1.5-12.7-4.4-3.6-2.9-5.7-6.7-6-11.1l-14.7-96c-17-5.6-32.6-11.9-46.9-19.2l-73.4 55.8c-3.5 3.1-7.8 4.8-13.1 4.8-4.9 0-9.2-1.8-13.1-5.7-43.7-39.5-72.4-68.8-86-87.5-2.4-3.5-3.6-7.5-3.6-11.9 0-4.2 1.4-8.1 4.2-11.9 5.3-7.3 14-18.8 26.5-34.6s21.9-28 28.1-36.7c-9.4-17.3-16.5-34.5-21.4-51.5l-95.3-14c-4.5-0.6-8.2-2.8-10.9-6.5-2.7-3.6-4.2-7.8-4.2-12.3v-116c0-4.2 1.4-8.1 4.2-11.9s6-6 9.8-6.8l96.8-14.6c4.9-16 11.6-32 20.3-47.9-13.9-19.8-32.4-43.7-55.8-71.9-3.5-4.2-5.3-8.3-5.3-12.5 0-3.5 1.5-7.5 4.8-11.9 9-12.5 26-31.1 51.2-56s41.6-37.3 49.2-37.3c4.5 0 9 1.7 13.6 5.3l71.9 55.8c15.2-8 31.1-14.6 47.4-19.8 5.6-47.2 10.6-79.5 15.1-96.8 2.4-9.7 8.6-14.6 18.7-14.6h115.6c4.9 0 9.1 1.5 12.7 4.4 3.6 2.9 5.6 6.7 6 11.1l14.6 95.8c17 5.6 32.6 11.9 46.9 19.2l73.9-55.8c3.1-3.1 7.3-4.8 12.5-4.8 4.5 0 8.9 1.7 13.1 5.3 44.8 41.3 73.4 70.9 86 88.5 2.4 2.7 3.6 6.6 3.6 11.5 0 4.2-1.4 8.2-4.2 11.9-5.3 7.3-14 18.8-26.5 34.6s-21.9 28-28.1 36.7c9 17.4 16.1 34.4 21.4 51l95.3 14.6c4.5 0.6 8.1 2.8 10.9 6.5 3.2 3.9 4.7 7.9 4.7 12.4zM606.3 606.2c26-26 39.1-57.5 39.1-94.3s-13.1-68.2-39.1-94.3c-26-25.9-57.5-39-94.3-39s-68.2 13.1-94.3 39.1c-26 26-39.1 57.5-39.1 94.3s13.1 68.2 39.1 94.3 57.5 39.1 94.3 39.1c36.8-0.2 68.2-13.2 94.3-39.2z" />
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
                  Settings
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="gtBI"></div>
        </div>
        <hr className="HUpe DN_1" />
      </section>
    </>
  );
}
