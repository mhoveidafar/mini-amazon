import React, { useState } from 'react';
import { Button, Modal, Paper } from '@material-ui/core';
import "./TimeoutHandler.scss";
import ReactCountDownClock from "react-countdown-clock";
import IdleTimer from "react-idle-timer";

// should run these two:
// npm install react-idle-timer
// npm install react-countdown-clock 

const { REACT_APP_TIMEOUT_DURATION, REACT_APP_COUNTDOWN_DURATION } = process.env;
const modalPopupTime = (60 * 1000 * REACT_APP_TIMEOUT_DURATION) - (REACT_APP_COUNTDOWN_DURATION * 1000);

const TimeoutHandler = ({ children }) => {
    const [open, setOpen] = useState(false);

    const handleIdle = () => {
        setOpen(true);
    }

    const handleContinueClick = () => {
        setOpen(false);
    }

    const handleEndClick = () => {
        window.location.assign("/eServices2/quickpay/anon-login")
    }

    return (
        <div>
            <IdleTimer
                timeout={modalPopupTime}
                onIdle={handleIdle}
            />
            <Modal open={open}>
                <Paper className="TimeoutModal">
                    <p >
                        Your session is about to expire. You will be automatically signed out in
                    </p>

                    <ReactCountDownClock seconds={REACT_APP_COUNTDOWN_DURATION}
                        color="#333333"
                        alpha={0.9}
                        size={50}
                        onComplete={handleEndClick} />

                    <p >
                        To continue your session, select <strong>CONTINUE SESSION</strong>.
                    </p>

                    <div className="btnGroup">
                        <Button className="button" onClick={handleContinueClick} >
                            Continue Session
                        </Button>
                        <Button className="button" onClick={handleEndClick} >
                            End Session
                        </Button>
                    </div>
                </Paper>
            </Modal>
            {children}
        </div>
    )
}

export default TimeoutHandler;