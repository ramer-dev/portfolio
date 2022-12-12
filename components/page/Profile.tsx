import React from "react";

export default function Profile(): JSX.Element {
    return (
        <div className={'profile w-auto h-128 bg-blue-400'}>
            <div className={'grid-cols-2 grid-rows-2'}>
                <div className={""}>
                    <h1 className={'rounded-3xl border-black border-2'}>이름</h1>
                    <em>신희상</em>
                </div>

                <div className={""}>
                    <h1>생년월일</h1>
                    <em>97.12.08</em>
                </div>

                <div className={""}>
                    <h1>이메일</h1>
                    <em>ramer.dev@kakao.com</em>
                </div>

                <div className={""}>
                    <h1>생년월일</h1>
                    <em>97.12.08</em>
                </div>
            </div>
        </div>
    )
}