import React from 'react';
import {Control} from "../Control/Control";
import DisplayWithSettings from "../../DisplayWithSettings/DisplayWithSettings";

const SettingPanel = () => {
    return <div className={s.counter}>
        <DisplayWithSettings/>
        <div className={s.controls}>
            <Control title="set" count={count} action={} setDisabled={}/>
        </div>
    </div>
}

export default SettingPanel;