import React, { useRef, useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

function useFormat(num) {
  var parts = num.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export default function Purchase() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const textAreaRef = useRef();

  // Получаем значение receiveValue из URL при загрузке компонента
  useEffect(() => {
    const receiveValue = searchParams.get('receiveValue');
    if (receiveValue !== null) {
      setInputValue(receiveValue);
    }
  }, []);

  // Обновляем URL и состояние ввода при изменении пользователем
  const handleInputChange = (event) => {
    const { value } = event.target;
    // Проверяем, является ли введенное значение числом
    if (/^[\d.]*$/.test(value)) {
      setInputValue(value);
      setSearchParams({ receiveValue: value || '0', assetCurrency: 'TON' }, 'replace');
    }
  };

  // Вводим TON в поле ввода и URL
  const handleFifty = () => {
    setInputValue('50');
    setSearchParams({ receiveValue: '50', assetCurrency: 'TON' }, 'replace');
    textAreaRef.current.focus();
  };
  const handleHundred = () => {
    setInputValue('100');
    setSearchParams({ receiveValue: '100', assetCurrency: 'TON' }, 'replace');
    textAreaRef.current.focus();
  };
  const handleThreeHundred = () => {
    setInputValue('300');
    setSearchParams({ receiveValue: '300', assetCurrency: 'TON' }, 'replace');
    textAreaRef.current.focus();
  };
  const handleSixHundred = () => {
    setInputValue('600');
    setSearchParams({ receiveValue: '600', assetCurrency: 'TON' }, 'replace');
    textAreaRef.current.focus();
  };
  
  return (
    <>
      <form className="taoq Ri1i">
        <div className="unbr e1Tl Eho_">
          <div className="_Nat yhvK">
            <label htmlFor="input" className="dv_2 KU0V">
              <div className="GIvg">
                You buy in
                <button type="button" className="Yh7n">
                  <span>USD</span>
                  <svg width="12" height="12" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.46.408a.75.75 0 0 0-.92 0l-4.5 3.5a.75.75 0 1 0 .92 1.184L6 1.95l4.04 3.142a.75.75 0 1 0 .92-1.184l-4.5-3.5ZM1.04 8.092l4.5 3.5c.27.21.65.21.92 0l4.5-3.5a.75.75 0 1 0-.92-1.184L6 10.05 1.96 6.908a.75.75 0 1 0-.92 1.184Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </div>
            </label>
          </div>
          <div className="CpWq">
            <div className="_m3Z">
              <div className="JUMA">
                <div
                  style={{
                    maxWidth: "100%",
                    whiteSpace: "nowrap",
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      transformOrigin: "left center 0px",
                      flexGrow: "initial",
                      transform: "scale(1)",
                    }}
                  >
                    <div className="B7pe Ty3v">
                      <div className="JdkE EolD">
                        <input
                          id="input"
                          autoComplete="off"
                          inputMode="decimal"
                          className="gw_6"
                          value={inputValue}
                          onChange={handleInputChange}
                          ref={textAreaRef}
                          autoFocus
                        />
                        <div className="_R84">{!inputValue ? 0 : inputValue}</div>
                      </div>
                      <div className="TPHb K3Zv XGbG">TON</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="AFsH">
              <button type="button" className="Je3B" data-testid="invert-button">
                <div className="sfQb" alt="invert">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 120 120"
                    width="120"
                    height="120"
                    style={{
                      width: "100%",
                      height: "100%",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <defs>
                      <clipPath id="__lottie_element_95">
                        <rect width="120" height="120" x="0" y="0"></rect>
                      </clipPath>
                      <clipPath id="__lottie_element_97">
                        <path
                          fill="#ffffff"
                          clipRule="nonzero"
                          d=" M8,-80 C-25.136999130249023,-80 -52,-53.137001037597656 -52,-20 C-52,13.13700008392334 -25.136999130249023,40 8,40 C41.137001037597656,40 68,13.13700008392334 68,-20 C68,-53.137001037597656 41.137001037597656,-80 8,-80"
                          fillOpacity="1"
                        ></path>
                      </clipPath>
                      <clipPath id="__lottie_element_100">
                        <path
                          fill="#ffffff"
                          clipRule="nonzero"
                          d=" M89.99302673339844,-80 C56.85602569580078,-80 29.993024826049805,-53.137001037597656 29.993024826049805,-20 C29.993024826049805,13.13700008392334 56.85602569580078,40 89.99302673339844,40 C123.1300277709961,40 149.99302673339844,13.13700008392334 149.99302673339844,-20 C149.99302673339844,-53.137001037597656 123.1300277709961,-80 89.99302673339844,-80"
                          fillOpacity="1"
                        ></path>
                      </clipPath>
                      <clipPath id="__lottie_element_103">
                        <path
                          fill="#ffffff"
                          clipRule="nonzero"
                          d=" M6,-77 C-27.136999130249023,-77 -54,-50.137001037597656 -54,-17 C-54,16.136999130249023 -27.136999130249023,43 6,43 C39.137001037597656,43 66,16.136999130249023 66,-17 C66,-50.137001037597656 39.137001037597656,-77 6,-77"
                          fillOpacity="1"
                        ></path>
                      </clipPath>
                      <clipPath id="__lottie_element_106">
                        <path
                          fill="#ffffff"
                          clipRule="nonzero"
                          d=" M89.99302673339844,-77 C56.85602569580078,-77 29.993024826049805,-50.137001037597656 29.993024826049805,-17 C29.993024826049805,16.136999130249023 56.85602569580078,43 89.99302673339844,43 C123.1300277709961,43 149.99302673339844,16.136999130249023 149.99302673339844,-17 C149.99302673339844,-50.137001037597656 123.1300277709961,-77 89.99302673339844,-77"
                          fillOpacity="1"
                        ></path>
                      </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_95)">
                      <g
                        style={{ display: "block" }}
                        transform="matrix(1,0,0,1,60,60)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                          <path
                            fill="rgb(103,166,229)"
                            fillOpacity="0.16"
                            d=" M20,0 C20,0 20,0 20,0 C20,11.038000106811523 11.038000106811523,20 0,20 C0,20 0,20 0,20 C-11.038000106811523,20 -20,11.038000106811523 -20,0 C-20,0 -20,0 -20,0 C-20,-11.038000106811523 -11.038000106811523,-20 0,-20 C0,-20 0,-20 0,-20 C11.038000106811523,-20 20,-11.038000106811523 20,0z"
                          ></path>
                        </g>
                      </g>
                      <g
                        clipPath="url(#__lottie_element_106)"
                        style={{ display: "none" }}
                        transform="matrix(0,-1,1,0,77,149.99302673339844)"
                        opacity="0.00007749488063836907"
                      >
                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(84,147,208)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-2.5,-4.5 C-2.5,-4.5 -7,0 -7,0 M-2.5,4.5 C-2.5,4.5 -7,0 -7,0 M-7,0 C-7,0 7,0 7,0"
                          ></path>
                        </g>
                      </g>
                      <g
                        clipPath="url(#__lottie_element_103)"
                        style={{ display: "block" }}
                        transform="matrix(0,-1,1,0,77,60.85714340209961)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(84,147,208)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-2.5,-4.5 C-2.5,-4.5 -7,0 -7,0 M-2.5,4.5 C-2.5,4.5 -7,0 -7,0 M-7,0 C-7,0 7,0 7,0"
                          ></path>
                        </g>
                      </g>
                      <g
                        clipPath="url(#__lottie_element_100)"
                        style={{ display: "none" }}
                        transform="matrix(0,1,-1,0,40,-29.993024826049805)"
                        opacity="0.00007749488063836907"
                      >
                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(84,147,208)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-2.5,-4.5 C-2.5,-4.5 -7,0 -7,0 M-2.5,4.5 C-2.5,4.5 -7,0 -7,0 M-7,0 C-7,0 7,0 7,0"
                          ></path>
                        </g>
                      </g>
                      <g
                        clipPath="url(#__lottie_element_97)"
                        style={{ display: "block" }}
                        transform="matrix(0,1,-1,0,40,58.85714340209961)"
                        opacity="1"
                      >
                        <g opacity="1" transform="matrix(3,0,0,3,0,0)">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fillOpacity="0"
                            stroke="rgb(84,147,208)"
                            strokeOpacity="1"
                            strokeWidth="2"
                            d=" M-2.5,-4.5 C-2.5,-4.5 -7,0 -7,0 M-2.5,4.5 C-2.5,4.5 -7,0 -7,0 M-7,0 C-7,0 7,0 7,0"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="xqwU RdIr">
            <div className="NCgc">
              <span className="xryk" data-testid="exchange-rate">
                <span>1&nbsp;TON</span>&nbsp;≈&nbsp;<span>2.12&nbsp;USD</span>
              </span>
            </div>
          </div>
        </div>
        <input type="submit" className="oKe5" disabled="" />
        <div className="vhab">
          <button onClick={handleFifty} type="button" className="r2DG kcJb">
            <div className="P13Q">
              <div color="text" variant="button1" className="cpHh KbDJ Ka5f">
                50&nbsp;TON
              </div>
            </div>
            <div
              className="gsZH"
              style={{ paddingInline: "6px", paddingBlock: "8px" }}
            ></div>
            <div className="gtBI"></div>
          </button>
          <button onClick={handleHundred} type="button" className="r2DG kcJb">
            <div className="P13Q">
              <div color="text" variant="button1" className="cpHh KbDJ Ka5f">
                100&nbsp;TON
              </div>
            </div>
            <div
              className="gsZH"
              style={{ paddingInline: "6px", paddingBlock: "8px" }}
            ></div>
            <div className="gtBI"></div>
          </button>
          <button onClick={handleThreeHundred} type="button" className="r2DG kcJb">
            <div className="P13Q">
              <div color="text" variant="button1" className="cpHh KbDJ Ka5f">
                300&nbsp;TON
              </div>
            </div>
            <div
              className="gsZH"
              style={{ paddingInline: "6px", paddingBlock: "8px" }}
            ></div>
            <div className="gtBI"></div>
          </button>
          <button onClick={handleSixHundred} type="button" className="r2DG kcJb">
            <div className="P13Q">
              <div color="text" variant="button1" className="cpHh KbDJ Ka5f">
                600&nbsp;TON
              </div>
            </div>
            <div
              className="gsZH"
              style={{ paddingInline: "6px", paddingBlock: "8px" }}
            ></div>
            <div className="gtBI"></div>
          </button>
        </div>
      </form>
      <div className="dAgC Fqu8">
        <div className="t1CP Bcb3">
          <div className="XeMW">
            <div
              className="vilv PuF7"
              style={{
                color: "rgb(255, 255, 255)",
                width: "40px",
                height: "40px",
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
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3 12v5.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22h12.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C25 19.72 25 18.88 25 17.2V12H3Zm3 5.5c0-.466 0-.699.076-.883a1 1 0 0 1 .541-.54C6.801 16 7.034 16 7.5 16h1c.466 0 .699 0 .883.076a1 1 0 0 1 .54.541c.077.184.077.417.077.883s0 .699-.076.883a1 1 0 0 1-.541.54C9.199 19 8.966 19 8.5 19h-1c-.466 0-.699 0-.883-.076a1 1 0 0 1-.54-.541C6 18.199 6 17.966 6 17.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="f5GT Wv9y YrPC">
          <div className="jOCs TYgZ If_N NXXw">
            <div
              variant="body"
              weight="medium"
              color="text"
              className="cpHh IqPa CF5m Ka5f kzP3 r2_P Vysp"
            >
              Credit card
            </div>
            <div
              variant="subtitle1"
              color="subtitleText"
              className="cpHh UBSx Fx5C Bgj6 Udan"
            >
              Payment method
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
