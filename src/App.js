// import { UseRefExample1 } from "./components/UseRefExample1";
//import UseRefExample2 from "./components/UseRefExample2";
// import { UseMemoExample } from "./components/UseMemoExample";
// import { UseCallbackExample } from "./components/UseCallbackExample";
// import { CustomHookExample1 } from "./components/CustomHookExample1";
// import { CustomHookExample2 } from "./components/CustomHookExample2";

import ClickCounter from "./components/ClickCounter";
import ErrorBoundary from "./components/ErrorBoundary";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="container mt-5">
      <ErrorBoundary>
        {/* <UseRefExample1 /> */}
        {/* <UseRefExample2 /> */}
        {/* <UseMemoExample /> */}
        {/* <UseCallbackExample /> */}
        {/* <CustomHookExample1 /> */}
        {/* <CustomHookExample2 /> */}
        <ClickCounter randomProps="HOC with Props | " />
        {/* <HoverCounter text="Error boundary" /> */}
        <HoverCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
