import * as S from "../../../style/style";
import home from "../../../assets/service/home.png";

export default function Home(){
    return(
        <S.Container1>
            <div>
                <div>
                    <h2>
                        홈
                    </h2>
                    <h3>모든 콘텐츠를</h3>
                    <h3>한곳에서</h3>
                    <div>다른 사람은 어떤 책 읽지?<br/>다양한 리뷰를 확인하고 소통해보세요.</div>
                </div>
                <img src={home} alt="홈화면"/>
            </div>
        </S.Container1>
    );
}