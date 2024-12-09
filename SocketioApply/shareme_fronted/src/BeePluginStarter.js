import { useEffect, useMemo } from "react";
import BeePlugin from "@mailupinc/bee-plugin";
import {
  IBeeConfig,
  IMergeContent,
  IMergeTag,
  ISpecialLink,
} from "@mailupinc/bee-plugin/dist/types/bee";
import "./App.css";

const BEE_TEMPLATE_URL = "https://rsrc.getbee.io/api/templates/m-bee";
const BEEJS_URL = "https://app-rsrc.getbee.io/plugin/BeePlugin.js";
const API_AUTH_URL = "https://auth.getbee.io/apiauth";

const BEE_PLUGIN_CONTAINER_ID = "bee-plugin-container";

const specialLinks = [
  {
    type: "unsubscribe",
    label: "SpecialLink.Unsubscribe",
    link: "http://[unsubscribe]/",
  },
  {
    type: "subscribe",
    label: "SpecialLink.Subscribe",
    link: "http://[subscribe]/",
  },
];
const mergeTags = [
  {
    name: "tag 1",
    value: "[tag1]",
  },
  {
    name: "tag 2",
    value: "[tag2]",
  },
];
const mergeContents = [
  {
    name: "content 1",
    value: "[content1]",
  },
  {
    name: "content 2",
    value: "[content1]",
  },
];

const userInput = (message, sample) =>
  function handler(resolve, reject) {
    const data = prompt(message, JSON.stringify(sample));
    return data == null || data === "" ? reject() : resolve(JSON.parse(data));
  };

const contentDialog = {
  filePicker: {
    label: "Picker",
    handler: userInput("Enter image path:", {
      url: "https://d1oco4z2z1fhwp.cloudfront.net/templates/default/113/rocket-color.png",
    }),
  },
};

const BeePluginStarter = () => {
  const beeConfig = useMemo(
    () => ({
      uid: "test1-clientside",
      container: BEE_PLUGIN_CONTAINER_ID,
      username: "Test User",
      userColor: "#00aba5",
      commenting: true,
      userHandle: "2468",
      autosave: 15,
      language: "en-US",
      specialLinks,
      mergeTags,
      mergeContents,
      contentDialog,
      onSave: (_, htmlFile) =>
        console.log("newsletter-template.html", htmlFile),
      onLoad: () => console.warn("*** [integration] loading a new template..."),
      onSaveAsTemplate: (json) => console.log("newsletter-template.json", json),
      onAutoSave: (jsonFile) => {
        console.log(`${new Date().toISOString()} autosaving...,`, jsonFile);
      },
      onSend: (htmlFile) => console.log("onSend", htmlFile),
      onError: (errorMessage) => console.log("onError ", errorMessage),
      onChange: (msg, response) =>
        console.warn(
          "*** [integration] (OnChange) message --> ",
          msg,
          response
        ),
      onWarning: (e) =>
        console.warn("*** [integration] (OnWarning) message --> ", e.message),
      onPreview: () => console.warn("*** [integration] --> (onPreview) "),
      onTogglePreview: () =>
        console.warn("*** [integration] --> (onTogglePreview) "),
      onSessionStarted: (sessionInfo) => {
        console.warn("*** [integration] --> (onSessionStarted) ", sessionInfo);
        prompt("press ctrl+c to copy the session ID", sessionInfo.sessionId);
      },
      onSessionChange: (sessionInfo) =>
        console.warn("*** [integration] --> (onSessionChange) ", sessionInfo),
    }),
    []
  );

  useEffect(() => {
    const beeTest = new BeePlugin();
    const conf = { authUrl: API_AUTH_URL, beePluginUrl: BEEJS_URL };
    beeTest
      .getToken(
        "944d4c42-7aca-499e-b035-dc1f0132ae97",
        "w2I044wMHI3AjQK82UYGjPLXc4Xvs07JjEYUADIXqUoJcerHSutY",
        conf
      )
      .then(() => fetch(new Request(BEE_TEMPLATE_URL, { method: "GET" })))
      .then((res) => res.json())
      .then((template) => {
        beeTest
          .start(beeConfig, template, "", { shared: false })
          .then((instance) =>
            console.log("promise resolve return instance", instance)
          );
      })
      .catch((error) =>
        console.error("error during iniziatialization --> ", error)
      );
  }, [beeConfig]);

  return <div id={BEE_PLUGIN_CONTAINER_ID} className="BeePluginContainer" />;
};

export default BeePluginStarter;
