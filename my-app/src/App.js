import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import EventBinding from './components/EventBinding';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent.js';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting="Nice to meet you!" name="Mike" age="32" /> */}
      {/* < StatefulGreeting greeting="I'm a stateful class component" name="Kelly" /> */}
      {/* < StatefulGreetingWithCallback greeting="I'm a stateful class component" name="Kelly" /> */}
      {/* < StatefulGreetingWithPrevState greeting="I'm a stateful class component" name="Kelly" /> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      {/* <EventBinding /> */}
      {/* <ConditionalRenderingClass/>
      <ConditionalRenderingFunctional connected={false}/> */}
      {/* <NestingComponents/> */}
      {/* <MethodsAsPropsParent/> */}
      {/* <RenderingLists /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCWU /> */}
      <ControlledForm />
    </div>
  );
}

export default App;
