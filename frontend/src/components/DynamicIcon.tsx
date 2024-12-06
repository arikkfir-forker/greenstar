import {Suspense} from "react";
import {SvgIcon, useTheme} from "@mui/material";

// @ts-ignore
// noinspection ES6UnusedImports
import * as Icons from "@mui/icons-material";
import {Error as ErrorIcon} from "@mui/icons-material";

export function DynamicIcon({icon}: { icon: string }) {
    const theme = useTheme()
    const isDarkMode = theme.palette.mode === 'dark';

    switch (icon) {
        case "Adidas":
            if (isDarkMode) {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adidas</title>
                            <path
                                d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z"
                                fill="white"/>
                        </svg>
                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Adidas</title>
                            <path
                                d="m24 19.535-8.697-15.07-4.659 2.687 7.145 12.383Zm-8.287 0L9.969 9.59 5.31 12.277l4.192 7.258ZM4.658 14.723l2.776 4.812H1.223L0 17.41Z"
                                fill="black"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "Amazon":
            if (isDarkMode) {
                return (
                    <SvgIcon>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M40.8 35.0697C40.8 36.3236 40.1195 38.7385 38.5905 40.0649C38.2847 40.3064 37.9789 40.1701 38.1133 39.8182C38.5586 38.7005 39.5768 36.1149 39.0996 35.5199C38.7619 35.0679 37.3673 35.1024 36.1777 35.2059C35.635 35.2767 35.1578 35.3094 34.7882 35.387C34.4454 35.4146 34.3765 35.1059 34.7193 34.8644C35.1657 34.5409 35.659 34.2917 36.1811 34.1262C38.1133 33.5328 40.3463 33.8899 40.6673 34.2693C40.7278 34.3418 40.8 34.547 40.8 35.0697ZM37.5706 37.2999C37.1275 37.6478 36.6621 37.9647 36.1777 38.2486C32.6123 40.4478 27.9933 41.6 23.9826 41.6C17.5255 41.6 11.7506 39.1559 7.36855 35.0662C6.99218 34.7523 7.30303 34.2969 7.74324 34.5436C12.4647 37.3724 18.3085 39.0834 24.3573 39.0834C28.1647 39.0834 32.2678 38.3521 36.1777 36.779C36.4516 36.6738 36.7574 36.5306 37.0245 36.4306C37.6412 36.146 38.1839 36.848 37.5706 37.2999ZM27.2036 18.2747C27.2036 16.4791 27.2742 15.4218 26.6945 14.5145C26.1804 13.7676 25.2949 13.3191 24.0582 13.3899C22.7174 13.4658 21.2775 14.3679 20.9112 16.022C20.8389 16.4015 20.6239 16.774 20.1769 16.8551L16.0856 16.3204C15.7932 16.2514 15.3479 16.022 15.4941 15.4218C16.3729 10.6767 20.3231 9.02251 24.0599 8.8H24.937C26.9869 8.8 29.6215 9.40198 31.3067 10.9802C33.3516 12.9397 33.1331 15.5718 33.1331 18.4316V25.2052C33.1331 27.2371 33.9363 28.1374 34.7428 29.1965C34.9612 29.5743 35.0368 30.0193 34.6689 30.3263C33.6103 31.2951 32.5365 32.2462 31.4479 33.1792C31.1538 33.4086 30.6262 33.4328 30.4229 33.2568C29.1292 32.1443 28.8133 31.5268 28.0118 30.397C26.6172 31.8994 25.4461 32.729 24.0532 33.1792C23.0736 33.4344 22.0663 33.5596 21.0557 33.5518C17.544 33.5518 14.7632 31.3043 14.7632 26.8593C14.7632 23.3251 16.5947 20.9223 19.2998 19.7857C22.005 18.6472 25.9367 18.285 27.2036 18.2781M26.4022 27.2336C27.2759 25.7295 27.2036 24.498 27.2036 21.7399C26.1081 21.7399 25.0092 21.8175 24.0599 22.047C22.3041 22.5696 20.9095 23.7028 20.9095 26.109C20.9095 27.9891 21.8639 29.269 23.4735 29.269C23.6953 29.269 23.8902 29.2414 24.0582 29.1913C25.184 28.8705 25.8863 28.291 26.4022 27.2336Z"
                                fill="white"/>
                        </svg>

                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M40.8 35.0697C40.8 36.3236 40.1195 38.7385 38.5905 40.0649C38.2847 40.3064 37.9789 40.1701 38.1133 39.8182C38.5586 38.7005 39.5768 36.1149 39.0996 35.5199C38.7619 35.0679 37.3673 35.1024 36.1777 35.2059C35.635 35.2767 35.1578 35.3094 34.7882 35.387C34.4454 35.4146 34.3765 35.1059 34.7193 34.8644C35.1657 34.5409 35.659 34.2917 36.1811 34.1262C38.1133 33.5328 40.3463 33.8899 40.6673 34.2693C40.7278 34.3418 40.8 34.547 40.8 35.0697ZM37.5706 37.2999C37.1275 37.6478 36.6621 37.9647 36.1777 38.2486C32.6123 40.4478 27.9933 41.6 23.9826 41.6C17.5255 41.6 11.7506 39.1559 7.36855 35.0662C6.99218 34.7523 7.30303 34.2969 7.74324 34.5436C12.4647 37.3724 18.3085 39.0834 24.3573 39.0834C28.1647 39.0834 32.2678 38.3521 36.1777 36.779C36.4516 36.6738 36.7574 36.5306 37.0245 36.4306C37.6412 36.146 38.1839 36.848 37.5706 37.2999ZM27.2036 18.2747C27.2036 16.4791 27.2742 15.4218 26.6945 14.5145C26.1804 13.7676 25.2949 13.3191 24.0582 13.3899C22.7174 13.4658 21.2775 14.3679 20.9112 16.022C20.8389 16.4015 20.6239 16.774 20.1769 16.8551L16.0856 16.3204C15.7932 16.2514 15.3479 16.022 15.4941 15.4218C16.3729 10.6767 20.3231 9.02251 24.0599 8.8H24.937C26.9869 8.8 29.6215 9.40198 31.3067 10.9802C33.3516 12.9397 33.1331 15.5718 33.1331 18.4316V25.2052C33.1331 27.2371 33.9363 28.1374 34.7428 29.1965C34.9612 29.5743 35.0368 30.0193 34.6689 30.3263C33.6103 31.2951 32.5365 32.2462 31.4479 33.1792C31.1538 33.4086 30.6262 33.4328 30.4229 33.2568C29.1292 32.1443 28.8133 31.5268 28.0118 30.397C26.6172 31.8994 25.4461 32.729 24.0532 33.1792C23.0736 33.4344 22.0663 33.5596 21.0557 33.5518C17.544 33.5518 14.7632 31.3043 14.7632 26.8593C14.7632 23.3251 16.5947 20.9223 19.2998 19.7857C22.005 18.6472 25.9367 18.285 27.2036 18.2781M26.4022 27.2336C27.2759 25.7295 27.2036 24.498 27.2036 21.7399C26.1081 21.7399 25.0092 21.8175 24.0599 22.047C22.3041 22.5696 20.9095 23.7028 20.9095 26.109C20.9095 27.9891 21.8639 29.269 23.4735 29.269C23.6953 29.269 23.8902 29.2414 24.0582 29.1913C25.184 28.8705 25.8863 28.291 26.4022 27.2336Z"
                                fill="black"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "PrimeVideo":
            if(isDarkMode) {
                return (
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M22.787 15.292c-.336-.43-2.222-.204-3.069-.103-.257.031-.296-.193-.065-.356 1.504-1.056 3.968-.75 4.255-.397.288.357-.076 2.827-1.485 4.007-.217.18-.423.084-.327-.155.317-.792 1.027-2.566.69-2.996m-1.093 1.248c-2.627 1.94-6.437 2.97-9.717 2.97-4.597 0-8.737-1.7-11.87-4.528-.246-.222-.026-.525.27-.353 3.38 1.967 7.559 3.151 11.876 3.151a23.63 23.63 0 0 0 9.06-1.854c.444-.188.816.293.381.614m.482-5.038c-.761 0-1.346-.209-1.755-.626-.409-.418-.613-1.017-.613-1.797 0-.799.209-1.425.627-1.88.418-.454.998-.682 1.741-.682.572 0 1.019.138 1.341.415.323.276.484.645.484 1.105 0 .461-.174.81-.52 1.046-.348.237-.86.355-1.535.355-.35 0-.654-.034-.912-.101.037.411.161.706.373.884.212.178.533.268.963.268.172 0 .34-.011.502-.033a6.208 6.208 0 0 0 .733-.157.304.304 0 0 1 .046-.004c.104 0 .156.07.156.212v.424c0 .098-.013.167-.04.207a.341.341 0 0 1-.162.106 3.954 3.954 0 0 1-1.429.258m-.304-2.893c.314 0 .541-.048.682-.143.142-.095.212-.241.212-.438 0-.387-.23-.58-.69-.58-.59 0-.931.362-1.024 1.087.246.05.52.074.82.074m-9.84 2.755c-.08 0-.139-.018-.176-.055-.036-.037-.055-.096-.055-.175V6.886c0-.086.019-.146.055-.18.037-.034.096-.05.176-.05h.663c.141 0 .227.067.258.202l.074.249c.325-.215.619-.367.88-.456.26-.09.53-.134.806-.134.553 0 .943.197 1.17.59a3.77 3.77 0 0 1 .885-.452c.276-.092.562-.138.857-.138.43 0 .763.12 1 .36.236.239.354.574.354 1.004v3.253c0 .08-.017.138-.05.175-.034.037-.094.055-.18.055h-.885c-.08 0-.138-.018-.175-.055-.037-.037-.055-.096-.055-.175V8.176c0-.418-.188-.627-.562-.627-.332 0-.667.08-1.005.24v3.345c0 .08-.017.138-.05.175-.034.037-.094.055-.18.055h-.884c-.08 0-.139-.018-.176-.055-.036-.037-.055-.096-.055-.175V8.176c0-.418-.187-.627-.562-.627-.344 0-.682.083-1.013.249v3.336c0 .08-.017.138-.051.175-.034.037-.094.055-.18.055zM9.987 5.927c-.234 0-.42-.064-.562-.193-.142-.129-.212-.304-.212-.525 0-.221.07-.397.212-.526.141-.129.328-.193.562-.193.233 0 .42.064.562.193a.676.676 0 0 1 .212.526c0 .22-.07.396-.212.525-.141.129-.329.193-.562.193m-.443 5.437c-.08 0-.138-.019-.175-.055-.037-.037-.055-.096-.055-.176V6.886c0-.086.018-.146.055-.18.037-.034.096-.05.175-.05h.885c.086 0 .146.016.18.05s.05.094.05.18v4.247c0 .08-.017.139-.05.176-.034.036-.094.055-.18.055zm-3.681 0c-.08 0-.139-.018-.176-.055-.036-.037-.055-.096-.055-.175V6.886c0-.086.019-.146.055-.18.037-.034.096-.05.176-.05h.663c.141 0 .227.067.258.202l.12.497c.245-.27.477-.462.695-.575.219-.114.45-.17.696-.17h.13c.085 0 .147.016.183.05.037.034.056.094.056.18v.773c0 .08-.017.139-.051.176-.034.036-.094.055-.18.055a1.93 1.93 0 0 1-.166-.01 2.968 2.968 0 0 0-.258-.009c-.14 0-.313.02-.516.06-.202.04-.374.091-.515.152v3.097c0 .08-.018.138-.051.175-.034.037-.094.055-.18.055zM.344 13.262c-.08 0-.138-.017-.175-.05-.037-.034-.055-.095-.055-.18V6.886c0-.086.018-.146.055-.18.037-.034.095-.05.175-.05h.664c.14 0 .227.067.258.202l.064.24a2.03 2.03 0 0 1 .668-.424 2.13 2.13 0 0 1 .797-.157c.596 0 1.067.218 1.414.654.348.437.521 1.026.521 1.77 0 .51-.086.955-.258 1.336-.172.38-.405.674-.7.88a1.727 1.727 0 0 1-1.014.308c-.252 0-.491-.04-.719-.12a1.74 1.74 0 0 1-.58-.331v2.018c0 .085-.017.146-.05.18-.034.033-.095.05-.18.05zm2.018-2.81c.344 0 .597-.117.76-.35.163-.234.245-.603.245-1.106 0-.51-.08-.882-.24-1.115-.16-.234-.415-.35-.765-.35-.32 0-.62.083-.903.248v2.424c.27.166.571.249.903.249Z"
                                fill="white"/>
                        </svg>
                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M22.787 15.292c-.336-.43-2.222-.204-3.069-.103-.257.031-.296-.193-.065-.356 1.504-1.056 3.968-.75 4.255-.397.288.357-.076 2.827-1.485 4.007-.217.18-.423.084-.327-.155.317-.792 1.027-2.566.69-2.996m-1.093 1.248c-2.627 1.94-6.437 2.97-9.717 2.97-4.597 0-8.737-1.7-11.87-4.528-.246-.222-.026-.525.27-.353 3.38 1.967 7.559 3.151 11.876 3.151a23.63 23.63 0 0 0 9.06-1.854c.444-.188.816.293.381.614m.482-5.038c-.761 0-1.346-.209-1.755-.626-.409-.418-.613-1.017-.613-1.797 0-.799.209-1.425.627-1.88.418-.454.998-.682 1.741-.682.572 0 1.019.138 1.341.415.323.276.484.645.484 1.105 0 .461-.174.81-.52 1.046-.348.237-.86.355-1.535.355-.35 0-.654-.034-.912-.101.037.411.161.706.373.884.212.178.533.268.963.268.172 0 .34-.011.502-.033a6.208 6.208 0 0 0 .733-.157.304.304 0 0 1 .046-.004c.104 0 .156.07.156.212v.424c0 .098-.013.167-.04.207a.341.341 0 0 1-.162.106 3.954 3.954 0 0 1-1.429.258m-.304-2.893c.314 0 .541-.048.682-.143.142-.095.212-.241.212-.438 0-.387-.23-.58-.69-.58-.59 0-.931.362-1.024 1.087.246.05.52.074.82.074m-9.84 2.755c-.08 0-.139-.018-.176-.055-.036-.037-.055-.096-.055-.175V6.886c0-.086.019-.146.055-.18.037-.034.096-.05.176-.05h.663c.141 0 .227.067.258.202l.074.249c.325-.215.619-.367.88-.456.26-.09.53-.134.806-.134.553 0 .943.197 1.17.59a3.77 3.77 0 0 1 .885-.452c.276-.092.562-.138.857-.138.43 0 .763.12 1 .36.236.239.354.574.354 1.004v3.253c0 .08-.017.138-.05.175-.034.037-.094.055-.18.055h-.885c-.08 0-.138-.018-.175-.055-.037-.037-.055-.096-.055-.175V8.176c0-.418-.188-.627-.562-.627-.332 0-.667.08-1.005.24v3.345c0 .08-.017.138-.05.175-.034.037-.094.055-.18.055h-.884c-.08 0-.139-.018-.176-.055-.036-.037-.055-.096-.055-.175V8.176c0-.418-.187-.627-.562-.627-.344 0-.682.083-1.013.249v3.336c0 .08-.017.138-.051.175-.034.037-.094.055-.18.055zM9.987 5.927c-.234 0-.42-.064-.562-.193-.142-.129-.212-.304-.212-.525 0-.221.07-.397.212-.526.141-.129.328-.193.562-.193.233 0 .42.064.562.193a.676.676 0 0 1 .212.526c0 .22-.07.396-.212.525-.141.129-.329.193-.562.193m-.443 5.437c-.08 0-.138-.019-.175-.055-.037-.037-.055-.096-.055-.176V6.886c0-.086.018-.146.055-.18.037-.034.096-.05.175-.05h.885c.086 0 .146.016.18.05s.05.094.05.18v4.247c0 .08-.017.139-.05.176-.034.036-.094.055-.18.055zm-3.681 0c-.08 0-.139-.018-.176-.055-.036-.037-.055-.096-.055-.175V6.886c0-.086.019-.146.055-.18.037-.034.096-.05.176-.05h.663c.141 0 .227.067.258.202l.12.497c.245-.27.477-.462.695-.575.219-.114.45-.17.696-.17h.13c.085 0 .147.016.183.05.037.034.056.094.056.18v.773c0 .08-.017.139-.051.176-.034.036-.094.055-.18.055a1.93 1.93 0 0 1-.166-.01 2.968 2.968 0 0 0-.258-.009c-.14 0-.313.02-.516.06-.202.04-.374.091-.515.152v3.097c0 .08-.018.138-.051.175-.034.037-.094.055-.18.055zM.344 13.262c-.08 0-.138-.017-.175-.05-.037-.034-.055-.095-.055-.18V6.886c0-.086.018-.146.055-.18.037-.034.095-.05.175-.05h.664c.14 0 .227.067.258.202l.064.24a2.03 2.03 0 0 1 .668-.424 2.13 2.13 0 0 1 .797-.157c.596 0 1.067.218 1.414.654.348.437.521 1.026.521 1.77 0 .51-.086.955-.258 1.336-.172.38-.405.674-.7.88a1.727 1.727 0 0 1-1.014.308c-.252 0-.491-.04-.719-.12a1.74 1.74 0 0 1-.58-.331v2.018c0 .085-.017.146-.05.18-.034.033-.095.05-.18.05zm2.018-2.81c.344 0 .597-.117.76-.35.163-.234.245-.603.245-1.106 0-.51-.08-.882-.24-1.115-.16-.234-.415-.35-.765-.35-.32 0-.62.083-.903.248v2.424c.27.166.571.249.903.249Z"
                                fill="black"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "BankOfAmerica":
            if (isDarkMode) {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bank of
                            America</title>
                            <path
                                d="M15.194 7.57c.487-.163 1.047-.307 1.534-.451-1.408-.596-3.176-1.227-4.764-1.625-.253.073-1.01.271-1.534.434.541.162 2.328.577 4.764 1.642zm-8.896 6.785c.577.343 1.19.812 1.786 1.209 3.952-3.068 7.85-5.432 12.127-6.767-.596-.307-1.119-.578-1.787-.902-2.562.65-6.947 2.4-12.126 6.46zm-.758-6.46c-2.112.974-4.331 2.31-5.54 3.085.433.199.866.361 1.461.65 2.671-1.805 4.764-2.905 5.594-3.266-.595-.217-1.154-.361-1.515-.47zm8.066.234c-.686-.379-3.068-1.263-4.71-1.642-.487.18-1.173.451-1.642.65.595.162 2.815.758 4.71 1.714.487-.235 1.173-.523 1.642-.722zm-3.374 1.552c-.56-.27-1.173-.523-1.643-.74-1.425.704-3.284 1.769-5.63 3.447.505.27 1.047.595 1.624.92 1.805-1.335 3.627-2.598 5.649-3.627zm1.732 8.825c3.79-3.249 9.113-6.407 12.036-7.544a48.018 48.018 0 00-1.949-1.155c-3.771 1.246-8.174 4.007-12.108 7.129.667.505 1.371 1.028 2.02 1.57zm2.851-.235h-.108l-.18-.27h-.109v.27h-.072v-.596h.27c.055 0 .109 0 .145.036.054.019.072.073.072.127 0 .108-.09.162-.198.162zm-.289-.343c.09 0 .199.018.199-.09 0-.072-.072-.09-.144-.09h-.163v.18zm-.523.036c0-.289.235-.523.541-.523.307 0 .542.234.542.523a.543.543 0 01-.542.542.532.532 0 01-.54-.542m.107 0c0 .235.199.433.451.433a.424.424 0 100-.848c-.27 0-.45.199-.45.415"
                                fill="white"/>
                        </svg>
                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bank of
                            America</title>
                            <path
                                d="M15.194 7.57c.487-.163 1.047-.307 1.534-.451-1.408-.596-3.176-1.227-4.764-1.625-.253.073-1.01.271-1.534.434.541.162 2.328.577 4.764 1.642zm-8.896 6.785c.577.343 1.19.812 1.786 1.209 3.952-3.068 7.85-5.432 12.127-6.767-.596-.307-1.119-.578-1.787-.902-2.562.65-6.947 2.4-12.126 6.46zm-.758-6.46c-2.112.974-4.331 2.31-5.54 3.085.433.199.866.361 1.461.65 2.671-1.805 4.764-2.905 5.594-3.266-.595-.217-1.154-.361-1.515-.47zm8.066.234c-.686-.379-3.068-1.263-4.71-1.642-.487.18-1.173.451-1.642.65.595.162 2.815.758 4.71 1.714.487-.235 1.173-.523 1.642-.722zm-3.374 1.552c-.56-.27-1.173-.523-1.643-.74-1.425.704-3.284 1.769-5.63 3.447.505.27 1.047.595 1.624.92 1.805-1.335 3.627-2.598 5.649-3.627zm1.732 8.825c3.79-3.249 9.113-6.407 12.036-7.544a48.018 48.018 0 00-1.949-1.155c-3.771 1.246-8.174 4.007-12.108 7.129.667.505 1.371 1.028 2.02 1.57zm2.851-.235h-.108l-.18-.27h-.109v.27h-.072v-.596h.27c.055 0 .109 0 .145.036.054.019.072.073.072.127 0 .108-.09.162-.198.162zm-.289-.343c.09 0 .199.018.199-.09 0-.072-.072-.09-.144-.09h-.163v.18zm-.523.036c0-.289.235-.523.541-.523.307 0 .542.234.542.523a.543.543 0 01-.542.542.532.532 0 01-.54-.542m.107 0c0 .235.199.433.451.433a.424.424 0 100-.848c-.27 0-.45.199-.45.415"
                                fill="black"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "BankTransfer":
            if(isDarkMode) {
                return (
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="white"
                                  d="M15 14v-3h3V9l4 3.5l-4 3.5v-2zm-1-6.3V9H2V7.7L8 4zM7 10h2v5H7zm-4 0h2v5H3zm10 0v2.5l-2 1.8V10zm-3.9 6l-.6.5l1.7 1.5H2v-2zm7.9-1v3h-3v2l-4-3.5l4-3.5v2z"/>
                        </svg>
                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="black"
                                  d="M15 14v-3h3V9l4 3.5l-4 3.5v-2zm-1-6.3V9H2V7.7L8 4zM7 10h2v5H7zm-4 0h2v5H3zm10 0v2.5l-2 1.8V10zm-3.9 6l-.6.5l1.7 1.5H2v-2zm7.9-1v3h-3v2l-4-3.5l4-3.5v2z"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "DeutscheBank":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M3.375 3.375v17.25h17.25V3.375H3.375zM0 0h24v24H0V0zm5.25 18.225 9.15-12.45h4.35L9.6 18.225H5.25z"/>
                    </svg>
                </SvgIcon>
            )
        case "FoodTurkey":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="m5.44 7.96l.52-.53c.58-.58 1.54-.58 2.14.04l.02.03c.49.5 1.14.74 1.85.81c.97.09 1.91.61 2.53 1.55c.68 1.08.67 2.52-.04 3.59a3.322 3.322 0 0 1-5.18.55c-.56-.55-.88-1.26-.96-2c-.08-.73-.37-1.42-.88-1.93c-.58-.57-.58-1.53 0-2.11M9.64 16c-1.17 0-2.26-.45-3.07-1.28c-.7-.72-1.14-1.62-1.25-2.6c-.03-.3-.12-.69-.36-1.05C4.36 11.9 4 12.9 4 14c0 1.64.8 3.09 2.03 4H19v-1c0-3.6-2.39-6.65-5.66-7.65c.89 1.4.87 3.27-.04 4.65c-.8 1.25-2.18 2-3.66 2m5.14-8.44h1.27c.87 0 1.63.61 1.63 1.7V10h1.25V9c0-1.5-1.33-2.64-2.88-2.64h-1.27c-.83 0-1.54-.82-1.54-1.66s.71-1.46 1.54-1.46V2C13.24 2 12 3.24 12 4.78s1.24 2.78 2.78 2.78M4.5 7.55c.06-.1.14-.2.23-.3l.52-.52c.09-.09.19-.16.29-.23L4.13 5.07c.14-.27.09-.62-.13-.85a.767.767 0 0 0-1.07 0c-.14.14-.21.31-.22.49c-.18.01-.35.08-.49.22c-.29.29-.29.77 0 1.07c.23.22.57.27.85.13zm13.89-3.16c.51-.51.83-1.2.83-1.97h-1.25c0 .83-.7 1.53-1.53 1.53v1.24c1.86 0 3.32 1.52 3.32 3.38V11H21V8.57a4.61 4.61 0 0 0-2.61-4.18M5 21h14c1.11 0 2-.89 2-2H3a2 2 0 0 0 2 2"/>
                    </svg>
                </SvgIcon>
            )
        case "Government":
            if (isDarkMode) {
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                         text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                         clip-rule="evenodd" viewBox="0 0 512 481.75">
                        <path
                            d="M11.18 166.57 246.07 0l236.1 166.57H11.18zm414.96 156.44-5.39-24.71c23.12 4.31 60.2 51.38 72.19 72.78 6.12 10.92 11.48 22.96 15.86 36.41 8.75 32.55.33 63-34.99 70.09-22.13 4.46-63.4 4.77-86.66 3.56-25.03-1.28-63.74-1.25-73.86-26.94-16.31-41.46 13.58-90.85 40.85-121.09 3.6-3.98 7.32-7.68 11.14-11.11 9.92-8.72 20.62-19.08 33.39-23.38l-12.34 22.96 17.92-23.75h9.42l12.47 25.18zm-11.53 19.59v6.95c4.58.49 8.52 1.43 11.79 2.83 3.29 1.42 6.14 3.55 8.59 6.43 1.93 2.19 3.42 4.44 4.47 6.74 1.05 2.33 1.58 4.43 1.58 6.36 0 2.15-.79 4.02-2.35 5.57-1.57 1.56-3.46 2.35-5.69 2.35-4.21 0-6.95-2.28-8.18-6.82-1.43-5.35-4.83-8.92-10.21-10.68v26.72c5.3 1.45 9.55 2.79 12.69 3.99 3.15 1.19 5.98 2.92 8.46 5.2 2.65 2.35 4.71 5.17 6.16 8.44 1.42 3.29 2.14 6.86 2.14 10.76 0 4.89-1.13 9.45-3.43 13.7-2.31 4.28-5.68 7.74-10.13 10.46-4.48 2.7-9.76 4.3-15.89 4.8v16c0 2.52-.25 4.37-.75 5.53-.49 1.16-1.56 1.73-3.25 1.73-1.53 0-2.6-.46-3.24-1.4-.62-.95-.92-2.42-.92-4.39v-17.34c-5-.54-9.38-1.73-13.13-3.53-3.75-1.79-6.89-4.03-9.39-6.71-2.49-2.69-4.36-5.48-5.54-8.35-1.21-2.89-1.8-5.74-1.8-8.53 0-2.03.79-3.9 2.41-5.54 1.6-1.64 3.6-2.48 5.99-2.48 1.93 0 3.55.44 4.88 1.34 1.32.9 2.24 2.17 2.77 3.79 1.14 3.51 2.15 6.21 3 8.07.88 1.86 2.17 3.57 3.9 5.11 1.73 1.53 4.04 2.71 6.91 3.53v-29.86c-5.75-1.6-10.53-3.35-14.38-5.3-3.86-1.96-7-4.72-9.38-8.31-2.39-3.6-3.6-8.22-3.6-13.88 0-7.36 2.35-13.41 7.04-18.11 4.69-4.71 11.46-7.45 20.32-8.22v-6.81c0-3.6 1.36-5.4 4.05-5.4 2.75 0 4.11 1.76 4.11 5.26zm-8.16 44.07v-24.6c-3.6 1.08-6.4 2.48-8.42 4.23-2.02 1.75-3.03 4.43-3.03 7.98 0 3.37.95 5.94 2.83 7.67 1.89 1.74 4.76 3.31 8.62 4.72zm8.16 19.07v28.14c4.31-.85 7.65-2.58 10.01-5.19 2.35-2.63 3.53-5.66 3.53-9.14 0-3.73-1.14-6.6-3.44-8.64-2.28-2.04-5.66-3.77-10.1-5.17zm-23.46-142.75c-4.08-12.02-7.76-24.2-10.85-36.56 11.55-12.68 56.24-10.99 69.08-.19l-11.89 28.28c6.4-8.4 8.55-11.85 12.37-16.54 1.59 1.05 3.11 2.23 4.53 3.52 3.38 3.07 6.4 6.45 7.02 11.16.39 3.06-.49 6.18-3.2 9.35L430.9 293.8c-3.5-.58-6.94-1.41-10.27-2.6 1.55-3.64 3.42-7.65 4.96-11.29l-9.94 10.73c-10.34-2.19-18.67-.89-26.43 3.22l-27.68-33.23c-1.64-1.97-2.38-3.96-2.38-5.93.03-8.04 11.99-14.96 18.27-17.59l13.72 25.88zM0 409.64h27.32v-25.35h14.33v-12.1h15.42v-145.1H25.55v-34.77h367.39c-12.5 2.38-23.86 7.12-31.36 14.51a27.239 27.239 0 0 0-7.33 12.15c-3.14 2.06-6.26 4.46-9.03 7.12l-1 .99h-15.8v94.31c-15.65 18.55-31.3 42.46-39.91 67.98-5.15 15.26-7.82 31.07-6.71 46.81H0v-26.55zm433.74-217.32h32.81v13.07c-7.58-6.27-19.7-10.74-32.81-13.07zM130.53 384.29h17.78v-12.1h15.42v-145.1h-48.62v145.1h15.42v12.1zm106.65 0H255v-12.1h15.38v-145.1h-48.62v145.1h15.42v12.1zm-70.21-259.73 79.46-60.96 79.9 60.96H166.97z"
                            fill="white"/>
                    </svg>
                )
            } else {
                return (
                    <svg version="1.1" id="education_x5F_icons_1_" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                         viewBox="0 0 128 128">
                        <g id="row1_1_">
                            <g id="university_1_">
                                <path className="st2"
                                      d="M65.2 16.9 0 45.9h128l-62.8-29zm0 19.3c-2.7 0-4.8-2.2-4.8-4.8 0-2.7 2.2-4.8 4.8-4.8 2.7 0 4.8 2.2 4.8 4.8 0 2.7-2.1 4.8-4.8 4.8zm36.2 58V53.1h4.8v-4.8H19.3v4.8h4.8v41.1h7.2V53.1h7.2v41.1h7.2V53.1h14.5v41.1h7.2V53.1h12.1v41.1h7.2V53.1h7.2v41.1h7.5zm4.9 2.4h-87v4.8h-7.2v9.7h101.4v-9.7h-7.2v-4.8z"
                                      id="icon_14_"/>
                            </g>
                        </g>
                    </svg>
                )
            }
        case "HouseholdSupplies":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/>
                    </svg>
                </SvgIcon>
            )
        case "Netflix":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
                    </svg>
                </SvgIcon>
            )
        case "Nike":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 00-.784 1.848c-.28 1.195-.028 2.072.756 2.632.373.261.886.392 1.54.392.522 0 1.11-.084 1.764-.252L24 7.8z"/>
                    </svg>
                </SvgIcon>
            )
        case "Shopify":
            if (isDarkMode) {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Shopify</title>
                            <path
                                d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"
                                fill="white"/>
                        </svg>
                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Shopify</title>
                            <path
                                d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"
                                fill="black"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "ShoeSneaker":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                              d="M2 15s0-3 2-3c.68 0 1.46-.05 2.28-.18C7.2 12.54 8.5 13 10 13h.25l-1.69-1.71c.35-.11.69-.24 1.03-.38l1.91 1.91c.39-.08.75-.19 1.08-.32l-2.03-2.05c.3-.17.59-.34.88-.54L13.5 12c.3-.21.54-.44.75-.68l-2.03-2.03c.24-.22.48-.46.7-.71l1.87 1.87c.12-.31.21-.62.21-.95c0-.85-.45-1.61-1.16-2.22c.05-.09.11-.18.16-.28l1.53-.77c.85.94 2.61 1.61 4.72 1.74l.05.03h.7s1 1 1 4.5c0 .57 0 1.07-.04 1.5H19c-1.1 0-2.42.26-3.7.5c-1.18.26-2.4.5-3.3.5zm19 2s.58 0 .86-2H19c-2 0-5 1-7 1H2.28c.34.6.98 1 1.72 1z"/>
                    </svg>
                </SvgIcon>
            )
        case "Skoda":
            if (isDarkMode) {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>&#352;KODA</title>
                            <path
                                d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12S18.6274 0 12 0Zm0 22.9636C5.945 22.9636 1.0364 18.055 1.0364 12 1.0364 5.945 5.945 1.0364 12 1.0364S22.9636 5.945 22.9636 12 18.055 22.9636 12 22.9636Zm5.189-7.2325-.269.7263h-.984c.263-.7089 3.5783-8.6177-2.9362-13.9819a9.5254 9.5254 0 0 0-4.0531.4483c.2172.175 2.474 2.0276 3.5373 4.315l-.312.084c-.5861-.6387-2.7156-2.9833-4.7448-3.7379a9.6184 9.6184 0 0 0-2.8448 2.3597c.953.4875 3.4432 1.9748 4.3896 3.1302-.0542.0244-.267.139-.267.139-1.736-1.3195-4.8199-2.0043-4.9775-2.0383a9.5126 9.5126 0 0 0-1.2267 3.6098c4.7759.9613 6.0618 3.1715 6.2818 5.6721H7.878l-1.5545-.6776a.8563.8563 0 0 0-.2524-.0531H3.1767a9.587 9.587 0 0 0 1.9267 2.9155h1.2334c.1063 0 .1993-.0133.2923-.0664l1.2489-.6378h9.042l.269.7264a4.8386 4.8386 0 0 0 2.9466-1.4667 4.839 4.839 0 0 0-2.9467-1.4666zm-4.14-.5786a1.1863 1.1863 0 0 1-.5038-1.2162 1.1862 1.1862 0 0 1 .931-.9309 1.1863 1.1863 0 0 1 1.2161.5038c.3098.4636.2563 1.0924-.1473 1.496-.4032.4032-1.0318.4574-1.496.1473z"
                                fill="white"/>
                        </svg>
                    </SvgIcon>
                )
            } else {
                return (
                    <SvgIcon>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>&#352;KODA</title>
                            <path
                                d="M12 0C5.3726 0 0 5.3726 0 12s5.3726 12 12 12 12-5.3726 12-12S18.6274 0 12 0Zm0 22.9636C5.945 22.9636 1.0364 18.055 1.0364 12 1.0364 5.945 5.945 1.0364 12 1.0364S22.9636 5.945 22.9636 12 18.055 22.9636 12 22.9636Zm5.189-7.2325-.269.7263h-.984c.263-.7089 3.5783-8.6177-2.9362-13.9819a9.5254 9.5254 0 0 0-4.0531.4483c.2172.175 2.474 2.0276 3.5373 4.315l-.312.084c-.5861-.6387-2.7156-2.9833-4.7448-3.7379a9.6184 9.6184 0 0 0-2.8448 2.3597c.953.4875 3.4432 1.9748 4.3896 3.1302-.0542.0244-.267.139-.267.139-1.736-1.3195-4.8199-2.0043-4.9775-2.0383a9.5126 9.5126 0 0 0-1.2267 3.6098c4.7759.9613 6.0618 3.1715 6.2818 5.6721H7.878l-1.5545-.6776a.8563.8563 0 0 0-.2524-.0531H3.1767a9.587 9.587 0 0 0 1.9267 2.9155h1.2334c.1063 0 .1993-.0133.2923-.0664l1.2489-.6378h9.042l.269.7264a4.8386 4.8386 0 0 0 2.9466-1.4667 4.839 4.839 0 0 0-2.9467-1.4666zm-4.14-.5786a1.1863 1.1863 0 0 1-.5038-1.2162 1.1862 1.1862 0 0 1 .931-.9309 1.1863 1.1863 0 0 1 1.2161.5038c.3098.4636.2563 1.0924-.1473 1.496-.4032.4032-1.0318.4574-1.496.1473z"
                                fill="black"/>
                        </svg>
                    </SvgIcon>
                )
            }
        case "Spotify":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                </SvgIcon>
            )
        case "Zara":
            return (
                <SvgIcon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M8.562 7l.002.006 2.794 7.621v-7.23h-1.15v-.07h3.96c1.903 0 3.231.976 3.231 2.375 0 1.02-.91 1.868-2.263 2.109l-.249.031.25.026c.821.094 1.473.346 1.935.75l.003.003L19.141 7h.07l.002.006 3.556 9.698H24v.07h-3.918v-.07h1.154l-1.17-3.189h-2.373v.002l.013.037c.094.281.142.576.139.873v1.196c0 .615.271 1.238.79 1.238.304 0 .547-.107.837-.372l.041.038c-.314.332-.695.473-1.266.473-.43 0-.8-.104-1.096-.308l-.056-.04c-.39-.296-.644-.778-.753-1.435l-.018-.106-.018-.16-.002-.028-.654 1.78h.928v.07h-1.942v-.07h.938l.718-1.954v-.005a6.35 6.35 0 01-.013-.346v-.854c0-1.049-.78-1.65-2.14-1.65h-1.337v4.81h1.158v.07H9.433v-.07h1.154l-1.17-3.189H6.172l-1.158 3.154.048-.008c1.521-.262 2.22-1.423 2.23-2.645h.07v2.758H0l5.465-9.377H3.268c-1.822 0-2.646 1.407-2.659 2.81H.54v-2.88h6.634l-.04.07-5.425 9.307h2.854c.071 0 .141-.003.212-.009l.072-.006.09-.01L8.491 7h.07zm9.883 2.095l-1.313 3.576.007.007.067.066c.193.197.347.43.452.684l.007.017h2.375l-1.595-4.35zm-10.648 0l-1.599 4.35h3.194l-1.595-4.35zm6.026-1.698h-1.02v4.427h1.336c1.353 0 1.767-.493 1.767-2.107 0-1.517-.72-2.32-2.083-2.32z"/>
                    </svg>
                </SvgIcon>
            )
        default:
            // @ts-ignore
            const Icon = Icons[icon]
            if (Icon) {
                // const Icon = lazy(() => import(/* @vite-ignore */'../../node_modules/@mui/icons-material/esm/' + icon + '.js'));
                return (
                    <Suspense fallback={null}>
                        <Icon/>
                    </Suspense>
                );
            } else {
                return <ErrorIcon></ErrorIcon>
            }
    }
}
