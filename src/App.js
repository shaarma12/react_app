import Video from "./Components/Video";
import "./App.css";
import Obj from "./Data";
const App = () => {
  return (
    <div className="App">
      <div>Hello</div>
      {Obj.map((vid) => (
        <Video
          key={vid.id}
          title={vid.title}
          views={vid.views}
          time={vid.time}
          channel={vid.channel}
          verified={vid.verified}
          id={vid.id}
        />
      ))}
    </div>
  );
};

export default App;
