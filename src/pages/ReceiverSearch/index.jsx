import React, { useRef, useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export default function ReceiverSearch() {
  const location = useLocation();
  const textAreaRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const pathElements = location.pathname.split('/');
  const element = pathElements[2]; // получаем 'TON'

  // Получаем значение адреса из URL при загрузке компонента
  useEffect(() => {
    const address = searchParams.get("address");
    const textArea = textAreaRef.current;
    textArea.focus();
    textArea.setSelectionRange(textArea.value.length, textArea.value.length);
    if (address !== null) {
      setInputValue(address);
    }
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  // Очищаем поле ввода и URL
  const handleClear = () => {
    setInputValue('');
    setSearchParams({ address: '' }, 'replace');
    textAreaRef.current.focus();
  };

  // Обновляем URL и состояние ввода при изменении пользователем
  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputValue(value);
    setSearchParams({ address: value }, 'replace');
  };

  // const handlePaste = async () => {
  //   try {
  //     const text = await navigator.clipboard.readText();
  //     setSearchParams({ address: text }, 'replace');
  //   } catch (err) {
  //     console.error('Failed to read clipboard contents in your browser: ', err);
  //   }
  // };

  return (
    <div style={{ height: "initial", overflowY: "auto" }}>
      <div className="FiJh">
        <form className="xWNt jVEM">
          <div className="KAwR">
            <textarea
              className="VmE2 eG0c xSKl"
              placeholder={element === 'TON' && ('Enter TON address or domain') || element === 'USDT' && ('Enter USDT TRC20 address') || element === 'BTC' && ('Enter BTC address')}
              autoComplete="off"
              onKeyDown={handleKeyDown}
              value={searchParams.get("address")}
              onChange={handleInputChange}
              ref={textAreaRef}
              autoFocus
            ></textarea>
            {searchParams.get("address") && (<div className="pp0Q zU7T">{searchParams.get("address")}</div>) || element === 'TON' && (<div className="pp0Q zU7T">Enter TON address or domain</div>) || element === 'USDT' && (<div className="pp0Q zU7T">Enter USDT TRC20 address</div>) || element === 'BTC' && (<div className="pp0Q zU7T">Enter BTC address</div>)}
          </div>
          <div className="_inR">
            {searchParams.get("address") && (
              <button onClick={handleClear} type="button" className="p_kJ uAyC">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m6 6 16 16M6 22 22 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </button>
            )
            // || (<button onClick={handlePaste} className="bBuk bv0r" type="button">paste</button>)
            }
          </div>
        </form>
      </div>
      <section className="E3zb">
        {searchParams.get("address") && (
          <div className="Yx5s">
            <div className="XAp3 nEhw">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "var(--tg-theme-subtitle-text-color)" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.78 3.26c-.89.396-1.572 1.577-2.937 3.94L3.435 18.3c-1.364 2.363-2.046 3.544-1.945 4.514a3 3 0 0 0 1.22 2.113c.79.573 2.153.573 4.882.573h12.817c2.728 0 4.092 0 4.88-.573a3 3 0 0 0 1.221-2.113c.102-.97-.58-2.151-1.944-4.514L18.157 7.2c-1.364-2.363-2.046-3.544-2.937-3.94a3 3 0 0 0-2.44 0Zm2.301 7.34-.114 6.45a.967.967 0 0 1-1.933 0l-.114-6.45a1.08 1.08 0 1 1 2.161 0Zm.17 9.9a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div className="Nzze w4i3">
              <div className="d253">Invalid Address</div>
              <div className="Q8s3 H1dE">{element === 'TON' && ('Enter address belonging to TON ') || element === 'USDT' && ('Enter address belonging to USDT TRC20 ') || element === 'BTC' && ('Enter address belonging to BTC ')}</div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}