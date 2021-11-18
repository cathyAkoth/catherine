import React from 'react'
import styled from 'styled-components'
import resume from "../img/resume.jpg"
function ImageSection(){
    return(
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <div className="sub-title">
                    <h4>I am <span>Catherine Cecilia Akoth</span></h4>
                </div>
                <p className="paragraph">
                    i am a software developer with the love to code. gggsajak,a lkaksa mdsd lksd
                    jsdejdfkeufnfc ndnfl.dfkmdmsjfkhemwdncedkjwlkelw  jsdejfef jksdjedndskjdd cxklksdjnsm
                    njmsdcnjdsned nndkjefdnks kdkskmdke klsldjemd kldjfkldfjdfe klsdjewldm kldeuruew jnndjehdfiu
                    the jskksdkuendn ujdjnfdeufe d.
                </p>
                <div className="about-info">
                   <div className="info-title">
                       <p>Name</p>
                       <p>Nationality</p>
                       <p>Languages</p>
                       <p>Residence</p>
                       <p>Services</p>
                    </div> 
                </div>
                <div className="info">
                   
                       <p>: Catherine Cecilia Akoth</p>
                       <p>: Ugandan</p>
                       <p>: English</p>
                       <p>: Uganda, East Africa</p>
                       <p>: Freelance</p>
                   
                </div>
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`

`;
export default ImageSection