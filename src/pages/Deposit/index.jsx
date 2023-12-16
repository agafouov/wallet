import React from "react";
import { BrowserRouter as Router, Route, useNavigate, useLocation } from "react-router-dom";

function Params() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const assetCurrency = params.get('assetCurrency');
  return assetCurrency
}

export default function Deposit() {
  const assetCurrency = Params();
  const navigate = useNavigate();
  return (
    <>
      <div className="VFOP lzmh">
        {assetCurrency === 'TON' && (<div variant="headline5" className="cpHh zuaa Yi0h">
          How do you want to add Toncoin?
        </div>) || assetCurrency === 'USDT' && (<div variant="headline5" className="cpHh zuaa Yi0h">
          How do you want to add Dollars?
        </div>) || (<div variant="headline5" className="cpHh zuaa Yi0h">
          How do you want to add crypto?
        </div>)}
      </div>
      <div className="at2m UYx9">
        {assetCurrency && (<div className="VFOP">
          <div
            onClick={() => navigate(`/buy?assetCurrency=${assetCurrency}`)}
            className="r2DG tizz JRPK TyOw"
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
                <div className="jOCs TYgZ NXXw">
                  <div
                    variant="body"
                    weight="medium"
                    color="text"
                    className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                  >
                    Bank Card
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    Buy with your bank card
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
        </div>) || (<div className="VFOP">
          <div
            onClick={() => navigate("/choose_asset/buy")}
            className="r2DG tizz JRPK TyOw"
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
                <div className="jOCs TYgZ NXXw">
                  <div
                    variant="body"
                    weight="medium"
                    color="text"
                    className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                  >
                    Bank Card
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    Buy with your bank card
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
        </div>)}
        <div className="VFOP">
          <div onClick={() => navigate("/p2p")} className="r2DG tizz JRPK TyOw">
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
                          d="M25.859 9.67 23.83 4.94c-.3-.702-.45-1.053-.693-1.31a2 2 0 0 0-.771-.509C22.035 3 21.653 3 20.89 3H7.11c-.763 0-1.144 0-1.476.121a2 2 0 0 0-.772.509c-.242.257-.392.608-.693 1.31L2.142 9.67h23.717ZM4 15.52c.546.2 1.135.31 1.75.31a5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808 5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808 5.06 5.06 0 0 0 2.75-.808 5.06 5.06 0 0 0 2.75.808c.615 0 1.205-.11 1.75-.31v6.28c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C22.48 25 21.92 25 20.8 25H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 23.48 4 22.92 4 21.8v-6.28Zm2 4.08c0-.56 0-.84.11-1.054a1 1 0 0 1 .436-.437C6.76 18 7.04 18 7.6 18h3.8c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437c.11.214.11.494.11 1.054v1.8c0 .56 0 .84-.11 1.054a1 1 0 0 1-.437.437C12.24 23 11.96 23 11.4 23H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 22.24 6 21.96 6 21.4v-1.8Zm-.25-5.1A3.75 3.75 0 0 1 2.008 11h23.984a3.75 3.75 0 0 1-6.492 2.3 3.74 3.74 0 0 1-2.75 1.2A3.74 3.74 0 0 1 14 13.3a3.74 3.74 0 0 1-2.75 1.2 3.74 3.74 0 0 1-2.75-1.2 3.74 3.74 0 0 1-2.75 1.2Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
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
                    <div className="">P2P Market</div>
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    Buy crypto from people via ads
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
        {!assetCurrency && (<div className="VFOP">
          <div
            onClick={() => navigate("/choose_asset/receive")}
            className="r2DG tizz JRPK TyOw"
          >
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="XeMW">
                  <div
                    className="vilv"
                    style={{color: "rgb(255, 255, 255)", background: "linear-gradient(rgb(167, 173, 185) 0%, rgb(135, 139, 150) 100%)", width: "46px", height: "46px"}}
                  >
                    <div style={{width: "28px", height: "28px"}}>
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
                <div className="jOCs TYgZ NXXw">
                  <div
                    variant="body"
                    weight="medium"
                    color="text"
                    className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
                  >
                    External Wallet
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    Receive from another wallet
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
        </div>)}
      </div>
    </>
  );
}
