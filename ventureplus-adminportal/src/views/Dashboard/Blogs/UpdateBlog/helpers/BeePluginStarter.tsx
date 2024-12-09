// import { useEffect, useMemo } from 'react'
// import BeePlugin from '@mailupinc/bee-plugin'
// import { useLocation } from 'react-router-dom'

// const BEEJS_URL = 'https://app-rsrc.getbee.io/plugin/BeePlugin.js'
// const API_AUTH_URL = 'https://auth.getbee.io/apiauth'
// const BEE_PLUGIN_CONTAINER_ID = 'bee-plugin-container'
// const blankTemplate = {
//     content: {
//         sections: [],
//     },
// }

// const specialLinks = [
//     {
//         type: 'unsubscribe',
//         label: 'SpecialLink.Unsubscribe',
//         link: 'http://[unsubscribe]/',
//     },
//     {
//         type: 'subscribe',
//         label: 'SpecialLink.Subscribe',
//         link: 'http://[subscribe]/',
//     },
// ]

// const mergeTags = [
//     {
//         name: 'tag 1',
//         value: '[tag1]',
//     },
//     {
//         name: 'tag 2',
//         value: '[tag2]',
//     },
// ]

// const mergeContents = [
//     {
//         name: 'content 1',
//         value: '[content1]',
//     },
//     {
//         name: 'content 2',
//         value: '[content1]',
//     },
// ]

// const userInput = (message: any, sample: any) =>
//     function handler(resolve: any, reject: any) {
//         const data = prompt(message, JSON.stringify(sample))
//         return data == null || data === '' ? reject() : resolve(JSON.parse(data))
//     }

// const contentDialog = {
//     filePicker: {
//         label: 'Picker',
//         handler: userInput('Enter image path:', {
//             url: 'https://d1oco4z2z1fhwp.cloudfront.net/templates/default/113/rocket-color.png',
//         }),
//     },
// }

// const BeePluginStarter = ({ setHtmlString }: any) => {
//     const location = useLocation()

//     console.log(location?.state?.blog);
//     const beeConfig = useMemo(
//         () => ({
//             uid: 'test1-clientside',
//             container: BEE_PLUGIN_CONTAINER_ID,
//             username: 'Test User',
//             userColor: '#00aba5',
//             commenting: true,
//             userHandle: '2468',
//             autosave: 15,
//             language: 'en-US',
//             specialLinks,
//             mergeTags,
//             mergeContents,
//             contentDialog,
//             setHtmlString: "",
//             onSave: (_: any, htmlFile: string) => {
//                 setHtmlString(htmlFile)
//             },
//             onLoad: () => console.warn('*** [integration] loading a new template...'),
//             onSaveAsTemplate: (json: any) => console.log('newsletter-template.json', json),
//             onAutoSave: (jsonFile: any) => {
//             },
//             onSend: (htmlFile: any) => console.log('onSend', htmlFile),
//             onError: (errorMessage: any) => console.log('onError ', errorMessage),
//             onChange: (msg: any, response: any) =>
//                 console.warn(
//                     '*** [integration] (OnChange) message --> ',
//                     msg,
//                     response
//                 ),
//             onWarning: (e: any) => {
//             },
//             onPreview: () => { },
//             onTogglePreview: () => {
//             },
//             onSessionStarted: (sessionInfo: any) => {
//                 prompt('press ctrl+c to copy the session ID', sessionInfo.sessionId)
//             },
//             onSessionChange: (sessionInfo: any) => {
//             }
//         }),
//         []
//     )

//     useEffect(() => {
//         const beeTest = new BeePlugin()
//         const conf = { authUrl: API_AUTH_URL, beePluginUrl: BEEJS_URL }

//         beeTest
//             .getToken(
//                 '944d4c42-7aca-499e-b035-dc1f0132ae97',
//                 'w2I044wMHI3AjQK82UYGjPLXc4Xvs07JjEYUADIXqUoJcerHSutY',
//                 conf
//             )
//             .then(() => {
//                 beeTest
//                     .start(beeConfig, blankTemplate, '', { shared: false })
//                     .then((instance) =>
//                         console.log('promise resolve return instance', instance)
//                     )
//             })
//             .catch((error) =>
//                 console.error('error during initialization --> ', error)
//             )
//     }, [beeConfig])

//     return <div id={BEE_PLUGIN_CONTAINER_ID} className="w-full h-screen mt-8" />
// }

// export default BeePluginStarter



import { useEffect, useMemo } from 'react'
import BeePlugin from '@mailupinc/bee-plugin'
import { useLocation } from 'react-router-dom'

const BEEJS_URL = 'https://app-rsrc.getbee.io/plugin/BeePlugin.js'
const API_AUTH_URL = 'https://auth.getbee.io/apiauth'
const BEE_PLUGIN_CONTAINER_ID = 'bee-plugin-container'

// Default HTML content to load in the editor
const defaultHtmlContent = `
    <div>
        <h1>Welcome to Our Service</h1>
        <p>This is a default email template with some sample content.</p>
    </div>
`

const specialLinks = [
    {
        type: 'unsubscribe',
        label: 'SpecialLink.Unsubscribe',
        link: 'http://[unsubscribe]/',
    },
    {
        type: 'subscribe',
        label: 'SpecialLink.Subscribe',
        link: 'http://[subscribe]/',
    },
]

const mergeTags = [
    {
        name: 'tag 1',
        value: '[tag1]',
    },
    {
        name: 'tag 2',
        value: '[tag2]',
    },
]

const BeePluginStarter = ({ setHtmlString }: any) => {
    const location = useLocation()

    const beeConfig = useMemo(
        () => ({
            uid: 'test1-clientside',
            container: BEE_PLUGIN_CONTAINER_ID,
            username: 'Test User',
            userColor: '#00aba5',
            commenting: true,
            userHandle: '2468',
            autosave: 15,
            language: 'en-US',
            specialLinks,
            mergeTags,
            onSave: (_: any, htmlFile: string) => {
                setHtmlString(htmlFile)
            },
            onLoad: () => console.warn('*** [integration] loading a new template...'),
            onSaveAsTemplate: (json: any) => console.log('newsletter-template.json', json),
            onAutoSave: (jsonFile: any) => { },
            onSend: (htmlFile: any) => console.log('onSend', htmlFile),
            onError: (errorMessage: any) => console.log('onError ', errorMessage),
        }),
        [setHtmlString]
    )

    useEffect(() => {
        const beeTest = new BeePlugin()
        const conf = { authUrl: API_AUTH_URL, beePluginUrl: BEEJS_URL }

        beeTest
            .getToken(
                '944d4c42-7aca-499e-b035-dc1f0132ae97',
                'w2I044wMHI3AjQK82UYGjPLXc4Xvs07JjEYUADIXqUoJcerHSutY',
                conf
            )
            .then(() => {
                beeTest
                    .start(beeConfig, {
                        type: 'html',
                        value: defaultHtmlContent, // Set the default HTML content here
                    })
                    .then((instance) =>
                        console.log('Bee Plugin instance started', instance)
                    )
            })
            .catch((error) =>
                console.error('error during initialization --> ', error)
            )
    }, [beeConfig])

    return <div id={BEE_PLUGIN_CONTAINER_ID} className="w-full h-screen mt-8" />
}

export default BeePluginStarter