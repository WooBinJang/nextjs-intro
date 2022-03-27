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
