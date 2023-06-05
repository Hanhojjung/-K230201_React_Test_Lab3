import React from 'react';

// 순서1 설정 : 컨텍스트 객체
// 나이, 기본값은 null
const TestContext = React.createContext(null);
TestContext.displayName = "context1"


export default TestContext;