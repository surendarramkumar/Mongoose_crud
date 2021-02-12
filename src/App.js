import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Message from './components/message'
import Counter from './components/counter'
import Classclick from './components/classClick'
import Eventbind from './components/Eventbind'
import Parent from './components/ParentComponent'
import Conditional from './components/ConditionalComponent'
import NameList from './components/NameList'
import Form from './components/Form'
import Lifecycle from './components/LifecycleA'
import Fragment from './components/Fragments'
import RefsDemo from './components/Refs'
import FocusInput from './components/FocusInput'
import FRParent from './components/FRParentInput'
import Hero from './components/Heros'
import ErrorBound from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverdCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import User1 from './components/User1';
import CounterProps from './components/CounterProps';
import HoverCounterTwo from './components/HoverCounterTwo';
import ContextComp1 from './components/ContextComp1';
import { UserProvider } from './components/UserContext';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';










class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Greet name="bruce" heroname="batman"/>
     <Greet name="clark" heroname="superman"/>
     <Greet name="diana" heroname="wonder woman"/>
     <Message/>
     <Counter/>
     <Classclick/>
     <Eventbind/>
 <Parent/> 
 {/* <Conditional/> */}
{/* <NameList/> */}
{/* <Form /> */}
{/* <Lifecycle/> */}
{/* <Fragment/> */}
{/* <RefsDemo/> */}
{/* <FocusInput/> */}
{/* <FRParent/> */}
<ErrorBound>
<Hero heroname="superman"></Hero>
<Hero heroname="spiderman"></Hero>
<Hero heroname="batman"></Hero>
<Hero heroname="joker"></Hero>
</ErrorBound>
 
<ClickCounter name="surendar" />
<HoverdCounter /> 
 <ClickCounterTwo/>
<User1 render={isLoggedIn => isLoggedIn ? "surendar" : 'Guest' } /> 
<CounterProps 
render={(count,incrementCount) =>(
<ClickCounterTwo count={count} incrementCount={incrementCount} /> 
) }
 />
 <CounterProps
render={(count,incrementCount) =>(
<HoverCounterTwo count={count} incrementCount={incrementCount} /> 
) }
 />
 
 {/* <UserProvider value="surendar">
 <ContextComp1 />
 </UserProvider> */}
{/* <HookCounter /> */}
<HookCounterTwo />









    </div>
  );
  }
}

export default App;
