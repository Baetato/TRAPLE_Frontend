//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from 'framer-motion';
import { styles } from "./components/mainDetail/style";
import TrendingPlanners from "./TrendingPlanners";
import MatchingPlanners from "./MatchingPlanners";
import RecommnedPackages from "./RecommnedPackages";
import HomeHeader from "./HomeHeader";
import alarmBtn from "./alarmBtn.svg";
import homeImg from "./homeImg.svg";
import menuBox from "./menuBox.png";
import chatImg from "./chat.svg";
import Line_31 from "./Line 31.svg";
import './style.css'; 
function Main() {
    const [showChat, setShowChat] = useState(false); // 채팅 이미지를 표시할지 여부를 상태로 관리합니다.
    const navigate = useNavigate();
    styles.alarmBtnStyle = {
        position: 'fixed', // 고정 위치
        bottom: '20px', // 하단에서 20px 떨어진 위치
        right: '20px', // 오른쪽에서 20px 떨어진 위치
        cursor: 'pointer' // 마우스 오버 시 커서 변경
    };

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };
    const handleNext = () => {
        navigate("/placeSelect-main"); //다음 페이지로 이동
    };

    const handleChatClick = () => {
        setShowChat(!showChat); // 채팅 이미지를 토글합니다.
    };

    const trendingControls = useAnimation();
    const matchingControls = useAnimation();
    const recommendedControls = useAnimation();
    const travlogControls = useAnimation();
    const homeInfoControls = useAnimation();

    const trendingRef = useRef();
    const matchingRef = useRef();
    const recommendedRef = useRef();
    const travlogRef = useRef();
    const homeInfoRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const currentControls = entry.target.getAttribute('data-controls');
                if (entry.isIntersecting) {
                    if (currentControls === 'trending') trendingControls.start("visible");
                    if (currentControls === 'matching') matchingControls.start("visible");
                    if (currentControls === 'recommended') recommendedControls.start("visible");
                    if (currentControls === 'travlog') travlogControls.start("visible");
                    if (currentControls === 'homeInfo') homeInfoControls.start("visible");
                } else {
                    if (currentControls === 'trending') trendingControls.start("hidden");
                    if (currentControls === 'matching') matchingControls.start("hidden");
                    if (currentControls === 'recommended') recommendedControls.start("hidden");
                    if (currentControls === 'travlog') travlogControls.start("hidden");
                    if (currentControls === 'homeInfo') homeInfoControls.start("hidden");
                }
            });
        }, {
            threshold: 0.5 // 요소의 50%가 보일 때 콜백 실행
        });

        if (trendingRef.current) observer.observe(trendingRef.current);
        if (matchingRef.current) observer.observe(matchingRef.current);
        if (recommendedRef.current) observer.observe(recommendedRef.current);
        if (travlogRef.current) observer.observe(travlogRef.current);
        if (homeInfoRef.current) observer.observe(homeInfoRef.current);

        return () => {
            if (trendingRef.current) observer.unobserve(trendingRef.current);
            if (matchingRef.current) observer.unobserve(matchingRef.current);
            if (recommendedRef.current) observer.unobserve(recommendedRef.current);
            if (travlogRef.current) observer.unobserve(travlogRef.current);
            if (homeInfoRef.current) observer.unobserve(homeInfoRef.current);
        };
    }, [trendingControls, matchingControls, recommendedControls, travlogControls, homeInfoControls]);

    return (
        <div>
            <HomeHeader />
            <div className="home-screen" style={styles.container}>
                <div id="main-title" style={{ width: '100%', backgroundImage: `url(${homeImg})`, backgroundRepeat: 'no-repeat' }}>
                    <div style={styles.mainText}>
                        기분좋은 여행의<br />첫 걸음, Traple 🏝️
                    </div>
                    <div style={styles.subText}>
                        AI가 짜주는 최적의 플랜부터 즐거운 여행 동반자까지 모두 Traple과 함께라면 순식간에
                    </div>
                    <div style={{ marginTop: "48px", marginLeft: "980px" }}>
                        <img src={menuBox} />
                    </div>
                    <div style={{ marginTop: "-125px", marginLeft: "1133px", marginBottom:"100px" }}>
                        <button onClick={handleNext} style={styles.button}>AI Planner 바로 이용하기</button>
                    </div>

                    <div id="trending-planners" ref={trendingRef} data-controls="trending">
                        <motion.div
                            initial="hidden"
                            animate={trendingControls}
                            variants={sectionVariants}>
                            <TrendingPlanners />
                        </motion.div>
                    </div>
                    <div id="matching-planners" ref={matchingRef} data-controls="matching">
                        <motion.div
                            initial="hidden"
                            animate={matchingControls}
                            variants={sectionVariants}>
                            <MatchingPlanners />
                        </motion.div>
                    </div>
                    <div id="recommended-packages" ref={recommendedRef} data-controls="recommended">
                        <motion.div
                            initial="hidden"
                            animate={recommendedControls}
                            variants={sectionVariants}>
                            <RecommnedPackages />
                        </motion.div>
                    </div>
                    {/* <div id="recommended-homeInfo" ref={travlogRef} data-controls="homeInfo">
                        <motion.div
                            initial="hidden"
                            animate={homeInfoControls}
                            variants={sectionVariants}>
                            <HomeInfo />
                        </motion.div>
                    </div> */}
                    {/* <div id="recommended-travlog" ref={travlogRef} data-controls="travlog">
                        <motion.div
                            initial="hidden"
                            animate={travlogControls}
                            variants={sectionVariants}>
                            <HomeTravlog />
                        </motion.div>
                    </div> */}
                    <div>
                        <img src={Line_31} style={{marginTop:"170px"}}></img>
                        <div style={{marginTop:"10px ", alignItems: 'center', marginLeft:"100px", display:"flex", marginBottom:"20px"}}>전체서비스|이용약관|개인정보처리방침|고객센터<span style={{marginLeft:"1150px"}}>(주)TRAPLE</span></div>
                    </div>
                    <div>
                        <img src={alarmBtn} className="chat-img" style={styles.alarmBtnStyle} alt="알람 버튼" onClick={handleChatClick} />
                    </div>
                    {showChat && (
                        <div style={{
                            position: 'fixed',
                            bottom: '80px', // 알람 버튼 위에 위치
                            right: '20px', // 알람 버튼과 같은 오른쪽 위치
                        }}>
                            <img src={chatImg} alt="채팅 이미지"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;

