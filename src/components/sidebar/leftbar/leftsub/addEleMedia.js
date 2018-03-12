import React, { Component } from 'react';

class addEleForms extends Component{
     render(){
         return(
            <div style={{borderBottom: 0, marginBottom: 0}}><div style={{display: 'flex', flexDirection: 'column', flex: '0 1 auto'}}>
                <div tabIndex={0} style={{outline: 0, cursor: 'default', userSelect: 'none', background: 'rgb(43, 43, 43)', borderTop: '1px solid rgb(33, 33, 33)', borderBottom: '1px solid rgb(33, 33, 33)', height: 28, paddingTop: 8, paddingBottom: 8, boxSizing: 'border-box', display: 'flex', alignItems: 'center', flex: '0 1 auto'}}><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: 16, height: 20}}><svg width={9} height={6} viewBox="0 0 9 6" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path fill="currentColor" d="M4.5 5L1 1h7z" /></svg></div><div style={{width: 'calc(100% - 12px)', color: 'rgb(217, 217, 217)', fontSize: 12, fontFamily: '-apple-system, BlinkMacSystemFont, proxima-nova, Roboto, Arial, sans-serif, Georgia, serif', lineHeight: 16, fontWeight: 600}}>媒体</div></div>
                <div columncount={3} style={{display: 'flex', flexWrap: 'wrap'}}>
                    <div flexbasis="33.33333333333333%" style={{flexBasis: '33.3333%', overflow: 'hidden', boxSizing: 'border-box', borderRight: '1px solid rgb(51, 51, 51)', borderBottom: '1px solid rgb(51, 51, 51)'}}><div data-automation-id="add-tab-image-block" style={{color: 'rgb(217, 217, 217)', fontFamily: 'Arial, sans-serif', fontSize: 11, lineHeight: 16, WebkitFontSmoothing: 'antialiased', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 92, cursor: '-webkit-grab', backgroundColor: 'rgb(64, 64, 64)'}}><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 40}}><svg width={50} height={37} viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm0 36H3c-.8 0-1.4-.5-1.8-1.1.4.6 1 1.1 1.8 1.1h44zM16 12.5c0 1.4-1.1 2.5-2.5 2.5S11 13.9 11 12.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5zm-3.9 3.2s-.1 0-.1-.1l.1.1zm11.2 8.4l.7-.8 6.9-7.9 9 13.7H12.4l7.5-8.5 2.7 2.7.7.8zM41.8 30l-8.4-12.7L41.8 30zm-18.5-7.4l3.5-4-3.5 4zm-3.4-3.5l-4.4 5 4.4-5 1 1-1-1zM13.5 9c-1.9 0-3.5 1.6-3.5 3.5 0 1.2.6 2.3 1.5 2.9-.9-.6-1.5-1.7-1.5-2.9 0-1.9 1.6-3.5 3.5-3.5.5 0 .9.1 1.4.3-.5-.2-.9-.3-1.4-.3zM49 3v-.4c-.2-.9-1-1.6-2-1.6H3h44c1 0 1.8.7 2 1.6V3z" /><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM13.5 9c1.9 0 3.5 1.6 3.5 3.5S15.4 16 13.5 16 10 14.4 10 12.5 11.6 9 13.5 9zm-3.3 21l9.6-10.9 3.4 3.5 7.7-8.9L41.8 30H10.2z" /></svg></div><div style={{display: 'flex', flexDirection: 'column', fontSize: 11, textShadow: 'none', padding: '6px 6px 0px', justifyContent: 'center', color: 'rgb(166, 166, 166)', lineHeight: '1.2', textAlign: 'center', cursor: 'inherit', userSelect: 'none'}}>图片</div></div></div>
                    <div flexbasis="33.33333333333333%" style={{flexBasis: '33.3333%', overflow: 'hidden', boxSizing: 'border-box', borderRight: '1px solid rgb(51, 51, 51)', borderBottom: '1px solid rgb(51, 51, 51)'}}><div data-automation-id="add-tab-video-block" style={{color: 'rgb(217, 217, 217)', fontFamily: 'Arial, sans-serif', fontSize: 11, lineHeight: 16, WebkitFontSmoothing: 'antialiased', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 92, cursor: '-webkit-grab', backgroundColor: 'rgb(64, 64, 64)'}}><div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', minHeight: 40}}><svg width={50} height={37} viewBox="0 0 50 37" className="bem-Svg " style={{display: 'block', transform: 'translate(0px, 0px)'}}><path opacity=".4" d="M47 0H3C1.3 0 0 1.3 0 3v31c0 1.7 1.3 3 3 3h44c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-9 13.7v9.6l-6-3.4v-2.8l6-3.4zM39 25l-3.6-2 3.6 2zM13 14c0-.6.4-1 1-1h13c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H14c-.6 0-1-.4-1-1v-9zm1 11h13c.9 0 1.7-.6 1.9-1.5-.2.8-1 1.5-1.9 1.5H14c-.6 0-1.1-.2-1.4-.6.3.4.9.6 1.4.6zm14.7-12.1c-.1-.1-.2-.2-.2-.3 0 .1.1.2.2.3.2.3.3.7.3 1.1 0-.4-.1-.8-.3-1.1zM1 3c0-.2 0-.3.1-.5-.1.2-.1.3-.1.5zm.1 31.5c-.1-.1-.1-.3-.1-.5 0 .2 0 .4.1.5z" /><path fill="currentColor" d="M47 1H3c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h44c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM29 23c0 1.1-.9 2-2 2H14c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2h13c1.1 0 2 .9 2 2v9zm10 2l-8-4.5v-4l8-4.5v13z" /></svg></div><div style={{display: 'flex', flexDirection: 'column', fontSize: 11, textShadow: 'none', padding: '6px 6px 0px', justifyContent: 'center', color: 'rgb(166, 166, 166)', lineHeight: '1.2', textAlign: 'center', cursor: 'inherit', userSelect: 'none'}}>视频</div></div></div><div flexbasis="33.33333333333333%" style={{flexBasis: '33.3333%', overflow: 'hidden', boxSizing: 'border-box', borderRight: 0, borderBottom: '1px solid rgb(51, 51, 51)'}} /></div></div></div>
        )
    }
}
export default addEleForms;
