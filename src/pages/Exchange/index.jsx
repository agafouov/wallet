import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function Exchange() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("0");

  function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleChange = (event) => {
    let newValue = event.target.value;
    if (newValue === "") {
      setValue("");
      setOutput("0");
    } else if (newValue === ".") {
      setValue("0.");
      setOutput("0.");
    } else if (newValue === "00") {
      setValue("0.");
      setOutput("0.");
    } else if (!isNaN(newValue)) {
      setValue(newValue);
      setOutput(newValue);
    }
  };

  return (
    <div>
      <form className="">
        <div className="unbr e1Tl cdsw">
          <div className="_Nat yhvK">
            <label htmlFor="input" className="dv_2 KU0V">
              <div className="fGjD">
                <div className="tt_o">
                  <div className="spEm">
                    <svg
                      width="40"
                      height="40"
                      fill="none"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ width: "32px", height: "32px" }}
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
                  <span className="TlJ_ r68T">
                    <span>You pay</span>
                  </span>
                </div>
                <a href="#" className="tjl5">
                  Max: <span className="JfMo">0&nbsp;TON</span>
                </a>
              </div>
            </label>
          </div>
          <div className="CpWq">
            <div className="_m3Z wKgE">
              <div className="JUMA">
                <div
                  style={{
                    maxWidth: "100%",
                    whiteSpace: "nowrap",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      transformOrigin: "left center 0px",
                      flexGrow: "1",
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
                          onChange={handleChange}
                          value={value}
                        />
                        <div className="_R84">{output}</div>
                      </div>
                      <div className="n7S7">
                        <div className="">
                          <div className="TPHb K3Zv rZy8">
                            TON
                            <svg
                              width="16"
                              height="64"
                              viewBox="0 0 16 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="DJRQ ZWMe"
                            >
                              <path
                                d="m7.031 44.672 4.297-10.547c.344-.828.672-1.656.672-2.438 0-.78-.328-1.625-.672-2.437L7.031 18.687c-.281-.687-.89-1.14-1.593-1.14-1.141 0-1.954.844-1.954 1.89 0 .563.313 1.297.547 1.829l4.203 10.422-4.203 10.421c-.234.532-.547 1.25-.547 1.813 0 1.062.813 1.89 1.954 1.906.703 0 1.312-.469 1.593-1.156Z"
                                fill="#8E8E92"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xqwU RdIr">
            <div className="NCgc">
              <div className="UEiU eCEY"></div>
            </div>
          </div>
        </div>
      </form>
      <div className="lvpV">
        <div className="TBUf">
          <button type="button" className="Je3B">
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
                  <clipPath id="__lottie_element_12">
                    <rect width="120" height="120" x="0" y="0"></rect>
                  </clipPath>
                  <clipPath id="__lottie_element_14">
                    <path
                      fill="#ffffff"
                      clipRule="nonzero"
                      d=" M8,-80 C-25.136999130249023,-80 -52,-53.137001037597656 -52,-20 C-52,13.13700008392334 -25.136999130249023,40 8,40 C41.137001037597656,40 68,13.13700008392334 68,-20 C68,-53.137001037597656 41.137001037597656,-80 8,-80"
                      fillOpacity="1"
                    ></path>
                  </clipPath>
                  <clipPath id="__lottie_element_17">
                    <path
                      fill="#ffffff"
                      clipRule="nonzero"
                      d=" M89.99302673339844,-80 C56.85602569580078,-80 29.993024826049805,-53.137001037597656 29.993024826049805,-20 C29.993024826049805,13.13700008392334 56.85602569580078,40 89.99302673339844,40 C123.1300277709961,40 149.99302673339844,13.13700008392334 149.99302673339844,-20 C149.99302673339844,-53.137001037597656 123.1300277709961,-80 89.99302673339844,-80"
                      fillOpacity="1"
                    ></path>
                  </clipPath>
                  <clipPath id="__lottie_element_20">
                    <path
                      fill="#ffffff"
                      clipRule="nonzero"
                      d=" M6,-77 C-27.136999130249023,-77 -54,-50.137001037597656 -54,-17 C-54,16.136999130249023 -27.136999130249023,43 6,43 C39.137001037597656,43 66,16.136999130249023 66,-17 C66,-50.137001037597656 39.137001037597656,-77 6,-77"
                      fillOpacity="1"
                    ></path>
                  </clipPath>
                  <clipPath id="__lottie_element_23">
                    <path
                      fill="#ffffff"
                      clipRule="nonzero"
                      d=" M89.99302673339844,-77 C56.85602569580078,-77 29.993024826049805,-50.137001037597656 29.993024826049805,-17 C29.993024826049805,16.136999130249023 56.85602569580078,43 89.99302673339844,43 C123.1300277709961,43 149.99302673339844,16.136999130249023 149.99302673339844,-17 C149.99302673339844,-50.137001037597656 123.1300277709961,-77 89.99302673339844,-77"
                      fillOpacity="1"
                    ></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_12)">
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
                    clipPath="url(#__lottie_element_23)"
                    style={{ display: "none" }}
                    transform="matrix(0,-1,1,0,77,149.99302673339844)"
                    opacity="0.00007749488063140576"
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
                    clipPath="url(#__lottie_element_20)"
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
                    clipPath="url(#__lottie_element_17)"
                    style={{ display: "none" }}
                    transform="matrix(0,1,-1,0,40,-29.993024826049805)"
                    opacity="0.00007749488063140576"
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
                    clipPath="url(#__lottie_element_14)"
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
      <form className="">
        <div className="unbr e1Tl cdsw">
          <div className="_Nat yhvK">
            <label htmlFor="input" className="dv_2 KU0V">
              <div className="tt_o">
                <div className="spEm">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "32px", height: "32px" }}
                  >
                    <rect width="40" height="40" rx="20" fill="#28C281"></rect>
                    <path
                      d="M20.014 32.05c-.739 0-1.217-.464-1.217-1.243v-1.381c-2.899-.342-4.908-1.832-5.496-3.733a2.194 2.194 0 0 1-.137-.752c0-.86.588-1.435 1.531-1.435.793 0 1.245.465 1.532 1.107.546 1.395 1.832 2.16 3.91 2.16 2.2 0 3.61-.875 3.61-2.502 0-1.38-1.259-2.091-3.35-2.584l-1.86-.437c-3.117-.71-5.181-2.488-5.181-5.072 0-3.09 2.378-4.95 5.44-5.332V9.45c0-.78.48-1.244 1.218-1.244s1.216.465 1.216 1.244v1.395c2.68.328 4.622 1.777 5.223 3.787.069.26.123.506.123.765 0 .793-.601 1.272-1.476 1.272-.793 0-1.217-.383-1.559-1.04-.615-1.435-1.682-2.132-3.514-2.132-2.091 0-3.35.93-3.35 2.393 0 1.257 1.231 2.037 3.05 2.447l1.777.41c3.514.807 5.51 2.516 5.51 5.195 0 3.364-2.68 5.168-5.784 5.51v1.354c0 .779-.478 1.244-1.216 1.244Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
                <span className="TlJ_ r68T">
                  <span>You receive</span>
                </span>
              </div>
            </label>
          </div>
          <div className="CpWq">
            <div className="_m3Z wKgE">
              <div className="JUMA">
                <div
                  style={{
                    maxWidth: "100%",
                    whiteSpace: "nowrap",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      transformOrigin: "left center 0px",
                      flexGrow: "1",
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
                          // onChange={handleChange}
                          value=""
                        />
                        <div className="_R84">0</div>
                      </div>
                      <div className="n7S7">
                        <div className="">
                          <div className="TPHb K3Zv rZy8">
                            USDT
                            <svg
                              width="16"
                              height="64"
                              viewBox="0 0 16 64"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="DJRQ ZWMe"
                            >
                              <path
                                d="m7.031 44.672 4.297-10.547c.344-.828.672-1.656.672-2.438 0-.78-.328-1.625-.672-2.437L7.031 18.687c-.281-.687-.89-1.14-1.593-1.14-1.141 0-1.954.844-1.954 1.89 0 .563.313 1.297.547 1.829l4.203 10.422-4.203 10.421c-.234.532-.547 1.25-.547 1.813 0 1.062.813 1.89 1.954 1.906.703 0 1.312-.469 1.593-1.156Z"
                                fill="#8E8E92"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xqwU RdIr">
            <div className="NCgc">
              <div className="UEiU eCEY"></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
