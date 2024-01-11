export default function ScwChooseAsset() {
  return (
    <>
      <div variant="headline5" align="center" class="cpHh zuaa Se5d jkMH T_M4">
        Choose token to send
      </div>
      <div class="LpoM ESay">
        <div class="mjig ODmG LQUd Hk4R Ntau">
          <label class="HWoY">
            <input
              type="radio"
              name="asset"
              class="X98M"
              value="TON"
              checked=""
            />
            <div class="r2DG tizz">
              <div class="P13Q dAgC">
                <div class="t1CP Bcb3">
                  <div class="RkvK">
                    <div class="Oube" style="width: 46px; height: 46px;">
                      <img
                        src="data:image/png;base64,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"
                        class="qQ7G vKsn smtz"
                      />
                    </div>
                  </div>
                </div>
                <div class="f5GT Wv9y">
                  <div class="jOCs TYgZ NXXw">
                    <div
                      variant="body"
                      weight="regular"
                      color="text"
                      class="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                    >
                      Toncoin
                    </div>
                    <div
                      variant="subtitle1"
                      color="subtitleText"
                      class="cpHh UBSx Fx5C Bgj6 Udan"
                    >
                      0.102571302&nbsp;TON
                    </div>
                  </div>
                  <div class="eslG CFak">
                    <div class="vZ3f">
                      <div class="MKKc TKvX vc2p sJpg" alt="radio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 20 20"
                          width="20"
                          height="20"
                          style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <defs>
                            <clipPath id="__lottie_element_464">
                              <rect width="20" height="20" x="0" y="0"></rect>
                            </clipPath>
                          </defs>
                          <g clip-path="url(#__lottie_element_464)">
                            <g
                              style="display: block;"
                              transform="matrix(0.9999223947525024,0,0,0.9999223947525024,10,10)"
                              opacity="1"
                            >
                              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                <path
                                  fill="rgb(90,166,233)"
                                  fill-opacity="0.9998105858036297"
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="gtBI"></div>
            </div>
          </label>
          <label class="HWoY">
            <input type="radio" name="asset" class="X98M" value="FNZ" />
            <div class="r2DG tizz">
              <div class="P13Q dAgC">
                <div class="t1CP Bcb3">
                  <div class="RkvK">
                    <div class="Oube" style="width: 46px; height: 46px;">
                      <img
                        src="https://cache.tonapi.io/imgproxy/2JucCf-fnxN0vPIEYj-CzE-FhU6WsCq4nsuke0dQzUM/rs:fill:200:200:1/g:no/aHR0cHM6Ly9tZWRpYS5mYW56LmVlL2ltYWdlcy85MWVlOTM4YTkyOTM0NjU2YTAxMTMxYzU2OWIzNzdiNi5wbmc.webp"
                        class="qQ7G vKsn smtz"
                      />
                    </div>
                  </div>
                </div>
                <div class="f5GT Wv9y">
                  <div class="jOCs TYgZ NXXw">
                    <div
                      variant="body"
                      weight="regular"
                      color="text"
                      class="cpHh IqPa PmUA Ka5f kzP3 r2_P Vysp"
                    >
                      Fanzee Token
                    </div>
                    <div
                      variant="subtitle1"
                      color="subtitleText"
                      class="cpHh UBSx Fx5C Bgj6 Udan"
                    >
                      178.261637505&nbsp;FNZ
                    </div>
                  </div>
                  <div class="eslG CFak">
                    <div class="vZ3f">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="MKKc TKvX vc2p"
                      >
                        <g opacity="0.5">
                          <rect
                            x="1"
                            y="1"
                            width="18"
                            height="18"
                            rx="9"
                            stroke="currentColor"
                            stroke-width="2"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gtBI"></div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
