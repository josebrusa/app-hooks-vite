import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./02-useEffect/SimpleForm";
import { MultiplesCustommHooks } from "./03-examples/MultiplesCustommHooks";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { CallbackHooks } from "./06-memos/CallbackHooks";
import { MemoHook } from "./06-memos/MemoHook";
import { Memorize } from "./06-memos/Memorize";
import { Padre } from "./07-tarea-memo/07-tarea-memo/Padre";
import "./08-useReducer/into-reducer";

export const HooksApp = () => {
    return (
        <div className="container">
            <h1 className="text-center pb-4 mb-4 border-bottom border-3 ">
                Ejemplos de hooks
            </h1>
            <hr />
            <h2>use State</h2>
            <div className="d-flex">
                <CounterApp />
                <CounterWithCustomHooks />
            </div>
            <hr />
            <h2 className="pb-4 mb-4 border-bottom border-3 ">Use Effect</h2>
            <div className="d-flex">
                <SimpleForm />
                <FormWithCustomHook />
                <MultiplesCustommHooks />
            </div>
            <hr />
            <h2 className="pb-4 mb-4 border-bottom border-3 ">Use Ref</h2>
            <div className="d-flex">
                <FocusScreen />
            </div>
            <hr />
            <h2 className="pb-4 mb-4 border-bottom border-3 ">
                Use LayoutEffect
            </h2>
            <div className="d-flex">
                <Layout />
            </div>
            <hr />
            <h2 className="pb-4 mb-4 border-bottom border-3 ">Memorize</h2>
            <div className="d-flex">
                <Memorize />
                <MemoHook />
                <CallbackHooks />
            </div>
            <hr />
            <h2 className="pb-4 mb-4 border-bottom border-3 ">07 tarea Memo</h2>
            <div className="d-flex">
                <Padre />
            </div>
        </div>
    );
};
