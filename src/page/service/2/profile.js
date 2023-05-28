import * as S from "../../../style/style";
import home from "../../../assets/service/profile.png";

export default function Profile(){
    return(
        <S.Container2>
            <div>
                <img src={home} alt="홈화면"/>
                <div>
                    <h2>
                        프로필
                    </h2>
                    <h3>나만의</h3>
                    <h3>독서취향</h3>
                    <div>내가 읽은 책을 공유하고<br/>나만의 독서 취향을 보여주세요.</div>
                </div>
            </div>
        </S.Container2>
    );
}