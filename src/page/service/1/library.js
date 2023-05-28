import * as S from "../../../style/style";
import home from "../../../assets/service/library.png";

export default function Library(){
    return(
        <S.Container1>
            <div>
                <div>
                    <h2>
                        서재
                    </h2>
                    <h3>내가 읽은</h3>
                    <h3>모든 것을</h3>
                    <h3>한 곳에서</h3>
                    <div>내가 쓴 독서록과 읽은 책들을<br/>한 곳에서 관리할 수 있어요.</div>
                </div>
                <img src={home} alt="홈화면"/>
            </div>
        </S.Container1>
    );
}