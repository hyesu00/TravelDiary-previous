import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default class TermOfUse extends Component {
	render() {
		return(
			<View>
				<Text style={styles.title}>이용 약관</Text>
				<ScrollView style={styles.contents}>
					<Text style={styles.subTitle}>제 1 조(목적)</Text>
					<Text>이 약관은 여행일기(이하 "회사"라 합니다)가 제공하는 서비스(이하 "본 서비스"라 합니다) 이용과 관련하여 회사와 이용자 간의 권리∙의무 및 필요한 제반사항을 정함을 목적으로 합니다.</Text>
					<Text style={styles.subTitle}>제 2 조(용어의 정의)</Text>
					<Text>① 이 약관에서 사용하는 용어의 정의는 다음과 같습니다. 1. "이용고객"란 회사가 제공하는 서비스를 이용하기 위해 앱스토어사업자 또는 플랫폼사업자가 운영하는 앱스토어마켓에서 애플리케이션을 다운로드 받은 자를 말합니다. 2. "회원"이란 이 약관 및 개인정보처리방침에 동의하고 회사가 제공하는 서비스 이용자격을 부여 받은 이용고객을 말합니다. 3. "본 서비스"란 회사가 제공하는 서비스 일체를 의미합니다. 4. "단말기"란 본 본 서비스를 이용할 수 있는 휴대폰, 스마트폰, 태블릿 등 유무선 기기를 말합니다. 5. "애플리케이션"이란 회사가 제공하는 본 서비스를 이용할 수 있는 프로그램 일체를 의미합니다. 6. "앱스토어(오픈마켓)사업자"란 회사가 제공하는 애플리케이션을 다운로드 받을 수 있고, In-App 결제를 할 수 있도록 하는 오픈마켓 사업자를 말합니다. 7. "아이디(ID)”란 회원의 식별과 본 서비스 이용을 위하여 회원이 정하는 영문자와 숫자의 조합을 의미합니다. 8. “비밀번호”란 회원이 부여 받은 아이디와 일치되는 회원임을 확인하고 비밀번호를 위해 회원 자신이 정한 문자 또는 숫자의 조합을 말합니다. 9. "콘텐츠"란 회사가 본 서비스에서 이용할 수 있도록 제작한 아이템 등을 말합니다. 10. “게시물”이란 회원이 본 서비스를 이용함에 있어 서비스상에 게시한 부호, 문자, 지도 등 정보 형태의 글, 사진, 동영상 및 각종 파일과 링크 등을 의미합니다. 11. “유료상품”이란 회사가 유료로 제공하는 재화 또는 용역을 말합니다. ② 이 약관에서 사용하는 용어의 정의는 제 1 항에서 정하는 것을 제외하고는 관계법령에서 정하는 바에 따릅니다. 관계법령에서 정하지 않는 것은 일반적인 상관례에 의합니다</Text>
					<Text style={styles.subTitle}>제 3 조 (약관의 게시와 개정)</Text>
					<Text>· "회사"는 이 약관의 내용을 "회원"이 쉽게 알 수 있도록 "본 서비스" 서비스설정 화면에 게시합니다. · "회사"는 '약관의규제에관한법률', 정보통신망이용촉진및정보보호에관한법률(이하 '정보통신망법') 등 관계법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다. · "회사"가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 본 조 제 1 항과 같은 방법으로 변경 약관 적용일 7 일 전에 공지합니다. 다만, 변경할 약관의 내용이 회원에게 불리할 때에는 그 적용일자 30 일 전부터 공지하며, 관련 내용을 이메일(E-mail) 또는 문자메시지(SMS) 등으로 회원에게 개별적으로 통지합니다. (다만, 회원의 연락처 미기재, 변경 등으로 개별통지가 어려울 때에는 홈페이지에 변경 약관을 공지함으로써 개별적으로 통지한 것으로 간주합니다.) · "회사"가 전항에 따라 개정약관을 공지 또는 통지하면서 "회원"에게 30 일 기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 공지 또는 통지하였음에도 "회원"이 명시적으로 거부의 의사표시를 하지 아니한 경우 "회원"이 개정약관에 동의한 것으로 봅니다. · "회원"이 개정약관의 적용에 동의하지 않는 경우 "회사"는 해당 "회원"에 대해 개정 약관의 내용을 적용할 수 없으며, 이 경우 "회원"은 이용계약을 해지할 수 있습니다.</Text>
					<Text style={styles.subTitle}>제 4 조 (약관의 해석)</Text>
					<Text>"회사"는 개별 서비스에 대해서는 별도의 이용약관 및 정책 (이하 "운영정책 등")을 둘 수 있으며, 해당 내용이 이 약관과 상충할 경우에는 "운영정책 등"이 우선하여 적용됩니다. · 이 약관에서 정하지 아니한 사항이나 해석에 대해서는 "운영정책 등" 및 관계법령 또는 상관례에 따릅니다.</Text>
					<Text style={styles.subTitle}>제 5 조 (이용계약 체결)</Text>
					<Text>· 이용계약은 "회원"이 되고자 하는 자(이하 "가입신청자")가 약관의 내용에 대하여 동의를 한 다음 페이스북 로그인 또는 이메일 회원가입신청을 하고 "회사"가 이러한 신청에 대하여 승낙함으로써 체결됩니다. · "회사"는 "가입신청자"의 신청에 대하여 "본 서비스" 이용을 승낙함을 원칙으로 합니다. 다만, "회사"는 다음 각 호에 해당하는 신청에 대하여는 승낙을 하지 않거나 이용계약을 해지할 수 있습니다. · 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 단 "회사"의 회원 재가입 승낙을 얻은 경우에는 예외로 함. · 허위의 정보를 기재하거나, "회사"가 제시하는 내용을 기재하지 않은 경우. 허위의 정보를 기재한 회원은 일체의 권리를 주장할 수 없고, 관련법에 따라 처벌을 받을 수 있으며, 회사는 추후 이용 계약을 해지할 수 있습니다. · "회원"의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우 · 제 1 항에 따른 신청에 있어 회사는 회원의 종류에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다. · "회사"는 서비스관련설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다. · 제 2 항과 제 4 항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, "회사"는 원칙적으로 이를 가입신청자에게 알리도록 합니다. 다만, 회사의 귀책사유 없이 가입신청자에게 통지할 수 없는 경우는 예외로 취급합니다. · 회사의 업무상 또는 기술상의 장애로 인하여 서비스를 개시하지 못하는 경우에는 사전에 홈페이지 또는 개별 서비스 관련 홈페이지에 공지하거나 회원에게 이를 통지합니다.</Text>
					<Text style={styles.subTitle}>제 6 조 ("회원"정보의 변경)</Text>
					<Text>· "회원"은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, 서비스 관리를 위해 "아이디(ID), 이메일" 등은 수정이 불가능합니다. · "회원"은 회원가입 신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 이메일 기타 방법으로 "회사"에 대하여 그 변경사항을 알려야 합니다. · 제 2 항의 변경사항을 "회사"에 알리지 않아 발생한 불이익에 대하여 "회사"는 책임지지 않습니다. · "회원"이 잘못된 이메일로 가입한 경우 제 1 항에 불구하고 고객센터를 통해 수정할 수 있습니다.</Text>
					<Text style={styles.subTitle}>제 7 조 (개인정보 보호의무)</Text>
					<Text>· "회사"는 '정보통신망법' 등 관계 법령이 정하는 바에 따라 "회원"의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 "회사"의 개인정보처리방침이 적용됩니다. 다만, "회사"의 공식 사이트 이외의 링크된 사이트에서는 "회사"의 개인정보처리방침이 적용되지 않습니다. · 회사는 회원의 귀책사유로 인해 노출된 회원의 계정 정보를 비롯한 모든 정보에 대해서 일체의 책임을 지지 않습니다.</Text>
					<Text style={styles.subTitle}>제 8 조 ("회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무)</Text>
					<Text>· "회원"의 "아이디"와 "비밀번호" 에 관한 관리책임은 "회원"에게 있으며, 이를 제 3 자가 이용하도록 하여서는 안 됩니다. · "회사"는 "회원"의 "아이디"가 개인정보 유출 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나 "회사" 및 "회사"의 운영자로 오인할 우려가 있는 경우, 해당 "아이디"의 이용을 제한할 수 있습니다. · "회원"은 "아이디" 및 "비밀번호"가 도용되거나 제 3 자가 사용하고 있음을 인지한 경우에는 이를 즉시 "회사"에 통지하고 "회사"의 안내에 따라야 합니다. · 제 3 항의 경우에 해당 "회원"이 "회사"에 그 사실을 통지하지 않거나, 통지한 경우에도 "회사"의 안내에 따르지 않아 발생한 불이익에 대하여 "회사"는 책임지지 않습니다.</Text>
					<Text style={styles.subTitle}>제 9 조 ("회원"에 대한 통지)</Text>
					<Text>· "회사"가 "회원"에 대한 통지를 하는 경우 이 약관에 별도 규정이 없는 한 이메일, 기타 "회사"가 적당하다고 판단하는 방법으로 할 수 있습니다. · "회사"는 "회원" 전체에 대한 통지의 경우 7 일 이상 "본 서비스"의 초기화면에 공지함으로써 제 1 항의 통지에 갈음할 수 있습니다.</Text>
					<Text style={styles.subTitle}>제 10 조 (계약의 해지)</Text>
					<Text>· "회원"은 언제든지 "본 서비스" 서비스 설정 화면에서 또는 고객센터를 통하여 이용계약 해지 신청을 할 수 있으며, "회사"는 관련법 등이 정하는 바에 따라 이를 즉시 처리하여야 합니다. · "회원"이 계약을 해지할 경우, 관련법 및 개인정보처리방침에 따라 "회사"가 "회원" 정보를 보유하는 경우를 제외하고는 해지 즉시 "회원"의 모든 데이터는 소멸됩니다. · "회원"이 계약을 해지하는 경우, "회원"을 식별할 수 있는 프로필 사진, "회원"이 작성한 "게시물" 중 본인 계정에 등록된 "게시물" 일체는 삭제됩니다. 다만, 타인에 의해 다운로드, 담기, 스크랩 등이 되어 재게시되거나, 공용게시판에 등록된 "게시물", 다른 데이터와 융합되어 재가공, 편집, 구성 되어 "회원" 정보와 무관한 데이터로서 "본 서비스"에서 이용되고 있는 데이터는 삭제되지 않습니다.</Text>
					<Text style={styles.subTitle}>제 11 조 ("회사"의 의무)</Text>
					<Text>· "회사"는 관련법과 이 약관이 금지하거나 미풍양속에 반하는 행위를 하지 않으며, 계속적이고 안정적으로 "본 서비스"를 제공하기 위하여 최선을 다하여 노력합니다. · "회사"는 "회원"이 안전하게 "본 서비스"를 이용할 수 있도록 개인정보(신용정보 포함) 보호를 위해 보안시스템을 갖추어야 하면 개인정보처리방침을 공시하고 준수합니다. · "회사"는 서비스 이용과 관련하여 회원으로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리해야 합니다. 회원이 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 이메일 등을 통해 회원에게 처리과정 및 결과를 전달합니다.
					</Text>
					<Text style={styles.subTitle}>제 12 조 ("회원"의 의무)</Text>
					<Text>· 회원은 관계법령, 약관, 서비스 이용안내 및 서비스상에 공지한 주의사항, 회사가 서비스 이용과 관련하여 회원에게 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 아니 됩니다. · 회원은 서비스 이용권한을 타인에게 양도, 증여 또는 이용하게 하거나 이를 담보로 제공할 수 없습니다. · "회원"은 "본 서비스"를 이용할 때 다음 각 호의 행위를 하여서는 아니 됩니다. · 신청 또는 변경 시 허위내용의 등록 · 타인의 정보도용 · "회사"가 게시한 정보의 변경 · "회사"가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시 · "회사"와 기타 제 3 자의 저작권 등 지적재산권에 대한 침해 · "회사" 및 기타 제 3 자의 명예를 손상시키거나 업무를 방해하는 행위 · 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 "본 서비스"에 공개 또는 게시하는 행위 · "회사"의 동의 없이 영리를 목적으로 "본 서비스"를 사용하는 행위 · "회사"의 명백한 서면 허가를 받은 경우를 제외하고는 "본 서비스" 또는 이에 포함된 소프트웨어와 관련된 파생물 제작, 역파일, 소스 코드의 추출을 시도하는 행위 · 기타 불법적이거나 부당한 행위
					</Text>
					<Text style={styles.subTitle}>제 13 조 ("본 서비스"의 제공)</Text>
					<Text>· "회사"는 "회원"에게 아래와 같은 "본 서비스"를 제공합니다. · 여행 기록 (서비스 사용 시 "회원"이 직접 남긴 사진, 텍스트, 위치 등의 기록 정보) · 소셜네트워크 서비스 (여행 기록에 대한 정보 공유, 좋아요 / 댓글 작성 등 친구와의 커뮤니케이션을 위한 서비스 제공) · 여행기록∙여행지 추천 및 그 외 여행 관련 정보 서비스 제공 · 기타 서비스 (회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 회원에게 제공하는 일체의 서비스) · "본 서비스"의 이용은 연중무휴 1 일 24 시간을 원칙으로 합니다 · "회사"는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 "본 서비스"의 제공을 일시적으로 중단할 수 있습니다. 이 경우 "회사"는 제 9 조에 정한 방법으로 "회원"에게 통지합니다. 다만, "회사"가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다. · "회사"는 "본 서비스"를 일정범위로 분할하여 각 범위별로 이용 가능한 시간을 별도로 정할 수 있으며 이 경우 그 내용을 공지합니다. · "회사"는 "본 서비스"의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 "본 서비스" 제공화면에 공지한 바에 따릅니다.
					</Text>
					<Text style={styles.subTitle}>제 14 조 ("유료상품")</Text>
					<Text>· "유료상품" 구매를 위한 결제는 휴대폰 결제, 신용카드 결제 등 "회사"가 정한 결제 수단으로 할 수 있으며, 결제 수단은 각 "유료 상품"의 결제 화면에 표시합니다. · "유료상품"을 결제한 "회원"은 전자상거래 등에서의 소비자보호에 관한 법률이 규정한 기간 내에 청약철회 할 수 있으며 구체적인 기간은 다음과 같습니다. · "유료상품"을 공급받은 날 또는 상품 공급에 대한 계약서, 통지 등을 받은 날로부터 7 일 이내 · 상품 공급에 대한 계약이 다르게 이행된 경우에는 해당 상품을 공급(유료서비스의 경우 이용할 수 있는 날)받은 날로부터 3 개월 이내 또는 그 사실을 알거나 알 수 있었던 날로부터 30 일 이내 · "본 서비스"를 통하여 "회원"이 구매한 "유료상품"은 전자상거래 등에서의 소비자보호에 관한 법률, 콘텐츠산업진흥법 등에서 규정하는 청약철회가 불가능한 서비스가 포함될 수 있습니다. 다만, 이 경우 "회사"는 청약철회가 불가능한 "유료상품"에 대한 사실을 표시사항에 포함하거나 시용상품을 제공하거나 한시적 또는 일부이용 등의 방법을 제공하는 등의 조치를 취합니다. · 본 조 제 2 항에 따라 "회원"이 청약철회 하는 경우 "회사"는 전자상거래등에서의 소비자 보호에 관한 법률 등에서 규정하는 기간 내에 환급하여야 하며, 이 때 "회원" 이 해당 상품을 이용하여 얻은 이익이 있으면 해당 금액을 공제하고 환급할 수 있습니다. · "회사"는 "회원"에게 대금을 환급할 때 대금의 결제와 동일한 방법으로 대금을 환급하여야 하며, 동일한 방법으로 환불이 불가능할 경우 이를 사전에 고지합니다. · "회원"이 이벤트 등을 통해 무상으로 취득하는 등 "회원"이 직접 비용을 지불하지 아니한 서비스에 대해서는 "회사"는 환불 의무를 부담하지 않습니다. · "회원"의 신청 또는 동의에 따라 자동결제 중인 "유료상품"의 경우, 해당 "회원"이 이용요금을 체납하는 경우 연체가 발생한 날 자동으로 "유료상품"의 이용이 해지됩니다.
					</Text>
					<Text style={styles.subTitle}>제 15 조 ("본 서비스"의 변경)</Text>
					<Text>· "회사"는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 "본 서비스"를 변경할 수 있습니다. · "본 서비스"의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 "본 서비스"의 내용 및 제공일자 등은 그 변경 전에 해당 "본 서비스" 초기화면에 게시하여야 합니다. · "회사"는 무료로 제공되는 "본 서비스"의 일부 또는 전부를 "회사"의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에 특별한 규정이 없는 한 "회원"에게 별도의 보상을 하지 않습니다.</Text>
					<Text style={styles.subTitle}>제 16 조 (정보의 제공 및 광고의 게재)</Text>
					<Text>· "회사"는 "회원"이 "본 서비스" 이용 중 필요하다고 인정되는 다양한 정보를 공지사항이나 이메일 등의 방법으로 "회원"에게 제공할 수 있습니다. · 제 1 항의 정보 중 이벤트 및 마케팅 정보를 전화 및 모사전송기기·이메일·푸시알림에 의하여 전송하려고 하는 경우에는 "회원"의 사전 동의를 받아서 전송합니다. 다만, "회원"의 거래관련 정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지 이의 수신 거부 의사를 표시할 수 있습니다. · "회사"는 "본 서비스"의 운영과 관련하여 관련 법령이 정하는 절차에 따라 "본 서비스" 화면, 홈페이지, 이메일 등에 광고를 게재할 수 있습니다. 광고가 게재된 이메일을 수신한 "회원"은 수신거절을 "회사"에게 할 수 있습니다. · "회원"은 "회사"가 제공하는 "본 서비스"와 관련하여 "게시물" 또는 기타 정보를 변경, 수정, 제한하는 등의 조치를 취하지 않습니다.</Text>
					<Text style={styles.subTitle}>제 17 조 ("게시물"의 저작권)</Text>
					<Text>· "회원"이 "본 서비스" 내에 게시한 "게시물"의 저작권은 해당 "게시물"의 저작자에게 귀속됩니다. 회사가 작성한 저작물에 대한 저작권은 회사에 귀속합니다. · "회원"이 "본 서비스" 내에 게시하는 "게시물"은 해당 게시판 및 "본 서비스" 내 관련 게시판 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, "회사"는 저작권법 규정을 준수하며, "회원"은 언제든지 "본 서비스" 내 관리기능을 통해 해당 "게시물"을 삭제하거나 수정할 수 있습니다. · "회사"는 제 2 항 이외의 방법으로 "회원"의 "게시물"을 이용하고자 하는 경우에는 전화, 팩스, 이메일 등을 통해 사전에 "회원"의 동의를 얻어야 합니다.</Text>
					<Text style={styles.subTitle}>제 18 조 ("게시물"의 관리)</Text>
					<Text>· "회원"의 "게시물"이 '정보통신망법' 및 저작권법 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 "게시물"의 게시중단 및 삭제 등을 요청 할 수 있으며, "회사"는 관련법에 따라 조치를 취하여야 합니다. · "회사"는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 "회사" 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 "게시물"에 대해 임시조치 등을 취할 수 있습니다. · 본 조에 따른 세부절차는 '정보통신망법' 및 '저작권법'이 규정한 범위 내에서 "회사"가 정한 "게시중단요청서비스"에 따릅니다.</Text>
					<Text style={styles.subTitle}>제 19 조 (권리의 귀속)</Text>
					<Text>· "본 서비스"에 대한 저작권 및 지적재산권은 "회사"에 귀속됩니다. 단, "회원"이 제공한 모든 "게시물" 및 제휴계약에 따라 제공된 저작물 등은 제외합니다. · "회사"는 "본 서비스"와 관련하여 "회원"에게 "회사"가 정한 이용조건에 따라 "본 서비스" 등을 이용할 수 있는 이용권만을 부여하며, "회원"은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다. · "회원"은 명시적으로 허락된 내용을 제외하고는 "본 서비스"를 통해 얻어지는 "회원" 정보를 영리 목적으로 사용, 복사, 유통하는 것을 포함하여 "회사"가 만든 텍스트, 스크립트, 그래픽의 "회원" 상호간 전송기능 등을 복사하거나 유통할 수 없습니다.</Text>
					<Text style={styles.subTitle}>제 20 조 (이용제한 등)</Text>
					<Text>· "회사"는 "회원"이 이 약관의 의무를 위반하거나 "본 서비스"의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 "본 서비스" 이용을 단계적으로 제한할 수 있습니다. · "회사"는 전항에도 불구하고, 명의도용 및 결제도용, '저작권법'을 위반한 프로그램의 제공 및 운영방해, '정보통신망법'을 위반한 불법통신 및 해킹, 악성프로그램의 배포, 스팸성 "게시물" 등록, 접속권한 초과행위, 허위로 가공된 "게시물", 정치적 목적을 위한 선전 "게시물", 미풍양속을 해치는 음란성, 폭력적 의미가 포함된 "게시물", 상업적 목적의 광고, 승인되지 않은 설문조사 및 정보수집행위, 유사내용 "게시물" 반복적 게시, 고의적인 개인정보수집 및 활용행위 등과 같이 관련법을 위반한 경우에는 즉시 영구이용정지를 할 수 있습니다. 본 항에 따른 영구이용정지 시 "본 서비스" 이용을 통해 획득한 혜택 등도 모두 소멸되며, "회사"는 이에 대해 별도로 보상하지 않습니다. · "회사"는 본 조의 이용제한 범위 내에서 제한의 조건 및 세부내용은 이용제한정책 및 개별 "본 서비스"상의 운영정책 등에서 정하는 바에 의합니다. · 본 조에 따라 "본 서비스" 이용을 제한하거나 계약을 해지하는 경우에는 "회사"는 제 9 조 에 따라 통지합니다. · "회원"은 본 조에 따른 이용제한 등에 대해 "회사"가 정한 절차에 따라 이의신청을 할 수 있습니다. 이때 이의가 정당하다고 "회사"가 인정하는 경우 "회사"는 즉시 "본 서비스"의 이용을 재개합니다.</Text>
					<Text style={styles.subTitle}>제 21 조 (책임 제한의 범위)</Text>
					<Text>· "회사"는 천재지변 또는 이에 준하는 불가항력으로 인하여 "본 서비스"를 제공할 수 없는 경우에는 "본 서비스" 제공에 관한 책임이 면제됩니다. · "회사"는 "회원"의 귀책사유로 인한 "본 서비스" 이용의 장애 및 통신 장애 등 회사의 귀책사유와 무관하게 발생한 서비스 이용 장애 등에 대하여는 책임을 지지 않습니다. · "회사"는 "회원"이 "본 서비스"와 관련하여 게시한 게재물의 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 관하여는 책임을 지지 않습니다. · "회사"는 "회원" 간 또는 "회원"과 제 3 자 상호간에 "본 서비스"를 매개로 하여 거래 등을 한 것에 대하여 책임을 지지 않습니다. · "회사"는 무료로 제공되는 "본 서비스" 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다. · "회사"는 "회원"이 "회사"의 "본 서비스" 제공으로부터 기대되는 이익을 얻지 못하였거나 "본 서비스" 자료에 대한 취소선택 또는 이용으로 발생하는 "회원" 또는 제 3 자의 손해 등에 대해서는 책임이 면제됩니다.</Text>
					<Text style={styles.subTitle}>제 22 조 (분쟁의 조정 및 기타)</Text>
					<Text>· "회사"와 "회원"간 제기된 소송은 대한민국법을 준거법으로 합니다. · "회사"와 "회원"간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원을 제 1 심 관할법원으로 합니다. · "회원"의 주소 또는 거소를 확인할 수 없는 경우에는 전항에도 불구하고 대한민국 서울중앙지방법원을 관할법원으로 합니다</Text>
					<Text style={styles.subTitle}>[부칙]</Text>
					<Text>(시행일) 본 이용약관은 2020 년 1 월 1 일부터 시행합니다.</Text>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 20,
		fontWeight: '700'
	},
	contents: {
		marginTop: 20,
		marginBottom: 30,
	},
	subTitle: {
		fontSize: 17,
	}
});