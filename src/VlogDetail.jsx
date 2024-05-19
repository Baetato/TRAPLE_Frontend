// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { styles } from "src/components/vlogDetail/style";
import { useNavigate } from 'react-router-dom';

function VlogDetail() {
    const qId = parseInt(params.questionId)
    const navigate = useNavigate();
    const [isLogined, setIsLogined] = useState(false);
    const [btnClicked, setBtnClicked] = useState(false);
    const [view, setView] = useState(false);
    const [alarm, setAlarm] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isChild, setIsChild] = useState(true);
    const [isChildStatus, setIsChildStatus] = useState('ACTIVE')
    const [answerOfAnswer, setAnswerOfAnswer] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [hashtags, setHashtags] = useState("");
    const [answerId, setAnswerId] = useState("");
    const [howLong, setHowlong] = useState("1시간 전");
    const [response, setResponse] = useState([])
    const [expertCount, setExpertCount] = useState('')
    const [writerId, setWriterId] = useState("")
    const [pImg, setPImg] = useState("")
    const [sideQ, setSideQ] = useState([])
    const [beforeQ, setBeforeQ] = useState("")
    const [afterQ, setAfterQ] = useState("")
    const handleChildStatus = () => {
        (isChildStatus == "ACTIVE") ? setIsChild(true) : setIsChild(false)
    }
    const handleBeforeQ = () => {
        setBeforeQ(sideQ.olderQuestion.questionId)
        navigate(`/detail/${beforeQ}`)
    }
    const handleAfterQ = () => {
        setAfterQ(sideQ.laterQuestion.questionId)
        navigate(`/detail/${afterQ}`)
    }
    useEffect(() => {
        handleChildStatus()
    }, [title])
    
    const getTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();

        const elapsed = now - date;

        const seconds = Math.floor(elapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);

        if (years > 0) {
            return `${years}년 전`;
        } else if (months > 0) {
            return `${months}달 전`;
        } else if (days > 0) {
            return `${days}일 전`;
        } else if (hours > 0) {
            return `${hours}시간 전`;
        } else if (minutes > 0) {
            return `${minutes}분 전`;
        } else {
            return `${seconds}초 전`;
        }
    }
    useEffect(() => {
        receiveQuestion();
        receiveAnswer();
    }, []);

    return (
        <div>
            <Header />
            <div style={styles.full_container}>
                <div style={styles.search_ad_container}>
                </div>
                <div style={styles.question_detail_main_container}>
                    <div style={styles.after_before_question_container}>
                        <div onClick={handleBeforeQ} style={styles.before_question_container}>◀ 이전 질문으로 이동 칸</div>
                        {/*Link 컴포넌트로 바꿀 태그*/}
                        <div onClick={handleAfterQ} style={styles.after_question_container}>다음 질문으로 이동 칸 ▶</div>
                        {/*Link 컴포넌트로 바꿀 태그*/}
                    </div>
                    <div style={styles.main_orange_container}>
                        <div style={{ flex: '1' }}>
                            <Question time={howLong} isChild={isChild} qId={qId} writerId={writerId} hashtags={hashtags} title={title} content={content} pImg={pImg} />
                        </div>
                        <div style={{ textAlign: 'center', color: 'white', fontWeight: '600', fontSize: '16px' }}>{expertCount}명의 전문가가 답변했어요</div>
                        <hr style={styles.hrline} />
                        <div style={btnClicked ? { flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' } : { display: 'flex', height: '100%' }}>
                            {btnClicked ? <Newanswer qId={qId} /> :
                                <button onClick={answerClick} style={styles.answer_button}>답변하기</button>}
                        </div>
                        {answerList.map((answer, index) => (
                            <div style={styles.answer}>
                                <Answer key={index} qId={qId} like={answer.likeCount} userId={answer.user.userId} answerId={answer.answerId} content={answer.content} userNickname={answer.user.nickname} />
                            </div>
                        ))}
                        { }
                    </div>
                </div>
                <div style={styles.profilecontainer}>
                    { }

                </div>
            </div >
        </div>
    );
}
export default VlogDetail;