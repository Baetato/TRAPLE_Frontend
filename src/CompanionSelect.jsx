//@ts-nocheck
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { styles } from "./components/companionSelectDetail/style";
import Header from './Header';
import companion1 from "./companion1.svg";
import companion2 from "./companion2.svg";

function TravlePeriod() {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate("/concept"); //다음 페이지로 이동
    };
    const [isNextButtonActive, setIsNextButtonActive] = useState(false); // 다음 버튼 활성화 상태를 관리하는 상태 추가
    const [currentStep, setCurrentStep] = useState(3); // 현재 단계 상태 추가
    const handleCalendarClick = () => {
        setIsNextButtonActive(true); 
        navigate("/companionSelect."); 
    };
    return(
        <div>
            <Header/>
            <div style={styles.container} onClick={handleCalendarClick}>
                <div style={{marginTop:"800px", marginLeft:"740px"}}>
                <button style={{...styles.nextBtn, backgroundColor: isNextButtonActive ? styles.nextBtn.backgroundColor : '#949494'}} 
                    disabled={!isNextButtonActive}>다음</button>
                </div>
            </div>
        </div>
    );
}
export default TravlePeriod;