import * as S from "../../style/style";
import home from "../Assets/Img/home.png";

export default function Checklist(){
    return(
        <S.Container2>
            <div>
                <img src={home} alt="홈화면"/>
                <div>
                    <h2>
                        체크리스트 글쓰기
                    </h2>
                    <h3>누구가 쉽게</h3>
                    <h3 style={{color : "#1C1C1C"}}>멋진 글 완성</h3>
                    <div>막막한 글쓰기는 이제 그만,<br/>질문을 고르고 답하면 글이 완성돼요.</div>
                </div>
            </div>
        </S.Container2>
    );
}