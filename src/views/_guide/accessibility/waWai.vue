<script setup lang="ts">
import Prism  from '@/components/uu-components/Prism.vue'
</script>
<template>
  <div class="content-body">
    <section class="section">
      <h3 class="section-title">
        WAI-ARIA
      </h3>
      <ul class="list-dot">
        <li>
          <a
            href="https://www.w3.org/TR/wai-aria-1.1/"
            target="_blank"
            title="WAI-ARIA"
          >WAI-ARIA</a>는 HTML의 접근성 문제를 보완하는 W3C 명세입니다. WAI-ARIA는 HTML 요소에 role 또는 aria-* 속성을 추가하여 콘텐츠의 '역할(roles), 상태(states), 속성(properties)' 정보를 보조기기에 제공합니다.
        </li>
        <li>WAI-ARIA 속성을 모든 HTML 요소에 무분별하게 사용할 수 있는 것은 아닙니다. role 또는 aria-* 속성을 특정 HTML 요소에 사용할 수 있는지 ARIA in HTML 명세를 검토하면서 적용해야 합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- 오픈오브젝트에서 사용하고 있는 WAI-ARIA -->

          <!-- 역할(roles) -->
          <element role="tablist">
          <element role="tab">
          <element role="tabpanel">
          <element role="tooltip">
          <element role="status">
          <element role="alert">
          <element role="alertdialog">
          <element role="dialog">
          <element role="navigation">
          <element role="complementary">
          <element role="none">
          
          <!-- 상태(states) -->
          <element aria-current="page|step|location|date|time|true|false(default)">
          <element aria-selected="false|true|undefined(default)">
          <element aria-haspopup="true|menu|dialog|listbox|tree|grid|false(default)">
          <element aria-expanded="true|false|undefined(default)">
          <element aria-pressed="true|false|mixed|undefined(default)">
          <element aria-hidden="true|false|undefined(default)">
          <element aria-invalid="true|false(default)|grammar|spelling">
          
          <!-- 속성(properties) -->
          <element aria-controls="ID reference list">
          <element aria-live="polite|assertive|off(default)">
          <element aria-labelledby="ID reference list">
          <element aria-label="string">
          <element aria-describedby="ID reference list">
          <element aria-errormessage="ID reference">
          <element aria-modal="true|false(default)">
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        탭 목록, 탭, 탭 패널(role="tablist|tab|tabpanel")
      </h4>
      <ul class="list-dot">
        <li>탭은 스타일을 의미하는 것이 아니라 현재 페이지 내용에 색인을 제공하는 구조(tablist, tab, tabpanel)를 의미합니다. 사이트 탐색 도구에 해당하는 요소는 nav > h2 + ul 또는 aside > h2 + ul 구조로 마크업 합니다.</li>
        <li>role 속성은 값에 따라 적용할 수 있는 HTML 요소가 제한되어 있습니다. 예를 들면 role="tabpanel" 속성은 <ul>요소에 사용할 수 없으므로 적용 시 HTML5 요소 명세를 확인해야 합니다.</ul></li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 앵커 형식 탭 -->
          <div class="weekly">
            <div role="tablist">
              <a id="mon-anchor" href="#mon" role="tab" aria-selected="true">월</a>
              <a id="tue-anchor" href="#tue" role="tab" aria-selected="false">화</a>
            </div>
            <div id="mon" tabindex="0" role="tabpanel" aria-labelledby="mon-anchor">
              월요일엔 빨간 장미를...
            </div>
            <div id="tue" tabindex="0" role="tabpanel" aria-labelledby="tue-anchor" hidden>
              화요일엔 노란 장미를...
            </div>
          </div>
          
          <!-- O: 버튼 형식 탭 -->
          <div class="weekly">
            <div role="tablist">
              <button type="button" id="mon-anchor" aria-controls="mon" role="tab" aria-selected="true">월</button>
              <button type="button" id="tue-anchor" aria-controls="tue" role="tab" aria-selected="false">화</button>
            </div>
            <div id="mon" tabindex="0" role="tabpanel" aria-labelledby="mon-anchor">
              월요일엔 빨간 장미를...
            </div>
            <div id="tue" tabindex="0" role="tabpanel" aria-labelledby="tue-anchor" hidden>
              화요일엔 노란 장미를...
            </div>
          </div>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        툴팁(role="tooltip")
      </h4>
      <ul class="list-dot">
        <li>툴팁은 앵커 또는 폼 콘트롤 요소에 대한 참고용 콘텐츠입니다. 보통 마우스 오버 또는 키보드 초점을 받으면 표시하는 내용이지만 화면에 항상 표시할 수도 있습니다. 툴팁 요소에 role="tooltip" 속성으로 명시할 수 있습니다. 툴팁을 유발하는 앵커 또는 콘트롤에 aria-describedby="ID reference list" 속성을 명시하여 연결합니다.</li>
        <li>role="alert" 또는 role="alertdialog" 또는 role="dialog" 콘텐츠와 혼동하지 않도록 유의합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 인풋 툴팁 -->
          <label for="tel">전화번호</label>
          <input id="tel" type="tel" aria-describedby="TIP-TEL">
          <p id="TIP-TEL" role="tooltip" hidden>하이픈(-) 없이 숫자만 입력.</p>
          
          <!-- O: 버튼 툴팁 -->
          <button aria-describedby="TIP-DEL">게시물 삭제</button>
          <p id="TIP-DEL" role="tooltip" hidden>게시물 삭제 후 복원할 수 없음.</p>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        성공(결과) 메시지(role="status")
      </h4>
      <ul class="list-dot">
        <li>성공(또는 결과) 상태 메시지를 사용자에게 전달하는 콘텐츠입니다. 사용자의 현재 작업을 방해하지 않고(초점을 옮기지 않고) 보조기기 사용자에게 조언할만한 메시지를 전달하는 것을 의도하고 있습니다. role="alert" 만큼 중요하지 않습니다.</li>
        <li>성공 role="status" 메시지는 초점을 받지 않도록 처리해야 합니다. role="status" 요소는 aria-live="polite" 속성과 aria-atomic="true" 속성을 암시적으로 할당하기 때문에 추가로 선언할 필요가 없습니다. 성공 메시지 영역을 변경하면 화면 낭독기는 현재 진행 중인 음성 안내를 마친 후 성공 메시지 전체 내용을 사용자에게 전달합니다.</li>
        <li>초점을 받을 수 있는 사용자 인터렉션 요소를 포함하고 있다면 알럿 대화상자 role="alertdialog" 또는 대화상자 role="dialog"를 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 성공 메시지 -->
          <p role="status">회원가입 양식 전송완료.</p>
          
          <!-- O: 결과 메시지 -->
          <p role="status">10개의 검색 결과.</p>
          <p role="status">장바구니에 5개의 항목.</p>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        오류(제안) 메시지(role="alert")
      </h4>
      <ul class="list-dot">
        <li>시간에 민감하고 중요한(오류, 제안) 메시지를 사용자에게 전달하는 콘텐츠입니다. 사용자의 현재 작업을 방해하지 않고(초점을 옮기지 않고) 보조기기 사용자에게 즉각 메시지를 전달하는 것을 의도하고 있습니다.</li>
        <li>오류 role="alert" 메시지는 초점을 받지 않도록 처리해야 합니다. role="alert" 요소는 aria-live="assertive" 속성과 aria-atomic="true" 속성을 암시적으로 할당하기 때문에 추가로 선언할 필요가 없습니다. 오류 메시지 영역을 변경하면 화면 낭독기는 현재 진행 중인 음성 안내를 즉시 멈추고 오류 메시지 전체 내용을 사용자에게 전달합니다.</li>
        <li>초점을 받을 수 있는 사용자 인터렉션 요소를 포함하고 있다면 알럿 대화상자 role="alertdialog" 또는 대화상자 role="dialog"를 사용합니다.</li>
        <li>사용자 입력 콘트롤(input, textaria)의 실시간 오류를 표시하는 경우라면 오류 메시지 대신 콘트롤 요소에 aria-invalid="true|false" 속성과 aria-errormessage="ID reference" 속성을 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 오류 메시지 -->
          <p role="alert">우편번호 입력 오류.</p>
          
          <!-- O: 제안 메시지 -->
          <p role="alert">로그인 후 이용 가능.</p>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        알럿 대화상자(role="alertdialog")
      </h4>
      <ul class="list-dot">
        <li>사용자 동의 또는 확인이 필요한 인터렉션 요소(input, button)를 포함한 상태로 다른 과업을 차단하는 경우 알럿 대화상자 role="alertdialog"를 사용합니다. 사용자 입력 없이 '확인, 취소' 버튼을 제공하는 경우에 적절합니다.</li>
        <li>알럿 대화상자에는 aria-labelledby="ID reference list" 그리고 aria-describedby="ID reference list" 속성으로 알럿 대화상자의 제목과 설명을 연결합니다.</li>
        <li>알럿 대화상자는 다른 과업을 차단해야 하기 때문에 모달 윈도우 스타일로 처리한 다음 aria-modal="true" 속성을 추가합니다.</li>
        <li>알럿 대화상자를 표시할 때 키보드 초점을 대화상자 내부 첫 번째 콘트롤(예를 들면 '확인' 버튼 또는 '인풋')으로 옮겨야 합니다. 알럿 대화상자를 표시하는 동안 초점은 대화상자 안에서 벗어나지 않아야 합니다.</li>
        <li>사용자가 응답할 필요 없는 내용이라면 role="alert" 속성이 적절합니다. 사용자가 하위창 맥락으로 벗어나 정보를 입력(input, textarea, select, button)하는 경우라면 대화상자 role="dialog"가 적절합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 알럿 대화상자 -->
          <div role="alertdialog" aria-modal="true" aria-labelledby="title01" aria-describedby="description01">
            <h2 id="title01">가입안내</h2>
            <p id="description01">가입하시겠습니까?</p>
            <button type="button">확인</button>
            <button type="button">취소</button>
          </div>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        대화상자(role="dialog")
      </h4>
      <ul class="list-dot">
        <li>대화상자 role="dialog"는 사용자 인터렉션이 필요한 현재 문서의 하위창(마치 윈도우 팝업)입니다. 사용자가 정보를 입력하거나 응답하도록 하는 내용(input, textarea, select, button)을 반드시 포함합니다.</li>
        <li>대화상자에는 aria-labelledby="ID reference list" 또는 aria-label="string" 속성으로 설명을 제공합니다.</li>
        <li>대화상자를 표시할 때 키보드 초점을 대화상자 내부 첫 번째 콘트롤으로 옮겨야 합니다. 대화상자를 표시하는 동안 초점은 대화상자 안에서 벗어나지 않아야 합니다.</li>
        <li>모달 스타일로 표시할 것인지 여부는 선택 사항입니다. 모달 스타일로 처리하는 경우 aria-modal="true" 속성을 추가합니다.</li>
        <li>사용자의 다른 과업을 차단하면서 '확인, 취소' 버튼만 제공하는 경우라면 role="alertdialog" 속성이 적절합니다. 사용자가 응답할 필요 없는 내용이라면 role="alert" 속성이 적절합니다.</li>
        <li>대중적인 브라우저가 &lt;dialog&gt; 요소를 충분히 지원하면 role="dialog" 속성 대신 &lt;dialog&gt; 요소를 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 대화상자 -->
          <section role="dialog" aria-modal="true" aria-labelledby="title01">
            <h2 id="title01">로그인</h2>
            <form>
              <label for="id01">아이디</label>
              <input id="id01">
              <label for="pw01">비밀번호</label>
              <input id="pw01" type="password">
              <button>로그인</button>
            </form>
          </section>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        탐색(nav, role="navigation")
      </h4>
      <ul class="list-dot">
        <li>탐색은 현재 페이지 또는 연결된 페이지를 탐색하는 주요 탐색 블록(보통 링크 집합)입니다. 문서의 '주요 내용'을 탐색하는 경우에 사용하면 적절합니다. 모든 링크 집합이 탐색 블록은 아닙니다.</li>
        <li>탐색 블록에 적절한 HTML 요소는 &lt;nav&gt; 요소입니다. role="navigation" 속성을 사용하기 전에 &lt;nav&gt; 요소를 먼저 고려합니다.</li>
        <li>탐색 역할을 하는 요소(&lt;nav&gt;, role="navigation")가 문서 안에서 유일한 경우 레이블(aria-labelledby, aria-label) 제공은 선택입니다. 그러나 탐색 역할을 하는 요소가 둘 이상인 경우 고유한 레이블을 제공해야 합니다.</li>
        <li>&lt;nav&gt; 요소는 섹셔닝 콘텐츠이기 때문에 문서 개요(outline)를 생성합니다. 제목 없는 개요를 만들지 않기 위해 헤딩을 제공합니다. 레이블 요소(예를 들면 헤딩)가 있는 경우 aria-labelledby 속성으로 연결합니다. 레이블 요소(예를 들면 헤딩)가 없는 경우 aria-label 속성을 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 탐색에 nav 요소를 권장 -->
          <nav>
            <h2>글로벌 네비게이션</h2>
            ...
          </nav>
          
          <!-- O: 탐색 역할을 하는 요소가 유일한 경우 레이블 생략 가능 -->
          <div role="navigation">
            <h2>글로벌 네비게이션</h2>
            ...
          </div>
          
          <!-- O: 탐색 역할이 둘 이상인 경우 레이블 제공(nav) -->
          <nav aria-labelledby="global-navigation">
            <h2 id="global-navigation">글로벌 네비게이션</h2>
            ...
          </nav>
          <nav aria-labelledby="notice-pagination">
            <h3 id="notice-pagination">공지사항 페이지네이션</h3>
            ...
          </nav>
          
          <!-- O: 탐색 역할이 둘 이상인 경우 레이블 제공(role="navigation") -->
          <div role="navigation" aria-labelledby="global-navigation">
            <h2 id="global-navigation">글로벌 네비게이션</h2>
            ...
          </div>
          <div role="navigation" aria-labelledby="notice-pagination">
            <h3 id="notice-pagination">공지사항 페이지네이션</h3>
            ...
          </div>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        보충(aside, role="complementary")
      </h4>
      <ul class="list-dot">
        <li>보충은 주요 내용을 보완하는 블록입니다. 문서의 '주요 내용'이 아닙니다. 보충을 제거해도 주요 내용에 변함이 없어야 합니다. 주요 내용에서 보충을 분리한 경우에도 보충은 나름의 의미가 있습니다.</li>
        <li>보충으로 적절한 HTML 요소는 &lt;aside&gt; 요소입니다. role="complementary" 속성을 사용하기 전에 &lt;aside&gt; 요소를 먼저 고려합니다.</li>
        <li>보충 역할을 하는 요소(&lt;aside&gt;, role="complementary")가 문서 안에서 유일한 경우 레이블(aria-labelledby, aria-label) 제공은 선택입니다. 그러나 보충 역할을 하는 요소가 둘 이상인 경우 고유한 레이블을 제공해야 합니다.</li>
        <li>&lt;aside&gt; 요소는 섹셔닝 콘텐츠이기 때문에 문서 개요(outline)를 생성합니다. 제목 없는 개요를 만들지 않기 위해 헤딩을 제공합니다. 레이블 요소(예를 들면 헤딩)가 있는 경우 aria-labelledby 속성으로 연결합니다. 레이블 요소(예를 들면 헤딩)가 없는 경우 aria-label 속성을 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 보충에 aside 요소를 권장 -->
          <aside>
            <h2>배너/광고</h2>
            ...
          </aside>
          
          <!-- O: 보충 역할을 하는 요소가 유일한 경우 레이블 생략 가능 -->
          <div role="complementary">
            <h2>배너/광고</h2>
            ...
          </div>
          
          <!-- O: 보충 역할이 둘 이상인 경우 레이블 제공(aside) -->
          <aside aria-labelledby="event">
            <h2 id="event">이벤트</h2>
            ...
          </aside>
          <aside aria-labelledby="advertisement">
            <h2 id="advertisement">배너/광고</h2>
            ...
          </aside>
          
          <!-- O: 보충 역할이 둘 이상인 경우 레이블 제공(role="complementary") -->
          <div role="complementary" aria-labelledby="event">
            <h2 id="event">이벤트</h2>
            ...
          </div>
          <div role="complementary" aria-labelledby="advertisement">
            <h2 id="advertisement">배너/광고</h2>
            ...
          </div>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        의미 없음(role="none")
      </h4>
      <ul class="list-dot">
        <li>의미 없음(role="none")을 선언하는 경우 보조기기는 마크업의 의미를 제거 후 내용만 사용자에게 전달합니다. role="none" 속성은 role="presentation"과 동일하며 role="presentation"을 대체합니다.</li>
        <li>HTML을 의미에 맞지 않게 마크업한 경우, 또는 스타일링에 필요한 마크업을 추가한 경우 role="none" 속성을 사용할 수 있습니다. 의미에 맞지 않는 마크업과 스타일을 위한 마크업을 권장하지 않기 때문에 이 속성은 절제해야 합니다.</li>
        <li>의미 없음(role="none")은 숨김(hidden, aria-hidden="true") 속성과 다릅니다. 숨김 속성은 요소와 내용을 모두 감추어 버리지만 role="none" 속성은 내용을 드러내고 의미만 감춥니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: tablist와 tab 사이 li 요소의 의미 제거 -->
          <ul role="tablist">
            <li role="none">
              <a href="#company_info" role="tab" aria-selected="true">소개</a>
            </li>
            <li role="none">
              <a href="#history" role="tab" aria-selected="false">연혁</a>
            </li>
            <li role="none">
              <a href="#awards" role="tab" aria-selected="false">수상/인증</a>
            </li>
          </ul>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        현재 상태(aria-current="token")
      </h4>
      <ul class="list-dot">
        <li>
          aria-current 속성은 현재 맥락과 일치하는 항목을 의미합니다. token 값은 정해진 값 중 하나만 사용할 수 있음을 의미합니다. 예를 들면 aria-current 속성의 token 값은 page|step|location|date|time|true|false(default) 으로 정해져 있고 이 중 하나만 사용할 수 있습니다.
          <ul>
            <li>page: 현재 '페이지'와 일치하는 시각적으로 강조한 링크.</li>
            <li>step: 현재 '단계'와 일치하는 시각적으로 강조한 링크.</li>
            <li>location: 플로우 차트에서 현재 '위치'와 일치하는 시각적으로 강조한 이미지.</li>
            <li>date: 달력에서 현재 '날짜'와 일치하는 날짜.</li>
            <li>time: 시간표에서 현재 '시간'과 일치하는 시간.</li>
          </ul>
        </li>
        <li>
          이 밖에 true와 false 값도 있습니다. true 또는 false 값은 구체적으로 어떤 맥락(페이지, 단계, 위치, 날짜, 시간)과 일치하는지 정보를 전달하지 않기 때문에 page|step|location|date|time 토큰이 적절하지 않은 맥락에 한하여 사용합니다.
          <ul>
            <li>true: 항목이 세트 내 현재 맥락과 일치함.</li>
            <li>false(default): 항목이 세트 내 현재 맥락과 일치하지 않음. 속성 또는 값을 선언하지 않은 경우 초기값.</li>
          </ul>
        </li>
        <li>aria-current 속성은 aria-selected 속성과 다른 의미로 사용하기 때문에 tablist 목록 안에서 aria-selected 속성을 대체하는 용도로 사용하면 안 됩니다. 그러나 aria-current 속성과 aria-selected 속성을 함께 선언할 수도 있습니다. 예를 들면 편집 가능한 트리 형식의 목록에서 현재 페이지 항목과 편집을 위해 선택한 항목이 일치하는 경우 함께 선언할 수 있습니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: aria-current="page" 현재 페이지 강조 링크 -->
          <nav>
            <h2>COMPANY</h2>
            <ul>
              <li><a href="/company_info" aria-current="page">소개</a></li>
              <li><a href="/history">연혁</a></li>
              <li><a href="/awards">수상/인증</a></li>
            </ul>
          </nav>
          
          <!-- O: aria-current="step" 현재 단계 강조 링크 -->
          <nav>
            <h2>회원 가입</h2>
            <ol>
              <li><a href="/accept-terms" aria-current="step">약관 동의</a></li>
              <li><a href="/id-password">아이디/비밀번호 생성</a></li>
              <li><a href="/email-authentication">이메일 인증</a></li>
            </ol>
          </nav>
          
          <!-- O: aria-current="location" 현재 위치 강조 이미지 -->
          <img src="is-payment-success.png" alt="결제 성공?" aria-current="location">
          <img src="payment-info.png" alt="결제 내역 안내">
          <img src="payment-fail.png" alt="결제 실패 안내">
          
          <!-- O: aria-current="date" 현재 날짜 강조 -->
          <td aria-curent="date">12/24(토)</td>
          <td>
            <button type="button" aria-curent="date">12/24(토)</button>
          </td>
          
          <!-- O: aria-current="time" 현재 시간 강조 -->
          <th scope="row" aria-current="time">18:00 ~ 20:00</th>
          <td>무한 도전</td>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        선택 상태(aria-selected="true|false|undefined")
      </h4>
      <ul class="list-dot">
        <li>
          aria-selected 속성은 단일 또는 다중 선택이 가능한 요소(role="gridcell|option|row|tab")에 한하여 선택 상태를 명시하는 용도로 사용합니다. role="tab" 요소에 가장 흔히 사용합니다. 키보드 초점을 받을 수 있는 요소에 적용해야 합니다.
          <ul>
            <li>undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 선택할 수 없음.</li>
            <li>true: 선택 가능한 요소를 선택했음.</li>
            <li>false: 선택 가능한 요소를 선택하지 않았음.</li>
          </ul>
        </li>
        <li>선택 요소에만 aria-selected="true" 속성을 적용하면 aria-selected 속성을 적용하지 않은 요소는 aria-selected="undefined" 상태(선택할 수 없음)가 됩니다. 따라서 선택하지 않은 요소에는 명시적으로 aria-selected="false" 속성과 값을 적용합니다.</li>
        <li>aria-selected 속성은 aria-current 속성과 다른 의미로 사용하기 때문에 혼동하지 않도록 유의합니다. aria-selected 속성은 선택 가능한 요소에, aria-current 속성은 현재 맥락과 일치하는 요소에 사용합니다. aria-selected 속성은 단일 또는 다중 선택이 가능한 요소(role="gridcell|option|row|tab")에 제한적으로 사용할 수 있습니다. 예를 들면 페이지네이션에서 현재 페이지와 일치하는 링크에는 aria-selected 속성이 적절하지 않고 aria-current 속성이 적절합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: role="tab" 요소에 선택 상태를 명시 -->
          <div role="tablist">
            <a id="mon-anchor" href="#mon" role="tab" aria-selected="true">월</a>
            <a id="tue-anchor" href="#tue" role="tab" aria-selected="false">화</a>
          </div>
      ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        팝업 상태(aria-haspopup="token")
      </h4>
      <ul class="list-dot">
        <li>
          aria-haspopup 속성은 요소에 연결되어 있는 팝업(메뉴, 대화상자 등) 정보를 제공합니다. 팝업은 다른 내용 위에 표시하는 블럭을 의미합니다. 팝업 유형은 menu, listbox, tree, grid, dialog 으로 제한되어 있기 때문에 의미가 정확하게 일치하는 경우에만 사용해야 합니다. 일반적으로 menu와 dialog 유형이 빈번하므로 많이 사용할 것입니다.
          <ul>
            <li>true: menu와 동일한 의미.</li>
            <li>menu: menu(role) 팝업이 연결됨. menu(role)는 링크 목록.</li>
            <li>dialog: dialog(role) 팝업이 연결됨. dialog(role)는 상호작용 요소(버튼 또는 콘트롤)가 포함된 현재 문서의 하위창.</li>
            <li>listbox: listbox(role) 팝업이 연결됨. listbox(role)는 선택 가능한 option(role)을 포함한 콤보박스.</li>
            <li>tree: tree(role) 팝업이 연결됨. tree(role)는 하위 list(role)을 포함하며 접고 펼칠 수 있음.</li>
            <li>grid: grid(role) 팝업이 연결됨. grid(role)는 행과 열로 구성된 선택 가능한 위젯. 상호작용 가능한 셀이기 때문에 table(role)과는 역할이 다름에 유의.</li>
            <li>false(default): 연결된 팝업이 없음을 의미.</li>
          </ul>
        </li>
        <li>연결한 팝업 role이 암시적인 경우에도 aria-haspopup 속성을 연결할 수 있습니다. 예를 들어 연결된 팝업이 &lt;dialog&gt; 요소라면 암시적으로 role="dialog" 속성을 지닌 것이므로 aria-haspopup="dailog" 속성을 사용할 수 있습니다. 대중적인 브라우저가 &lt;dialog&gt; 요소를 충분히 지원하면 role="dialog" 속성 대신 &lt;dialog&gt; 요소를 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: aria-haspopup="menu|true" -->
          <button type="button" id="menu-button" aria-haspopup="menu" aria-controls="menu-list" aria-expanded="false">메뉴</button>
          <ul id="menu-list" role="menu" aria-labelledby="menu-button" hidden>
            <li>
              <a href="/company">COMPANY</a>
            </li>
            <li>
              <a href="/business">BUSINESS</a>
            </li>
          </ul>
          
          <!-- O: aria-haspopup="dialog"-->
          <a href="#login-dialog" aria-haspopup="dialog">로그인</a>
          <section id="login-dialog" role="dialog" aria-labelledby="login-heading" aria-modal="true" hidden>
            <h2 id="login-heading">로그인</h2>
            <form>
              <label for="id-input">아이디</label>
              <input id="id-input" type="text">
              <label for="pw-input">비밀번호</label>
              <input id="pw-input" type="password">
              <button type="submit">로그인</button>
            </form>
          </section>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        확장 상태(aria-expanded="true|false|undefinded")
      </h4>
      <ul class="list-dot">
        <li>
          aria-expanded 속성은 제어 대상의 확장 또는 축소 상태를 나타냅니다. 어코디언, 메뉴, 콤보박스, 트리와 같이 하위 그룹(또는 독립적인) 내용을 토글(열기, 닫기)하는 경우에 사용하면 적절합니다. 독립적인 내용을 제어할 때 aria-controls 속성을 이용하여 제어 대상을 명시해야 합니다.
          <ul>
            <li>undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 제어 대상이 없거나 모두 확장 상태. 확장/축소 제어 불가능.</li>
            <li>true: 요소 또는 제어 대상 확장 상태.</li>
            <li>false: 요소 또는 제어 대상 축소 상태.</li>
          </ul>
        </li>
        <li>이 밖에도 툴팁(role="tooltip"), 알럿(role="alert"), 알럿 대화상자(role="alertdialog"), 대화상자(role="dialog")와 같이 동적으로 표시 상태를 결정(토글)하는 요소에 aria-expanded 속성을 사용할 수 있습니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 어코디언 -->
          <dt>
            <button type="button" aria-controls="answer-99" aria-expanded="false">궁금합니다.</button>
          </dt>
          <dd id="answer-99" hidden>
            <p>답변입니다.</p>
          </dd>
          
          <!-- O: 팝업 -->
          <a id="noticeBtn" href="#noticeDesc" aria-haspopup="menu" aria-expanded="false">알림</a>
          <ul id="noticeDesc" role="menu" aria-labelledby="noticeBtn" hidden>
            <li>
              <a href="#pageLink">관련 페이지 이동하기</a>
            </li>
            <li>
              <a href="#detailLink">자세히보기</a>
            </li>
          </ul>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        눌림 상태(aria-pressed="tristate")
      </h4>
      <ul class="list-dot">
        <li>
          aria-pressed 속성은 토글 버튼(button, role="button")이 눌린 상태를 표시합니다. 흔하게 사용하는 속성은 아닙니다. 이 속성을 사용하기 전에 input[type="radio"], input[type="checkbox"] 또는 aria-checked 또는 aria-selected 속성을 먼저 검토하는 것이 좋습니다. 속성 값은 일반적으로 true 또는 false 두 가지 값을 사용하지만, tristate 으로 true, false, mixed 세 가지 상태를 모두 표시할 수도 있습니다. mixed 값은 버튼이 제어하는 두 개 이상의 요소 상태값이 모두 true 이거나 모두 false가 아닌 복합적인 상태를 의미합니다.
          <ul>
            <li>undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 누름 상태 표시를 지원하지 않는 버튼.</li>
            <li>true: 버튼을 누른 상태.</li>
            <li>false: 버튼을 누르지 않은 상태.</li>
            <li>mixed: true 또는 false 값으로 표시할 수 없는 복합적인 상태.</li>
          </ul>
        </li>
        <li>토글 버튼이 눌린 상태를 동적 텍스트로 전달하는 경우에는 aria-pressed 속성을 사용하지 않습니다. 예를 들어 버튼 설명 텍스트를 배경음 켜기 그리고 배경음 끄기 형태로 동적으로 변경한다면 aria-pressed 속성을 선언하는 것이 오히려 혼란을 초래합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: true/false 모드 -->
          <button type="button" aria-pressed="true">음소거</button>
          <button type="button" aria-pressed="false">음소거</button>
          
          <!-- O: true/false/mixed 모드(이 예제에서 제어 대상이 하나는 true 이고 하나는 false 이다) -->
          <button type="button" aria-pressed="mixed" aria-controls="noti-text noti-sound">알림 켜기</button>
          <ul>
            <li>
              <input id="noti-text" type="checkbox" checked>
              <label for="noti-text">문자 알림</label>
            </li>
            <li>
              <input id="noti-sound" type="checkbox">
              <label for="noti-sound">소리 알림</label>
            </li>
          </ul>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        숨김 상태(aria-hidden="true|false|undefined")
      </h4>
      <ul class="list-dot">
        <li>
          aria-hidden 속성은 접근성 API(보조기기 접근 가능성) 차단 상태를 결정합니다. 화면에 표시하지만 잠시 사용을 제한하는 콘텐츠에 적용합니다. 예를 들면 모달 대화상자를 화면에 표시할 때 모달 대화상자 뒤 본문 콘텐츠에 aria-hidden="true" 속성을 선언하면 보조기기가 무시합니다.
          <ul>
            <li>undefined(default): 속성 또는 값을 선언하지 않은 경우 초기값. 화면 표시 여부에 따라 접근성 API 차단 상태를 결정. 화면에 표시하면 false, 화면에서 숨기면 true.</li>
            <li>true: 접근성 API 차단.(화면 표시 여부와 무관 API 차단)</li>
            <li>false: 접근성 API 사용.(화면에 표시한 경우 API 사용)</li>
          </ul>
        </li>
        <li>hidden 속성은 요소를 화면에 표시하지 않기 때문에 접근 불가능한 상태가 되지만 aria-hidden="true" 속성은 화면 표시 여부와 관계없이 보조기기 접근 불가능 상태를 만듭니다. aria-hidden="true" 속성이 접근성 API를 차단하지만 포인팅 기능(마우스 커서, 키보드 초점)을 차단하는 것은 아니므로 개발자는 aria-hidden="true" 요소가 포인팅을 받지 않도록 처리해야 합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
        <!-- O: 모달 윈도우를 표시할 때 다른 요소를 차단 -->
        <body>
          <div class="container" aria-hidden="true">
            // 보조기기가 무시하는 영역
          </div>
          <div role="alertdialog" aria-modal="true" aria-labelledby="TITLE" aria-describedby="DESCRIPTION">
            <h2 id="TITLE">가입안내</h2>
            <p id="DESCRIPTION">가입하시겠습니까?</p>
            <button type="button">확인</button>
            <button type="button">취소</button>
          </div>
        </body>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        오류 상태(aria-invalid="true|false|grammar|spelling")
      </h4>
      <ul class="list-dot">
        <li>
          aria-invalid 속성은 주로 input 요소에 선언하여 사용자가 입력한 값이 요구하는 형식과 일치하는지 여부를 나타냅니다. aria-errormessage 속성과 함께 사용하여 오류 설명을 제공할 수 있습니다.
          <ul>
            <li>false(default): 오류 없음. aria-invalid 속성을 선언하지 않거나 값이 없으면 false로 간주.</li>
            <li>true: 오류 있음.</li>
            <li>grammar: 문법 오류.</li>
            <li>spelling: 철자 오류.</li>
          </ul>
        </li>
        <li>aria-errormessage 속성은 aria-invalid 속성이 없거나 값이 false라면 동작하지 않습니다. 입력 값이 비어 있거나 유효하지 않은 초기 값을 제공한 때에는 aria-invalid="true"를 선언하지 않아야 합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 입력 값이 유효하면 aria-invalid 속성을 생략 -->
          <label for="email">이메일</label>
          <input id="email" type="email" required value="abc@xyz.xxx" aria-errormessage="email-error-msg">
          <p id="email-error-msg" role="alert" aria-live="assertive" hidden>이메일 형식이 유효하지 않습니다. 앳(@)과 마침표(.)를 포함해 주세요.</p>
          
          <!-- O: 입력 값이 오류이면 aria-invalid="true" 속성을 선언 -->
          <label for="email">이메일</label>
          <input id="email" type="email" required value="..." aria-invalid="true" aria-errormessage="email-error-msg">
          <p id="email-error-msg" role="alert" aria-live="assertive">이메일 형식이 유효하지 않습니다. 앳(@)과 마침표(.)를 포함해 주세요.</p>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        제어 대상(aria-controls="ID reference list")
      </h4>
      <ul class="list-dot">
        <li>aria-controls 속성은 현재 요소가 제어하는 대상을 명시하는 속성입니다. 주로 role="tab", aria-haspopup, aria-expanded 속성과 함께 &lt;button&gt; 요소가 무엇을 제어하는지 명시합니다. aria-controls 속성의 값은 하나 또는 그 이상의 ID 값 입니다. 흔한 경우는 아니지만 ID 값이 여럿인 경우 ID 값을 공백으로 분리합니다.</li>
        <li>&lt;a&gt; 요소의 href 속성값을 통해 참조(제어) 대상을 명시한 경우 aria-controls 속성을 사용하지 않습니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: role="tab" 요소에 aria-controls 속성 사용 -->
          <div role="tablist">
            <button type="button" id="mon-anchor" aria-controls="mon" role="tab" aria-selected="true">월</button>
            <button type="button" id="tue-anchor" aria-controls="tue" role="tab" aria-selected="false">화</button>
          </div>
          <div id="mon" tabindex="0" role="tabpanel" aria-labelledby="mon-anchor">
            월요일 콘텐츠...
          </div>
          <div id="tue" tabindex="0" role="tabpanel" aria-labelledby="tue-anchor" hidden>
            화요일 콘텐츠...
          </div>
          
          <!-- O: aria-haspopup 속성과 함께 aria-controls 속성 사용 -->
          <button type="button" aria-haspopup="dialog" aria-controls="login-dialog">로그인</button>
          <section id="login-dialog" role="dialog" aria-labelledby="login-heading" aria-modal="true" hidden>
            <h2 id="login-heading">로그인</h2>
            ...
          </section>
          
          <!-- O: aria-expanded 속성과 함께 aria-controls 속성 사용 -->
          <dt>
            <button type="button" aria-controls="answer-99" aria-expanded="false">궁금합니다.</button>
          </dt>
          <dd id="answer-99" hidden>
            <p>답변입니다.</p>
          </dd>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        실시간(aria-live="token")
      </h4>
      <ul class="list-dot">
        <li>aria-live 속성은 실시간으로 내용을 갱신하는 영역을 의미합니다. 값으로 polite, assertive, off(default)를 설정할 수 있으며 갱신하는 내용의 중요도에 따라 선택합니다. 갱신 영역에 polite, assertive값을 사용하면 갱신하는 순간 보조기기는 사용자에게 내용을 전달합니다. polite값은 중요도가 낮은 내용에 사용하여 현재 진행중인 음성 또는 타이핑을 방해하지 않고 뒤늦게 전달합니다. assertive값은 중요도가 높은 내용에 사용하여 현재 진행중인 보조기기 작업을 중단하고 갱신 내용을 즉시 사용자에게 전달합니다.</li>
        <li>일반적으로 role 속성의 값이 alert인 경우 사용하면 적절합니다. 그 밖에 Ajax 기법을 이용하여 실시간으로 내용을 갱신하는 모든 영역(채팅, 오류, 로그, 상태 표시)에 사용할 수 있습니다.</li>
        <li>assertive값은 사용자의 현재 작업을 방해할 수 있기 때문에 중요도가 높은 내용을 선별하여 신중하게 적용해야 합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 알럿 -->
          <div role="alert" aria-live="assertive">
              <p>로그인 후 이용할 수 있습니다.</p>
          </div>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        간결한 설명 참조(aria-labelledby="ID reference list")
      </h4>
      <ul class="list-dot">
        <li>aria-labelledby, aria-label, aria-describedby 속성은 모두 현재 요소에 설명을 제공하는 속성입니다. aria-labelledby 속성은 ID(s) 값을 이용하여 '간결한' 내용을 참조(연결)하는 방식으로 설명합니다. 보통 h1, h2, h3, h4, h5, h6, a, button 요소를 참조하면 적절합니다. aria-label 속성과 함께 선언하는 경우 aria-labelledby 속성이 우선순위가 높기 때문에 보조기기는 aria-labelledby 속성을 설명합니다.</li>
        <li>aria-labelledby 속성으로 숨김 처리한 설명을 참조하면 안 됩니다. 참조가 불가능한 설명은 aria-label 속성을 사용합니다. 자세한 설명을 참조하면 안 됩니다. 자세한 설명은 aria-descibedby 속성을 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 헤딩 설명 참조 -->
          <section aria-labelledby="title01" hidden>
            <h2 id="title01">COMPANY</h2>
            <p>다양한 소프트웨어 기술을 봉한 기술 중심의 SI 솔루션 전문 기업</p>
          </section>
          
          <!-- O: 링크 설명 참조 -->
          <a id="test" href="#text">안내</a>
          <div id="text" aria-labelledby="test" hidden>
            <p>서비스 이용 안내 입니다.</p>
          </div>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        간결한 설명(aria-label="string")
      </h4>
      <ul class="list-dot">
        <li>aria-labelledby, aria-label, aria-describedby 속성은 모두 현재 요소에 설명을 제공하는 속성입니다. aria-label 속성은 값에 '간결한' 설명(string)을 직접 제공합니다. 가능한 한 aria-labelledby 속성을 사용하는 것이 좋습니다. aria-label 속성은 현재 요소를 설명할 다른 참조(연결) 요소가 없는 경우에만 사용합니다. aria-labelledby 속성과 함께 선언하는 경우 aria-label 속성이 우선순위가 낮기 때문에 보조기기는 aria-labelledby 속성을 설명합니다.</li>
        <li>aria-label 속성을 장황하게 작성하면 안 됩니다. 자세한 설명은 aria-descibedby 속성을 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 참조할 설명이 없는 경우 -->
          <form>
              <input type="search" aria-label="키워드 검색">
              <button>검색</button>
          </form>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        자세한 설명 참조(aria-describedby="ID reference list")
      </h4>
      <ul class="list-dot">
        <li>aria-labelledby, aria-label, aria-describedby 속성은 모두 현재 요소에 설명을 제공하는 속성입니다. aria-describedby 속성은 ID(s) 값을 이용하여 '상세한' 내용을 참조(연결)하는 방식으로 설명합니다. 링크(a), 폼 콘트롤(input, textarea, select, button), 알럿(role="alert"), 알럿 대화상자(role="alertdialog") 요소에 사용하면 적절합니다.</li>
        <li>aria-describedby 속성은 간결한 설명을 참조하기에 적절하지 않습니다. 간결한 설명은 aria-labelledby 속성을 사용합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 버튼 요소에 상세한 설명 제공 -->
          <button aria-describedby="blogDelete">게시물 삭제</button>
          <p id="blogDelete" role="tooltip" hidden>게시물 삭제 후 복원할 수 없음.</p>
          
          <!-- O: 알럿 대화상자 요소에 상세한 설명 제공 -->
          <div role="alertdialog" aria-modal="true" aria-labelledby="title01" aria-describedby="description01">
            <h2 id="title01">메일전송 안내</h2>
            <p id="description01">메일을 전송하시겠습니까?</p>
            <button type="button">확인</button>
            <button type="button">취소</button>
          </div>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        오류 설명(aria-errormessage="ID reference")
      </h4>
      <ul class="list-dot">
        <li>aria-errormessage 속성은 주로 input 요소에 선언하여 오류 메시지를 제공하는 요소를 값으로 참조합니다. aria-invalid="true" 속성을 활성화하면 보조기기는 aria-errormessage 속성이 참조하는 요소를 오류 메시지로 전달합니다.</li>
        <li>aria-errormessage가 참조하는 요소를 동적으로 화면에 표시한다면 aria-live 속성을 이용해서 실시간으로 보조기기에 오류 메시지를 전달할 수 있습니다. 오류 메시지는 '오류 원인과 해결 방법'을 포함해야 합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: aria-invalid 값이 true이면 보조기기는 aria-errormessage 값을 참조 -->
          <label for="email">이메일</label>
          <input id="email" type="email" required value="..." aria-invalid="true" aria-errormessage="email-error-msg">
          <p id="email-error-msg" role="alert" aria-live="assertive">이메일 형식이 유효하지 않습니다. 앳(@)과 마침표(.)를 포함해 주세요.</p>
        ` }}
      </Prism>
    </section>
    <section class="section">
      <h4 class="section-subtitle">
        모달(aria-modal="true|false")
      </h4>
      <ul class="list-dot">
        <li>
          aria-modal 속성은 요소가 모달인지 여부를 보조기기에 전달합니다. 모달은 본문 위에 대화상자를 띄워 본문을 차단한 상태로 상호작용하는 요소를 의미합니다. 일반적으로 role="alertdialog" 또는 role="dialog" 요소를 모달 형태로 표시할 수 있는데 이런 경우 aria-modal="true" 속성을 함께 선언합니다.
          <ul>
            <li>false(default): 속성 또는 값을 선언하지 않은 경우 초기값. 모달 콘텐츠 아님.</li>
            <li>true: 모달 콘텐츠.</li>
          </ul>
        </li>
        <li>모달 콘텐츠를 화면에 표시할 때 사용할 수 없는 요소에 aria-hidden="true" 속성을 선언해서 보조기기가 무시하도록 설정해야 합니다. aria-hidden="true" 속성이 접근성 API를 차단하지만 포인팅 기능(마우스 커서, 키보드 초점)을 차단하는 것은 아니므로 개발자는 aria-hidden="true" 요소가 포인팅을 받지 않도록 처리해야 합니다.</li>
      </ul>
      <Prism
        html
        show
      >
        {{ `
          <!-- O: 알럿 대화상자에 aria-modal="true" 선언 -->
          <div role="alertdialog" aria-modal="true" aria-labelledby="title01" aria-describedby="description01">
            <h2 id="title01">메일전송 안내</h2>
            <p id="description01">
                전송하시겠습니까?
            </p>
            <button type="button">확인</button>
            <button type="button">취소</button>
          </div>
          
          <!-- O: 대화상자에 aria-modal="true" 선언 -->
          <section role="dialog" aria-modal="true" aria-labelledby="title01">
            <h2 id="title01">로그인</h2>
            <form>
              <label for="id01">아이디</label>
              <input id="id01">
              <label for="pw01">비밀번호</label>
              <input id="pw01" type="password">
              <button>로그인</button>
            </form>
          </section>
        ` }}
      </Prism>
    </section>
  </div>
</template>
<style lang="scss" scoped>
</style>
