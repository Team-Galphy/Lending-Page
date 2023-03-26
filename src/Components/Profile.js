import * as S from "../Style";
import home from "../Assets/Img/home.png";

export default function Profile(){
    return(
        <S.Container2>
            <div>
                <img src={home} alt="홈화면"/>
                <div>
                    <h2>
                        프로필
                    </h2>
                    <h3>누구나 쉽게</h3>
                    <h3 style={{color : "#1C1C1C"}}>한곳에서</h3>
                    <div>다른 사람은 어떤 책 읽지?<br/>다양한 리뷰를 확인하고 소통해보세요.</div>
                </div>
            </div>
        </S.Container2>
    );
}