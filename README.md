# NextJS Introduction

# project start

- npm run dev

# Library vs Framework

- Library, Framework의 주요 차이점은 "Inversion of Control"(통제의 역전)
- Library에서 메서드를 호출하면 사용자가 제어 / 사용자가 파일 이름이나 구조 등을 정하고, 모든 결정을 내림
- Framework 제어가 역전되어 프레임워크가 사용자를 호출 /파일 이름이나 구조 등을 정해진 규칙에 따라 만들고 따름
- Library는 우리가 갖다쓰는 것, Framework는 정해진 틀 안에서 커스터마이징

# Pages directory

- pages directory 안에 있는 파일명에 따라 route가 결정된다.

# Custom App

- 기본 App을 재정의하려면 아래와 같이 ./pages/\_app.js 파일을 생성
- 재정의하고 페이지 초기화를 제어
- 페이지 변경 간에 레이아웃 유지
- 페이지 탐색 시 state 유지
- componentDidCatch를 사용한 Custom 에러 처리
- 페이지에 추가 데이터 삽입
- Global CSS 추가

# Redirects

- URL이 변경
- Redirect을 사용하려면 next.config.js에서 redirects 키를 사용
- Redirect을 사용하면 들어오는 request 경로를 다른 destination 경로로 Redirect
- source: 들어오는 request 경로
- destination: redirect 할 경로
- permanent: true 클라이언트와 search 엔진에 redirect를 영구적으로 은닉 308 status code 사용
- permanent: fasle 일시적이고 은닉화하지 않은 307 status code 사용

# Rewrites

- URL이 변경되지 않음
- Rewrites를 사용하면 들어오는 request 경로를 다른 destination 경로에 매핑
- Rewrites은 URL 프록시 역할을 하고 destination 경로를 mask하여 사용자가 사이트에서 위치를 변경하지 않은 것처럼 보임

# getServerSideProps

- getServerSideProps는 서버 측에서만 실행되며 브라우저에서는 실행
- page에서 서버 측 랜더링 함수인 getServerSideProps함수를 export하는 경우 Next.js는 getServerSideProps에서 반환된 데이터를 사용하여 각 request에서 이 페이지를 pre-render
- pre-render해야 하는 경우에만 getServerSideProps를 사용을 권장 (pre-render : 사전에 HTML파일들을 생성 -> 퍼포먼스와 검색SEO를 향상 )

# Dynamic Routes

- Next.js에서는 page에 대괄호([param])를 추가하여 Dynamic Route를 생성

# router.push(url, as, options)

- url: 탐색할 URL
- as: URL 표시줄에 표시될 경로에 대한 선택적 데코레이터입니다.
