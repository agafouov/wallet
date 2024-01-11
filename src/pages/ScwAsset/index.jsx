import React from "react";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Duck from "../../assets/animation/Duck.json";
import Lottie from "lottie-react";

export default function ScwAssets() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathElements = location.pathname.split("/");
  const element = pathElements[3]; // получаем элемент
  return (
    <div class="BEBf">
      <div class="FYHi">
        <div class="eTNg">
          <div class="nCcK">
            <div class="GEUe">
              <div class="Oube" style={{ width: "72px", height: "72px" }}>
                <img
                  src="https://maspx.github.io/website/logo.png"
                  class="qQ7G vKsn smtz"
                />
              </div>
              <div
                variant="body"
                color="overlay"
                weight="regular"
                class="cpHh IqPa PmUA y8FL dFPD"
              >
                Pixelcoin Balance
              </div>
              <div
                variant="headline5"
                color="overlay"
                class="cpHh zuaa y8FL jWgd"
              >
                0&nbsp;{element}
              </div>
              <div
                variant="body"
                weight="regular"
                color="subtitleText"
                class="cpHh IqPa PmUA Fx5C"
              >
                $0.00
              </div>
            </div>
          </div>
          <div class="JJRP">
            <div class="VFOP EFAG">
              <section class="_LuN">
                <button
                  data-testid="send-btn"
                  class="r2DG V7r1 EGpD VpO0 aPJp x4dM"
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
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3Zm4.53 9.47-4-4a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 1 0 1.06 1.06l2.72-2.72V19a.75.75 0 0 0 1.5 0v-8.19l2.72 2.72a.75.75 0 1 0 1.06-1.06Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <div
                        variant="caption2"
                        weight="medium"
                        class="cpHh LMb8 CF5m m_Vw JelQ"
                      >
                        Send
                      </div>
                    </div>
                  </div>
                  <div class="gtBI"></div>
                </button>
                <button
                  data-testid="deposit-btn"
                  class="r2DG V7r1 EGpD VpO0 aPJp x4dM"
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
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M3 14C3 7.925 7.925 3 14 3s11 4.925 11 11-4.925 11-11 11S3 20.075 3 14Zm11-5.75a.75.75 0 0 1 .75.75v4.25H19a.75.75 0 0 1 0 1.5h-4.25V19a.75.75 0 0 1-1.5 0v-4.25H9a.75.75 0 0 1 0-1.5h4.25V9a.75.75 0 0 1 .75-.75Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                      <div
                        variant="caption2"
                        weight="medium"
                        class="cpHh LMb8 CF5m m_Vw JelQ"
                      >
                        Deposit
                      </div>
                    </div>
                  </div>
                  <div class="gtBI"></div>
                </button>
                <button
                  data-testid="swap-btn"
                  class="r2DG V7r1 EGpD VpO0 aPJp x4dM"
                >
                  <div class="P13Q">
                    <div class="dEpV qSw9">
                      <span class="S5cS GnzX">
                        <svg
                          width="28"
                          height="29"
                          viewBox="0 0 28 29"
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
                        variant="caption2"
                        weight="medium"
                        class="cpHh LMb8 CF5m m_Vw JelQ"
                      >
                        Swap
                      </div>
                    </div>
                  </div>
                  <div class="gtBI"></div>
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="I4vR kjkh _rZX">
        <section class="awRV _k5L">
          <div>
            <div class="FsUu A3X4">
              <div class="TRmH RyvX">
                <div alt="duck">
                  <Lottie animationData={Duck} />
                </div>
              </div>
              <h1 variant="headline6" class="cpHh yq6B Frpa">
                No History Yet
              </h1>
              <p
                variant="body"
                weight="regular"
                class="cpHh IqPa PmUA nou_ R77o"
              >
                Once you start making transactions, they will appear here.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
