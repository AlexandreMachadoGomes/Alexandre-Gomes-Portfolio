import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
    const { unityProvider } = useUnityContext({
        loaderUrl: process.env.PUBLIC_URL + "/Build/Envrion.loader.js",
        dataUrl: process.env.PUBLIC_URL +"/Build/Envrion.data",
        frameworkUrl: process.env.PUBLIC_URL +"/Build/Envrion.framework.js",
        codeUrl: process.env.PUBLIC_URL +"/Build/Envrion.wasm",
    });

    return (
        <div>
            <h2>Envrion</h2>
            <Unity className="game" unityProvider={unityProvider} />
            <div className="game-description">
                
                <p>** placeholder description **</p>
                {/* Add more details about controls and game info here */}
            </div>
        </div>
    );

};

export default Game;