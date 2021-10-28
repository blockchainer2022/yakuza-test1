import { CircularProgress } from "@material-ui/core";
import React from "react";
import "./selectWalletPopup.css";

const ConfirmationLoadingPopup = ({ open, title, message }) => {
  return (
    <>
      <aside
        className="bn-onboard-custom bn-onboard-modal svelte-rntogh"
        style={open ? { zIndex: "100" } : { display: "none" }}
      >
        <section
          className="bn-onboard-custom bn-onboard-modal-content svelte-rntogh bn-onboard-dark-mode"
          style={{ width: "60vw" }}
        >
          <header className="bn-onboard-custom bn-onboard-modal-content-header svelte-8i8o6j">
            <div className="bn-onboard-custom bn-onboard-modal-content-header-icon svelte-8i8o6j bn-onboard-dark-mode-background"></div>{" "}
            <h3
              className="bn-onboard-custom bn-onboard-modal-content-header-heading svelte-8i8o6j"
              style={{ color: "#fff" }}
            >
              {title}
            </h3>
          </header>{" "}
          <section className="bn-onboard-custom bn-onboard-modal-selected-wallet svelte-mi6ahc">
            <p
              style={{
                fontSize: "0.889rem",
                fontFamily: "inherit",
                margin: "0.889rem 0",
                textAlign: "center",
              }}
            >
              {message}
            </p>
            <div style={{ textAlign: "center" }}>
              <CircularProgress color="secondary" />
            </div>
            <footer
              className="bn-onboard-custom bn-onboard-modal-selected-wallet-footer svelte-mi6ahc"
              style={{ justifyContent: "center", marginTop: "30px" }}
            >
              {/* <button
                className="bn-onboard-custom bn-onboard-prepare-button svelte-fnc3e1 bn-onboard-prepare-button-center bn-onboard-dark-mode-link bn-onboard-dark-mode-background-hover"
                onClick={() => onClose(false)}
              >
                Back
              </button>{" "} */}
            </footer>
          </section>
        </section>
      </aside>
    </>
  );
};

export default ConfirmationLoadingPopup;
