import React from "react";
import { BrowserRouter as Router, Route, useNavigate, useLocation } from "react-router-dom";

function Params() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const assetCurrency = params.get('assetCurrency');
  return assetCurrency
}

export default function SendOptions() {
  const assetCurrency = Params() 
  const navigate = useNavigate();
  return (
    <>
      <div className="VFOP Wpf0">
        {assetCurrency === 'TON' && (<div variant="headline5" className="cpHh zuaa QSUc">
          Choose how to send Toncoin
        </div>) || assetCurrency === 'USDT' && (<div variant="headline5" className="cpHh zuaa QSUc">
          Choose how to send Dollars
        </div>) || assetCurrency === 'BTC' && (<div variant="headline5" className="cpHh zuaa QSUc">
          Choose how to send Bitcoin
        </div>) || (<div variant="headline5" className="cpHh zuaa QSUc">
          Choose how to send crypto
        </div>)}
      </div>
      <div className="y836 j4YN">
        <div className="VFOP">
          <div className="r2DG tizz JRPK TyOw">
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="XeMW">
                  <div
                    className="vilv"
                    style={{
                      color: "rgb(255, 255, 255)",
                      background:
                        "linear-gradient(rgb(255, 205, 106) 0%, rgb(255, 168, 92) 100%)",
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
                        <circle
                          cx="14"
                          cy="14"
                          r="11"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        ></circle>
                        <ellipse
                          cx="14"
                          cy="11.5"
                          rx="4"
                          ry="4.5"
                          fill="currentColor"
                        ></ellipse>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.875 21.416C7.323 19.396 10.417 18 14 18c3.582 0 6.676 1.395 8.124 3.416A10.971 10.971 0 0 1 14 25a10.971 10.971 0 0 1-8.125-3.584Z"
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
                    Your Telegram Contact
                  </div>
                  <div
                    variant="subtitle1"
                    color="subtitleText"
                    className="cpHh UBSx Fx5C Bgj6 Udan"
                  >
                    Free transfers within Telegram
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
        {assetCurrency && (<div onClick={() => navigate(`/assets/${assetCurrency}/receiver-search`)} className="VFOP">
          <div className="r2DG tizz JRPK TyOw">
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="XeMW">
                  <div
                    className="vilv"
                    style={{
                      color: "rgb(255, 255, 255)",
                      background:
                        "linear-gradient(rgb(167, 173, 185) 0%, rgb(135, 139, 150) 100%)",
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
                          d="M4.5 12.678c0-2.337 0-3.506.455-4.399a4.174 4.174 0 0 1 1.824-1.824C7.672 6 8.841 6 11.18 6h5.426c2.338 0 3.507 0 4.4.455a4.174 4.174 0 0 1 1.824 1.824c.08.158.146.324.2.504h-2.877c-1.294 0-1.941 0-2.47.155a3.826 3.826 0 0 0-2.592 2.593c-.155.528-.155 1.175-.155 2.469 0 1.294 0 1.941.154 2.47a3.826 3.826 0 0 0 2.594 2.593c.528.154 1.175.154 2.469.154h2.877c-.054.18-.12.346-.2.504a4.174 4.174 0 0 1-1.825 1.824c-.892.455-2.061.455-4.399.455h-5.427c-2.337 0-3.506 0-4.399-.455a4.174 4.174 0 0 1-1.824-1.824c-.455-.893-.455-2.062-.455-4.4v-2.643ZM16.325 14c0-1.298 0-1.947.242-2.448.239-.497.64-.898 1.137-1.137.5-.241 1.15-.241 2.447-.241h1.392c1.298 0 1.947 0 2.448.24.497.24.898.641 1.137 1.138.241.501.241 1.15.241 2.448s0 1.947-.24 2.448c-.24.497-.641.898-1.138 1.137-.5.241-1.15.241-2.448.241h-1.392c-1.297 0-1.947 0-2.447-.241a2.434 2.434 0 0 1-1.137-1.137c-.242-.501-.242-1.15-.242-2.448Zm4.522 0a1.391 1.391 0 1 1-2.783 0 1.391 1.391 0 0 1 2.783 0Z"
                          fill="#fff"
                        ></path>
                        <rect
                          x="1"
                          y="15"
                          width="12"
                          height="12"
                          rx="6"
                          fill="#B8BECC"
                        ></rect>
                        <path
                          d="M7 24v-6m0 0 2.5 2.5M7 18l-2.5 2.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    Send to a crypto address
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
        </div>) || (<div onClick={() => navigate("/choose_asset/send")} className="VFOP">
          <div className="r2DG tizz JRPK TyOw">
            <div className="P13Q dAgC">
              <div className="t1CP Bcb3">
                <div className="XeMW">
                  <div
                    className="vilv"
                    style={{
                      color: "rgb(255, 255, 255)",
                      background:
                        "linear-gradient(rgb(167, 173, 185) 0%, rgb(135, 139, 150) 100%)",
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
                          d="M4.5 12.678c0-2.337 0-3.506.455-4.399a4.174 4.174 0 0 1 1.824-1.824C7.672 6 8.841 6 11.18 6h5.426c2.338 0 3.507 0 4.4.455a4.174 4.174 0 0 1 1.824 1.824c.08.158.146.324.2.504h-2.877c-1.294 0-1.941 0-2.47.155a3.826 3.826 0 0 0-2.592 2.593c-.155.528-.155 1.175-.155 2.469 0 1.294 0 1.941.154 2.47a3.826 3.826 0 0 0 2.594 2.593c.528.154 1.175.154 2.469.154h2.877c-.054.18-.12.346-.2.504a4.174 4.174 0 0 1-1.825 1.824c-.892.455-2.061.455-4.399.455h-5.427c-2.337 0-3.506 0-4.399-.455a4.174 4.174 0 0 1-1.824-1.824c-.455-.893-.455-2.062-.455-4.4v-2.643ZM16.325 14c0-1.298 0-1.947.242-2.448.239-.497.64-.898 1.137-1.137.5-.241 1.15-.241 2.447-.241h1.392c1.298 0 1.947 0 2.448.24.497.24.898.641 1.137 1.138.241.501.241 1.15.241 2.448s0 1.947-.24 2.448c-.24.497-.641.898-1.138 1.137-.5.241-1.15.241-2.448.241h-1.392c-1.297 0-1.947 0-2.447-.241a2.434 2.434 0 0 1-1.137-1.137c-.242-.501-.242-1.15-.242-2.448Zm4.522 0a1.391 1.391 0 1 1-2.783 0 1.391 1.391 0 0 1 2.783 0Z"
                          fill="#fff"
                        ></path>
                        <rect
                          x="1"
                          y="15"
                          width="12"
                          height="12"
                          rx="6"
                          fill="#B8BECC"
                        ></rect>
                        <path
                          d="M7 24v-6m0 0 2.5 2.5M7 18l-2.5 2.5"
                          stroke="#fff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
                    Send to a crypto address
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
        </div>)}
      </div>
    </>
  );
}
