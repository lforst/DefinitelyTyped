import * as React from "react";
import { render } from "react-dom";
import Clipboard from "simple-react-clipboard";

const text = "Hello World";
const children: (arg0: { copy: () => void }) => React.ReactNode = ({ copy }) => <button onClick={copy}>Copy</button>;
const props = {};
const onSuccess = () => {};
const onError = () => {};

render(
    <Clipboard
        render={children}
        text={text}
        props={props}
        onSuccess={onSuccess}
        onError={onError}
    />,
    document.getElementById("root"),
);
